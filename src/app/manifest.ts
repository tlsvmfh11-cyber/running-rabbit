import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '강남 달토 런닝래빗 - 프리미엄 하이퍼블릭',
    short_name: '강남 달토',
    description: '강남 달토는 강남 하이퍼블릭 대표 브랜드로, 합리적인 주대와 완벽한 초이스로 강남의 밤을 책임집니다.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/images/logo2-removebg-preview.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/logo2-removebg-preview.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
