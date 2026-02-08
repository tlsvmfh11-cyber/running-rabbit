import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "강남 달토 가격·후기·시스템 총정리",
  description: "강남 달토는 강남 하이퍼블릭 대표 브랜드로, 합리적인 주대와 완벽한 초이스로 강남의 밤을 책임집니다. 가격·후기·예약 안내까지 한눈에 확인하세요. \"강남 달토, 강남 하이퍼블릭, 주대, 후기, 예약\"",
  keywords: "강남 달토는 강남 하이퍼블릭 대표 브랜드로, 합리적인 주대와 완벽한 초이스로 강남의 밤을 책임집니다. 가격·후기·예약 안내까지 한눈에 확인하세요. \"강남 달토, 강남 하이퍼블릭, 주대, 후기, 예약\"",
  authors: [{ name: "강남 달토" }],
  robots: "index, follow",
  verification: {
    other: {
      "naver-site-verification": "a00a837ad78a285ff7e775ce1645e25550c44007",
      "google-site-verification": "futYyetSiT3naVJ0VSWXD2MtpcdK3btS5Ath4Beod7Y"
    }
  },
  openGraph: {
    title: "강남 달토 가격·후기·시스템 총정리",
    description: "강남 달토는 강남 하이퍼블릭 대표 브랜드로, 합리적인 주대와 완벽한 초이스로 강남의 밤을 책임집니다. 가격·후기·예약 안내까지 한눈에 확인하세요. \"강남 달토, 강남 하이퍼블릭, 주대, 후기, 예약\"",
    type: "website",
    url: "https://daltorunningrabbit.com",
    siteName: "강남 달토",
    locale: "ko_KR",
    images: [
      {
        url: "/images/간판1.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="body">
        {children}
      </body>
    </html>
  );
}
