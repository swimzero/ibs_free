import "./globals.css";

export const metadata = {
  title: "과민성대장위키",
  description: "과민성대장증후군(IBS)을 위한 음식 정보 공유 플랫폼",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="bg-gray-100 text-gray-900">
        {/* Header */}
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">과민성대장위키</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:underline">
                    홈
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    소개
                  </a>
                </li>
                <li>
                  <a href="/foods" className="hover:underline">
                    음식 정보
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 과민성대장위키. 모든 권리 보유.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}