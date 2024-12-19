/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./assets/", // 빌드용
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: false, // SWC의 Minify 비활성화
  webpack: (config) => {
    // Webpack 최적화 설정 조정
    config.optimization = {
      ...config.optimization,
      minimize: false, // Webpack의 Minify 비활성화
    };

    return config;
  },
};

export default nextConfig;
