'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const [tab, setTab] = useState<'projects' | 'about' | 'contact'>('about'); // 초기 탭: 소개

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-6">

        {/* 상단 소개 */}
        <section className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mb-10 pt-10">
          <div className="w-36 h-36 relative rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image src="/profile.jpg" alt="고혜성 증명사진" fill objectFit="cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">고혜성</h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 mt-2">
  안녕하세요! <span className="text-blue-600 font-semibold">사용자 중심의 프론트엔드</span>가 되고 싶다는 목표로 개발자의 길을 걷고 있습니다.
</p>
            <p className="text-base text-gray-700 mt-2 leading-relaxed">
              환경 데이터와 기술의 결합에 매력을 느껴 개발자의 길을 걷고 있습니다.<br />
              프로젝트 설계부터 사용자 경험까지 고민하는 프론트엔드 개발자가 되고자 합니다.
            </p>
            <p className="text-sm text-gray-500 mt-2">cjmadlife5930@gmail.com</p>
          
          </div>
        </section>

        {/* 탭 버튼 */}
        <div className="flex justify-center space-x-6 mb-10">
          <button
            onClick={() => setTab('about')}
            className={`text-sm font-semibold hover:text-blue-800 transition ${tab === 'about' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            소개
          </button>
          <button
            onClick={() => setTab('projects')}
            className={`text-sm font-semibold hover:text-blue-800 transition ${tab === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            프로젝트
          </button>
          <button
            onClick={() => setTab('contact')}
            className={`text-sm font-semibold hover:text-blue-800 transition ${tab === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}
          >
            연락처
          </button>
        </div>

        {/* 콘텐츠 - 소개 */}
        {tab === 'about' && (
          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">About Me</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">사용자 경험을 끝까지 고민합니다.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              내가 만든 화면, 내가 만든 흐름이 실제 사용자에게 어떤 경험을 줄지 끝까지 책임지고 싶은 마음이 큽니다.
              기능 하나를 만들더라도 ‘왜 이 기능이 필요한가?’, ‘이 흐름이 정말 자연스러운가?’를 질문하며
              기획 단계부터 적극적으로 의견을 제시합니다.
              특히 사용자의 의도나 팀의 요구를 빠르게 파악하고, ‘이렇게 작동해야 한다’는 흐름을 빠르게 그려 구현으로 옮기는 데 강점이 있습니다.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">함께 일하는 개발자가 되고 싶습니다.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              협업을 단순한 역할 분담이 아닌, 하나의 방향을 함께 고민해가는 과정이라고 생각합니다.
              디자이너, 기획자, 다른 개발자들과의 커뮤니케이션에서 의도를 빠르게 파악하고,
              기술적으로 실현 가능한 해결책을 제안하는 데 익숙합니다.
              코드 리뷰와 회고 문화에도 적극적으로 참여하며, "같이 일하고 싶은 개발자"가 되기 위해 노력하고 있습니다.
              팀 전체의 흐름을 고려해 기능을 구현하고, 필요한 문서화와 테스트도 빠뜨리지 않으려 합니다.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">기술 스택</h3>
            <div className="flex flex-wrap justify-start gap-6 mb-8">
              <Image src="/stack/js.png" alt="JavaScript" width={48} height={48} />
              <Image src="/stack/ts.png" alt="TypeScript" width={48} height={48} />
              <Image src="/stack/react.png" alt="React" width={48} height={48} />
              <Image src="/stack/next.png" alt="Next.js" width={48} height={48} />
              <Image src="/stack/tailwind.png" alt="Tailwind CSS" width={48} height={48} />
              <Image src="/stack/node.png" alt="Node.js" width={48} height={48} />
              <Image src="/stack/git.png" alt="Git" width={48} height={48} />
              <Image src="/stack/solidity.png" alt="Solidity" width={48} height={48} />
              <Image src="/stack/githuB.png" alt="GitHub" width={48} height={48} />
              <Image src="/stack/notion.png" alt="Notion" width={48} height={48} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Frontend</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• React / Next.js</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Zustand / Redux</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Backend & Tools</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js / Express</li>
                  <li>• JWT 인증</li>
                  <li>• Axios</li>
                  <li>• Git / GitHub</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-gray-800">주요 경험</h3>
            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">프로젝트 설계 및 개발</h4>
                <p className="text-gray-600">UI/UX 설계부터 상태관리, 인증 시스템까지 전반적인 프론트엔드 흐름을 구현했습니다.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">반응형 웹 개발</h4>
                <p className="text-gray-600">다양한 디바이스에서 일관된 사용자 경험을 위한 반응형 웹 UI를 구현했습니다.</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">배포 및 운영</h4>
                <p className="text-gray-600">Vercel, EC2, Route53을 통한 서비스 운영 경험을 보유하고 있습니다.</p>
              </div>
            </div>
          </section>
        )}

        {/* 콘텐츠 - Projects */}
        {tab === 'projects' && (
          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* 콘텐츠 - Contact */}
        {tab === 'contact' && (
          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Image src="/stack/gmail2.png" alt="gmail" width={48} height={48} />
                  <div>
                    <h3 className="font-semibold text-gray-800">이메일</h3>
                    <p className="text-gray-600">cjmadlife5930@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image src="/stack/githuB.png" alt="GitHub" width={48} height={48} />
                  <div>
                    <h3 className="font-semibold text-gray-800">GitHub</h3>
                    <a
                      href="https://github.com/mls5930"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      github.com/mls5930
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">🌐</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">포트폴리오</h3>
                    <p className="text-gray-600">현재 페이지</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-10">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">업무 영역</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 프론트엔드 개발 (React, Next.js)</li>
                  <li>• UI/UX 설계 및 구현</li>
                  <li>• 반응형 웹 개발</li>
                  <li>• 상태관리 및 인증 시스템</li>
                  <li>• 배포 및 운영</li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
