import Link from "next/link";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About cooked.fish - The World's Largest Fish Recipe Database",
  description:
    "Learn about cooked.fish, the comprehensive database of fish recipes. Every fish, every method, every cuisine. Fish only. No shellfish.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-6xl">🐟</span>
              <span className="text-6xl">🔥</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Every Fish Deserves Its Moment in the Pan
          </h1>
          <p className="text-xl text-blue-100">
            We're building the most comprehensive, searchable database of fish
            recipes on the internet. No bait and switch.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              cooked.fish is a comprehensive database of fish recipes. Whether
              you caught a wahoo off the coast of Hawaii, picked up some walleye
              from the market, or want to try cooking monkfish for the first
              time, we have you covered.
            </p>
            <p>
              We provide detailed recipes with clear instructions, cooking
              times, difficulty ratings, and the ability to search and filter by
              fish type, cooking method, cuisine, and more.
            </p>
          </div>
        </section>

        {/* Why Fish Only */}
        <section className="mb-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Fish Only?
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Fish is a distinct category of aquatic protein. It has unique
              characteristics, cooking methods, nutritional profiles, and
              culinary applications that differ fundamentally from shellfish.
            </p>
            <p>
              By focusing exclusively on fish, we can provide comprehensive,
              specialized content that serves this specific need better than
              generalized seafood sites.
            </p>
            <p className="font-semibold text-gray-900">
              This means no shellfish. No crustaceans. No mollusks. No lobster,
              shrimp, crab, clams, mussels, oysters, or scallops.
            </p>
            <p>
              If it has fins and lives in water, we're interested. If it
              doesn't, we're not. This is a line we won't cross, no matter how
              many times people ask about scallops.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Comprehensive Coverage
              </h3>
              <p className="text-gray-700">
                From common fish like salmon and cod to rare varieties like
                barramundi and Arctic char, we're building recipes for every
                edible fish species.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast & Functional
              </h3>
              <p className="text-gray-700">
                No bloated frameworks, no autoplaying videos, no essay about how
                your grandmother caught this fish in 1987. Just fast, searchable,
                functional recipe content. We respect your time and your hunger.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Smart Search
              </h3>
              <p className="text-gray-700">
                Fuzzy search that understands variations in fish names. Filter
                by cooking method, cuisine, difficulty, or just search by fish
                type.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No Nonsense
              </h3>
              <p className="text-gray-700">
                Tested recipes with clear instructions. No affiliate links
                disguised as recommendations. No unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Vision</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              We believe that if you have a fish and want to cook it, you should
              be able to find a good recipe in seconds. Not after scrolling past
              ads and stories. Not after clicking through five pages. Just
              search, find, cook.
            </p>
            <p>
              We're building toward a future where every edible fish species has
              multiple recipes across different cuisines and cooking methods. A
              database so comprehensive that "I don't know how to cook this
              fish" is never a problem again.
            </p>
            <p>
              Whether you reeled in something exotic or grabbed something at the
              market, you'll find a recipe. Whether you want to grill it, bake
              it, or steam it, we've got you covered.
            </p>
            <p className="font-semibold text-gray-900">
              We're not there yet, but we're scaling up every week.
            </p>
          </div>
        </section>

        {/* Current Status */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Where We Are Now
          </h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              As of January 2026, we have 30+ recipes covering 40+ fish types
              across 8 cooking methods. We're actively expanding the database
              with a goal of 50-75 recipes by the end of January, and continued
              growth from there.
            </p>
            <p>
              The site is functional, fast, and searchable. We're focused on
              adding more recipes, particularly for less common fish varieties,
              and diversifying cooking methods and cuisines.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Cook Some Fish?</h2>
          <p className="text-blue-100 mb-6">
            Browse our growing collection of fish recipes and find exactly what
            you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Browse All Recipes
            </Link>
            <Link
              href="/faq"
              className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors border-2 border-white"
            >
              Read the FAQ
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
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
                className="hover:text-white transition-colors"
              >
                Browse
              </Link>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            © 2026 cooked.fish. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
