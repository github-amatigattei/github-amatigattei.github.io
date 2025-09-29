/** @type {import('next').NextConfig} */


const repoName = 'website';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Enable static export for GitHub Pages
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}

export default nextConfig
