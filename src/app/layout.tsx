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
    "강남 달토는 강남 하이퍼블릭 대표 브랜드로, 합리적인 주대와 완벽한 초이스로 강남의 밤을 책임집니다. 가격·후기·예약 안내까지 한눈에 확인하세요.",
  keywords: [
    "강남 달토",
    "강남 하이퍼블릭",
    "달리는토끼",
    "런닝래빗",
    "강남 가라오케",
    "주대",
    "후기",
    "예약",
    "초이스",
    "강남역 가라오케",
    "정찰제",
  ],
  authors: [{ name: "강남 달토" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    other: {
      "naver-site-verification": "a00a837ad78a285ff7e775ce1645e25550c44007",
      "google-site-verification": "futYyetSiT3naVJ0VSWXD2MtpcdK3btS5Ath4Beod7Y",
    },
  },
  alternates: {
    canonical: "https://daltorunningrabbit.com",
  },
  openGraph: {
    title: "강남 달토 가격·후기·시스템 총정리",
    description:
      "강남 달토는 강남 하이퍼블릭 대표 브랜드로, 합리적인 주대와 완벽한 초이스로 강남의 밤을 책임집니다. 가격·후기·예약 안내까지 한눈에 확인하세요.",
    type: "website",
    url: "https://daltorunningrabbit.com",
    siteName: "강남 달토",
    locale: "ko_KR",
    images: [
      {
        url: "/images/간판1.webp",
        width: 1200,
        height: 630,
        alt: "강남 달토 런닝래빗 외관",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "강남 달토 가격·후기·시스템 총정리",
    description:
      "강남역 도보 5분, 10년 전통 프리미엄 하이퍼블릭. 1인 방문 가능, 정찰제 가격, 24시간 응대",
    images: ["/images/간판1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`body ${notoSansKR.className}`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
