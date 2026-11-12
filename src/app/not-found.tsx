import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#090B10] text-[#F5F7FC] flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-5 max-w-md">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#315BDB]/20 text-[#4776F5] border border-[#4776F5]/40">
            404 // NOT FOUND
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-[#929BAA] leading-relaxed">
            The page you are looking for does not exist or has been relocated.
          </p>
          <div className="pt-2">
            <Link
              href="/en"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-bold bg-[#315BDB] hover:bg-[#4776F5] text-white transition-all shadow-lg"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

