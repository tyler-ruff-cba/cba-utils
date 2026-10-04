// shadcn-compatible class composition hook for future Web Component primitives.
export function cn(...values) {
  return values.filter(Boolean).join(' ');
}
