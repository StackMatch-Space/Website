/**
 * Next.js writes the production build to `.next/` (not `public/`).
 * The `public/` folder is only for static files copied as-is (favicon, robots.txt, etc.).
 *
 * On Vercel: Project → Settings → Build & Development Settings
 * - Framework Preset: **Next.js**
 * - Output Directory: **leave empty** (do not set `public` or `.next` manually)
 *
 * There is no `outputDirectory` option here — that setting exists only in Vercel’s UI
 * (or in vercel.json). Wrong Output Directory causes “No Output Directory named public”.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
