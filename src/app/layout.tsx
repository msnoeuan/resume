import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Academic/Developer Portfolio built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 pb-20">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            <aside className="w-full md:w-80 shrink-0">
              <Sidebar />
            </aside>
            <div className="flex-1 min-w-0">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}