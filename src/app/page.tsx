'use client'

import './globals.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const [bodyContent, setBodyContent] = useState('')
  
  useEffect(() => {
    // 클라이언트 사이드에서만 HTML 파일 로드
    fetch('/index.html')
      .then(response => response.text())
      .then(html => {
        // HTML 내용에서 필요한 부분만 추출 (body 내용)
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/)
        let content = bodyMatch ? bodyMatch[1] : ''
        
        // 폼을 getform.io를 사용하도록 수정
        content = content.replace(
          /<form id="wf-form-" name="wf-form-" data-name="예약 문의 폼" redirect="\/" data-redirect="\/" method="get" class="form"/,
          '<form id="wf-form-" name="wf-form-" data-name="예약 문의 폼" redirect="\/" data-redirect="\/" method="POST" class="form" action="https://getform.io/f/YOUR_FORM_ID"'
        )
        
        // 폼 필드 이름 수정
        content = content.replace(/name="field" data-name="이름"/g, 'name="name" data-name="이름"')
        content = content.replace(/name="field" data-name="이메일"/g, 'name="email" data-name="이메일"')
        content = content.replace(/name="field" data-name="휴대폰 번호 \(선택\)"/g, 'name="phone" data-name="휴대폰 번호 (선택)"')
        content = content.replace(/name="field" data-name="방문 인원 수"/g, 'name="visitors" data-name="방문 인원 수"')
        
        setBodyContent(content)
      })
      .catch(error => console.error('Error loading HTML:', error))
  }, [])
  
  return (
    <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
  )
}
