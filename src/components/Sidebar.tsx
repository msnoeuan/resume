import { MapPin, Mail, Briefcase, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/resume' : '';

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center md:items-start space-y-5 md:sticky md:top-8">
      <div className="w-56 h-72 relative rounded-[50%] overflow-hidden bg-gray-200 mb-3 mx-auto md:mx-0 shadow-sm border border-gray-100">
        <Image
          src={`${basePath}/me.JPEG`}
          alt="유승민 프로필 사진"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          quality={100}
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="text-center md:text-left w-full">
        <h1 className="text-3xl font-bold text-gray-900">유승민</h1>
        <p className="text-lg text-gray-600 font-medium mb-4">Dongyang Mirae Univ.</p>
        <p className="text-base text-gray-500 mb-8 leading-relaxed">
          백엔드(Backend) 시스템과 데이터베이스(DB) 구조 설계에 관심이 많은 학생입니다. 견고한 서버를 구축하는 데 흥미를 느낍니다.
        </p>
      </div>

      <div className="w-full space-y-4 text-base text-gray-600">
        <div className="flex items-center gap-3">
          <MapPin size={18} className="text-gray-400" />
          <span>Seoul, South Korea</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-gray-400" />
          <a href="mailto:your.email@example.com" className="hover:text-stone-500 transition-colors">Email</a>
        </div>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <a href="https://github.com/msnoeuan" target="_blank" rel="noopener noreferrer" className="hover:text-stone-500 transition-colors">Github</a>
        </div>
        <div className="flex items-center gap-3">
          <MessageCircle size={18} className="text-gray-400" />
          <a href="https://velog.io/@msnoeuan/posts" target="_blank" rel="noopener noreferrer" className="hover:text-stone-500 transition-colors">Velog</a>
        </div>
      </div>
    </div>
  );
}