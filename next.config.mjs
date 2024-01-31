/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";
const nextConfig = {
  images: {
    domains: [
      "prod-files-secure.s3.us-west-2.amazonaws.com",
      "images.unsplash.com",
    ],
  },
  // ... other configurations
};

export default withPlaiceholder(nextConfig);
