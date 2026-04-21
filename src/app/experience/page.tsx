const GithubIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);

export default function Experience() {
  return (
    <article className="max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">Experience</h1>
      <p className="text-gray-600 mb-8">
        프로젝트와 활동을 통해 쌓아온 실무 경험들을 정리한 공간입니다.
      </p>

      <div className="relative border-l border-gray-200 ml-3 md:ml-4 space-y-10 pb-8">
        {/* ai-purby */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-stone-800 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-gray-900">ai-purby 백엔드 개발</h3>
              <a href="https://github.com/ai-purby/purby-backend" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 border border-stone-300 hover:border-stone-400 rounded-full px-2 py-0.5 transition-colors">
                <GithubIcon />purby-backend
              </a>
            </div>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2026. 03 ~ 현재</span>
          </div>
          <p className="text-gray-700 mt-2">
            AI 스마트 홈 디바이스 Purby 백엔드 담당 — FastAPI 기반 STT/TTS·LLM 연동, 일정·날씨·타이머 API 구현
          </p>
        </div>

        {/* Portfolio */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-gray-900">포트폴리오 웹사이트 구축</h3>
              <a href="https://github.com/msnoeuan/resume" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 border border-stone-300 hover:border-stone-400 rounded-full px-2 py-0.5 transition-colors">
                <GithubIcon />resume
              </a>
            </div>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2026. 04</span>
          </div>
          <p className="text-gray-700 mt-2">
            Next.js + Tailwind CSS 기반 개인 포트폴리오 사이트 설계 및 GitHub Pages 배포
          </p>
        </div>

        {/* Dongyang Mirae 2-2 */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-gray-900">동양미래대학교 2학년 2학기 수료</h3>
              <a href="https://github.com/msnoeuan/kr-lowbirth-causes-analysis" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 border border-stone-300 hover:border-stone-400 rounded-full px-2 py-0.5 transition-colors">
                <GithubIcon />저출산 원인 분석
              </a>
              <a href="https://github.com/msnoeuan/Dongbaeksoop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 border border-stone-300 hover:border-stone-400 rounded-full px-2 py-0.5 transition-colors">
                <GithubIcon />동백숲
              </a>
            </div>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2025. 12</span>
          </div>
          <p className="text-gray-700 mt-2">
            전공 심화 과정 이수 — 빅데이터 분석 및 서블릿 백엔드 프로젝트 수행
          </p>
        </div>

        {/* SQLD */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="text-xl font-bold text-gray-900">SQLD 자격증 취득</h3>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2025. 09</span>
          </div>
          <p className="text-gray-700 mt-2">
            SQL 개발자 자격시험 합격 — 데이터베이스 설계 및 쿼리 작성 역량 검증
          </p>
        </div>

        {/* Dongyang Mirae 2-1 */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-gray-900">동양미래대학교 2학년 1학기 수료</h3>
              <a href="https://github.com/msnoeuan/React_Project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 border border-stone-300 hover:border-stone-400 rounded-full px-2 py-0.5 transition-colors">
                <GithubIcon />React 기말 프로젝트
              </a>
            </div>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2025. 06</span>
          </div>
          <p className="text-gray-700 mt-2">
            웹 개발 실무 및 전공 핵심 과정 이수 — React 기말 프로젝트 완성
          </p>
        </div>

        {/* Dongyang Mirae 1-2 */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="text-xl font-bold text-gray-900">동양미래대학교 1학년 2학기 수료</h3>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2024. 12</span>
          </div>
          <p className="text-gray-700 mt-2">
            웹·서버·데이터베이스 전반의 개발 기초 확립
          </p>
        </div>

        {/* Dongyang Mirae 1-1 */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="text-xl font-bold text-gray-900">동양미래대학교 1학년 1학기 수료</h3>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2023. 06</span>
          </div>
          <p className="text-gray-700 mt-2">
            프로그래밍 기초 및 컴퓨터 과학 입문 과정 이수
          </p>
        </div>

        {/* Dongyang Mirae Entrance */}
        <div className="relative pl-6 md:pl-8">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[6.5px] top-1.5 border-2 border-white"></div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="text-xl font-bold text-gray-900">동양미래대학교 입학</h3>
            <span className="text-sm text-gray-500 font-medium sm:ml-4">2023. 03</span>
          </div>
          <p className="text-gray-700 mt-2">
            컴퓨터소프트웨어공학과 입학
          </p>
        </div>
      </div>
    </article>
  );
}
