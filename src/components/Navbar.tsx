import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 py-4 px-6 mb-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          유승민
        </Link>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">About</Link>
          <Link href="/experience" className="hover:text-gray-900 transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-gray-900 transition-colors">Projects</Link>
          <Link href="/repositories" className="hover:text-gray-900 transition-colors">Repositories</Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
        </div>
      </div>
    </nav>
  );
}