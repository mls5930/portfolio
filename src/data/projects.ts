export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  userUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Yummy Burgers",
    description:
      "햄버거 예약사이트 홈페이지를 구성하여 사용자가 사이트에서 버거를 주문하여 장바구니에 담고 주문까지 가능한 사이트를 구현했습니다.",
    image: "/YummyBurger.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/mls5930/burger_project",
    liveUrl: "https://burger-project-8e98k4a7g-kohyesungs-projects.vercel.app",
  },
  {
    title: "Book Island",
    description:
      "사용자가 자유롭게 도서 리뷰를 작성하고 다른 사용자들과 소통할 수 있는 커뮤니티 기반 도서 리뷰 플랫폼입니다.",
    image: "/bookisland.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
    githubUrl: "https://github.com/mls5930/BookReviewProject_front",
    demoUrl: "https://youtu.be/tkNDZJjryZM?si=1t89dPxXOK719c5r",
  },
  {
    title: "누룩 (Nurook)",
    description:
      "사용자가 전통주에 대한 정보를 제공받고 손쉬운 UX/UI를 통해 전통주를 검색하고 체험 예약까지 진행할 수 있는 플랫폼입니다.",
    image: "/Nurook.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express"],
    githubUrl: "https://github.com/mls5930/NulookFront",
    liveUrl: "http://43.201.101.26",
    demoUrl: "https://youtu.be/xMNwOQQiYkI?si=IWDwtD03rVCaVSRZ",
  },
  {
    title: "MVE",
    description:
      "Web3 기반의 음원 설문 플랫폼으로, 사용자는 음악에 대한 감상 설문에 참여하고 그 기록을 NFT로 발행하며 리워드를 받을 수 있는 구조입니다.",
    image: "/MVE-admin.png",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "Solidity"],
    githubUrl: "https://github.com/mls5930/MVE__PROJECT",
    liveUrl: "https://admin.tunemate.store",
    userUrl: "https://tunemate.store",
  },
];
