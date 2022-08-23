/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com',
       'd26tqmt1mjuqkn.cloudfront.net','bayut-production.s3.eu-central-1.amazonaws.com']
  }
}

module.exports = nextConfig
