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
        <title>강남 가?�오케 ?�벽 가?�드 - ?�리?�토???�닝?�빗 10???�통 ?�리미엄 ?�이?�블�?/title>
        <meta name="title" content="강남 가?�오케 ?�벽 가?�드 - ?�리?�토???�닝?�빗 10???�통" />
        <meta name="description" content="강남??10�?출구 ?�보 5�? 10???�통???�리미엄 ?�이?�블�?가?�오케. ?�명???�찰??가�? 1??방문 가?? 최상�??�설�??�벽???�라?�버??보장. ?��???24?�간 직접 ?��?, 고객 만족??1?? 비즈?�스 ?��?부??친구 모임까�? 모든 ?�황???�벽 ?�?? 지�?바로 ?�약?�세??" />
        <meta name="keywords" content="강남 가?�오케, ?�리?�토?? ?�닝?�빗, ?�이?�블�? 강남??가?�오케, 1??방문, 비즈?�스 ?��?, 강남 ?�흥, ?�찰?? ?�리미엄 가?�오케, ?��??? 초이???�스?? VIP �? ?�체 ?�약, 강남 ?�플" />
        <link rel="canonical" href="https://running-rabbit-gangnam.com" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Korean" />
        <meta name="author" content="?�리?�토???�닝?�빗" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://running-rabbit-gangnam.com" />
        <meta property="og:title" content="강남 가?�오케 ?�벽 가?�드 - ?�리?�토???�닝?�빗 10???�통" />
        <meta property="og:description" content="강남??10�?출구 ?�보 5�? 10???�통 ?�리미엄 ?�이?�블�? ?�명???�찰?? 1??방문 가?? 최상�??�설. ?��???24?�간 직접 ?��?." />
        <meta property="og:image" content="https://running-rabbit-gangnam.com/images/title.webp" />
        <meta property="og:site_name" content="?�리?�토???�닝?�빗" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://running-rabbit-gangnam.com" />
        <meta property="twitter:title" content="강남 가?�오케 ?�벽 가?�드 - ?�리?�토???�닝?�빗" />
        <meta property="twitter:description" content="강남???�보 5�? 10???�통 ?�리미엄 ?�이?�블�? 1??방문 가?? ?�찰??가�? 24?�간 ?��?" />
        <meta property="twitter:image" content="https://running-rabbit-gangnam.com/images/title.webp" />

        {/* Additional Meta */}
        <meta name="geo.region" content="KR-11" />
        <meta name="geo.placename" content="강남�? ?�울" />
        <meta name="geo.position" content="37.4979;127.0276" />

        {/* Schema.org Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "?�리?�토???�닝?�빗",
              "image": "https://running-rabbit-gangnam.com/images/logo2-removebg-preview.png",
              "description": "강남??10�?출구 ?�보 5�? 10???�통???�리미엄 ?�이?�블�?가?�오케. ?�명???�찰??가�? 최상�??�설, ?�벽???�라?�버??보장",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KR",
                "addressRegion": "?�울?�별??,
                "addressLocality": "강남�?,
                "streetAddress": "강남??10�?출구 ?�보 5�?
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.4979",
                "longitude": "127.0276"
              },
              "telephone": "+82-10-2303-3778",
              "priceRange": "?�₩??,
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
                  "name": "?�약?� ?�떻�??�나??",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "?�약?� ?�화(010-2303-3778)�?가?�합?�다. ?��??��? 24?�간 직접 ?��??�며, 방문 ?�짜, ?�간, ?�원 ?��? 말�??�주?�면 즉시 ?�약 ?�정?�니?? ?�일 ?�약??가?�하지�?주말�?공휴?�에??미리 ?�약?�시??것을 권장?�니??"
                  }
                },
                {
                  "@type": "Question",
                  "name": "1??방문??가?�한가??",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "?? 1??방문 ?�영?�니?? ?�라?�빗??1??룸도 준비되???�으�? 부???�이 ?�안?�게 ?�용?�실 ???�습?�다. ?��??��? 직접 친절?�게 ?�내?�드립니??"
                  }
                },
                {
                  "@type": "Question",
                  "name": "초이???�스?��? ?�떻�??�나??",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "?�장 ???�이?�룸?�서 ?�러 명의 매니?�가 ?�개?�며, 고객??직접 ?�택?�는 ?�스?�입?�다. 부???�이 마음???�는 매니?��??�택?�시�??�니??"
                  }
                },
                {
                  "@type": "Question",
                  "name": "주차??가?�한가??",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "?? ?�용 주차?�이 ?�비?�어 ?�습?�다. 주차 공간??부족할 경우 근처 ?�휴 주차?�을 ?�용?�실 ???�으�? 주차비는 ?�정 금액 ?�상 ?�용 ??지?�됩?�다."
                  }
                },
                {
                  "@type": "Question",
                  "name": "?�레??코드가 ?�나??",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "격식??갖춘 복장??권장?��?�? ?�무 캐주?�하지 ?�으�??�니?? 반바지, ?�리?? 민소매는 ?�해주시�? ?�마??캐주???�상??복장??권장?�니??"
                  }
                },
                {
                  "@type": "Question",
                  "name": "?�용 ?�금?� ?�마?��???",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "기본 2?�간 기�?, 2??24만원부???�작?�니?? ?�원�??�간???�라 ?�금???�라지�? ?�찰?�로 ?�명?�게 ?�영?�니?? ?�세??가격�? ?�화 문의 ???�내?�드립니??"
                  }
                },
                {
                  "@type": "Question",
                  "name": "결제 방법?� ?�떻�??�나??",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "?�금 �?모든 카드 결제가 가?�합?�다. 법인카드???�용 가?�하�? ?�금계산??발행??가?�합?�다."
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
                  "name": "??,
                  "item": "https://running-rabbit-gangnam.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "강남 가?�오케",
                  "item": "https://running-rabbit-gangnam.com#about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "초이???�스??,
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
            <span style={{ color: '#d4af37' }}>최종 ?�데?�트:</span> {currentDate}
          </p>
        </div>

        {/* Hero Section */}
      <section className="relative py-32 md:py-48 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/title.webp"
            alt="강남 ?�닝?�빗 배경"
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
            강남 최고???�플?�이??
          </h1>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 text-white">
            ?�닝?�빗
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl leading-relaxed">
            강남 최고�??�이?�블�?가?�오케, ?�리미엄 ?�비?��? ??��리한 공간?�서<br />
            ?�별???�간??경험?�세??
          </p>

          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-4xl leading-relaxed">
            강남??10�?출구 ?�보 5�?거리???�치??<span className="font-bold" style={{ color: '#d4af37' }}>?�리?�토???�닝?�빗</span>?�
            10???�통??강남 ?�???�이?�블�?가?�오케?�니??
            <a href="#price" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>?�명???�찰??가�?/a>, 최상�??�설, ?�벽???�라?�버??보장?�로
            비즈?�스 ?��?부??친구 모임, 1??방문까�? 모든 ?�황???�벽?�게 ?�?�합?�다.
            ?��??��? 24?�간 직접 ?��??�며 <a href="#reviews" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>고객 만족??1??/a>�?기록?�고 ?�습?�다.
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
              ?�� 바로 ?�약?�기
            </a>
            <a
              href="#about"
              className="inline-block px-12 py-5 text-lg md:text-xl font-bold rounded-full border-2 transition-all duration-300 hover:scale-110 text-white hover:bg-white/10"
              style={{
                borderColor: '#d4af37',
              }}
            >
              ???�아보기 ??
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            강남 ?�리?�토???�개
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/logo2-removebg-preview.png"
                  alt="강남 ?�리?�토??로고"
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                <span className="font-bold" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>강남 ?�리?�토???�닝?�빗</span>?�
                2015?��???강남 ??��?�에??10?�간 ?�영?�온 강남 ?�???�이?�블�?가?�오케?�니??
                최고�??�설�??�리미엄 ?�비?�로 ?�간 5,000?� ?�상??고객?�들??모시�??�으�?
                고객 만족???��??�서 지?�적?�로 1?��? 기록?�고 ?�습?�다.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                강남??10�?출구?�서 ?�보 5�?거리, ??��??604-11번�????�치??최고???�근?�을 ?�랑?�며,
                강남??중심?�서 가???�련?�고 고급?�러??공간???�공?�니??
                ?�벽???�라?�버??보장�?최상???�비?�로 비즈?�스 ?��?, ?�식, 친구 모임, 1??방문 ??
                모든 목적??부?�하???�별???�간???�사?�니??
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                10???�상??경험??보유???�문 ?�태?�들??고객 ??�???분께 맞춤???�비?��? ?�공?�며,
                <a href="#choice-system" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>?�명???�찰??가�??�스??/a>?�로 ?��? 비용 ?�이 ?�심?�고 ?�용?�실 ???�습?�다.
                ?��??��? 직접 24?�간 ?��??�며 ?�약부???�용까�? 모든 과정???�심?�게 관리합?�다.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                최신 ?�향 ?�스?�과 ?�리미엄 ?�테리어�?꾸며�?<a href="#rooms" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>?�양??�?/a>??갖추�??�으�?
                2???�규�?모임부??<a href="#group" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>20???�상 ?�규모 ?�체</a>까�? ?�벽?�게 ?�??가?�합?�다.
                주차 발렛 ?�비?��? <a href="#vip" className="transition-all duration-300" style={{ color: '#d4af37', fontWeight: 'bold' }}>VIP 고객 ?�용 ?�업 ?�비??/a>???�공?�여
                ?�안??방문??보장?�니??
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-400">
                강남 ?�이?�블�?가?�오케 중에?�도 가???�리?�인 가격�??� 최상???�비???�질�?
                ?�방문율 73%�?기록?�고 ?�으�? 많�? 고객?�들께서
                지??추천???�해 방문?�주�?계십?�다.
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
                  ?�� ?�약 문의
                </a>
                <a
                  href="#rooms"
                  className="inline-block px-10 py-4 text-lg font-bold rounded-xl border-2 transition-all duration-300 hover:scale-105 text-white hover:bg-white/10"
                  style={{
                    borderColor: '#d4af37',
                  }}
                >
                  �??�러보기
                </a>
              </div>
            </div>
          </div>

          {/* 추�? ?�보 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500">
              <div className="text-4xl mb-4">�?/div>
              <h4 className="text-xl font-bold mb-3 text-white">10???�통</h4>
              <p className="text-gray-400">
                강남?�서 10?�간 ?�아???�뢰?� 명성?�로 최고???�비?��? ?�공?�니??
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500">
              <div className="text-4xl mb-4">?��</div>
              <h4 className="text-xl font-bold mb-3 text-white">강남 1??/h4>
              <p className="text-gray-400">
                고객 만족??1?��? 기록??검증된 ?�리미엄 ?�비??
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500">
              <div className="text-4xl mb-4">?��</div>
              <h4 className="text-xl font-bold mb-3 text-white">VIP ?�??/h4>
              <p className="text-gray-400">
                모든 고객??VIP처럼 모시???�별???�비??
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
            ?��??�는 ?�릅?�다
          </h2>

          <h3 className="text-2xl md:text-3xl text-center text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            ?�순???�비?��? ?�어, 진심 ?�린 관리�? 배려�?br />
            고객 ??�???분을 ?�별?�게 모십?�다.
          </h3>

          <p className="text-lg text-center text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?��??�는 10?�간 강남 ?�흥?�계?�서 ?�아???�하?��? ?�뢰�?바탕?�로
            고객?�들�?최상??경험???�공?�기 ?�해 ?�임?�이 ?�력?�니??
            24?�간 직접 ?��??�며 ?�약부???�실까�? 모든 과정??책임지�?관리합?�다.
          </p>

          {/* ?�단 ?��?지 배너 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/img-01.webp"
                  alt="??���??�테리어"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">?�리미엄 공간</h4>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/img-02.webp"
                  alt="?�벽??분위�?
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">?�별??경험</h4>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/�?.webp"
                  alt="최상�??�비??
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">최상�??�비??/h4>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>01</div>
              <h4 className="text-2xl font-bold mb-4 text-white">?�명???�찰??가�?/h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                ?��? 비용 ?�이 명확??가�??�책?�로 ?�뢰�??�립?�다.
                강남 ?�이?�블�?�?가???�리?�인 주�??� ?�찰???�영?�로 ?�심?�고 ?�용?�실 ???�습?�다.
              </p>
              <p className="text-gray-400 leading-relaxed">
                ?�약 ???�원�??�용 ?�간???�른 ?�확??견적???�공?�며,
                추�? 비용 발생 ?�에???�전???�내?�드립니??
                ?��??��? 직접 가�??�담??진행?�여 ?�산??맞는 최적???�랜???�안?�드립니??
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>02</div>
              <h4 className="text-2xl font-bold mb-4 text-white">?�리미엄 ?�리??/h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                최상�??�설�??�비?�로 강남 최고???�격???�사?�니??
                고급 ?�리석 ?�테리어, 최신 ?�향 ?�스?? ?�리미엄 조명 ??
                모든 부분에??최고�??�양??갖추�??�습?�다.
              </p>
              <p className="text-gray-400 leading-relaxed">
                ?�심??배려?� ?�벽???�라?�버?��? 보장?�며,
                VIP 고객???�한 ?�별??공간�??�용 ?�비?��? ?�공?�니??
                ?�기?�인 ?�설 관리�? �?�� ?��?�??�제??쾌적???�경??보장?�니??
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>03</div>
              <h4 className="text-2xl font-bold mb-4 text-white">맞춤???�비??/h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                고객 ??�???분의 취향�??�즈�??�악?�여
                ?�벽?�게 맞춤?�된 ?�비?��? ?�공?�니??
                초이???�스?��???주류 ?�택, 분위�?조성까�? 모든 부분에??
                개인�?맞춤 ?�비?��? 진행?�니??
              </p>
              <p className="text-gray-400 leading-relaxed">
                비즈?�스 ?��?, ?�식, 친구 모임, 1??방문 ??
                방문 목적??맞는 최적???�루?�을 ?�안?�며,
                ?�별??기념?�이???�벤?��? ?�한 ?�프?�이�?준비도 가?�합?�다.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="text-6xl mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>04</div>
              <h4 className="text-2xl font-bold mb-4 text-white">?��???24?�간 직접 ?��?</h4>
              <p className="text-gray-300 leading-relaxed mb-3">
                ?��??��? 직접 24?�간 고객 ?��?�??�며,
                ?�화, 카카?�톡, ?�레그램???�해 ?�제?��? ?�하�?문의?�고 ?�약?�실 ???�습?�다.
                10??경력???�하?�로 최적???�비?��? ?�안?�드립니??
              </p>
              <p className="text-gray-400 leading-relaxed">
                ?�일 긴급 ?�약?�나 ?�별 ?�청?�항???�속?�게 처리?�드리며,
                ?�약 변경이??취소???�연?�게 ?�?�합?�다.
                방문 ?�에??지?�적???�후 관리로 ?�방문을 ?��??�립?�다.
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
            ?�런 ?�간??br />
            <span style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>'?�토 & ?�닝?�빗'</span>�??�께?�세??
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/고객?��?.webp"
                  alt="비즈?�스 미팅 �??�식"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">비즈?�스 미팅 �??�식</h4>
                  <p className="text-gray-300">중요??거래처�???만남, ?� ?�식 ???�격 ?�는 ?�리�??�하????/p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/친구?�과?�께.webp"
                  alt="친구 모임 �??�창??
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">친구 모임 �??�창??/h4>
                  <p className="text-gray-300">?�랜만에 만나??친구?�과 ?�별??추억??만들�??�을 ??/p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/?�외게스??jpg"
                  alt="?�별??기념??
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">?�별??기념??/h4>
                  <p className="text-gray-300">?�일, ?�진, 계약 ?�사 ???��? ?�는 ?�을 축하?�고 ?�을 ??/p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/?�자방문?�는?�님.webp"
                  alt="?�상 ?�트?�스 ?�소"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl md:text-3xl font-bold mb-2 text-white">?�상 ?�트?�스 ?�소</h4>
                  <p className="text-gray-300">바쁜 ?�상?�서 벗어???�안???�식???�요????/p>
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
            �??�개
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Room 1 - ?�구 계단 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/계단1.webp"
                  alt="?�구 계단"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  ?�구 계단
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 ?�토 ?�구 계단?� 처음 방문?�는 ?�간부??고급?�러??감각???�낄 ???�는 공간?�니??
                  골드???�리석 벽면�??�?�?�게 빛나??구형 조명???�우?�져
                  ?�련????���?무드�??�성?�며, 브랜?�의 ?�체?�을 ?�각?�으�??�달?�니??
                  <br /><br />
                  계단 ?�단?�는 ?�토???�그?�처 문구
                  <br /><br />
                  "I can't help falling in love with a running rabbit."
                  ???�리?? 방문객에�?강렬???�상�??�께 브랜???�토리�? 각인?�킵?�다.
                </p>
              </div>
            </div>

            {/* Room 2 - 복도 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/복도1.webp"
                  alt="복도"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  복도
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 ?�토??복도??깔끔???�리석 ?�테리어?� ?�?�??조명?�로
                  고급?�러?�면?�도 ?�안??분위기�? ?�아?�니??
                  ?�로 ?�야기�? ?�누�??�동?�는 ?�람?�의 ?�연?�러??모습??
                  ?�토??친근?�면?�도 ?�격 ?�는 ?��?지�??�성?�니??
                  <br /><br />
                  ?�고 ?�돈???�선?� �??�동 ?�에??쾌적?�을 ?��??�며,
                  모든 공간??고급 ?�운지처럼 ?�계?�어 ?�련??감각???�낄 ???�습?�다.
                </p>
              </div>
            </div>

            {/* Room 3 - ?�구 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/�?.webp"
                  alt="?�구"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  ?�구
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 ?�토???�구??밝�? 조명�??�련??간판 ?�자?�으�?
                  ?�심 ???�렌?�한 감성???�벽?�게 ?�아?�니??
                  'THE RUNNING RABBIT' 로고가 빛나???�벽 ?�에??
                  방문객들??모여?�는 ?�기�??�면???�쳐지�?
                  ?�토???�기�?그�?�?보여줍니??
                  <br /><br />
                  ?��?�??�어지???�유�?구조?� ?�뜻??조명?�
                  고급?�러???�운지??첫인?�을 ?�사?�고,
                  ?�구?�서부???�토만의 ?�리미엄 분위기�? ?�낄 ???�습?�다.
                </p>
              </div>
            </div>

            {/* Room 4 - 카운??*/}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/카운??jpg"
                  alt="카운??
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  카운??
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  강남 ?�토???�내?�스?�는 고급?�러???�리석 ?�테리어?�
                  ?�?�??조명?�로 방문객을 ?�뜻?�게 맞이?�니??
                  ?�이?�톤??카운?��? ?�아??조형�? ?�라???�코가 조화�??�루�?
                  ?�리미엄 ?�운지?�운 ?�련??분위기�? ?�성?�니??
                  <br /><br />
                  친절???��??� ?�돈??공간?� ?�토???�비???�격??보여주며,
                  고객???�안?�게 ?�용?????�도�??�심??배려가 ?�껴집니??
                </p>
              </div>
            </div>

            {/* Room 5 - �?1 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/�?.webp"
                  alt="�?1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  �?1
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  ?�리미엄 ?�테리어?� 고급 ?�향 ?�스?�이 ?�비??VIP 룸입?�다.
                  ?�안???�파?� ?�?�??조명???�우?�져 최상??분위기�? ?�공?�니??
                </p>
              </div>
            </div>

            {/* Room 6 - �?3 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/�?.webp"
                  alt="�?3"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  �?3
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  모던?�고 ?�련???�자?�의 룸으�? ?�규�?모임??최적?�되???�습?�다.
                  ?�라?�빗??공간?�서 ?�안???�간??보내?????�습?�다.
                </p>
              </div>
            </div>

            {/* Room 7 - �?4 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/�?.webp"
                  alt="�?4"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  �?4
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  ?��? 공간�?고급 ?�향 ?�스?�을 갖춘 ?�티룸입?�다.
                  ?�규모 모임?�나 ?�별???�사??최적?�된 ?�리미엄 공간?�니??
                </p>
              </div>
            </div>

            {/* Room 8 - �?5 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/�?.webp"
                  alt="�?5"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  �?5
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  ?�?�??조명�?고급?�러???�테리어가 ?�보?�는 ??���?룸입?�다.
                  중요??비즈?�스 미팅?�나 ?��????�합??공간?�니??
                </p>
              </div>
            </div>

            {/* Room 9 - �?6 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/�?.webp"
                  alt="�?6"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  �?6
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  ?�라?�빗??분위기�? 강조??VIP ?�용 룸입?�다.
                  최상�??�비?��? ?�벽???�라?�버?��? ?�하?�는 분께 추천?�니??
                </p>
              </div>
            </div>

            {/* Room 10 - �?7 */}
            <div className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-500 hover:scale-105">
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <img
                  src="/images/�?.webp"
                  alt="�?7"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  �?7
                </h3>
                <p className="text-sm font-semibold mb-2" style={{ color: '#d4af37' }}>?�징</p>
                <p className="text-gray-300 leading-relaxed">
                  ?�렌?�한 감각�??�안?�이 공존?�는 모던 룸입?�다.
                  친구?�과???�안??모임?�나 캐주?�한 분위기�? ?�하?????�벽???�택?�니??
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
            ?�용방법
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-black" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  ?�토?�게 ?�약/문의
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8 mb-4">
                  <h4 className="text-xl font-bold mb-6" style={{ color: '#d4af37', textShadow: '0 0 30px rgba(212, 175, 55, 0.5)' }}>
                    ?�토 ?��???
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">?�� ?�화번호</p>
                      <a href="tel:010-2303-3778" className="text-white hover:text-[#d4af37] transition-colors font-bold text-lg block">
                        010-2303-3778
                      </a>
                      <p className="text-gray-500 text-sm mt-1">24?�간 ?�담 가??/p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">?�️ ?�레그램</p>
                      <a href="https://t.me/hscompanyshs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors font-bold block">
                        @hscompanyshs
                      </a>
                      <p className="text-gray-500 text-sm mt-1">빠른 ?��? 보장</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">?�� 카카?�톡</p>
                      <a href="https://open.kakao.com/o/tlsgustlra" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#d4af37] transition-colors font-bold block">
                        tlsgustlra
                      </a>
                      <p className="text-gray-500 text-sm mt-1">가???�한 방법</p>
                    </div>
                  </div>
                </div>
                <a
                  href="tel:010-2303-3778"
                  className="inline-block py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
                >
                  바로 ?�약?�기
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
                  가�?방문
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8 mb-4">
                  <p className="text-xl font-semibold mb-3" style={{ color: '#d4af37' }}>?�� 주소</p>
                  <p className="text-white mb-4 text-lg font-semibold">?�울??강남�???��??604-11번�?</p>
                  <div className="space-y-2 text-gray-300 mb-6">
                    <p>?�� 강남??10�?출구?�서 ?�보 5�?/p>
                    <p>?�� 주차 발렛 ?�비???�공</p>
                    <p>?�� ?�업?�간: ?�??6??~ ?�벽 5??/p>
                  </div>
                  <a
                    href="#directions"
                    className="inline-block py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
                  >
                    ?�세 길찾�?
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
                  초이???�??
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    매력?�인 ?�성 ?�트?�들과의 만남???�작?�니??
                    ?�안??분위기에???�유�?�� ?�?��? ?�누?�며 마음???�는 ?�트?��? ?�택?�실 ???�습?�다.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-black/30 rounded-lg">
                      <p className="font-semibold mb-2" style={{ color: '#d4af37' }}>??부???�는 분위�?/p>
                      <p className="text-gray-400 text-sm">?�연?�럽�??�안??초이??진행</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg">
                      <p className="font-semibold mb-2" style={{ color: '#d4af37' }}>?�� ?��???직접 매칭</p>
                      <p className="text-gray-400 text-sm">최적???�트??추천</p>
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
                  즐거???�간 보내�?
                </h3>
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-8">
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    ?�라?�빗??공간?�서 ?�악�??�께 ?�별???�간??즐기?�요.
                    ?�리미엄 ?�비?��? 고급 ?�테리어가 ?�우?�진 최상??경험???�공?�니??
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-black/30 rounded-lg text-center">
                      <p className="text-3xl mb-2">?��</p>
                      <p className="font-semibold mb-1" style={{ color: '#d4af37' }}>최신 ?�향</p>
                      <p className="text-gray-400 text-sm">?�리미엄 ?�운??/p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg text-center">
                      <p className="text-3xl mb-2">?��</p>
                      <p className="font-semibold mb-1" style={{ color: '#d4af37' }}>무드 조명</p>
                      <p className="text-gray-400 text-sm">?�벽??분위�?/p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg text-center">
                      <p className="text-3xl mb-2">?��</p>
                      <p className="font-semibold mb-1" style={{ color: '#d4af37' }}>?�리미엄 주류</p>
                      <p className="text-gray-400 text-sm">?�양??메뉴</p>
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
            ?�주 묻는 질문 (FAQ)
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">?�용 ?�금?� ?�마?��???</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">??/span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="font-bold" style={{ color: '#d4af37' }}>?�토 / ?�리?�토???�닝?�빗</span>?� 강남 ?�이?�블�?중에?�도 최�? ?��????�리??주�??� ?�명???�찰?�로 ?�영?�니??
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>기본 ?�금 구조:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>??2??기�?: 2?�간 24만원~ (1?�당 12만원)</li>
                  <li>??3??기�?: 2?�간 33만원~ (1?�당 11만원)</li>
                  <li>??4???�상: ?�원�??�인 ?�용</li>
                  <li>??주류 �??�주 ?�함</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  ?�약 ???�확???�원�??�용 ?�간??말�??�주?�면
                  ?��??��? 직접 ?�명??견적???�내?�드립니??
                  ?��? 비용?�나 추�? ?�금 ?�이 ?�심?�고 ?�용?�실 ???�습?�다.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  ?�별 ?�벤?�나 ?�체 ?�약 ??추�? ?�인 ?�택???�공?��?�?
                  문의 ???�세???�담??받아보시�?바랍?�다.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">?�자 방문?�도 괜찮?�요?</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">??/span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>?? ?��? 문제?�습?�다!</strong> ?�제�??�체 방문 고객????30%가 1??방문?�며,
                  많�? 분들???�자 ?�안?�게 ?�간??보내�?계십?�다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  1???�용 룸과 ?�규�?룸이 별도�?준비되???�어,
                  처음 방문?�시??분들??부???�이 ?�용?�실 ???�습?�다.
                  ?�련??매니?�분들???�안??분위기�? 만들?�드리며,
                  ?�?��? ?�비?�로 즐거???�간??보장?�니??
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>1??방문 ?�점:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>??개인 맞춤???�비???�공</li>
                  <li>??부???�는 ?�안??분위�?/li>
                  <li>???�리?�인 1???�금??/li>
                  <li>???�방문율 ?��? ?�골 고객 ?�수</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  ?�약 ??1??방문?�라�?말�??�주?�면
                  ?��??��? 최적??룸과 ?�비?��? ?�내?�드립니??
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">?�킨??��???�치 ?�위???�디까�? 가?�한가??</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">??/span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <span className="font-bold" style={{ color: '#d4af37' }}>?�토 / ?�닝?�빗</span>?� 관�?법령???�라 ?�식 ?��???1�??�흥주점?�로 ?�영?�니??
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>?�법???�비??범위:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>???�래�??�용 �??�주 ?�비??/li>
                  <li>???�??�??��? ?�비??/li>
                  <li>???�반?�인 ?�이?�블�??��????�킨??/li>
                  <li>??건전???�터?�인먼트 ?�비??/li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong className="text-red-400">?�격??금�??�는 ?�항:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>???�매�?�??�매�??�선 ?�위</li>
                  <li>??불법?�인 ?�체 ?�촉</li>
                  <li>??기�? 법령 ?�반 ?�위</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  모든 ?�비?�는 ?�법?�이�?건전??범위 ?�에?�만 ?�루?��?�?
                  ?�확???�비???�용?� ?�약 ???��??�에�?문의?�시�?
                  ?�세?�고 ?�명?�게 ?�내?�드립니??
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">?�국???�님???�용?????�나??</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">??/span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>?? 물론 가?�합?�다!</strong>
                  <span className="font-bold" style={{ color: '#d4af37' }}>?�토 ?�닝?�빗</span>?� ?�국??고객???�한 ?�문 ?�비?��? ?�공?�니??
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>?�국??고객 ?�용 ?�비??</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>???�어 가?�한 매니?� 배치</li>
                  <li>???�문 메뉴 �?가격표 ?�공</li>
                  <li>???�역 ?�비??지??(?�요??</li>
                  <li>???�국??친화?�인 분위�?/li>
                  <li>??글로벌 결제 ?�스??(카드, ?�금 모두 가??</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  �?��??VIP �?비즈?�스 게스?��? ?�한 ?�리미엄 ?��? ?�비?�도 ?�공?�며,
                  중국, ?�본, 미국, ?�럽 ???�양??�?��??고객?�들??
                  만족?�며 ?�방문하�?계십?�다.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  ?�국???��???비즈?�스 미팅 ???�전 ?�약???�해
                  ?��??��? 직접 최적???�비?��? 코디?�드립니??
                  ?�텔 ?�업 ?�비?�도 가?�하??문의 주시�?바랍?�다.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">?�약?� ?�수?��??? ?�일 방문??가?�한가??</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">??/span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  ?�약??권장?��?�? ?�일 방문??가?�합?�다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>?�약 권장 ?�간?�:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>??금요?? ?�요???�??(?�후 8???�정): ?�약 ?�수</li>
                  <li>??주말 ???�간?�: 최소 2~3?�간 ???�약 권장</li>
                  <li>??공휴??�??�별???? 최소 ?�루 ???�약 권장</li>
                  <li>???�규모 ?�체 (10???�상): 2~3?????�약 ?�수</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>?�일 방문 가???�간?�:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>???�일 ???�간 (?�후 6~8??</li>
                  <li>???�일 ?�야 ?�간 (?�벽 2???�후)</li>
                  <li>???�규�??�원 (1~3??</li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  ?�일 ?�약??가?�하???��??�에�??�화�?문의?�시�?
                  ?�시�??�약 가???��?�??�내?�드립니??
                  (?�화: 010-2303-3778)
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">주차??가?�한가??</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">??/span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>?? 주차 ?�비?��? ?�공?�니??</strong>
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>주차 ?�션:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>??<strong className="text-white">발렛 ?�킹:</strong> 건물 ?�구?�서 차량 ?�계 ???�전?�게 보�?</li>
                  <li>??<strong className="text-white">?�휴 주차??</strong> 건물 지??�??�근 주차???�용 가??/li>
                  <li>??<strong className="text-white">주차 ?�금:</strong> 2?�간 무료, 초과 ?�간 ?�인 ?�용</li>
                  <li>??<strong className="text-white">VIP 고객:</strong> ?�용 주차 공간 ?�공</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  강남???�근?�라 주차 공간???�한?�일 ???�으므�?
                  ?�규모 ?�체 방문 ?�에???�약 ??미리 말�??�주?�면
                  주차 공간???�보?�드립니??
                </p>
                <p className="text-gray-400 leading-relaxed">
                  ?�중교???�용??권장?�며, 강남??10�?출구?�서 ?�보 5�?거리�?
                  지?�철 ?�용??가???�리?�니??
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="text-xl font-bold text-white">결제 방법?� ?�떻�??�나??</span>
                <span className="text-[#d4af37] text-2xl group-open:rotate-180 transition-transform">??/span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#d4af37]/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  ?�양??결제 ?�단??지?�합?�다.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>결제 방법:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>??<strong className="text-white">?�금:</strong> ?�금 ?�수�?발행 가??/li>
                  <li>??<strong className="text-white">?�용카드:</strong> 모든 카드???�용 가??/li>
                  <li>??<strong className="text-white">체크카드:</strong> ?�용 가??/li>
                  <li>??<strong className="text-white">계좌?�체:</strong> ?�전 ?�의 ??가??/li>
                  <li>??<strong className="text-white">비즈?�스 카드:</strong> 법인카드 ?�수�?발행</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mb-4">
                  <strong>?�수�?발행:</strong>
                </p>
                <ul className="text-gray-400 space-y-2 ml-4 mb-4">
                  <li>???�반 ?�수�?/li>
                  <li>???�금 ?�수�?(?�득공제??</li>
                  <li>??법인카드 ?�수�?(?�금계산??</li>
                  <li>??간이 ?�수�?/li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  결제 �??�수�?관??문의?�항?� ?�약 ???�는 방문 ??
                  ?��??�에�?말�??�주?�면 ?�세???�내?�드립니??
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
            ?�명???�찰??가격표
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?�리?�토???�닝?�빗?� <span className="font-bold" style={{ color: '#d4af37' }}>100% ?�찰??/span>�??�영?�니??
            ?�겨�?비용???�으�? ?�약 ???�확??금액???�내?�드립니??
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* 2???�금 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <p className="text-3xl font-bold mb-2" style={{ color: '#d4af37' }}>2??/p>
                <p className="text-gray-400">기본 2?�간</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">240,000??/p>
                <p className="text-sm text-gray-400">1?�당 120,000??/p>
              </div>
              <ul className="mt-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�리미엄 �?배정
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> 기본 주류 ?�함
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�주 ?�트
                </li>
              </ul>
            </div>

            {/* 3???�금 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300" style={{ borderColor: '#d4af37' }}>
              <div className="text-center mb-2">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ background: '#d4af37', color: '#000' }}>
                  POPULAR
                </span>
              </div>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold mb-2" style={{ color: '#d4af37' }}>3??/p>
                <p className="text-gray-400">기본 2?�간</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">330,000??/p>
                <p className="text-sm text-gray-400">1?�당 110,000??/p>
              </div>
              <ul className="mt-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�??VIP �?
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�리미엄 주류
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�럭???�주 ?�트
                </li>
              </ul>
            </div>

            {/* 4???�상 ?�금 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <p className="text-3xl font-bold mb-2" style={{ color: '#d4af37' }}>4???�상</p>
                <p className="text-gray-400">기본 2?�간</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white mb-2">1?�당 100,000??</p>
                <p className="text-sm text-gray-400">?�원???�라 ?�인</p>
              </div>
              <ul className="mt-6 space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> 초�????�티 �?
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�체 ?�인 ?�용
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�리미엄 ?�비??
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#d4af37' }}>?�간 추�? ?�금</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-xl font-bold text-white mb-2">30�??�장</p>
                <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>50,000??/p>
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-2">1?�간 ?�장</p>
                <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>90,000??/p>
              </div>
              <div>
                <p className="text-xl font-bold text-white mb-2">?�나???�키지</p>
                <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>별도 문의</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#d4af37' }}>추�? ?�션</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">주류 추�?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>?�주/맥주 추�?</span>
                    <span className="font-bold text-white">10,000??/span>
                  </li>
                  <li className="flex justify-between">
                    <span>?�주 (기본)</span>
                    <span className="font-bold text-white">150,000??/span>
                  </li>
                  <li className="flex justify-between">
                    <span>?�리미엄 ?�주</span>
                    <span className="font-bold text-white">200,000??</span>
                  </li>
                  <li className="flex justify-between">
                    <span>?�페??/span>
                    <span className="font-bold text-white">250,000??</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">?�주 추�?</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>과일 ?�레?�트</span>
                    <span className="font-bold text-white">50,000??/span>
                  </li>
                  <li className="flex justify-between">
                    <span>?��????�트</span>
                    <span className="font-bold text-white">30,000??/span>
                  </li>
                  <li className="flex justify-between">
                    <span>치킨/?�자</span>
                    <span className="font-bold text-white">30,000??/span>
                  </li>
                  <li className="flex justify-between">
                    <span>?�별 ?�리</span>
                    <span className="font-bold text-white">별도 문의</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            모든 가격�? <span className="font-bold text-white">?�찰??/span>�??�영?�며,
            ?�약 ???�확??금액???�내?�드립니??<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a>�?문의?�시�??�세??견적??받아보실 ???�습?�다.
          </p>
        </div>
      </section>

      {/* 2. Choice System Detail - 초이???�스???�세 */}
      <section id="choice-system" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            초이???�스???�벽 가?�드
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?�리?�토?�만??<span className="font-bold" style={{ color: '#d4af37' }}>?�리미엄 초이???�스??/span>??
            처음 방문?�시??분들???�게 ?�해?�고 ?�안?�게 ?�용?�실 ???�도�??�세???�내?�드립니??
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>?�장 & ?�내</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                ?��??��? 직접 반갑�?맞이?�여 ?�약?�신 룸으�??�내?�드립니??
                ?�안???�파??착석?�시�?초이??준비�? ?�작?�니??
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>매니?� ?�개</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                3~5명의 매니?�가 ?�서?��??�장?�여 간단???�사�??�눕?�다.
                �?매니?�???��??�과 분위기�? 직접 보고 ?�끼?????�습?�다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>?�택 & 결정</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                마음???�는 매니?�??번호�??��??�에�?말�??�시�??�니??
                부???�이 ?�하?�는 분을 ?�택?�시�??�니??
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-3xl font-bold text-black">4</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>즐거???�간</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-center">
                ?�택?�신 매니?�?� ?�께 즐거???�간??보내?�면 ?�니??
                ?�래, ?�?? 게임 ???�하?�는 ?��??�유�?�� 즐기?�요.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>초이?????�아?�면 좋�? ??/h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>?��</span> ?�택 기�?
                </h4>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li>???�모보다??<strong className="text-white">?�격�?분위�?/strong>가 중요?�니??/li>
                  <li>???�맞춤과 미소�?<strong className="text-white">친근�?/strong>???�껴보세??/li>
                  <li>??간단???�사말로 <strong className="text-white">?�???��???/strong>???�인?�세??/li>
                  <li>??직감?�으�??�안?�을 ?�끼??분을 ?�택?�세??/li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span style={{ color: '#d4af37' }}>??/span> ?�티�?& 매너
                </h4>
                <ul className="space-y-3 text-gray-300 leading-relaxed">
                  <li>??매니?�?�에�?<strong className="text-white">존중�??�의</strong>�?갖춰주세??/li>
                  <li>???�택?��? ?��? 매니?�?�게??<strong className="text-white">감사 ?�사</strong>�??�주?�요</li>
                  <li>??과도???�킨??? <strong className="text-white">?��? 금�?</strong>?�니??/li>
                  <li>???�안???�?��? 즐거??분위기�? 만들?��??�요</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>?�주 묻는 초이??질문</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-xl font-bold text-white mb-3">Q. 초이?��? ???�도 ?�나??</h4>
                <p className="text-gray-300 leading-relaxed">
                  A. ?? 가?�합?�다. 초이???�이 룸에???�안?�게 ?�간??보내???�도 ?�습?�다.
                  ?��?�??�리?�토?�의 <strong className="text-white">?�리미엄 ?�비??/strong>�?경험?�시?�면 초이?��? 권장?�니??
                </p>
              </div>
              <div className="border-b border-gray-800 pb-6">
                <h4 className="text-xl font-bold text-white mb-3">Q. 마음???�는 매니?�가 ?�으�?</h4>
                <p className="text-gray-300 leading-relaxed">
                  A. 부???�이 ?��??�에�?말�??�주?�면 <strong className="text-white">추�? 초이??/strong>가 가?�합?�다.
                  고객?�의 만족??최우?�입?�다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Q. 초이???�간?� ?�마??걸리?�요?</h4>
                <p className="text-gray-300 leading-relaxed">
                  A. ?�균 <strong className="text-white">5~10�?/strong> ?�도 ?�요?�니??
                  천천???�유�?�� ?�택?�실 ???�으??부??갖�? 마세??
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            초이???�스?�에 ?�????궁금?�신 ?�이 ?�으?�면<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a>�?문의?�주?�요. ?��??��? 친절?�게 ?�내?�드립니??
          </p>
        </div>
      </section>

      {/* 3. Customer Reviews - 고객 ?�기 */}
      <section id="reviews" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            고객 ?�기
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?�제�??�리?�토?��? ?�용?�신 고객?�들??<span className="font-bold" style={{ color: '#d4af37' }}>?�직???�기</span>�??�인?�보?�요.
            ?�균 만족??<strong style={{ color: '#d4af37' }}>4.8/5.0</strong> (127�??��? 기�?)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "처음 가보는 곳이??긴장?�는???��??�님???�말 친절?�게 ?�내?�주?�서 ?�안?�게 즐겼?�니??
                ?�설??깔끔?�고 분위기도 좋았?�요. ?�음????방문?�고 ?�네??"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#d4af37' }}>
                  <span className="text-black font-bold text-xl">김</span>
                </div>
                <div>
                  <p className="font-bold text-white">김?�○??/p>
                  <p className="text-sm text-gray-400">30?� 직장??/p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "?�사 ?�식?�로 방문?�는??모든 직원?�이 만족?�습?�다.
                가격도 ?�리?�이�??�비?�도 최고?�?�요. 비즈?�스 ?��??�으로도 ?�벽?�니??"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#d4af37' }}>
                  <span className="text-black font-bold text-xl">??/span>
                </div>
                <div>
                  <p className="font-bold text-white">?�○?�님</p>
                  <p className="text-sm text-gray-400">40?� CEO</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4].map((star) => (
                  <span key={star} className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                ))}
                <span className="text-2xl text-gray-600">??/span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                "?�자 방문?�는?�도 ?��? ?�색?��? ?�았?�요.
                1??룸이 ?�로 ?�어???�안?�게 즐길 ???�었?�니?? ?�만 주말?�는 ?�약 ?�수!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#d4af37' }}>
                  <span className="text-black font-bold text-xl">�?/span>
                </div>
                <div>
                  <p className="font-bold text-white">박○?�님</p>
                  <p className="text-sm text-gray-400">20?� ?�사??/p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>만족???�계</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>4.8</p>
                <p className="text-gray-400">?�균 ?�점</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>127</p>
                <p className="text-gray-400">�?리뷰 ??/p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>92%</p>
                <p className="text-gray-400">?�방문율</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2" style={{ color: '#d4af37' }}>98%</p>
                <p className="text-gray-400">추천 ?�향</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tips & Precautions - ?�용 ??& 주의?�항 */}
      <section id="tips" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            ?�용 ??& 주의?�항
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            처음 방문?�시??분들???�한 <span className="font-bold" style={{ color: '#d4af37' }}>?�전 가?�드</span>?�니??
            ?�것�??�아??<strong className="text-white">?�로처럼</strong> 즐기?????�습?�다!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 복장 가?�드 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">?��</span> 복장 가?�드
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">??권장 복장</h4>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>???�마??캐주??(�?��지 + ?�츠)</li>
                    <li>???�장 (비즈?�스 미팅)</li>
                    <li>??깔끔???�셔�?+ ?�랙??/li>
                    <li>???�정???�피??(?�성)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">???�해????복장</h4>
                  <ul className="space-y-2 text-gray-300 ml-4">
                    <li>??반바지, ?�리??/li>
                    <li>??민소�? �?���???/li>
                    <li>??지?�치�?캐주?�한 ??/li>
                    <li>???�동�? ?�업�?/li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 매너 & ?�티�?*/}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">?��</span> 매너 & ?�티�?
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span><strong className="text-white">존중�??�의:</strong> 매니?�?� 직원?�에�??�중?�게 ?�?�주?�요</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span><strong className="text-white">?�절???�주:</strong> 과도???�주???�제?�주?�요</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span><strong className="text-white">?�음 조절:</strong> ?�른 ?�님?�게 방해?��? ?�도�?/span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span><strong className="text-white">?�킨??금�?:</strong> 과도???�체 ?�촉?� ?��? 금�?</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span><strong className="text-white">?�간 준??</strong> ?�약 ?�간??지켜주?�요</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span><strong className="text-white">?�진 촬영:</strong> 매니?� ?�의 ?�이 촬영 금�?</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>?�� ?�산 ?�약 꿀??/h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-4xl">1</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">?�일 방문</h4>
                <p className="text-gray-300 leading-relaxed">
                  ??목요?��? 주말보다 ?�기시간이 짧고 ?�안?�게 ?�용 가?�합?�다
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-4xl">2</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">?�전 ?�약</h4>
                <p className="text-gray-300 leading-relaxed">
                  미리 ?�약?�면 ?��??�이 바로 ?�장 가?�하�??�하???�간?� ?�택 가??
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-4xl">3</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">?�체 ?�인</h4>
                <p className="text-gray-300 leading-relaxed">
                  4???�상 방문 ??1?�당 ?�금???�인?�어 ?�욱 경제?�입?�다
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>?�️ �??�아?�세??/h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <span>
                  <strong className="text-white">�?19??미만 출입 금�?:</strong> ?�분�??�인???�을 ???�으??지참해주세??
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <span>
                  <strong className="text-white">?�약 변�?취소:</strong> 최소 3?�간 ???�락 부?�드립니??
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <span>
                  <strong className="text-white">주차 지??</strong> ?�정 금액 ?�상 ?�용 ??주차�?지??(문의 ?�수)
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <span>
                  <strong className="text-white">귀중품 관�?</strong> 개인 ?��??��? 직접 관�?부?�드립니??
                </span>
              </p>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            ???�세???�용 ?�이 궁금?�시?�면<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a>�?문의?�주?�요!
          </p>
        </div>
      </section>

      {/* 5. VIP Service - VIP ?�비???�내 */}
      <section id="vip" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            VIP ?�리미엄 ?�비??
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?�별???? ?�별??분들???�한 <span className="font-bold" style={{ color: '#d4af37' }}>?�리미엄 VIP ?�비??/span>�?
            ?�공?�니?? 최상급의 ?�?��? ?�벽???�라?�버?��? 경험?�세??
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* VIP ?�용 �?*/}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">?��</span>
                <h3 className="text-2xl font-bold" style={{ color: '#d4af37' }}>VIP ?�용 �?/h3>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>초�????�라?�빗 공간 (최�? 10�?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�리미엄 ?�향 ?�스??/span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�??LED ?�크�?/span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>??���??�테리어</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�립???�장??/span>
                </li>
              </ul>
            </div>

            {/* ?�업 ?�비??*/}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300" style={{ borderColor: '#d4af37' }}>
              <div className="text-center mb-2">
                <span className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4" style={{ background: '#d4af37', color: '#000' }}>
                  PREMIUM
                </span>
              </div>
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">?��</span>
                <h3 className="text-2xl font-bold" style={{ color: '#d4af37' }}>?�업 ?�비??/h3>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>강남�???지???�업</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>고급 ?�단 차량</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�문 ?�라?�버</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�전 ?�약 ?�수</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>VIP 고객 무료</span>
                </li>
              </ul>
            </div>

            {/* 비즈?�스 ?��? ?�키지 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <div className="text-center mb-6">
                <span className="text-6xl mb-4 block">?��</span>
                <h3 className="text-2xl font-bold" style={{ color: '#d4af37' }}>?��? ?�키지</h3>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�리미엄 주류 ?�공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>고급 ?�주 코스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�담 매니?� 배정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�금계산??발행</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>별도 ?�담 ?�수</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>VIP ?�원 ?�택</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">?�선 ?�약</h4>
                <p className="text-gray-300 leading-relaxed">
                  주말�?공휴?�에??<strong className="text-white">?�선 ?�약 가??/strong>?�며,
                  ?�하?�는 ?�간?�?� 룸을 보장?�드립니??
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">?�별 ?�인</h4>
                <p className="text-gray-300 leading-relaxed">
                  VIP ?�원?� <strong className="text-white">5~10% 추�? ?�인</strong> ?�택??받으?????�으�?
                  ?�일 ?�에???�별 ?�비?��? ?�공?�니??
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">?�인???�립</h4>
                <p className="text-gray-300 leading-relaxed">
                  ?�용 금액??<strong className="text-white">5%�??�인?�로 ?�립</strong>?�여
                  ?�음 방문 ???�금처럼 ?�용?�실 ???�습?�다.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">?�담 매니?�</h4>
                <p className="text-gray-300 leading-relaxed">
                  ?��??��? <strong className="text-white">직접 ?�담?�여</strong> 모든 ?�청?�항??
                  ?�속?�게 처리?�드립니??
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            VIP ?�비??�??�원 가??문의<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a> (?��???직통)
          </p>
        </div>
      </section>

      {/* 6. Group Reservation - ?�체 ?�약 가?�드 */}
      <section id="group" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            ?�체 ?�약 가?�드
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?�사 ?�식, ?�호??모임, ?�창????<span className="font-bold" style={{ color: '#d4af37' }}>?�체 ?�약 ???�별 ?�택</span>???�공?�니??
            최�? 30명까지 ?�시 ?�용 가?�합?�다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 text-center">
              <p className="text-6xl mb-4" style={{ color: '#d4af37' }}>4~6??/p>
              <h3 className="text-2xl font-bold text-white mb-4">?�규�?모임</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                ?�안??분위기에??친구?�과 즐거???�간
              </p>
              <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>1??100,000??</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 text-center" style={{ borderColor: '#d4af37' }}>
              <p className="text-6xl mb-4" style={{ color: '#d4af37' }}>7~15??/p>
              <h3 className="text-2xl font-bold text-white mb-4">중규�??�식</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                ?�사 ?�식, ?� 빌딩??최적
              </p>
              <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>1??90,000??</p>
              <p className="text-sm text-gray-400 mt-2">10% ?�체 ?�인</p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 text-center">
              <p className="text-6xl mb-4" style={{ color: '#d4af37' }}>16??</p>
              <h3 className="text-2xl font-bold text-white mb-4">?�규모 ?�사</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                ?�창?? ?�호??모임 ?�용
              </p>
              <p className="text-3xl font-bold" style={{ color: '#d4af37' }}>별도 견적</p>
              <p className="text-sm text-gray-400 mt-2">최�? 15% ?�인</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>?�체 ?�약 ?�차</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">?�화 문의</h4>
                <p className="text-sm text-gray-400">
                  ?�원, ?�짜, ?�간 문의
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">견적 ?�내</h4>
                <p className="text-sm text-gray-400">
                  ?�확??금액 ?�내
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">?�약 ?�정</h4>
                <p className="text-sm text-gray-400">
                  ?�금 ?�이 ?�약 ?�료
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)' }}>
                  <span className="text-2xl font-bold text-black">4</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">?�일 방문</h4>
                <p className="text-sm text-gray-400">
                  ?�약 ?�간??방문
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>?�체 ?�약 ???�공 ?�비??/h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <div>
                  <h4 className="font-bold text-white mb-1">�??�결 가??/h4>
                  <p className="text-sm">?�규모 ?�원???�러 룸을 ?�결?�여 ?�께 즐기?????�습?�다</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <div>
                  <h4 className="font-bold text-white mb-1">?�체 ?�인</h4>
                  <p className="text-sm">?�원?�에 ?�라 최�? 15% ?�인 ?�택</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <div>
                  <h4 className="font-bold text-white mb-1">주류 ?�비??/h4>
                  <p className="text-sm">?�??주문 ??추�? ?�비???�공</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" style={{ color: '#d4af37' }}>??/span>
                <div>
                  <h4 className="font-bold text-white mb-1">?�금계산??발행</h4>
                  <p className="text-sm">법인카드 ?�용 �??�금계산??즉시 발행</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 mt-12 text-lg leading-relaxed">
            ?�체 ?�약 문의 �??�담<br />
            <a href="tel:010-2303-3778" className="font-bold transition-all duration-300" style={{ color: '#d4af37' }}>
              010-2303-3778
            </a> (최소 3?????�약 권장)
          </p>
        </div>
      </section>

      {/* 7. Area Info - 강남 지???�보 */}
      <section id="area" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            강남 지???�벽 가?�드
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?�리?�토??방문 ?�후�?즐길 ???�는 <span className="font-bold" style={{ color: '#d4af37' }}>강남 ?�플?�이??/span>�??�개?�니??
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* 주�? 맛집 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">?���?/span> 주�? 맛집 (?�보 5�??�내)
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <h4 className="font-bold text-white mb-1">?�식 명�?</h4>
                  <p className="text-sm">고급 ?�정?? ?�식 추천</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">?�탈리안 ?�스?�랑</h4>
                  <p className="text-sm">?�이??코스�??�벽</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">?�식 ?�마카세</h4>
                  <p className="text-sm">비즈?�스 미팅 최적</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">중식??/h4>
                  <p className="text-sm">?�체 ?�식 추천</p>
                </li>
              </ul>
            </div>

            {/* 2�??�소 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: '#d4af37' }}>
                <span className="text-3xl">?��</span> 2�?추천 ?�소
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <h4 className="font-bold text-white mb-1">루프??�?/h4>
                  <p className="text-sm">??��?�인 ?�경 감상</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">?�럽</h4>
                  <p className="text-sm">?�티 분위�?최고�?/p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">?�프�?/h4>
                  <p className="text-sm">가볍게 마무리하�?좋음</p>
                </li>
                <li>
                  <h4 className="font-bold text-white mb-1">?�래�?/h4>
                  <p className="text-sm">계속 ?�래?�고 ?�다�?/p>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10">
            <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#d4af37' }}>추천 코스</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">비즈?�스 코스</h4>
                <div className="space-y-2 text-gray-300">
                  <p>1�? ?�정??(2?�간)</p>
                  <p style={{ color: '#d4af37' }}>??/p>
                  <p>2�? <strong className="text-white">?�리?�토??/strong> (2?�간)</p>
                  <p style={{ color: '#d4af37' }}>??/p>
                  <p>3�? 루프??�?(1?�간)</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">친구 모임 코스</h4>
                <div className="space-y-2 text-gray-300">
                  <p>1�? ?�탈리안 (1.5?�간)</p>
                  <p style={{ color: '#d4af37' }}>??/p>
                  <p>2�? <strong className="text-white">?�리?�토??/strong> (3?�간)</p>
                  <p style={{ color: '#d4af37' }}>??/p>
                  <p>3�? ?�럽 (2?�간)</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">가벼운 코스</h4>
                <div className="space-y-2 text-gray-300">
                  <p>1�? 가벼운 ?�사 (1?�간)</p>
                  <p style={{ color: '#d4af37' }}>??/p>
                  <p>2�? <strong className="text-white">?�리?�토??/strong> (2?�간)</p>
                  <p style={{ color: '#d4af37' }}>??/p>
                  <p>?�시�?귀가</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Events & Promotions - ?�벤??& ?�로모션 */}
      <section id="events" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            ?�벤??& ?�별 ?�택
          </h2>

          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            ?�리?�토?�만??<span className="font-bold" style={{ color: '#d4af37' }}>?�별???�벤?��? ?�택</span>?�로
            ?�욱 즐거???�간??보내?�요!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* ?�일 ?�벤??*/}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="text-6xl mb-4 block text-center">?��</span>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d4af37' }}>?�일 ?�별 ?�벤??/h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�일 케?�크 무료 ?�공</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�페??1�??�비??/span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�일 ?�래 ?�벤??/span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�진 촬영 ?�비??/span>
                </li>
              </ul>
              <p className="text-center mt-6 text-sm text-gray-400">
                *?�분�?지�??�수
              </p>
            </div>

            {/* 기념???�키지 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300" style={{ borderColor: '#d4af37' }}>
              <span className="text-6xl mb-4 block text-center">?��</span>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d4af37' }}>기념???�키지</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>로즈 꽃다�?/span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�리미엄 ?�??/span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�별 ?�주 ?�트</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>VIP �??�그?�이??/span>
                </li>
              </ul>
              <p className="text-center mt-6 text-sm text-gray-400">
                *3?????�약 ?�수
              </p>
            </div>

            {/* ?�골 ?�택 */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-8 hover:border-[#d4af37]/60 transition-all duration-300">
              <span className="text-6xl mb-4 block text-center">�?/span>
              <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#d4af37' }}>?�골 고객 ?�택</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>5??방문 ??10% ?�인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>10??방문 ??15% ?�인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�인???�립 (5%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#d4af37' }}>??/span>
                  <span>?�선 ?�약 가??/span>
                </li>
              </ul>
              <p className="text-center mt-6 text-sm text-gray-400">
                *?�동 ?�용
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-950/30 to-black/30 border border-[#d4af37]/20 rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#d4af37' }}>?�벤??문의</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              ?�일, 기념?? ?�별???�을 ?�한 맞춤 ?�벤?��? 준비해?�립?�다.<br />
              ?�하?�는 ?�벤?��? ?�다�??��??�에�?문의?�주?�요!
            </p>
            <a
              href="tel:010-2303-3778"
              className="inline-block px-12 py-5 text-xl font-bold rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)',
                color: '#000000'
              }}
            >
              ?�� ?�벤???�담?�기
            </a>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center" style={{ color: '#d4af37', textShadow: '0 0 40px rgba(212, 175, 55, 0.6)' }}>
            ?�시??�?
          </h2>

          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            강남??10�?출구?�서 ?�보 5�? 찾기 ?�고 ?�근??좋�? 최적???�치???�리?�고 ?�습?�다.
          </p>

          {/* ?�치 ?��?지 갤러�?*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/간판1.webp"
                  alt="강남 ?�리?�토???��? ?�경"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">찾기 ?�운 ?�치</h4>
                  <p className="text-gray-300">밤에??밝게 빛나??간판?�로 ?�게 찾으?????�습?�다</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/images/?�구.webp"
                  alt="강남 ?�리?�토???�구"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-bold text-white mb-2">?�리미엄 ?�구</h4>
                  <p className="text-gray-300">고급?�러???�구?�서 �?경험???�작?�니??/p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Address */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>
                주소 �?교통??
              </h3>
              <p className="text-white text-xl mb-6 font-bold">?�울??강남�???��??604-11번�?</p>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-lg font-semibold text-white mb-2">?�� 지?�철 ?�용</p>
                  <div className="ml-4 space-y-1 text-gray-300">
                    <p>??2?�선 강남??10�?출구 (?�보 5�?</p>
                    <p>???�분?�선 강남???�결 (?�보 6�?</p>
                    <p>??출구?�서 직진 ????번째 골목 ?�회??/p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-white mb-2">?�� 버스 ?�용</p>
                  <div className="ml-4 space-y-1 text-gray-300">
                    <p>??강남???�류???�차 (모든 ?�선)</p>
                    <p>??간선: 146, 740, 341 ???�수</p>
                    <p>??지?? 3414, 4319 ???�수</p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold text-white mb-2">?�� ?��????�용</p>
                  <div className="ml-4 space-y-1 text-gray-300">
                    <p>???�비게이?? ??��??604-11 검??/p>
                    <p>??주차 발렛 ?�비???�공</p>
                    <p>???�휴 주차??2?�간 무료</p>
                  </div>
                </div>
              </div>

              <p className="text-sm" style={{ color: '#d4af37' }}>
                *?�확???�치?� ?�구???�약 ???��??��? ?�세???�내?�드립니??
              </p>
            </div>

            {/* VIP Transport */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#d4af37' }}>
                VIP ?�업 ?�비??
              </h3>
              <p className="text-white text-xl leading-relaxed mb-4">
                강남�???<span style={{ color: '#d4af37' }}>VIP 고객</span>???�해<br />
                <span style={{ color: '#d4af37' }}>최고�?차량</span> ?�업??지?�합?�다.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>?�� 강남�??�역 ?�업 가??/p>
                <p>???�약 ???�전 ?�청 ?�수</p>
                <p>?�� 비즈?�스 고객 ?�선 지??/p>
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
              ?���?카카?�맵
            </a>
            <a
              href="https://naver.me/G9pF7F0c"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
            >
              ?���??�이�?지??
            </a>
            <a
              href="https://tmap.life/8a48eb55"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)', border: '2px solid #d4af37' }}
            >
              ?���?TMAP
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
            문의?�기
          </h2>

          <h3 className="text-2xl md:text-3xl mb-4 text-white text-center">
            <span
              style={{
                color: '#d4af37',
                textShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
              }}
            >
              ?��???
            </span>
            ?�게<br />무엇?�든 물어보세??
          </h3>

          <div className="text-xl text-gray-300 mb-12 text-center">
            ??짜릿??�? ?�토가 ?�현?�드립니??
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
                  ?�토 ?��???
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">?�� ?�화번호</div>
                  <a
                    href="tel:+82-10-2303-3778"
                    className="text-white text-2xl hover:text-[#d4af37] transition-colors inline-block"
                  >
                    010-2303-3778
                  </a>
                  <p className="text-gray-400 text-sm mt-2">24?�간 ?�담 가??/ ?�약 ?�선</p>
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">?�️ ?�레그램</div>
                  <a
                    href="https://t.me/hscompanyshs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#d4af37] transition-colors inline-block"
                  >
                    @hscompanyshs
                  </a>
                  <p className="text-gray-400 text-sm mt-2">빠른 ?��? 보장</p>
                </div>

                <div>
                  <div className="text-white font-semibold mb-2">?�� 카카?�톡</div>
                  <a
                    href="https://open.kakao.com/o/tlsgustlra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#d4af37] transition-colors inline-block"
                  >
                    tlsgustlra
                  </a>
                  <p className="text-gray-400 text-sm mt-2">가???�한 ?�담 방법</p>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/20">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-bold" style={{ color: '#d4af37' }}>?��???/span>가 직접 ?��??�니??<br/>
                    ?�떤 문의???�하�??�락주세??
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden rounded-3xl border-2 border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all duration-500">
              <img
                src="/images/agassi.webp"
                alt="?�리미엄 ?�비???��?지"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                draggable={false}
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-2xl font-bold text-white mb-2">최상�??�비??/p>
                <p className="text-gray-300">?�리미엄 경험???�속?�립?�다</p>
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
              ?�� 바로 ?�약?�기
            </a>
            <p className="text-gray-400 mt-4 text-sm">?�릭 ??번으�??��??��? 직접 ?�결?�니??/p>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Call Button - 고급?�러???�자??*/}
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
              지�?바로 ?�약?�기
            </span>
          </a>

          <p className="text-center text-xs mt-2 text-[#d4af37]/70 font-medium">
            ?��??��? 직접 ?�결?�니??
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-8 px-4 bg-black border-t border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>&copy; 2025 강남 ?�토. All rights reserved.</p>
        </div>
      </footer>
    </main>
    </>
  )
}
