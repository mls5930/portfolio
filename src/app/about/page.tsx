import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
          <nav className="mt-6">
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-800">
                홈
              </Link>
              <Link href="/about" className="text-blue-600 font-semibold hover:text-blue-800">
                소개
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                연락처
              </Link>
            </div>
          </nav>
        </header>

        {/* 메인 콘텐츠 */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">개발 철학</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              사용자 중심의 개발을 지향합니다. 단순히 기능을 구현하는 것을 넘어서, 
              사용자가 직관적이고 편리하게 사용할 수 있는 인터페이스를 만드는 것에 집중합니다.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              환경 데이터와 기술의 결합에 매력을 느껴 개발자의 길을 걷고 있으며, 
              지속적인 학습과 새로운 기술 습득을 통해 더 나은 서비스를 제공하고자 합니다.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">기술 스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Frontend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Zustand / Redux</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Backend & Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js / Express</li>
                  <li>• JWT 인증</li>
                  <li>• Axios</li>
                  <li>• Git / GitHub</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">주요 경험</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">프로젝트 설계 및 개발</h3>
                <p className="text-gray-600">
                  다양한 프로젝트를 통해 UI/UX 설계부터 상태관리, 인증 시스템 구현까지 
                  전체적인 개발 과정을 경험했습니다.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">반응형 웹 개발</h3>
                <p className="text-gray-600">
                  모바일부터 데스크톱까지 모든 디바이스에서 최적의 사용자 경험을 
                  제공하는 반응형 웹 애플리케이션을 개발했습니다.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">배포 및 운영</h3>
                <p className="text-gray-600">
                  Vercel, EC2, Route53 등을 활용한 배포 경험과 
                  실제 서비스 운영 경험을 보유하고 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">향후 목표</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              더욱 정교한 사용자 경험을 제공하는 프론트엔드 개발자가 되고자 합니다. 
              새로운 기술 트렌드를 학습하고, 팀 협업을 통해 더 나은 서비스를 만들어가는 
              개발자로 성장하고 싶습니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 