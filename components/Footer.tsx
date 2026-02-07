import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-16">
      {/* Gradient accent bar */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-teal-500" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <span className="text-xl">🐟</span>
                  <span className="text-xl">🔥</span>
                </div>
                <span className="text-white font-bold text-xl">
                  cooked.fish
                </span>
              </div>
              <p className="text-sm">The future of fish recipes online</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/recipes"
                className="hover:text-orange-400 transition-colors"
              >
                Browse
              </Link>
              <Link
                href="/faq"
                className="hover:text-orange-400 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-400 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-sm">
            © 2026 cooked.fish. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
