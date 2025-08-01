import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact</h1>
          <nav className="mt-6">
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                홈
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800">
                소개
              </Link>
              <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
                연락처
              </Link>
            </div>
          </nav>
        </header>

        {/* 메인 콘텐츠 */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">연락처 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">이메일</h3>
                    <p className="text-gray-600">cjmadlife5930@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">GitHub</h3>
                    <a href="https://github.com/mls5930" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      github.com/mls5930
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">포트폴리오</h3>
                    <p className="text-gray-600">현재 페이지</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">업무 영역</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    프론트엔드 개발 (React, Next.js)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    UI/UX 설계 및 구현
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    반응형 웹 개발
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    상태관리 및 인증 시스템
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    배포 및 운영
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">협업 제안</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                새로운 프로젝트나 협업 기회에 항상 열려있습니다. 
                사용자 중심의 웹 애플리케이션 개발에 관심이 있으시다면 언제든 연락주세요.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-600">프로젝트 협업</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-600">기술 컨설팅</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-600">코드 리뷰</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-gray-600">기술 공유</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">응답 시간</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">24시간</div>
                <div className="text-sm text-gray-600">이메일 응답</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">1-2일</div>
                <div className="text-sm text-gray-600">상세 검토</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">1주일</div>
                <div className="text-sm text-gray-600">프로젝트 시작</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 