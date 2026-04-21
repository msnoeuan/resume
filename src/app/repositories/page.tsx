export default function Repositories() {
  const repos = [
    {
      name: 'purby-backend',
      org: 'ai-purby',
      url: 'https://github.com/ai-purby/purby-backend',
      description: 'AI 스마트 홈 디바이스 Purby의 FastAPI 백엔드',
      tags: ['FastAPI', 'Python', 'PostgreSQL'],
      active: true,
    },
    {
      name: 'resume',
      url: 'https://github.com/msnoeuan/resume',
      description: '개인 포트폴리오 웹사이트',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      active: true,
    },
    {
      name: 'Dongbaeksoop',
      url: 'https://github.com/msnoeuan/Dongbaeksoop',
      description: '서블릿 기반 백엔드 기말 프로젝트',
      tags: ['Java', 'Servlet', 'Backend'],
    },
    {
      name: 'kr-lowbirth-causes-analysis',
      url: 'https://github.com/msnoeuan/kr-lowbirth-causes-analysis',
      description: '대한민국 저출산 원인 빅데이터 분석 토이 프로젝트',
      tags: ['Python', 'Streamlit'],
    },
    {
      name: '2-2',
      url: 'https://github.com/msnoeuan/2-2',
      description: '2학년 2학기 수업 실습 코드 정리',
      tags: ['Algorithm', 'Backend'],
    },
    {
      name: 'React_Project',
      url: 'https://github.com/msnoeuan/React_Project',
      description: '웹 프론트엔드 실습 기말 프로젝트',
      tags: ['React', 'JavaScript'],
    },
    {
      name: '2-1',
      url: 'https://github.com/msnoeuan/2-1',
      description: '2학년 1학기 수업 실습 코드 정리',
      tags: ['Data Structure', 'Python', 'Database'],
    },
    {
      name: '1-2',
      url: 'https://github.com/msnoeuan/1-2',
      description: '1학년 2학기 수업 실습 코드 정리',
      tags: ['Java', 'Database'],
    },
  ];

  return (
    <article className="max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">Repositories</h1>
      <p className="text-gray-600 mb-8">
        GitHub에 올린 모든 레포지토리를 한눈에 모아볼 수 있는 공간입니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group relative"
          >
            {repo.active && (
              <span className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full" title="활발히 개발 중"></span>
            )}
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
              </svg>
              <h2 className="text-base font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
                {repo.org ? `${repo.org}/` : ''}{repo.name}
              </h2>
            </div>
            <p className="text-sm text-gray-600 mb-3">{repo.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {repo.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
