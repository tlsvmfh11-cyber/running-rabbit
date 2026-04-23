export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "NightClub", "EntertainmentBusiness"],
    "@id": "https://daltorunningrabbit.com/#business",
    "name": "달리는토끼 런닝래빗",
    "alternateName": ["강남 달토", "강남 달리는토끼", "런닝래빗"],
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://daltorunningrabbit.com/images/간판1.webp",
        "width": 1200,
        "height": 630,
        "caption": "강남 달토 런닝래빗 외관 간판"
      },
      {
        "@type": "ImageObject",
        "url": "https://daltorunningrabbit.com/images/룸1.webp",
        "caption": "강남 달토 프리미엄 VIP 룸"
      }
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://daltorunningrabbit.com/images/logo2-removebg-preview.png",
      "width": 512,
      "height": 512
    },
    "description": "강남역 도보 5분, 11년 전통 프리미엄 하이퍼블릭 가라오케. 100% 정찰제 가격, 완벽한 초이스 시스템, VIP 서비스.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR",
      "addressRegion": "서울특별시",
      "addressLocality": "강남구",
      "streetAddress": "역삼동 604-11번지",
      "postalCode": "06142"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.4979",
      "longitude": "127.0276"
    },
    "hasMap": "https://naver.me/G9pF7F0c",
    "telephone": "+82-10-2303-3778",
    "priceRange": "₩₩₩",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "18:00",
        "closes": "05:00"
      }
    ],
    "url": "https://daltorunningrabbit.com",
    "sameAs": [
      "https://t.me/hscompanyshs",
      "https://open.kakao.com/o/tlsgustlra"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "KRW",
    "acceptsReservations": "True",
    "foundingDate": "2015",
    "areaServed": {
      "@type": "City",
      "name": "서울특별시 강남구"
    }
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "강남 달토 이용 요금은 얼마인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "강남 달토 런닝래빗은 100% 정찰제로 투명하게 운영됩니다. 인원과 시간에 따라 맞춤 견적을 안내해드립니다. 정확한 가격은 전화(010-2303-3778)로 문의해주세요."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 초이스 시스템은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "입장 후 룸으로 안내된 뒤, 매니저가 순서대로 입장하여 인사를 나눕니다. 고객이 직접 마음에 드는 매니저를 선택하는 시스템입니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 예약은 어떻게 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "전화(010-2303-3778), 카카오톡, 텔레그램으로 24시간 예약 가능합니다. 당일 예약도 가능하지만 주말에는 미리 예약하시는 것을 권장합니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 위치가 어디인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "서울시 강남구 역삼동 604-11번지에 위치하며, 강남역 10번 출구에서 도보 5분 거리입니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 영업시간은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "매일 저녁 6시부터 새벽 5시까지 영업하며, 연중무휴로 운영됩니다. 예약 상담은 24시간 가능합니다."
        }
      }
    ]
  }

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://daltorunningrabbit.com/#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://daltorunningrabbit.com" }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
    </>
  )
}
