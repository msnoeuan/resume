export default function Blog() {
  return (
    <article className="max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">Blog</h1>
      <p className="text-gray-600 mb-8">
        개발하면서 배운 점, 해결한 에러, 그리고 사소한 기록들을 모아두는 곳입니다.
      </p>

      <div className="space-y-6">
        <a href="https://velog.io/@msnoeuan/%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%8A%A4%EC%9C%84%EC%B9%ADContext-Switching" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 12</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            컨텍스트 스위칭(Context Switching)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            CPU가 한 번에 하나의 작업만 실행할 수 있는 환경에서 멀티태스킹이 가능하도록 운영체제가 CPU를 할당하는 원리인 컨텍스트 스위칭에 대해 학습한 내용을 정리했습니다.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EA%B0%84-%ED%86%B5%EC%8B%A0IPC" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 12</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            프로세스 간 통신(IPC)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            독립적인 메모리 공간을 갖는 프로세스들이 데이터를 주고받거나 협력하기 위해 사용하는 IPC(Inter-Process Communication) 기법(파이프, 소켓, 공유 메모리 등)을 정리했습니다.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%EC%8A%A4%EB%A0%88%EB%93%9CThread" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 12</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            스레드(Thread)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            운영체제의 실행 단위인 프로세스와 스레드의 차이를 비교하고, 각 특징과 메모리 구조, 컨텍스트 스위칭 비용에 대한 내용을 다뤘습니다.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/Git" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 08</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            Git
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            버전 관리 시스템(VCS)인 Git의 기본 개념과 Git 3가지 작업 영역(Working Directory, Staging Area, Repository) 및 필수 용어들에 대해 정리했습니다.
          </p>
        </a>
      </div>
    </article>
  );
}