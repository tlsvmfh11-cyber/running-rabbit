import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '강남 달토 런닝래빗 - 강남 하이퍼블릭 1위 프리미엄 가라오케',
    short_name: '강남 달토',
    description: '강남 달토 런닝래빗은 11년 전통 강남 대표 하이퍼블릭 브랜드로, 투명한 정찰제 가격과 완벽한 초이스 시스템으로 강남의 밤을 책임집니다. 2026년 최신 가격·후기·예약.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#d4af37',
    lang: 'ko',
    categories: ['entertainment', 'lifestyle'],
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
