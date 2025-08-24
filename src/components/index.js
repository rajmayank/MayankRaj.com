// Main component exports
// This file provides a centralized way to import all components

// Common components
export * from "./common";

// Layout components
export * from "./layout";

// Blog components
export * from "./blog";

// UI components
export * from "./ui";

// Legacy exports for backward compatibility
// These can be removed once all imports are updated
export { default as Icon } from "./common/Icon";
export { default as Seo } from "./common/Seo";
export { default as Header } from "./layout/Header";
export { default as CompactHeader } from "./layout/CompactHeader";
export { default as Footer } from "./layout/Footer";
export { default as BlogPostListing } from "./blog/BlogPostListing";
export { default as BlogPost } from "./blog/BlogPost";
export { default as Showcase } from "./ui/Showcase";
