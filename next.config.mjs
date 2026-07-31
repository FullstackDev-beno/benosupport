/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {    unoptimized: true,
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/caseStudy",
        destination: "/case-studies",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
