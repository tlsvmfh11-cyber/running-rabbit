import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daltorunningrabbit.com"),
  title: "강남 달토 가격·후기·시스템 총정리",
  description:
    "강남 달토 런닝래빗 - 강남역 도보 5분, 11년 전통 강남 하이퍼블릭 1위. 2026년 4월 최신 가격표, 실제 후기 258건(평점 4.9), 초이스 시스템, 100% 정찰제, VIP 서비스. 신대표 24시간 직접 응대 ☎ 010-2303-3778",
  keywords: [
    "강남 달토",
    "강남 하이퍼블릭",
    "달리는토끼",
    "런닝래빗",
    "강남 가라오케",
    "강남역 하이퍼블릭",
    "강남 하이퍼블릭 추천",
    "강남 하이퍼블릭 가격",
    "강남 하이퍼블릭 후기",
    "강남 달토 가격",
    "강남 달토 후기",
    "강남 달토 예약",
    "주대",
    "초이스",
    "정찰제",
    "강남역 가라오케",
    "강남 유흥",
    "강남 룸",
    "강남 2차",
    "강남 접대",
    "강남 회식",
    "강남 VIP",
    "강남 노래방",
    "역삼동 하이퍼블릭",
    "강남 달토 런닝래빗",
    "강남 하이퍼블릭 정찰제",
    "강남 하이퍼블릭 초이스",
    "강남 달토 초이스",
    "강남 프리미엄 가라오케",
    "강남 비즈니스 접대",
    "강남역 2차",
  ],
  authors: [{ name: "강남 달토 런닝래빗" }],
  creator: "강남 달토 런닝래빗",
  publisher: "강남 달토 런닝래빗",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "futYyetSiT3naVJ0VSWXD2MtpcdK3btS5Ath4Beod7Y",
    other: {
      "naver-site-verification": "a00a837ad78a285ff7e775ce1645e25550c44007",
    },
  },
  alternates: {
    canonical: "https://daltorunningrabbit.com",
    languages: {
      "ko-KR": "https://daltorunningrabbit.com",
    },
  },
  category: "entertainment",
  openGraph: {
    title: "강남 달토 가격·후기·시스템 총정리",
    description:
      "11년 전통 강남 하이퍼블릭 1위. 100% 정찰제 가격, 완벽한 초이스 시스템, VIP 서비스. 후기 258건 평점 4.9. 강남역 도보 5분. 신대표 24시간 직접 응대 ☎ 010-2303-3778",
    type: "website",
    url: "https://daltorunningrabbit.com",
    siteName: "강남 달토 런닝래빗",
    locale: "ko_KR",
    images: [
      {
        url: "/images/간판1.webp",
        width: 1200,
        height: 630,
        alt: "강남 달토 런닝래빗 - 강남 하이퍼블릭 1위 프리미엄 가라오케 외관",
        type: "image/webp",
      },
      {
        url: "/images/룸1.webp",
        width: 800,
        height: 600,
        alt: "강남 달토 프리미엄 VIP 룸 내부",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "강남 달토 가격·후기·시스템 총정리",
    description:
      "강남역 도보 5분, 11년 전통 하이퍼블릭 1위. 100% 정찰제, 완벽 초이스, 후기 258건 평점 4.9. ☎ 010-2303-3778",
    images: ["/images/간판1.webp"],
  },
  other: {
    "theme-color": "#d4af37",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=yes",
    "geo.region": "KR-11",
    "geo.placename": "강남구 역삼동",
    "geo.position": "37.4979;127.0276",
    "ICBM": "37.4979, 127.0276",
    "classification": "Entertainment, Nightlife, Karaoke",
    "revisit-after": "3 days",
    "rating": "general",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/title.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={`body ${notoSansKR.className}`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
