import Image from "next/image";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  userUrl?: string;
  demoUrl?: string; // ✅ 시연 링크
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>

      <div className="relative mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={300}
          className="object-contain w-full h-48"
        />
      </div>

      <p className="mb-4 text-gray-600 leading-relaxed">
        {project.description}
      </p>

      {/* 기술 스택 */}
      <div className="mb-4">
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div className="flex gap-3 flex-wrap">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            프로젝트 바로가기
          </a>
        ) : (
          <span className="inline-block bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed select-none">
            배포 준비중
          </span>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200"
          >
            GitHub
          </a>
        )}

        {project.userUrl && (
          <a
            href={project.userUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            유저 프로젝트 바로가기
          </a>
        )}

        {/* ✅ 프로젝트 시연 버튼 (빨강) */}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            프로젝트 시연
          </a>
        )}
      </div>
    </div>
  );
}
