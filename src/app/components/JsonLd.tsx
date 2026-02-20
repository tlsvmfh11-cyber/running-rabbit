export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "달리는토끼 런닝래빗",
    "alternateName": "강남 달토",
    "image": "https://daltorunningrabbit.com/images/간판1.webp",
    "logo": "https://daltorunningrabbit.com/images/logo2-removebg-preview.png",
    "description": "강남역 10번 출구 도보 5분, 10년 전통의 프리미엄 하이퍼블릭 가라오케. 투명한 정찰제 가격, 최상급 시설, 완벽한 프라이버시 보장",
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
    "paymentAccepted": ["Cash", "Credit Card"],
    "currenciesAccepted": "KRW",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "예약은 어떻게 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "예약은 전화(010-2303-3778)로 가능합니다. 신대표가 24시간 직접 응대하며, 방문 날짜, 시간, 인원 수를 말씀해주시면 즉시 예약 확정됩니다. 당일 예약도 가능하지만 주말과 공휴일에는 미리 예약하시는 것을 권장합니다."
        }
      },
      {
        "@type": "Question",
        "name": "1인 방문도 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 1인 방문 환영합니다. 프라이빗한 1인 룸도 준비되어 있으며, 부담 없이 편안하게 이용하실 수 있습니다. 신대표가 직접 친절하게 안내해드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "초이스 시스템은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "입장 후 웨이팅룸에서 여러 명의 매니저가 소개되며, 고객이 직접 선택하는 시스템입니다. 부담 없이 마음에 드는 매니저를 선택하시면 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "주차는 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 전용 주차장이 완비되어 있습니다. 주차 공간이 부족할 경우 근처 제휴 주차장을 이용하실 수 있으며, 주차비는 일정 금액 이상 이용 시 지원됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "드레스 코드가 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "격식을 갖춘 복장이 권장되지만, 너무 캐주얼하지 않으면 됩니다. 반바지, 슬리퍼, 민소매는 피해주시고, 스마트 캐주얼 이상의 복장을 권장합니다."
        }
      },
      {
        "@type": "Question",
        "name": "이용 요금은 얼마인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "강남 최저가를 보장하며, 인원과 시간에 따라 맞춤 견적을 안내해드립니다. 정찰제로 투명하게 운영되며, 정확한 가격은 전화(010-2303-3778)로 문의해주세요."
        }
      },
      {
        "@type": "Question",
        "name": "결제 방법은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "현금 및 모든 카드 결제가 가능합니다. 법인카드도 사용 가능하며, 세금계산서 발행도 가능합니다."
        }
      }
    ]
  }

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "홈",
        "item": "https://daltorunningrabbit.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "강남 달토 소개",
        "item": "https://daltorunningrabbit.com/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "가격표",
        "item": "https://daltorunningrabbit.com/#price"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "초이스 시스템",
        "item": "https://daltorunningrabbit.com/#choice-system"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "고객 후기",
        "item": "https://daltorunningrabbit.com/#reviews"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "오시는 길",
        "item": "https://daltorunningrabbit.com/#directions"
      }
    ]
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "달리는토끼 런닝래빗",
    "alternateName": "강남 달토",
    "url": "https://daltorunningrabbit.com",
    "logo": "https://daltorunningrabbit.com/images/logo2-removebg-preview.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+82-10-2303-3778",
      "contactType": "reservations",
      "areaServed": "KR",
      "availableLanguage": ["Korean", "English"]
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
    </>
  )
}
