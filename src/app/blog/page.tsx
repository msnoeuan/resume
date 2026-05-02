export default function Blog() {
  return (
    <article className="max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">Blog</h1>
      <p className="text-gray-600 mb-8">
        개발하면서 배운 점, 해결한 에러, 그리고 사소한 기록들을 모아두는 곳입니다.
      </p>

      <div className="space-y-6">
        <a href="https://velog.io/@msnoeuan/C-%ED%95%A8%EC%88%98-%EC%A0%95%EB%A6%AC" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2026. 05. 02</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            C 함수 정리
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            fgets(), strtol(), strcspn(), sscanf(), execvp(), strtok(), strcpy(), waitpid() 등 주요 C 표준 함수들의 동작 방식과 특징 정리.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/HTTP-%EC%83%81%ED%83%9C-%EC%BD%94%EB%93%9C" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2026. 05. 02</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            HTTP 상태 코드
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            1xx(정보), 2xx(성공), 3xx(리다이렉션), 4xx(클라이언트 오류), 5xx(서버 오류) 등 HTTP 상태 코드의 분류와 주요 코드별 의미 정리.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/Docker" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2026. 05. 02</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            Docker
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            Docker의 개념(컨테이너, 이미지, Dockerfile)과 실무에서의 활용 사이클(Volumes, requirements.txt, docker-compose) 설명.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/Git-%EB%AA%85%EB%A0%B9%EC%96%B4" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2026. 05. 02</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            Git 명령어
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            fetch, checkout, merge, remote 등 주요 Git 명령어와 상황별 커밋 메시지 추천 가이드.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/Git-Github-%EA%B0%9C%EB%85%90" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2026. 05. 02</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            Git / Github 개념
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            버전 관리 시스템(VCS)으로서의 Git과 호스팅 서비스인 Github의 차이점, 그리고 로컬/원격 저장소 및 작업 영역(Working Directory, Staging Area, Repository) 개념 정리.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%EB%A1%9C%EC%BB%AC%EB%A7%9D%EA%B3%B5%EC%9D%B8-%EC%82%AC%EC%84%A4-%EA%B3%A0%EC%A0%95-%EC%9C%A0%EB%8F%99-IP" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2026. 04. 29</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            로컬망(공인, 사설, 고정, 유동 IP)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            네트워크 기초인 IP 주소 체계(공인/사설, 고정/유동)에 관한 참고 자료 이미지 포함.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8-%EC%8A%A4%EC%9C%84%EC%B9%ADContext-Switching" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 12</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            컨텍스트 스위칭(Context Switching)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            CPU가 여러 프로세스를 번갈아 실행하는 과정인 컨텍스트 스위칭의 개념, PCB를 통한 상태 저장 및 복구 과정, 장단점 정리.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EA%B0%84-%ED%86%B5%EC%8B%A0IPC" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 12</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            프로세스 간 통신(IPC)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            독립된 메모리 공간을 가진 프로세스들이 데이터를 주고받기 위한 메커니즘(파이프, 소켓, 공유 메모리, 메시지 큐) 설명.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%EC%8A%A4%EB%A0%88%EB%93%9CThread" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 12</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            스레드(Thread)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            프로세스 내 실행 단위인 스레드의 정의와 프로세스와의 차이점(자원 공유 방식, 컨텍스트 스위칭 비용 등) 비교 분석.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/Git" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 08</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            Git
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            Git의 초기 목표(속도, 분산 구조)와 사용 이유, 기본 용어(Snapshot, Head, Commit 등) 재정리.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%ED%8C%A8%EB%9F%AC%EB%8B%A4%EC%9E%84Paradigm" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 08</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            패러다임(Paradigm)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            사고방식이나 관점을 의미하는 패러다임의 정의와 일상 속 예시(쇼핑, 모바일 기기)를 통한 패러다임 전환 설명.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9DMachine-Learning" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 08</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            머신러닝(Machine Learning)
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            데이터로부터 알고리즘이 스스로 규칙을 학습하는 기술인 머신러닝의 정의와 활용 사례(스팸 분류, 추천 시스템) 소개.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%ED%9D%A0" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 09. 08</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            GPT한테 물어본 Computer Science
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            컴퓨터 과학(CS)의 정의와 큰 틀(이론, 시스템, 응용, 소프트웨어 개발 실무)에 대한 정리.
          </p>
        </a>

        <a href="https://velog.io/@msnoeuan/%EA%B3%B5%EB%B6%80%EB%A5%BC-%EC%97%B4%EC%8B%9C%EB%AF%B8-%ED%95%98%EC%9E%90" target="_blank" rel="noopener noreferrer" className="block group cursor-pointer border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm text-gray-500 font-medium mb-1">2025. 01. 03</p>
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-stone-500 transition-colors">
            공부를 열시미 하자
          </h2>
          <p className="text-gray-600 mt-2 line-clamp-2">
            학습에 대한 다짐을 담은 짧은 글.
          </p>
        </a>
      </div>
    </article>
  );
}