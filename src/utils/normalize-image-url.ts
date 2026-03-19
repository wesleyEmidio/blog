export function normalizeImageUrl(url: string): string {
  if (!url) return url;

  // If the URL is already relative, we can use it directly.
  if (url.startsWith("/")) return url;

  // Convert local absolute URLs to relative paths so Next.js Image doesn't need remotePatterns.
  // This helps when the UI stores values like "http://localhost:3000/uploads/xyz.png".
  try {
    const parsed = new URL(url);

    // Only convert localhost and 127.0.0.1 origins.
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      return `${parsed.pathname}${parsed.search}${parsed.hash}`;
    }
  } catch {
    // ignore invalid URLs (treat as relative paths)
  }

  return url;
}
