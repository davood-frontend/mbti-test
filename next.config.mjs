/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.(jpeg|png|gif|svg|jfif)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/images/[hash][ext][query]'
            }
        });

        return config;
    },
};

export default nextConfig;
