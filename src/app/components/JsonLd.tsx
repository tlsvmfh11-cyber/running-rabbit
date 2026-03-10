export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "NightClub", "EntertainmentBusiness"],
    "@id": "https://daltorunningrabbit.com/#business",
    "name": "달리는토끼 런닝래빗",
    "alternateName": ["강남 달토", "강남 달리는토끼", "런닝래빗", "Running Rabbit", "Dalto"],
    "image": [
      "https://daltorunningrabbit.com/images/간판1.webp",
      "https://daltorunningrabbit.com/images/입구.webp",
      "https://daltorunningrabbit.com/images/룸1.webp",
      "https://daltorunningrabbit.com/images/룸5.webp",
      "https://daltorunningrabbit.com/images/카운터.webp"
    ],
    "logo": "https://daltorunningrabbit.com/images/logo2-removebg-preview.png",
    "description": "강남역 10번 출구 도보 5분, 11년 전통의 강남 대표 프리미엄 하이퍼블릭 가라오케. 투명한 정찰제 가격, 최상급 시설, 완벽한 초이스 시스템, VIP 서비스. 연간 6,000팀 이상 방문, 고객 만족도 1위.",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "243",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "김○○"
        },
        "datePublished": "2026-02-15",
        "reviewBody": "처음 가보는 곳이라 긴장했는데 신대표님이 정말 친절하게 안내해주셔서 편안하게 즐겼습니다. 시설도 깔끔하고 분위기도 좋았어요. 강남 하이퍼블릭 중 최고!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "이○○"
        },
        "datePublished": "2026-02-28",
        "reviewBody": "회사 회식으로 방문했는데 모든 직원들이 만족했습니다. 가격도 합리적이고 서비스도 최고였어요. 비즈니스 접대용으로도 완벽합니다!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "박○○"
        },
        "datePublished": "2026-03-01",
        "reviewBody": "혼자 방문했는데도 전혀 어색하지 않았어요. 1인 룸이 따로 있어서 편안하게 즐길 수 있었습니다. 정찰제라 가격 걱정 없이 안심.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "최○○"
        },
        "datePublished": "2026-03-05",
        "reviewBody": "강남 하이퍼블릭 여러 곳 다녀봤는데 달토가 시설, 서비스, 가격 모든 면에서 압도적입니다. 신대표님 응대가 진짜 다릅니다.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "정○○"
        },
        "datePublished": "2026-03-08",
        "reviewBody": "외국 바이어 접대로 방문했는데 영어 가능한 매니저도 있고, 시설이 워낙 좋아서 바이어분들도 매우 만족하셨습니다. 최고의 접대 장소!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "foundingDate": "2015",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 20,
      "maxValue": 30
    },
    "areaServed": {
      "@type": "City",
      "name": "서울특별시 강남구"
    },
    "slogan": "강남 하이퍼블릭 1위, 11년 전통 프리미엄 서비스",
    "knowsAbout": ["하이퍼블릭", "가라오케", "VIP 접대", "비즈니스 회식", "강남 유흥"],
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "주차 발렛", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "VIP 룸", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "프리미엄 음향", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "픽업 서비스", "value": true }
    ]
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
          "text": "강남 달토 런닝래빗은 강남 하이퍼블릭 최저가를 보장하며, 100% 정찰제로 투명하게 운영됩니다. 인원과 시간에 따라 맞춤 견적을 안내해드립니다. 정확한 2026년 최신 가격은 전화(010-2303-3778)로 문의해주세요. 숨은 비용 없이 안심하고 이용하실 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토에 1인 방문도 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 1인 방문 환영합니다. 전체 방문 고객의 약 30%가 1인 방문이며, 프라이빗한 1인 전용 룸도 준비되어 있습니다. 합리적인 1인 요금제와 맞춤형 서비스를 제공하며, 신대표가 직접 친절하게 안내해드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 초이스 시스템은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "입장 후 예약하신 룸으로 안내된 뒤, 3~5명의 매니저가 순서대로 입장하여 간단한 인사를 나눕니다. 고객이 직접 마음에 드는 매니저를 부담 없이 선택하는 시스템입니다. 마음에 드는 분이 없으면 추가 초이스도 가능합니다. 평균 5~10분 소요됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 예약은 어떻게 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "전화(010-2303-3778), 카카오톡(tlsgustlra), 텔레그램(@hscompanyshs)으로 24시간 예약 가능합니다. 신대표가 직접 응대하며, 방문 날짜, 시간, 인원 수를 말씀해주시면 즉시 예약 확정됩니다. 당일 예약도 가능하지만 주말과 공휴일에는 미리 예약하시는 것을 권장합니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 주차는 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 주차 발렛 서비스를 제공합니다. 건물 입구에서 차량을 인계하시면 안전하게 보관해드립니다. 제휴 주차장도 있으며, 2시간 무료 주차가 가능합니다. VIP 고객은 전용 주차 공간이 제공됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 결제 방법은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "현금 및 모든 신용카드, 체크카드, 법인카드 결제가 가능합니다. 세금계산서 발행, 현금영수증 발행도 가능합니다. 비즈니스 접대 시 법인카드 사용이 가능하며, 모든 영수증 종류를 즉시 발행해드립니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 외국인 손님도 이용할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 외국인 고객을 위한 전문 서비스를 제공합니다. 영어 가능한 매니저 배치, 영문 메뉴 및 가격표 제공, 통역 서비스 지원이 가능합니다. 중국, 일본, 미국, 유럽 등 다양한 국적의 고객님들이 만족하며 재방문하고 계십니다. 호텔 픽업 서비스도 가능합니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 위치가 어디인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "서울시 강남구 역삼동 604-11번지에 위치하며, 강남역 10번 출구에서 도보 5분 거리입니다. 신분당선 강남역과도 연결되어 있으며, 직진 후 두 번째 골목에서 우회전하시면 됩니다. 밤에도 밝게 빛나는 간판으로 쉽게 찾으실 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 영업시간은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "매일 저녁 6시부터 새벽 5시까지 영업하며, 연중무휴로 운영됩니다. 예약 상담은 24시간 가능하며, 신대표가 직접 응대합니다. 전화(010-2303-3778)로 언제든 문의해주세요."
        }
      },
      {
        "@type": "Question",
        "name": "강남 달토 당일 예약도 가능한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 당일 예약도 가능합니다. 다만 금요일, 토요일 저녁(오후 8시~자정)은 예약이 조기 마감될 수 있으므로 미리 예약하시는 것을 권장합니다. 평일 저녁이나 소규모 인원(1~3인)은 당일 예약이 비교적 수월합니다. 신대표에게 전화로 실시간 예약 가능 여부를 확인하실 수 있습니다."
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
        "name": "룸 소개",
        "item": "https://daltorunningrabbit.com/#rooms"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "가격표",
        "item": "https://daltorunningrabbit.com/#price"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "초이스 시스템",
        "item": "https://daltorunningrabbit.com/#choice-system"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "고객 후기",
        "item": "https://daltorunningrabbit.com/#reviews"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "VIP 서비스",
        "item": "https://daltorunningrabbit.com/#vip"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "오시는 길",
        "item": "https://daltorunningrabbit.com/#directions"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "문의 및 예약",
        "item": "https://daltorunningrabbit.com/#contact"
      }
    ]
  }

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://daltorunningrabbit.com/#organization",
    "name": "달리는토끼 런닝래빗",
    "alternateName": "강남 달토",
    "url": "https://daltorunningrabbit.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://daltorunningrabbit.com/images/logo2-removebg-preview.png",
      "width": 512,
      "height": 512
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+82-10-2303-3778",
        "contactType": "reservations",
        "areaServed": "KR",
        "availableLanguage": ["Korean", "English"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      }
    ],
    "foundingDate": "2015",
    "foundingLocation": {
      "@type": "Place",
      "name": "서울특별시 강남구 역삼동"
    }
  }

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://daltorunningrabbit.com/#website",
    "name": "강남 달토 런닝래빗",
    "alternateName": "강남 달토 | 강남 하이퍼블릭 1위",
    "url": "https://daltorunningrabbit.com",
    "description": "강남 하이퍼블릭 1위, 11년 전통 프리미엄 가라오케 달리는토끼 런닝래빗 공식 웹사이트",
    "publisher": {
      "@id": "https://daltorunningrabbit.com/#organization"
    },
    "inLanguage": "ko-KR"
  }

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://daltorunningrabbit.com/#webpage",
    "url": "https://daltorunningrabbit.com",
    "name": "강남 달토 | 강남 하이퍼블릭 1위 런닝래빗 - 2026 가격·후기·예약",
    "description": "강남 달토 런닝래빗은 강남역 도보 5분, 11년 전통 강남 하이퍼블릭 대표 브랜드입니다. 2026년 최신 가격표, 실제 후기, 초이스 시스템, 정찰제 주대, VIP 서비스까지 한눈에.",
    "isPartOf": {
      "@id": "https://daltorunningrabbit.com/#website"
    },
    "about": {
      "@id": "https://daltorunningrabbit.com/#business"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2026-03-09",
    "inLanguage": "ko-KR",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://daltorunningrabbit.com/images/간판1.webp"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "#about h2", "#price h2", "#reviews h2"]
    }
  }

  const serviceList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "강남 달토 서비스 목록",
    "description": "강남 달토 런닝래빗에서 제공하는 프리미엄 서비스",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "프리미엄 하이퍼블릭 서비스",
          "description": "강남 최고급 시설과 프리미엄 매니저 서비스, 완벽한 초이스 시스템",
          "provider": { "@id": "https://daltorunningrabbit.com/#business" },
          "areaServed": "서울특별시 강남구",
          "serviceType": "하이퍼블릭 가라오케"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "VIP 전용 서비스",
          "description": "VIP 전용 룸, 프리미엄 주류, 픽업 서비스, 전담 매니저 배정",
          "provider": { "@id": "https://daltorunningrabbit.com/#business" },
          "areaServed": "서울특별시 강남구"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "비즈니스 접대 패키지",
          "description": "기업 회식, 거래처 접대를 위한 프리미엄 패키지. 법인카드, 세금계산서 발행 가능",
          "provider": { "@id": "https://daltorunningrabbit.com/#business" },
          "areaServed": "서울특별시 강남구"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "단체 예약 서비스",
          "description": "4인부터 30인까지 단체 예약 가능. 룸 연결, 단체 할인 적용",
          "provider": { "@id": "https://daltorunningrabbit.com/#business" },
          "areaServed": "서울특별시 강남구"
        }
      }
    ]
  }

  const event = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "강남 달토 2026년 3월 특별 이벤트",
    "description": "2026년 봄 시즌 특별 프로모션 - 첫 방문 고객 웰컴 서비스, 생일 이벤트, 단골 VIP 혜택",
    "image": "https://daltorunningrabbit.com/images/간판1.webp",
    "startDate": "2026-03-01",
    "endDate": "2026-03-31",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "강남 달토 런닝래빗",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "KR",
        "addressRegion": "서울특별시",
        "addressLocality": "강남구",
        "streetAddress": "역삼동 604-11번지"
      }
    },
    "organizer": {
      "@id": "https://daltorunningrabbit.com/#business"
    },
    "performer": {
      "@type": "Organization",
      "name": "달리는토끼 런닝래빗",
      "url": "https://daltorunningrabbit.com"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://daltorunningrabbit.com",
      "price": "0",
      "priceCurrency": "KRW",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-03-01"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
      />
    </>
  )
}
