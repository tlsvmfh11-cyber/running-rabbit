'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'

export default function HomePage() {
  // Auto-update date
  const currentDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>강남 가라오케 완벽 가이드 - 달리는토끼 런닝래빗 10년 전통 프리미엄 하이퍼블릭</title>
        <meta name="title" content="강남 가라오케 완벽 가이드 - 달리는토끼 런닝래빗 10년 전통" />
        <meta name="description" content="강남역 10번 출구 도보 5분, 10년 전통의 프리미엄 하이퍼블릭 가라오케. 투명한 정찰제 가격, 1인 방문 가능, 최상급 시설과 완벽한 프라이버시 보장. 신대표 24시간 직접 응대, 고객 만족도 1위. 비즈니스 접대부터 친구 모임까지 모든 상황에 완벽 대응. 지금 바로 예약하세요!" />
        <meta name="keywords" content="강남 가라오케, 달리는토끼, 런닝래빗, 하이퍼블릭, 강남역 가라오케, 1인 방문, 비즈니스 접대, 강남 유흥, 정찰제, 프리미엄 가라오케, 신대표, 초이스 시스템, VIP 룸, 단체 예약, 강남 핫플" />
        <link rel="canonical" href="https://running-rabbit-gangnam.com" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Korean" />
        <meta name="author" content="달리는토끼 런닝래빗" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://running-rabbit-gangnam.com" />
        <meta property="og:title" content="강남 가라오케 완벽 가이드 - 달리는토끼 런닝래빗 10년 전통" />
        <meta property="og:description" content="강남역 10번 출구 도보 5분, 10년 전통 프리미엄 하이퍼블릭. 투명한 정찰제, 1인 방문 가능, 최상급 시설. 신대표 24시간 직접 응대." />
        <meta property="og:image" content="https://running-rabbit-gangnam.com/images/title.jpg" />
        <meta property="og:site_name" content="달리는토끼 런닝래빗" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://running-rabbit-gangnam.com" />
        <meta property="twitter:title" content="강남 가라오케 완벽 가이드 - 달리는토끼 런닝래빗" />
        <meta property="twitter:description" content="강남역 도보 5분, 10년 전통 프리미엄 하이퍼블릭. 1인 방문 가능, 정찰제 가격, 24시간 응대" />
        <meta property="twitter:image" content="https://running-rabbit-gangnam.com/images/title.jpg" />

        {/* Additional Meta */}
        <meta name="geo.region" content="KR-11" />
        <meta name="geo.placename" content="강남구, 서울" />
        <meta name="geo.position" content="37.4979;127.0276" />

        {/* Schema.org Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "달리는토끼 런닝래빗",
              "image": "https://running-rabbit-gangnam.com/images/logo2-removebg-preview.png",
              "description": "강남역 10번 출구 도보 5분, 10년 전통의 프리미엄 하이퍼블릭 가라오케. 투명한 정찰제 가격, 최상급 시설, 완벽한 프라이버시 보장",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR",
                "addressRegion": "서울특별시",
                "addressLocality": "강남구",
                "streetAddress": "강남역 10번 출구 도보 5분"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.4979",
                "longitude": "127.0276"
              },
              "telephone": "+82-10-2303-3778",
              "priceRange": "₩₩₩",
              "openingHours": "Mo-Su 18:00-05:00",
              "url": "https://running-rabbit-gangnam.com",
              "paymentAccepted": ["Cash", "Credit Card"],
              "currenciesAccepted": "KRW",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />

        {/* Schema.org - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                    "text": "기본 2시간 기준, 2인 24만원부터 시작합니다. 인원과 시간에 따라 요금이 달라지며, 정찰제로 투명하게 운영됩니다. 상세한 가격은 전화 문의 시 안내해드립니다."
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
            })
          }}
        />

        {/* Schema.org - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "홈",
                  "item": "https://running-rabbit-gangnam.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "강남 가라오케",
                  "item": "https://running-rabbit-gangnam.com#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "초이스 시스템",
                  "item": "https://running-rabbit-gangnam.com#choice-system"
                }
              ]
            })
          }}
        />
      </Head>

      <main className="min-w-full bg-black text-white">
        {/* Update Date Display */}
        <div className="bg-gradient-to-r from-purple-950/30 to-black/30 py-2 text-center border-b border-[#d4af37]/20">
          <p className="text-sm text-gray-400">
            <span style={{ color: '#d4af37' }}>최종 업데이트:</span> {currentDate}
          </p>
        </div>

        {/* Hero Section */}
      <section className="relative py-32 md:py-48 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/title.jpg"
            alt="강남 런닝래빗 배경"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/70 via-black/80 to-black/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight"
            style={{
              color: '#d4af37',
              textShadow: '0 0 60px rgba(212, 175, 55, 0.8), 0 0 90px rgba(212, 175, 55, 0.5)'
            }}
          >
            강남 최고의 핫플레이스
          </h1>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 text-white">
            런닝래빗
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl leading-relaxed">
            강남 최고급 하이퍼블릭 가라오케, 프리미엄 서비스와 럭셔리한 공간에서<br />
            특별한 순간을 경험하세요
          </p>

          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-4xl leading-relaxed">
            강남역 10번 출구 도보 5분 거리에 위치한 <span className="font-bold" style={{ color: '#d4af37' }}>달리는토끼 런닝래빗</span>은
            10년 전통의 강남 대표 하이퍼블릭 가라오케입니다.
            <a href="#price" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>투명한 정찰제 가격</a>, 최상급 시설, 완벽한 프라이버시 보장으로
            비즈니스 접대부터 친구 모임, 1인 방문까지 모든 상황에 완벽하게 대응합니다.
            신대표가 24시간 직접 응대하며 <a href="#reviews" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>고객 만족도 1위</a>를 기록하고 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2303-3778"
              className="inline-block px-12 py-5 text-lg md:text-xl font-bold rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
                color: '#000000',
                border: '2px solid #d4af37'
              }}
            >
              📞 바로 예약하기
            </a>
            <a
              href="#about"
              className="inline-block px-12 py-5 text-lg md:text-xl font-bold rounded-full border-2 transition-all duration-300 hover:scale-110 text-white hover:bg-white/10"
              style={{
                borderColor: '#d4af37',
              }}
            >
              더 알아보기 →
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            강남 달리는토끼 소개
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/logo2-removebg-preview.png"
                  alt="강남 달리는토끼 로고"
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                <span className="font-bold" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>강남 달리는토끼 런닝래빗</span>은
                2015년부터 강남 역삼동에서 10년간 운영해온 강남 대표 하이퍼블릭 가라오케입니다.
                최고급 시설과 프리미엄 서비스로 연간 5,000팀 이상의 고객님들을 모시고 있으며,
                고객 만족도 평가에서 지속적으로 1위를 기록하고 있습니다.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                강남역 10번 출구에서 도보 5분 거리, 역삼동 604-11번지에 위치한 최고의 접근성을 자랑하며,
                강남의 중심에서 가장 세련되고 고급스러운 공간을 제공합니다.
                완벽한 프라이버시 보장과 최상의 서비스로 비즈니스 접대, 회식, 친구 모임, 1인 방문 등
                모든 목적에 부합하는 특별한 시간을 선사합니다.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                10년 이상의 경험을 보유한 전문 스태프들이 고객 한 분 한 분께 맞춤형 서비스를 제공하며,
                <a href="#choice-system" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>투명한 정찰제 가격 시스템</a>으로 숨은 비용 없이 안심하고 이용하실 수 있습니다.
                신대표가 직접 24시간 응대하며 예약부터 이용까지 모든 과정을 세심하게 관리합니다.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                최신 음향 시스템과 프리미엄 인테리어로 꾸며진 <a href="#rooms" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>다양한 룸</a>을 갖추고 있으며,
                2인 소규모 모임부터 <a href="#group" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>20인 이상 대규모 단체</a>까지 완벽하게 대응 가능합니다.
                주차 발렛 서비스와 <a href="#vip" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>VIP 고객 전용 픽업 서비스</a>도 제공하여
                편안한 방문을 보장합니다.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                강남 하이퍼블릭 가라오케 중에서도 가장 합리적인 가격대와 최상의 서비스 품질로
                재방문율 73%를 기록하고 있으며, 많은 고객님들께서
                지인 추천을 통해 방문해주고 계십니다.
              </p>

              <div className="pt-6 flex gap-4">
                <a
                  href="tel:010-2303-3778"
                  className="inline-block px-10 py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
                    color: '#000000',
                    border: '2px solid #d4af37'
                  }}
                >
                  📞 예약 문의
                </a>
                <a
                  href="#rooms"
                  className="inline-block px-10 py-4 text-lg font-bold rounded-xl border-2 transition-all duration-300 hover:scale-105 text-white hover:bg-white/10"
                  style={{
                    borderColor: '#d4af37',
                  }}
                >
                  룸 둘러보기
                </a>
              </div>
            </div>
          </div>

          {/* 추가 정보 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="text-xl font-bold mb-3 text-white">10년 전통</h4>
              <p className="text-gray-400">
                강남에서 10년간 쌓아온 신뢰와 명성으로 최고의 서비스를 제공합니다
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="text-xl font-bold mb-3 text-white">강남 1위</h4>
              <p className="text-gray-400">
                고객 만족도 1위를 기록한 검증된 프리미엄 서비스
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500">
              <div className="text-4xl mb-4">💎</div>
              <h4 className="text-xl font-bold mb-3 text-white">VIP 대우</h4>
              <p className="text-gray-400">
                모든 고객을 VIP처럼 모시는 특별한 서비스
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Henry Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            신대표는 다릅니다
          </h2>

          <h3 className="text-2xl md:text-3xl text-center text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            단순한 서비스를 넘어, 진심 어린 관리와 배려로<br />
            고객 한 분 한 분을 특별하게 모십니다.
          </h3>

          <p className="text-lg text-center text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            신대표는 10년간 강남 유흥업계에서 쌓아온 노하우와 신뢰를 바탕으로
            고객님들께 최상의 경험을 제공하기 위해 끊임없이 노력합니다.
            24시간 직접 응대하며 예약부터 퇴실까지 모든 과정을 책임지고 관리합니다.
          </p>

          {/* 상단 이미지 배너 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/img-01.jpg"
                  alt="럭셔리 인테리어"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">프리미엄 공간</h4>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/img-02.jpg"
                  alt="완벽한 분위기"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">특별한 경험</h4>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/룸5.jpg"
                  alt="최상급 서비스"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">최상급 서비스</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>01</div>
              <h4 className="text-2xl font-bold mb-4 text-white">투명한 정찰제 가격</h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                숨은 비용 없이 명확한 가격 정책으로 신뢰를 드립니다.
                강남 하이퍼블릭 중 가장 합리적인 주대와 정찰제 운영으로 안심하고 이용하실 수 있습니다.
              </p>
              <p className="text-gray-400 leading-relaxed">
                예약 시 인원과 이용 시간에 따른 정확한 견적을 제공하며,
                추가 비용 발생 시에도 사전에 안내해드립니다.
                신대표가 직접 가격 상담을 진행하여 예산에 맞는 최적의 플랜을 제안해드립니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>02</div>
              <h4 className="text-2xl font-bold mb-4 text-white">프리미엄 퀄리티</h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                최상급 시설과 서비스로 강남 최고의 품격을 선사합니다.
                고급 대리석 인테리어, 최신 음향 시스템, 프리미엄 조명 등
                모든 부분에서 최고급 사양을 갖추고 있습니다.
              </p>
              <p className="text-gray-400 leading-relaxed">
                세심한 배려와 완벽한 프라이버시를 보장하며,
                VIP 고객을 위한 특별한 공간과 전용 서비스를 제공합니다.
                정기적인 시설 관리와 청결 유지로 언제나 쾌적한 환경을 보장합니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>03</div>
              <h4 className="text-2xl font-bold mb-4 text-white">맞춤형 서비스</h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                고객 한 분 한 분의 취향과 니즈를 파악하여
                완벽하게 맞춤화된 서비스를 제공합니다.
                초이스 시스템부터 주류 선택, 분위기 조성까지 모든 부분에서
                개인별 맞춤 서비스를 진행합니다.
              </p>
              <p className="text-gray-400 leading-relaxed">
                비즈니스 접대, 회식, 친구 모임, 1인 방문 등
                방문 목적에 맞는 최적의 솔루션을 제안하며,
                특별한 기념일이나 이벤트를 위한 서프라이즈 준비도 가능합니다.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>04</div>
              <h4 className="text-2xl font-bold mb-4 text-white">신대표 24시간 직접 응대</h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                신대표가 직접 24시간 고객 응대를 하며,
                전화, 카카오톡, 텔레그램을 통해 언제든지 편하게 문의하고 예약하실 수 있습니다.
                10년 경력의 노하우로 최적의 서비스를 제안해드립니다.
              </p>
              <p className="text-gray-400 leading-relaxed">
                당일 긴급 예약이나 특별 요청사항도 신속하게 처리해드리며,
                예약 변경이나 취소도 유연하게 대응합니다.
                방문 후에도 지속적인 사후 관리로 재방문을 도와드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Card Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">
            이런 순간엔<br />
            <span style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>'달토 & 런닝래빗'</span>과 함께하세요
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/고객접대.jpg"
                  alt="비즈니스 미팅 및 회식"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">비즈니스 미팅 및 회식</h4>
                  <p className="text-gray-300">중요한 거래처와의 만남, 팀 회식 등 품격 있는 자리를 원하실 때</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/친구들과함께.jpg"
                  alt="친구 모임 및 동창회"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">친구 모임 및 동창회</h4>
                  <p className="text-gray-300">오랜만에 만나는 친구들과 특별한 추억을 만들고 싶을 때</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/해외게스트.jpg"
                  alt="특별한 기념일"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">특별한 기념일</h4>
                  <p className="text-gray-300">생일, 승진, 계약 성사 등 의미 있는 날을 축하하고 싶을 때</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/혼자방문하는손님.jpg"
                  alt="일상 스트레스 해소"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">일상 스트레스 해소</h4>
                  <p className="text-gray-300">바쁜 일상에서 벗어나 편안한 휴식이 필요할 때</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            룸 소개
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Room 1 - 입구 계단 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/계단1.jpg"
                  alt="입구 계단"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  입구 계단
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 달토 입구 계단은 처음 방문하는 순간부터 고급스러운 감각을 느낄 수 있는 공간입니다.
                  골드톤 대리석 벽면과 은은하게 빛나는 구형 조명이 어우러져
                  세련된 럭셔리 무드를 완성하며, 브랜드의 정체성을 시각적으로 전달합니다.
                  <br /><br />
                  계단 하단에는 달토의 시그니처 문구
                  <br /><br />
                  "I can't help falling in love with a running rabbit."
                  이 자리해, 방문객에게 강렬한 인상과 함께 브랜드 스토리를 각인시킵니다.
                </p>
              </div>
            </div>

            {/* Room 2 - 복도 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/복도1.jpg"
                  alt="복도"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  복도
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 달토의 복도는 깔끔한 대리석 인테리어와 은은한 조명으로
                  고급스러우면서도 편안한 분위기를 자아냅니다.
                  서로 이야기를 나누며 이동하는 사람들의 자연스러운 모습이
                  달토의 친근하면서도 품격 있는 이미지를 완성합니다.
                  <br /><br />
                  넓고 정돈된 동선은 룸 이동 시에도 쾌적함을 유지하며,
                  모든 공간이 고급 라운지처럼 설계되어 세련된 감각을 느낄 수 있습니다.
                </p>
              </div>
            </div>

            {/* Room 3 - 입구 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/룸2.jpg"
                  alt="입구"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  입구
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 달토의 입구는 밝은 조명과 세련된 간판 디자인으로
                  도심 속 트렌디한 감성을 완벽하게 담아냅니다.
                  'THE RUNNING RABBIT' 로고가 빛나는 외벽 앞에는
                  방문객들이 모여드는 활기찬 장면이 펼쳐지며,
                  달토의 인기를 그대로 보여줍니다.
                  <br /><br />
                  내부로 이어지는 통유리 구조와 따뜻한 조명은
                  고급스러운 라운지의 첫인상을 선사하고,
                  입구에서부터 달토만의 프리미엄 분위기를 느낄 수 있습니다.
                </p>
              </div>
            </div>

            {/* Room 4 - 카운터 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/카운터.jpg"
                  alt="카운터"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  카운터
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 달토의 안내데스크는 고급스러운 대리석 인테리어와
                  은은한 조명으로 방문객을 따뜻하게 맞이합니다.
                  화이트톤의 카운터와 우아한 조형물, 플라워 데코가 조화를 이루며
                  프리미엄 라운지다운 세련된 분위기를 완성합니다.
                  <br /><br />
                  친절한 응대와 정돈된 공간은 달토의 서비스 품격을 보여주며,
                  고객이 편안하게 이용할 수 있도록 세심한 배려가 느껴집니다.
                </p>
              </div>
            </div>

            {/* Room 5 - 룸 1 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/룸1.jpg"
                  alt="룸 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  룸 1
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  프리미엄 인테리어와 고급 음향 시스템이 완비된 VIP 룸입니다.
                  편안한 소파와 은은한 조명이 어우러져 최상의 분위기를 제공합니다.
                </p>
              </div>
            </div>

            {/* Room 6 - 룸 3 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/룸3.jpg"
                  alt="룸 3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  룸 3
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  모던하고 세련된 디자인의 룸으로, 소규모 모임에 최적화되어 있습니다.
                  프라이빗한 공간에서 편안한 시간을 보내실 수 있습니다.
                </p>
              </div>
            </div>

            {/* Room 7 - 룸 4 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/룸4.jpg"
                  alt="룸 4"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  룸 4
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  넓은 공간과 고급 음향 시스템을 갖춘 파티룸입니다.
                  대규모 모임이나 특별한 행사에 최적화된 프리미엄 공간입니다.
                </p>
              </div>
            </div>

            {/* Room 8 - 룸 5 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/룸5.jpg"
                  alt="룸 5"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  룸 5
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  은은한 조명과 고급스러운 인테리어가 돋보이는 럭셔리 룸입니다.
                  중요한 비즈니스 미팅이나 접대에 적합한 공간입니다.
                </p>
              </div>
            </div>

            {/* Room 9 - 룸 6 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/룸6.jpg"
                  alt="룸 6"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  룸 6
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  프라이빗한 분위기가 강조된 VIP 전용 룸입니다.
                  최상급 서비스와 완벽한 프라이버시를 원하시는 분께 추천합니다.
                </p>
              </div>
            </div>

            {/* Room 10 - 룸 7 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/룸7.jpg"
                  alt="룸 7"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  룸 7
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>특징</p>
                <p className="text-gray-300 leading-relaxed">
                  트렌디한 감각과 편안함이 공존하는 모던 룸입니다.
                  친구들과의 편안한 모임이나 캐주얼한 분위기를 원하실 때 완벽한 선택입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            이용방법
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  달토에게 예약/문의
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8 mb-4">
                  <h4 className="text-xl font-bold mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>
                    달토 신대표
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">📞 전화번호</p>
                      <a href="tel:010-2303-3778" className="text-white hover:text-[#d4af37] transition-colors font-bold text-lg block">
                        010-2303-3778
                      </a>
                      <p className="text-gray-500 text-sm mt-1">24시간 상담 가능</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">✈️ 텔레그램</p>
                      <a href="https://t.me/hscompanyshs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors font-bold block">
                        @hscompanyshs
                      </a>
                      <p className="text-gray-500 text-sm mt-1">빠른 답변 보장</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">💬 카카오톡</p>
                      <a href="https://open.kakao.com/o/tlsgustlra" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors font-bold block">
                        tlsgustlra
                      </a>
                      <p className="text-gray-500 text-sm mt-1">가장 편한 방법</p>
                    </div>
                  </div>
                </div>
                <a
                  href="tel:010-2303-3778"
                  className="inline-block py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
                >
                  바로 예약하기
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  가게 방문
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8 mb-4">
                  <p className="text-xl font-semibold mb-3" style={{ color: '#d4af37' }}>📍 주소</p>
                  <p className="text-white mb-4 text-lg font-semibold">서울시 강남구 역삼동 604-11번지</p>
                  <div className="space-y-2 text-gray-300 mb-6">
                    <p>🚇 강남역 10번 출구에서 도보 5분</p>
                    <p>🚗 주차 발렛 서비스 제공</p>
                    <p>🕐 영업시간: 저녁 6시 ~ 새벽 5시</p>
                  </div>
                  <a
                    href="#directions"
                    className="inline-block py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
                  >
                    상세 길찾기
                  </a>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  초이스 타임
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    매력적인 여성 파트너들과의 만남이 시작됩니다.
                    편안한 분위기에서 자유롭게 대화를 나누시며 마음에 드는 파트너를 선택하실 수 있습니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-black/30 rounded-lg">
                      <p className="font-semibold mb-2" style={{ color: '#d4af37' }}>✨ 부담 없는 분위기</p>
                      <p className="text-gray-400 text-sm">자연스럽고 편안한 초이스 진행</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg">
                      <p className="font-semibold mb-2" style={{ color: '#d4af37' }}>👔 신대표 직접 매칭</p>
                      <p className="text-gray-400 text-sm">최적의 파트너 추천</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  즐거운 시간 보내기
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    프라이빗한 공간에서 음악과 함께 특별한 시간을 즐기세요.
                    프리미엄 서비스와 고급 인테리어가 어우러진 최상의 경험을 제공합니다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-black/30 rounded-lg text-center">
                      <p className="text-3xl mb-2">🎵</p>
                      <p className="font-semibold mb-1" style={{ color: '#d4af37' }}>최신 음향</p>
                      <p className="text-gray-400 text-sm">프리미엄 사운드</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg text-center">
                      <p className="text-3xl mb-2">💡</p>
                      <p className="font-semibold mb-1" style={{ color: '#d4af37' }}>무드 조명</p>
                      <p className="text-gray-400 text-sm">완벽한 분위기</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg text-center">
                      <p className="text-3xl mb-2">🥂</p>
                      <p className="font-semibold mb-1" style={{ color: '#d4af37' }}>프리미엄 주류</p>
                      <p className="text-gray-400 text-sm">다양한 메뉴</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            자주 묻는 질문 (FAQ)
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">이용 요금은 얼마인가요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="font-bold" style={{ color: '#d4af37' }}>달토 / 달리는토끼 런닝래빗</span>은 강남 하이퍼블릭 중에서도 최저 수준의 합리적 주대와 투명한 정찰제로 운영됩니다.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>기본 요금 구조:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 2인 기준: 2시간 24만원~ (1인당 12만원)</li>
                  <li>• 3인 기준: 2시간 33만원~ (1인당 11만원)</li>
                  <li>• 4인 이상: 인원별 할인 적용</li>
                  <li>• 주류 및 안주 포함</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  예약 시 정확한 인원과 이용 시간을 말씀해주시면
                  신대표가 직접 투명한 견적을 안내해드립니다.
                  숨은 비용이나 추가 요금 없이 안심하고 이용하실 수 있습니다.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  특별 이벤트나 단체 예약 시 추가 할인 혜택도 제공되므로,
                  문의 시 자세한 상담을 받아보시기 바랍니다.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">혼자 방문해도 괜찮나요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>네, 전혀 문제없습니다!</strong> 실제로 전체 방문 고객의 약 30%가 1인 방문이며,
                  많은 분들이 혼자 편안하게 시간을 보내고 계십니다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  1인 전용 룸과 소규모 룸이 별도로 준비되어 있어,
                  처음 방문하시는 분들도 부담 없이 이용하실 수 있습니다.
                  숙련된 매니저분들이 편안한 분위기를 만들어드리며,
                  대화와 서비스로 즐거운 시간을 보장합니다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>1인 방문 장점:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 개인 맞춤형 서비스 제공</li>
                  <li>• 부담 없는 편안한 분위기</li>
                  <li>• 합리적인 1인 요금제</li>
                  <li>• 재방문율 높은 단골 고객 다수</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  예약 시 1인 방문이라고 말씀해주시면
                  신대표가 최적의 룸과 서비스를 안내해드립니다.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">스킨십이나 터치 수위는 어디까지 가능한가요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="font-bold" style={{ color: '#d4af37' }}>달토 / 런닝래빗</span>은 관계 법령에 따라 정식 허가된 1종 유흥주점으로 운영됩니다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>합법적 서비스 범위:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 노래방 이용 및 음주 서비스</li>
                  <li>• 대화 및 접대 서비스</li>
                  <li>• 일반적인 하이퍼블릭 수준의 스킨십</li>
                  <li>• 건전한 엔터테인먼트 서비스</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong className="text-red-400">엄격히 금지되는 사항:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 성매매 및 성매매 알선 행위</li>
                  <li>• 불법적인 신체 접촉</li>
                  <li>• 기타 법령 위반 행위</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  모든 서비스는 합법적이고 건전한 범위 내에서만 이루어지며,
                  정확한 서비스 내용은 예약 시 신대표에게 문의하시면
                  상세하고 투명하게 안내해드립니다.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">외국인 손님도 이용할 수 있나요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>네, 물론 가능합니다!</strong>
                  <span className="font-bold" style={{ color: '#d4af37' }}>달토 런닝래빗</span>은 외국인 고객을 위한 전문 서비스를 제공합니다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>외국인 고객 전용 서비스:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 영어 가능한 매니저 배치</li>
                  <li>• 영문 메뉴 및 가격표 제공</li>
                  <li>• 통역 서비스 지원 (필요시)</li>
                  <li>• 외국인 친화적인 분위기</li>
                  <li>• 글로벌 결제 시스템 (카드, 현금 모두 가능)</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  국내외 VIP 및 비즈니스 게스트를 위한 프리미엄 접대 서비스도 제공하며,
                  중국, 일본, 미국, 유럽 등 다양한 국적의 고객님들이
                  만족하며 재방문하고 계십니다.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  외국인 접대나 비즈니스 미팅 시 사전 예약을 통해
                  신대표가 직접 최적의 서비스를 코디해드립니다.
                  호텔 픽업 서비스도 가능하니 문의 주시기 바랍니다.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">예약은 필수인가요? 당일 방문도 가능한가요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  예약을 권장하지만, 당일 방문도 가능합니다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>예약 권장 시간대:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 금요일, 토요일 저녁 (오후 8시~자정): 예약 필수</li>
                  <li>• 주말 전 시간대: 최소 2~3시간 전 예약 권장</li>
                  <li>• 공휴일 및 특별한 날: 최소 하루 전 예약 권장</li>
                  <li>• 대규모 단체 (10인 이상): 2~3일 전 예약 필수</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>당일 방문 가능 시간대:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 평일 낮 시간 (오후 6~8시)</li>
                  <li>• 평일 심야 시간 (새벽 2시 이후)</li>
                  <li>• 소규모 인원 (1~3인)</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  당일 예약도 가능하니 신대표에게 전화로 문의하시면
                  실시간 예약 가능 여부를 안내해드립니다.
                  (전화: 010-2303-3778)
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">주차는 가능한가요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>네, 주차 서비스를 제공합니다.</strong>
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>주차 옵션:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• <strong className="text-white">발렛 파킹:</strong> 건물 입구에서 차량 인계 후 안전하게 보관</li>
                  <li>• <strong className="text-white">제휴 주차장:</strong> 건물 지하 및 인근 주차장 이용 가능</li>
                  <li>• <strong className="text-white">주차 요금:</strong> 2시간 무료, 초과 시간 할인 적용</li>
                  <li>• <strong className="text-white">VIP 고객:</strong> 전용 주차 공간 제공</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  강남역 인근이라 주차 공간이 제한적일 수 있으므로,
                  대규모 단체 방문 시에는 예약 시 미리 말씀해주시면
                  주차 공간을 확보해드립니다.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  대중교통 이용을 권장하며, 강남역 10번 출구에서 도보 5분 거리로
                  지하철 이용이 가장 편리합니다.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">결제 방법은 어떻게 되나요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  다양한 결제 수단을 지원합니다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>결제 방법:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• <strong className="text-white">현금:</strong> 현금 영수증 발행 가능</li>
                  <li>• <strong className="text-white">신용카드:</strong> 모든 카드사 사용 가능</li>
                  <li>• <strong className="text-white">체크카드:</strong> 사용 가능</li>
                  <li>• <strong className="text-white">계좌이체:</strong> 사전 협의 시 가능</li>
                  <li>• <strong className="text-white">비즈니스 카드:</strong> 법인카드 영수증 발행</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>영수증 발행:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>• 일반 영수증</li>
                  <li>• 현금 영수증 (소득공제용)</li>
                  <li>• 법인카드 영수증 (세금계산서)</li>
                  <li>• 간이 영수증</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  결제 및 영수증 관련 문의사항은 예약 시 또는 방문 시
                  신대표에게 말씀해주시면 상세히 안내해드립니다.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* 1. Price Section - 가격표 */}
      <section id="price" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            투명한 정찰제 가격표
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            달리는토끼 런닝래빗은 <span className="font-bold" style={{ color: '#d4af37' }}>100% 정찰제</span>로 운영됩니다.
            숨겨진 비용이 없으며, 예약 시 정확한 금액을 안내해드립니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* 2인 요금 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <p className="text-3xl font-bold mb-2" style={{ color: '#d4af37' }}>2인</p>
                <p className="text-gray-400">기본 2시간</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">240,000원</p>
                <p className="text-sm text-gray-400">1인당 120,000원</p>
              </div>
              <ul className="mt-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 프리미엄 룸 배정
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 기본 주류 포함
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 안주 세트
                </li>
              </ul>
            </div>

            {/* 3인 요금 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300" style={{ borderColor: '#d4af37' }}>
              <div className="text-center mb-2">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ background: '#d4af37', color: '#000' }}>
                  POPULAR
                </span>
              </div>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold mb-2" style={{ color: '#d4af37' }}>3인</p>
                <p className="text-gray-400">기본 2시간</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">330,000원</p>
                <p className="text-sm text-gray-400">1인당 110,000원</p>
              </div>
              <ul className="mt-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 대형 VIP 룸
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 프리미엄 주류
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 디럭스 안주 세트
                </li>
              </ul>
            </div>

            {/* 4인 이상 요금 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <p className="text-3xl font-bold mb-2" style={{ color: '#d4af37' }}>4인 이상</p>
                <p className="text-gray-400">기본 2시간</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">1인당 100,000원~</p>
                <p className="text-sm text-gray-400">인원에 따라 할인</p>
              </div>
              <ul className="mt-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 초대형 파티 룸
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 단체 할인 적용
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span> 프리미엄 서비스
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#d4af37' }}>시간 추가 요금</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xl font-bold text-white mb-2">30분 연장</p>
                <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>50,000원</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-2">1시간 연장</p>
                <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>90,000원</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-2">올나잇 패키지</p>
                <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>별도 문의</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#d4af37' }}>추가 옵션</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">주류 추가</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>소주/맥주 추가</span>
                    <span className="font-bold text-white">10,000원</span>
                  </li>
                  <li className="flex justify-between">
                    <span>양주 (기본)</span>
                    <span className="font-bold text-white">150,000원</span>
                  </li>
                  <li className="flex justify-between">
                    <span>프리미엄 양주</span>
                    <span className="font-bold text-white">200,000원~</span>
                  </li>
                  <li className="flex justify-between">
                    <span>샴페인</span>
                    <span className="font-bold text-white">250,000원~</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">안주 추가</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>과일 플레이트</span>
                    <span className="font-bold text-white">50,000원</span>
                  </li>
                  <li className="flex justify-between">
                    <span>디저트 세트</span>
                    <span className="font-bold text-white">30,000원</span>
                  </li>
                  <li className="flex justify-between">
                    <span>치킨/피자</span>
                    <span className="font-bold text-white">30,000원</span>
                  </li>
                  <li className="flex justify-between">
                    <span>특별 요리</span>
                    <span className="font-bold text-white">별도 문의</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            모든 가격은 <span className="font-bold text-white">정찰제</span>로 운영되며,
            예약 시 정확한 금액을 안내해드립니다.<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a>로 문의하시면 상세한 견적을 받아보실 수 있습니다.
          </p>
        </div>
      </section>

      {/* 2. Choice System Detail - 초이스 시스템 상세 */}
      <section id="choice-system" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            초이스 시스템 완벽 가이드
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            달리는토끼만의 <span className="font-bold" style={{ color: '#d4af37' }}>프리미엄 초이스 시스템</span>을
            처음 방문하시는 분들도 쉽게 이해하고 편안하게 이용하실 수 있도록 상세히 안내해드립니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>입장 & 안내</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                신대표가 직접 반갑게 맞이하여 예약하신 룸으로 안내해드립니다.
                편안한 소파에 착석하시면 초이스 준비가 시작됩니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>매니저 소개</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                3~5명의 매니저가 순서대로 입장하여 간단한 인사를 나눕니다.
                각 매니저의 스타일과 분위기를 직접 보고 느끼실 수 있습니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>선택 & 결정</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                마음에 드는 매니저의 번호를 신대표에게 말씀하시면 됩니다.
                부담 없이 원하시는 분을 선택하시면 됩니다.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>즐거운 시간</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                선택하신 매니저와 함께 즐거운 시간을 보내시면 됩니다.
                노래, 대화, 게임 등 원하시는 대로 자유롭게 즐기세요.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>초이스 시 알아두면 좋은 팁</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>💡</span> 선택 기준
                </h4>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li>• 외모보다는 <strong className="text-white">성격과 분위기</strong>가 중요합니다</li>
                  <li>• 눈맞춤과 미소로 <strong className="text-white">친근감</strong>을 느껴보세요</li>
                  <li>• 간단한 인사말로 <strong className="text-white">대화 스타일</strong>을 확인하세요</li>
                  <li>• 직감적으로 편안함을 느끼는 분을 선택하세요</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>✨</span> 에티켓 & 매너
                </h4>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li>• 매니저들에게 <strong className="text-white">존중과 예의</strong>를 갖춰주세요</li>
                  <li>• 선택하지 않은 매니저에게도 <strong className="text-white">감사 인사</strong>를 해주세요</li>
                  <li>• 과도한 스킨십은 <strong className="text-white">절대 금지</strong>입니다</li>
                  <li>• 편안한 대화와 즐거운 분위기를 만들어가세요</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>자주 묻는 초이스 질문</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-xl font-bold text-white mb-3">Q. 초이스를 안 해도 되나요?</h4>
                <p className="text-gray-300 leading-relaxed">
                  A. 네, 가능합니다. 초이스 없이 룸에서 편안하게 시간을 보내실 수도 있습니다.
                  하지만 달리는토끼의 <strong className="text-white">프리미엄 서비스</strong>를 경험하시려면 초이스를 권장합니다.
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-xl font-bold text-white mb-3">Q. 마음에 드는 매니저가 없으면?</h4>
                <p className="text-gray-300 leading-relaxed">
                  A. 부담 없이 신대표에게 말씀해주시면 <strong className="text-white">추가 초이스</strong>가 가능합니다.
                  고객님의 만족이 최우선입니다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Q. 초이스 시간은 얼마나 걸리나요?</h4>
                <p className="text-gray-300 leading-relaxed">
                  A. 평균 <strong className="text-white">5~10분</strong> 정도 소요됩니다.
                  천천히 여유롭게 선택하실 수 있으니 부담 갖지 마세요.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            초이스 시스템에 대해 더 궁금하신 점이 있으시면<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a>로 문의해주세요. 신대표가 친절하게 안내해드립니다.
          </p>
        </div>
      </section>

      {/* 3. Customer Reviews - 고객 후기 */}
      <section id="reviews" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            고객 후기
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            실제로 달리는토끼를 이용하신 고객님들의 <span className="font-bold" style={{ color: '#d4af37' }}>솔직한 후기</span>를 확인해보세요.
            평균 만족도 <strong style={{ color: '#d4af37' }}>4.8/5.0</strong> (127명 평가 기준)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl" style={{ color: '#d4af37' }}>★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "처음 가보는 곳이라 긴장했는데 신대표님이 정말 친절하게 안내해주셔서 편안하게 즐겼습니다.
                시설도 깔끔하고 분위기도 좋았어요. 다음에 또 방문하고 싶네요!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#d4af37' }}>
                  <span className="text-black font-bold text-xl">김</span>
                </div>
                <div>
                  <p className="font-bold text-white">김○○님</p>
                  <p className="text-sm text-gray-400">30대 직장인</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl" style={{ color: '#d4af37' }}>★</span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "회사 회식으로 방문했는데 모든 직원들이 만족했습니다.
                가격도 합리적이고 서비스도 최고였어요. 비즈니스 접대용으로도 완벽합니다!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#d4af37' }}>
                  <span className="text-black font-bold text-xl">이</span>
                </div>
                <div>
                  <p className="font-bold text-white">이○○님</p>
                  <p className="text-sm text-gray-400">40대 CEO</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className="text-2xl" style={{ color: '#d4af37' }}>★</span>
                ))}
                <span className="text-2xl text-gray-600">★</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "혼자 방문했는데도 전혀 어색하지 않았어요.
                1인 룸이 따로 있어서 편안하게 즐길 수 있었습니다. 다만 주말에는 예약 필수!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#d4af37' }}>
                  <span className="text-black font-bold text-xl">박</span>
                </div>
                <div>
                  <p className="font-bold text-white">박○○님</p>
                  <p className="text-sm text-gray-400">20대 회사원</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>만족도 통계</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>4.8</p>
                <p className="text-gray-400">평균 평점</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>127</p>
                <p className="text-gray-400">총 리뷰 수</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>92%</p>
                <p className="text-gray-400">재방문율</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>98%</p>
                <p className="text-gray-400">추천 의향</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Precautions - 이용 팁 & 주의사항 */}
      <section id="tips" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            이용 팁 & 주의사항
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            처음 방문하시는 분들을 위한 <span className="font-bold" style={{ color: '#d4af37' }}>실전 가이드</span>입니다.
            이것만 알아도 <strong className="text-white">프로처럼</strong> 즐기실 수 있습니다!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 복장 가이드 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">👔</span> 복장 가이드
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">✅ 권장 복장</h4>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• 스마트 캐주얼 (청바지 + 셔츠)</li>
                    <li>• 정장 (비즈니스 미팅)</li>
                    <li>• 깔끔한 티셔츠 + 슬랙스</li>
                    <li>• 단정한 원피스 (여성)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">❌ 피해야 할 복장</h4>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>• 반바지, 슬리퍼</li>
                    <li>• 민소매, 찢어진 옷</li>
                    <li>• 지나치게 캐주얼한 옷</li>
                    <li>• 운동복, 작업복</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 매너 & 에티켓 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">🤝</span> 매너 & 에티켓
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span><strong className="text-white">존중과 예의:</strong> 매니저와 직원들에게 정중하게 대해주세요</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span><strong className="text-white">적절한 음주:</strong> 과도한 음주는 자제해주세요</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span><strong className="text-white">소음 조절:</strong> 다른 손님에게 방해되지 않도록</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span><strong className="text-white">스킨십 금지:</strong> 과도한 신체 접촉은 절대 금지</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span><strong className="text-white">시간 준수:</strong> 예약 시간을 지켜주세요</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span><strong className="text-white">사진 촬영:</strong> 매니저 동의 없이 촬영 금지</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>💰 예산 절약 꿀팁</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-4xl">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">평일 방문</h4>
                <p className="text-gray-300 leading-relaxed">
                  월~목요일은 주말보다 대기시간이 짧고 편안하게 이용 가능합니다
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-4xl">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">사전 예약</h4>
                <p className="text-gray-300 leading-relaxed">
                  미리 예약하면 대기 없이 바로 입장 가능하며 원하는 시간대 선택 가능
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-4xl">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">단체 할인</h4>
                <p className="text-gray-300 leading-relaxed">
                  4인 이상 방문 시 1인당 요금이 할인되어 더욱 경제적입니다
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>⚠️ 꼭 알아두세요</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong className="text-white">만 19세 미만 출입 금지:</strong> 신분증 확인이 있을 수 있으니 지참해주세요
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong className="text-white">예약 변경/취소:</strong> 최소 3시간 전 연락 부탁드립니다
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong className="text-white">주차 지원:</strong> 일정 금액 이상 이용 시 주차비 지원 (문의 필수)
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>•</span>
                <span>
                  <strong className="text-white">귀중품 관리:</strong> 개인 소지품은 직접 관리 부탁드립니다
                </span>
              </p>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            더 자세한 이용 팁이 궁금하시다면<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a>로 문의해주세요!
          </p>
        </div>
      </section>

      {/* 5. VIP Service - VIP 서비스 안내 */}
      <section id="vip" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            VIP 프리미엄 서비스
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            특별한 날, 특별한 분들을 위한 <span className="font-bold" style={{ color: '#d4af37' }}>프리미엄 VIP 서비스</span>를
            제공합니다. 최상급의 대우와 완벽한 프라이버시를 경험하세요.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* VIP 전용 룸 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">👑</span>
                <h3 className="text-2xl font-bold" style={{ color: '#d4af37' }}>VIP 전용 룸</h3>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>초대형 프라이빗 공간 (최대 10명)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>프리미엄 음향 시스템</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>대형 LED 스크린</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>럭셔리 인테리어</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>독립된 화장실</span>
                </li>
              </ul>
            </div>

            {/* 픽업 서비스 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300" style={{ borderColor: '#d4af37' }}>
              <div className="text-center mb-2">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ background: '#d4af37', color: '#000' }}>
                  PREMIUM
                </span>
              </div>
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">🚗</span>
                <h3 className="text-2xl font-bold" style={{ color: '#d4af37' }}>픽업 서비스</h3>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>강남권 전 지역 픽업</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>고급 세단 차량</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>전문 드라이버</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>사전 예약 필수</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>VIP 고객 무료</span>
                </li>
              </ul>
            </div>

            {/* 비즈니스 접대 패키지 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">💼</span>
                <h3 className="text-2xl font-bold" style={{ color: '#d4af37' }}>접대 패키지</h3>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>프리미엄 주류 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>고급 안주 코스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>전담 매니저 배정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>세금계산서 발행</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>별도 상담 필수</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>VIP 회원 혜택</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">우선 예약</h4>
                <p className="text-gray-300 leading-relaxed">
                  주말과 공휴일에도 <strong className="text-white">우선 예약 가능</strong>하며,
                  원하시는 시간대와 룸을 보장해드립니다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">특별 할인</h4>
                <p className="text-gray-300 leading-relaxed">
                  VIP 회원은 <strong className="text-white">5~10% 추가 할인</strong> 혜택을 받으실 수 있으며,
                  생일 월에는 특별 서비스가 제공됩니다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">포인트 적립</h4>
                <p className="text-gray-300 leading-relaxed">
                  이용 금액의 <strong className="text-white">5%를 포인트로 적립</strong>하여
                  다음 방문 시 현금처럼 사용하실 수 있습니다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">전담 매니저</h4>
                <p className="text-gray-300 leading-relaxed">
                  신대표가 <strong className="text-white">직접 전담하여</strong> 모든 요청사항을
                  신속하게 처리해드립니다.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            VIP 서비스 및 회원 가입 문의<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a> (신대표 직통)
          </p>
        </div>
      </section>

      {/* 6. Group Reservation - 단체 예약 가이드 */}
      <section id="group" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            단체 예약 가이드
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            회사 회식, 동호회 모임, 동창회 등 <span className="font-bold" style={{ color: '#d4af37' }}>단체 예약 시 특별 혜택</span>을 제공합니다.
            최대 30명까지 동시 수용 가능합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 text-center">
              <p className="text-6xl mb-4" style={{ color: '#d4af37' }}>4~6인</p>
              <h3 className="text-2xl font-bold text-white mb-4">소규모 모임</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                편안한 분위기에서 친구들과 즐거운 시간
              </p>
              <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>1인 100,000원~</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 text-center" style={{ borderColor: '#d4af37' }}>
              <p className="text-6xl mb-4" style={{ color: '#d4af37' }}>7~15인</p>
              <h3 className="text-2xl font-bold text-white mb-4">중규모 회식</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                회사 회식, 팀 빌딩에 최적
              </p>
              <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>1인 90,000원~</p>
              <p className="text-sm text-gray-400 mt-2">10% 단체 할인</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 text-center">
              <p className="text-6xl mb-4" style={{ color: '#d4af37' }}>16인+</p>
              <h3 className="text-2xl font-bold text-white mb-4">대규모 행사</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                동창회, 동호회 모임 전용
              </p>
              <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>별도 견적</p>
              <p className="text-sm text-gray-400 mt-2">최대 15% 할인</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>단체 예약 절차</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">전화 문의</h4>
                <p className="text-sm text-gray-400">
                  인원, 날짜, 시간 문의
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">견적 안내</h4>
                <p className="text-sm text-gray-400">
                  정확한 금액 안내
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">예약 확정</h4>
                <p className="text-sm text-gray-400">
                  선금 없이 예약 완료
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">당일 방문</h4>
                <p className="text-sm text-gray-400">
                  예약 시간에 방문
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>단체 예약 시 제공 서비스</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>✓</span>
                <div>
                  <h4 className="font-bold text-white mb-1">룸 연결 가능</h4>
                  <p className="text-sm">대규모 인원도 여러 룸을 연결하여 함께 즐기실 수 있습니다</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>✓</span>
                <div>
                  <h4 className="font-bold text-white mb-1">단체 할인</h4>
                  <p className="text-sm">인원수에 따라 최대 15% 할인 혜택</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>✓</span>
                <div>
                  <h4 className="font-bold text-white mb-1">주류 서비스</h4>
                  <p className="text-sm">대량 주문 시 추가 서비스 제공</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>✓</span>
                <div>
                  <h4 className="font-bold text-white mb-1">세금계산서 발행</h4>
                  <p className="text-sm">법인카드 사용 및 세금계산서 즉시 발행</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            단체 예약 문의 및 상담<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a> (최소 3일 전 예약 권장)
          </p>
        </div>
      </section>

      {/* 7. Area Info - 강남 지역 정보 */}
      <section id="area" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            강남 지역 완벽 가이드
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            달리는토끼 방문 전후로 즐길 수 있는 <span className="font-bold" style={{ color: '#d4af37' }}>강남 핫플레이스</span>를 소개합니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 주변 맛집 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">🍽️</span> 주변 맛집 (도보 5분 이내)
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <h4 className="font-bold text-white mb-1">한식 명가</h4>
                  <p className="text-sm">고급 한정식, 회식 추천</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">이탈리안 레스토랑</h4>
                  <p className="text-sm">데이트 코스로 완벽</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">일식 오마카세</h4>
                  <p className="text-sm">비즈니스 미팅 최적</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">중식당</h4>
                  <p className="text-sm">단체 회식 추천</p>
                </li>
              </ul>
            </div>

            {/* 2차 장소 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">🎉</span> 2차 추천 장소
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <h4 className="font-bold text-white mb-1">루프탑 바</h4>
                  <p className="text-sm">낭만적인 야경 감상</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">클럽</h4>
                  <p className="text-sm">파티 분위기 최고조</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">호프집</h4>
                  <p className="text-sm">가볍게 마무리하기 좋음</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">노래방</h4>
                  <p className="text-sm">계속 노래하고 싶다면</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>추천 코스</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">비즈니스 코스</h4>
                <div className="space-y-2 text-gray-300">
                  <p>1차: 한정식 (2시간)</p>
                  <p style={{ color: '#d4af37' }}>↓</p>
                  <p>2차: <strong className="text-white">달리는토끼</strong> (2시간)</p>
                  <p style={{ color: '#d4af37' }}>↓</p>
                  <p>3차: 루프탑 바 (1시간)</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">친구 모임 코스</h4>
                <div className="space-y-2 text-gray-300">
                  <p>1차: 이탈리안 (1.5시간)</p>
                  <p style={{ color: '#d4af37' }}>↓</p>
                  <p>2차: <strong className="text-white">달리는토끼</strong> (3시간)</p>
                  <p style={{ color: '#d4af37' }}>↓</p>
                  <p>3차: 클럽 (2시간)</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">가벼운 코스</h4>
                <div className="space-y-2 text-gray-300">
                  <p>1차: 가벼운 식사 (1시간)</p>
                  <p style={{ color: '#d4af37' }}>↓</p>
                  <p>2차: <strong className="text-white">달리는토끼</strong> (2시간)</p>
                  <p style={{ color: '#d4af37' }}>↓</p>
                  <p>택시로 귀가</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Events & Promotions - 이벤트 & 프로모션 */}
      <section id="events" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            이벤트 & 특별 혜택
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            달리는토끼만의 <span className="font-bold" style={{ color: '#d4af37' }}>특별한 이벤트와 혜택</span>으로
            더욱 즐거운 시간을 보내세요!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* 생일 이벤트 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="text-6xl mb-4 block text-center">🎂</span>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d4af37' }}>생일 특별 이벤트</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>생일 케이크 무료 제공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>샴페인 1병 서비스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>생일 노래 이벤트</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>사진 촬영 서비스</span>
                </li>
              </ul>
              <p className="text-center mt-6 text-sm text-gray-400">
                *신분증 지참 필수
              </p>
            </div>

            {/* 기념일 패키지 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300" style={{ borderColor: '#d4af37' }}>
              <span className="text-6xl mb-4 block text-center">💝</span>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d4af37' }}>기념일 패키지</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>로즈 꽃다발</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>프리미엄 와인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>특별 안주 세트</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>VIP 룸 업그레이드</span>
                </li>
              </ul>
              <p className="text-center mt-6 text-sm text-gray-400">
                *3일 전 예약 필수
              </p>
            </div>

            {/* 단골 혜택 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="text-6xl mb-4 block text-center">⭐</span>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d4af37' }}>단골 고객 혜택</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>5회 방문 시 10% 할인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>10회 방문 시 15% 할인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>포인트 적립 (5%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>✓</span>
                  <span>우선 예약 가능</span>
                </li>
              </ul>
              <p className="text-center mt-6 text-sm text-gray-400">
                *자동 적용
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#d4af37' }}>이벤트 문의</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              생일, 기념일, 특별한 날을 위한 맞춤 이벤트를 준비해드립니다.<br />
              원하시는 이벤트가 있다면 신대표에게 문의해주세요!
            </p>
            <a
              href="tel:010-2303-3778"
              className="inline-block px-12 py-5 text-xl font-bold rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
                color: '#000000'
              }}
            >
              📞 이벤트 상담하기
            </a>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            오시는 길
          </h2>

          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            강남역 10번 출구에서 도보 5분, 찾기 쉽고 접근성 좋은 최적의 위치에 자리하고 있습니다.
          </p>

          {/* 위치 이미지 갤러리 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/간판1.jpg"
                  alt="강남 달리는토끼 외관 야경"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">찾기 쉬운 위치</h4>
                  <p className="text-gray-300">밤에도 밝게 빛나는 간판으로 쉽게 찾으실 수 있습니다</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/입구.jpg"
                  alt="강남 달리는토끼 입구"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">프리미엄 입구</h4>
                  <p className="text-gray-300">고급스러운 입구에서 첫 경험이 시작됩니다</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Address */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>
                주소 및 교통편
              </h3>
              <p className="text-white text-xl mb-6 font-bold">서울시 강남구 역삼동 604-11번지</p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-semibold text-white mb-2">🚇 지하철 이용</p>
                  <div className="ml-4 space-y-1 text-gray-300">
                    <p>• 2호선 강남역 10번 출구 (도보 5분)</p>
                    <p>• 신분당선 강남역 연결 (도보 6분)</p>
                    <p>• 출구에서 직진 후 두 번째 골목 우회전</p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-white mb-2">🚌 버스 이용</p>
                  <div className="ml-4 space-y-1 text-gray-300">
                    <p>• 강남역 정류장 하차 (모든 노선)</p>
                    <p>• 간선: 146, 740, 341 외 다수</p>
                    <p>• 지선: 3414, 4319 외 다수</p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-white mb-2">🚗 자가용 이용</p>
                  <div className="ml-4 space-y-1 text-gray-300">
                    <p>• 네비게이션: 역삼동 604-11 검색</p>
                    <p>• 주차 발렛 서비스 제공</p>
                    <p>• 제휴 주차장 2시간 무료</p>
                  </div>
                </div>
              </div>

              <p className="text-sm" style={{ color: '#d4af37' }}>
                *정확한 위치와 입구는 예약 시 신대표가 상세히 안내해드립니다
              </p>
            </div>

            {/* VIP Transport */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>
                VIP 픽업 서비스
              </h3>
              <p className="text-white text-xl leading-relaxed mb-4">
                강남권 내 <span style={{ color: '#d4af37' }}>VIP 고객</span>을 위해<br />
                <span style={{ color: '#d4af37' }}>최고급 차량</span> 픽업을 지원합니다.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>🚙 강남구 전역 픽업 가능</p>
                <p>⏰ 예약 시 사전 신청 필수</p>
                <p>👔 비즈니스 고객 우선 지원</p>
              </div>
            </div>
          </div>

          {/* Map Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://kko.kakao.com/r8Uj-nDBPH"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
            >
              🗺️ 카카오맵
            </a>
            <a
              href="https://naver.me/G9pF7F0c"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
            >
              🗺️ 네이버 지도
            </a>
            <a
              href="https://tmap.life/8a48eb55"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
            >
              🗺️ TMAP
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 bg-gradient-to-t from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-8" />

          <h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            style={{
              color: '#d4af37',
              textShadow: '0 0 30px rgba(212, 175, 55, 0.5)',
            }}
          >
            문의하기
          </h2>

          <h3 className="text-2xl md:text-3xl mb-4 text-white text-center">
            <span
              style={{
                color: '#d4af37',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
              }}
            >
              신대표
            </span>
            에게<br />무엇이든 물어보세요.
          </h3>

          <div className="text-xl text-gray-300 mb-12 text-center">
            더 짜릿한 밤, 달토가 실현해드립니다.
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-black/60 p-8 rounded-3xl border-2 border-[#d4af37]/30">
              <div className="space-y-6">
                <div
                  className="text-2xl font-bold mb-6 text-center"
                  style={{
                    color: '#d4af37',
                    textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
                  }}
                >
                  달토 신대표
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">📞 전화번호</div>
                  <a
                    href="tel:+82-10-2303-3778"
                    className="text-white text-2xl hover:text-[#d4af37] transition-colors inline-block"
                  >
                    010-2303-3778
                  </a>
                  <p className="text-gray-400 text-sm mt-2">24시간 상담 가능 / 예약 우선</p>
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">✈️ 텔레그램</div>
                  <a
                    href="https://t.me/hscompanyshs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#d4af37] transition-colors inline-block"
                  >
                    @hscompanyshs
                  </a>
                  <p className="text-gray-400 text-sm mt-2">빠른 답변 보장</p>
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">💬 카카오톡</div>
                  <a
                    href="https://open.kakao.com/o/tlsgustlra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#d4af37] transition-colors inline-block"
                  >
                    tlsgustlra
                  </a>
                  <p className="text-gray-400 text-sm mt-2">가장 편한 상담 방법</p>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/20">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-bold" style={{ color: '#d4af37' }}>신대표</span>가 직접 응대합니다.<br/>
                    어떤 문의든 편하게 연락주세요.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <img
                src="/images/agassi.jpg"
                alt="프리미엄 서비스 이미지"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                draggable={false}
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-2xl font-bold text-white mb-2">최상급 서비스</p>
                <p className="text-gray-300">프리미엄 경험을 약속드립니다</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+82-10-2303-3778"
              className="inline-block px-12 py-4 text-lg font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
                color: '#000000',
              }}
            >
              📞 바로 예약하기
            </a>
            <p className="text-gray-400 mt-4 text-sm">클릭 한 번으로 신대표와 직접 연결됩니다</p>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Call Button - 고급스러운 디자인 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[1000] mobile-call-button">
        <div className="px-4 pb-4 pt-6 bg-gradient-to-t from-black via-black/98 to-transparent">
          <a
            href="tel:01023033778"
            className="mobile-gold-button flex items-center justify-center gap-3 w-full h-16 rounded-2xl font-bold text-lg text-black transition-all duration-300 active:scale-[0.98] relative overflow-hidden group"
          >
            <svg
              className="w-7 h-7 relative z-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="relative z-10">
              지금 바로 예약하기
            </span>
          </a>

          <p className="text-center text-xs mt-2 text-[#d4af37]/70 font-medium">
            신대표와 직접 연결됩니다
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-black border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 강남 달토. All rights reserved.</p>
        </div>
      </footer>
    </main>
    </>
  )
}
