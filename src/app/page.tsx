"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

function cx(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

export default function Page() {
  // ✅ 외부 이력서 링크
  const RESUME_URL = "https://resumekhs.vercel.app/";

  const sections = useMemo(
    () => [
      { id: "about", label: "소개" },
      { id: "projects", label: "프로젝트" },
      { id: "contact", label: "연락처" },
    ],
    []
  );

  const [active, setActive] = useState<string>(sections[0].id);
  const markerRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sections]);

  useEffect(() => {
    const nav = navRef.current;
    const marker = markerRef.current;
    if (!nav || !marker) return;
    const activeLink = nav.querySelector<HTMLButtonElement>(
      `[data-id="${active}"]`
    );
    if (!activeLink) return;
    const { offsetLeft, offsetWidth } = activeLink;
    marker.style.transform = `translateX(${offsetLeft}px)`;
    marker.style.width = `${offsetWidth}px`;
  }, [active]);

  const onNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Top Nav */}
      <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/70 shadow-sm">
                <Image
                  src="/profile.jpg"
                  alt="고혜성"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="leading-tight">
                <p className="text-sm text-gray-500">Frontend Developer</p>
                <p className="text-base font-semibold text-gray-800">고혜성</p>
              </div>
            </div>

            {/* ✅ 네비 + 이력서 링크(외부) */}
            <div ref={navRef} className="relative flex items-center gap-6">
              {sections.map((s) => (
                <button
                  key={s.id}
                  data-id={s.id}
                  onClick={() => onNavClick(s.id)}
                  className={cx(
                    "relative pb-2 text-sm font-semibold transition-colors",
                    active === s.id
                      ? "text-blue-700"
                      : "text-gray-600 hover:text-gray-800"
                  )}
                >
                  {s.label}
                </button>
              ))}

              {/* 이력서(외부 링크) — 마커 영향 X */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-1.5  text-sm font-semibold text-blue-700 ring-1 ring-blue-200 hover:bg-blue-50"
              >
                이력서
              </a>

              {/* moving underline (내부 섹션만 따라감) */}
              <span
                ref={markerRef}
                className="pointer-events-none absolute -bottom-px left-0 h-[2px] w-0 rounded bg-blue-600 transition-[transform,width] duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-white/70 p-6 shadow-md md:flex-row md:items-start">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-md">
            <Image
              src="/profile.jpg"
              alt="고혜성 증명사진"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
              고혜성
            </h1>
            <p className="mt-2 text-lg leading-relaxed text-gray-700 md:text-xl">
              안녕하세요!{" "}
              <span className="font-semibold text-blue-700">
                사용자 중심의 프론트엔드
              </span>{" "}
              개발자가 되기 위해 꾸준히 성장하고 있습니다.
            </p>
            <p className="mt-2 text-gray-600">
              환경 데이터와 기술의 결합에 매력을 느껴, 프로젝트 설계부터 사용자
              경험까지 끝까지 고민합니다.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              cjmadlife5930@gmail.com
            </p>

            {/* ✅ 액션 버튼들 */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick("projects");
                }}
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:brightness-110"
              >
                프로젝트 보기
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick("contact");
                }}
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-white"
              >
                연락처
              </a>
              {/* 새 버튼: 이력서 보러가기 */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50"
              >
                이력서 보러가기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 mx-auto mt-12 max-w-6xl px-4">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 md:text-3xl">
            About Me
          </h2>

          <h3 className="mb-3 text-lg font-semibold text-gray-800">
            사용자 경험을 끝까지 고민합니다.
          </h3>
          <p className="mb-6 text-gray-700">
            내가 만든 화면, 내가 만든 흐름이 실제 사용자에게 어떤 경험을 줄지
            끝까지 책임지고자 합니다. 기능 하나를 만들더라도
            <span className="mx-1 font-medium">“왜 이 기능이 필요한가?”</span>를
            끊임없이 묻고, 기획 단계부터 적극적으로 의견을 제시합니다. 팀의
            요구와 사용자의 의도를 빠르게 파악하고, 자연스러운 흐름을 설계해
            구현으로 옮기는 데 강점이 있습니다.
          </p>

          <h3 className="mb-3 text-lg font-semibold text-gray-800">
            함께 일하는 개발자
          </h3>
          <p className="mb-10 text-gray-700">
            협업을 단순한 역할 분담이 아닌 하나의 방향을 함께 고민하는 과정으로
            생각합니다. 디자이너/기획자/개발자와의 커뮤니케이션에 익숙하며, 실현
            가능한 해결책을 제안합니다. 코드 리뷰와 회고에 적극적으로 참여하고,
            필요한 문서화와 테스트도 놓치지 않습니다.
          </p>

          <h3 className="mb-6 text-xl font-semibold text-gray-900">
            기술 스택
          </h3>
          <div className="mb-8 flex flex-wrap items-center gap-6">
            <Image
              src="/stack/js.png"
              alt="JavaScript"
              width={48}
              height={48}
            />
            <Image
              src="/stack/ts.png"
              alt="TypeScript"
              width={48}
              height={48}
            />
            <Image src="/stack/react.png" alt="React" width={48} height={48} />
            <Image src="/stack/next.png" alt="Next.js" width={48} height={48} />
            <Image
              src="/stack/tailwind.png"
              alt="Tailwind CSS"
              width={48}
              height={48}
            />
            <Image src="/stack/node.png" alt="Node.js" width={48} height={48} />
            <Image src="/stack/git.png" alt="Git" width={48} height={48} />
            <Image
              src="/stack/solidity.png"
              alt="Solidity"
              width={48}
              height={48}
            />
            <Image
              src="/stack/githuB.png"
              alt="GitHub"
              width={48}
              height={48}
            />
            <Image
              src="/stack/notion.png"
              alt="Notion"
              width={48}
              height={48}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-gray-50 p-6">
              <h4 className="mb-3 text-lg font-semibold text-gray-900">
                Frontend
              </h4>
              <ul className="space-y-1 text-gray-700">
                <li>• React / Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Zustand / Redux</li>
              </ul>
            </div>
            <div className="rounded-xl bg-gray-50 p-6">
              <h4 className="mb-3 text-lg font-semibold text-gray-900">
                Backend & Tools
              </h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Node.js / Express</li>
                <li>• JWT 인증</li>
                <li>• Axios</li>
                <li>• Git / GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 mx-auto mt-12 max-w-6xl px-4"
      >
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 md:text-3xl">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 mx-auto mt-12 max-w-6xl px-4 pb-16"
      >
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-8 text-2xl font-semibold text-gray-900 md:text-3xl">
            Contact
          </h2>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/stack/gmail2.png"
                  alt="gmail"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">이메일</h3>
                  <p className="text-gray-700">cjmadlife5930@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/stack/githuB.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">GitHub</h3>
                  <a
                    href="https://github.com/mls5930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    github.com/mls5930
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                  P
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">포트폴리오</h3>
                  <a
                    className="text-blue-700 hover:underline"
                    href="https://portfolio-hazel-eight-6z0c6qi9rf.vercel.app/"
                  >
                    https://portfolio-hazel-eight-6z0c6qi9rf.vercel.app/
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-6">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                업무 영역
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 프론트엔드 개발 (React, Next.js)</li>
                <li>• UI/UX 설계 및 구현</li>
                <li>• 반응형 웹 개발</li>
                <li>• 상태관리 및 인증 시스템</li>
                <li>• 배포 및 운영</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
