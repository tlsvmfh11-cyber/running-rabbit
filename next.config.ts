import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 파일 처리를 위한 설정
  trailingSlash: true,
  // 리다이렉트 설정
  async redirects() {
    return [
      {
        source: '/en',
        destination: '/en',
        permanent: false,
      },
      {
        source: '/cn',
        destination: '/cn',
        permanent: false,
      },
      {
        source: '/jp',
        destination: '/jp',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
