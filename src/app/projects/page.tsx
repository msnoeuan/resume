export default function Projects() {
  return (
    <article className="max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">Projects</h1>
      <p className="text-gray-600 mb-8">
        학교 수업이나 개인적으로 진행했던 주요 프로젝트들을 기록한 공간입니다.
      </p>

      <div className="space-y-8">
        
        {/* ai-purby */}
        <a href="https://github.com/ai-purby/purby-backend" target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">진행 중</div>
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">ai-purby (스마트 홈 어시스턴트 백엔드)</h2>
          </div>
          
          <p className="text-sm text-gray-500 font-medium mb-4">2026. 03 ~ 현재</p>
          
          <p className="text-gray-700 leading-relaxed">
            시간, 날씨, 일정 등 생활 정보를 제공하고 음성으로 소통하는 AI 기반 스마트 홈 디바이스 'Purby'의 백엔드(purby-backend)를 담당하고 있습니다. FastAPI를 기반으로 STT/TTS 및 LLM 연동, 일정/날씨/타이머 기능 라우팅, 데이터 저장 및 상태 동기화 등 핵심 로직을 개발 중입니다.
          </p>

          <hr className="border-t border-gray-100 my-4" />

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">FastAPI</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Python</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">PostgreSQL</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Redis</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Docker</span>
            </div>
          </div>
        </a>

        {/* Dongbaeksoop */}
        <a href="https://github.com/msnoeuan/Dongbaeksoop" target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">Dongbaeksoop (서블릿 기반 백엔드 프로젝트)</h2>
          </div>
          
          <p className="text-sm text-gray-500 font-medium mb-4">2025. 12 (동양미래대 2학년 2학기)</p>
          
          <p className="text-gray-700 leading-relaxed">
            2학년 2학기 '백엔드 실습' 과목 기말 프로젝트입니다. 서블릿(Servlet)을 기반으로 백엔드 시스템을 설계하고 구현하며 API 구축, 데이터베이스 연동 등의 백엔드 핵심 실무 역량을 길렀습니다.
          </p>

          <hr className="border-t border-gray-100 my-4" />

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Java Servlet</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Backend</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Database</span>
            </div>
          </div>
        </a>

        {/* kr-lowbirth-causes-analysis */}
        <a href="https://github.com/msnoeuan/kr-lowbirth-causes-analysis" target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">저출산 원인 분석 (Streamlit 토이 프로젝트)</h2>
          </div>
          
          <p className="text-sm text-gray-500 font-medium mb-4">2025. 11 (동양미래대 2학년 2학기)</p>
          
          <p className="text-gray-700 leading-relaxed">
            2학년 2학기 '빅데이터 실습' 과목에서 진행한 Streamlit 기반 토이 프로젝트입니다. 대한민국의 저출산 원인을 데이터 기반으로 분석하고 시각화하여 데이터 처리 및 시각화 역량을 길렀습니다.
          </p>

          <hr className="border-t border-gray-100 my-4" />

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Python</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Streamlit</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">Data Analysis</span>
            </div>
          </div>
        </a>

        {/* React Project */}
        <a href="https://github.com/msnoeuan/React_Project" target="_blank" rel="noopener noreferrer" className="block border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">웹 프론트엔드 실습 기말 프로젝트</h2>
          </div>
          
          <p className="text-sm text-gray-500 font-medium mb-4">2025. 06 (동양미래대 2학년 1학기)</p>
          
          <p className="text-gray-700 leading-relaxed">
            2학년 1학기 '웹 프론트엔드 실습' 기말 과제로 제출한 React 기반 웹 서비스입니다. 
            React의 기초 컴포넌트 구조, State 및 Props 활용, 그리고 라우팅(Routing) 등 전반적인 프론트엔드 기술을 학습하고 적용하는 데 초점을 맞추었습니다.
          </p>

          <hr className="border-t border-gray-100 my-4" />

          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">React</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">JavaScript</span>
              <span className="px-3 py-1.5 bg-white text-gray-700 rounded-md text-sm border border-gray-200 shadow-sm">CSS</span>
            </div>
          </div>
        </a>
      </div>
    </article>
  );
}
