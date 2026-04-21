export default function Home() {
  return (
    <article className="max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">About me</h1>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          안녕하세요! 탄탄한 서버와 효율적인 데이터 관리에 관심이 많은 백엔드 개발자 지망생 <strong>유승민</strong>입니다.
        </p>

        <p>
          현재 동양미래대학교 컴퓨터소프트웨어공학과 3학년에 재학 중이며, 다양한 애플리케이션의 핵심 로직을 다루는 <strong>백엔드 및 데이터베이스(DB)</strong> 기술을 중점적으로 학습하고 있습니다. 데이터의 효율적인 처리와 안정적인 시스템 설계에 큰 흥미를 느끼며, 이를 뒷받침하는 <strong>네트워크</strong> 기술도 깊이 있게 배우고 싶습니다.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Interests</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Backend</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Server</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Database</span>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">Tech Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div>
          <div className="text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Backend</div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">Java</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">Python</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">FastAPI</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">Spring Boot</span>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Database</div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">SQL</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">MySQL</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">PostgreSQL</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">Redis</span>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Frontend</div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">React</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">JavaScript</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">HTML/CSS</span>
          </div>
        </div>
        <div>
          <div className="text-xs font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Tools & Others</div>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">Git & GitHub</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">Docker</span>
            <span className="px-2.5 py-1 bg-gray-50 text-gray-700 rounded text-sm border border-gray-200">Streamlit</span>
          </div>
        </div>
      </div>
    </article>
  );
}
