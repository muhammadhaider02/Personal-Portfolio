import { createContext } from 'react';

// True while the intro loader overlay is covering the page. Content now mounts
// underneath the loader (so crawlers get it in the static HTML), so entrance
// animations (nav, hero, side) wait on this instead of their own mount.
const LoaderContext = createContext(false);

export default LoaderContext;
