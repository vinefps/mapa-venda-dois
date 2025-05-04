/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Ignora totalmente o ESLint durante a build
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;