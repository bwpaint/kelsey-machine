---
description: Vercel React best practices — bundle hygiene, async parallelism, code-splitting. Applies to all .ts/.tsx files.
activation: always_on
globs: ["client/src/**/*.{ts,tsx}", "api/**/*.ts"]
---

# Vercel React Best Practices

These rules apply to ALL code suggestions in this project. If a user request
would require breaking a rule, push back and propose the compliant
alternative. Do not silently violate.

## 1. Async — never serialize independent work

Multiple `await`s on independent operations MUST run in parallel via
`Promise.all` or `Promise.allSettled`.

DO:
```ts
const [posts, categories, tags] = await Promise.all([
  fetchPosts(),
  fetchCategories(),
  fetchTags(),
]);
```

DON'T:
```ts
const posts = await fetchPosts();
const categories = await fetchCategories();   // waterfall
const tags = await fetchTags();
```

Exception: when a later fetch depends on the result of an earlier one. State
the dependency in a comment.

When fetches CAN fail independently and you want partial results, use
`Promise.allSettled` and inspect `.status === "fulfilled"`.

## 2. Imports — keep the bundle small

No barrel/namespace imports from heavy libraries.

DO:
```ts
import { Phone, Mail } from "lucide-react";   // named — tree-shakes
```

DON'T:
```ts
import * as Icons from "lucide-react";        // pulls everything
import * as recharts from "recharts";         // pulls ~90KB gz
```

Heavy libs to NEVER import at module scope of an eager (non-lazy) page:
`recharts`, `d3`, `three`, `mammoth`, `tensorflow`, `papaparse`, `xlsx`,
`framer-motion`. If you need them, the consumer MUST be code-split via
`React.lazy`.

Do not add new dependencies without checking bundle impact. If unsure, ask.

## 3. Route-level code splitting — required

Every page component routed in `App.tsx` MUST be loaded via `React.lazy`
wrapped in a `<Suspense>` boundary.

DO:
```tsx
const Home = lazy(() => import("./pages/Home"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

<Suspense fallback={null}>
  <Switch>…</Switch>
</Suspense>
```

DON'T:
```tsx
import Home from "./pages/Home";              // forbidden at App.tsx level
import BlogPost from "./pages/BlogPost";
```

Rationale: today's bundle is 617KB / 165KB gz in one chunk because every
page is eagerly imported.

## 4. Component cleanup — no dead UI files

Do not leave unused component files in `client/src/components/ui/` or
`client/src/pages/`. If a file is not referenced from any route or other
component, propose deleting it.

## 5. Effects — cancel on unmount

Any `useEffect` that performs an async fetch MUST guard against state
updates after unmount using a `cancelled` flag.

DO:
```tsx
useEffect(() => {
  let cancelled = false;
  fetchPostBySlug(slug).then(p => { if (!cancelled) setPost(p); });
  return () => { cancelled = true; };
}, [slug]);
```

## 6. Image hygiene

Image tags MUST include explicit `width` and `height` to prevent layout
shift (CLS). Prefer `.webp` over `.jpg/.png`. Below-the-fold images get
`loading="lazy"`. Above-the-fold hero images get `fetchpriority="high"`.

## 7. Honesty over agreement

When the user proposes a change you believe is wrong (will break the
prerender, bloat the bundle, leak a secret, etc.), say so plainly with the
reason. Don't agree with bad ideas to be polite.
