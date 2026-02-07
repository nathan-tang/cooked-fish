import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1">
              <span className="text-2xl">🐟</span>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                cooked.fish
              </h1>
              <p className="text-xs text-stone-500 -mt-1">
                Hooked on Fish Recipes
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/recipes"
              className="text-stone-700 hover:text-orange-600 font-medium transition-colors"
            >
              Browse Recipes
            </Link>
            <Link
              href="/about"
              className="text-stone-700 hover:text-orange-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-stone-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
