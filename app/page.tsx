import Link from "next/link";
import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { AdSlot } from "@/components/AdSlot";
import { HeroSearch } from "@/components/HeroSearch";
import { getFeaturedRecipes } from "@/lib/recipeUtils";

export default function Home() {
  const featuredRecipes = getFeaturedRecipes(6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-7xl">🐟</span>
              <span className="text-7xl">🔥</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Comprehensive Guide
            <br />
            to Cooked Fish Recipes
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            From salmon to sardines, barramundi to branzino. Every fish, every
            method, every recipe. No shellfish, no life stories, no bait and
            switch.
          </p>

          {/* Hero Search */}
          <HeroSearch />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg shadow-lg"
            >
              Browse All Recipes
            </Link>
            <Link
              href="/recipes?fish=salmon"
              className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors text-lg border-2 border-white"
            >
              Find Recipes by Fish
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Slot - Header */}
      <div className="py-6 bg-white border-b border-gray-200">
        <AdSlot slot="header" />
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe every fish deserves its moment in the pan. Whether you
            reeled in a wahoo off the coast of Hawaii, picked up some walleye
            from the market, or want to try cooking John Dory for the first
            time, cooked.fish has you covered. We're building the most
            comprehensive, searchable, and useful database of fish recipes on
            the internet. Just fish. No shellfish, no filler, no fluff.
          </p>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Recipes
            </h2>
            <Link
              href="/recipes"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">36+</div>
              <div className="text-blue-100 text-lg">Recipes</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-blue-100 text-lg">Fish Types</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">9</div>
              <div className="text-blue-100 text-lg">Cooking Methods</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Cook Some Fish?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Browse our entire collection, filter by fish type, cooking method,
            or cuisine. Find exactly what you're looking for in seconds.
          </p>
          <Link
            href="/recipes"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg shadow-lg"
          >
            Explore All Recipes
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
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
              <Link href="/recipes" className="hover:text-white transition-colors">
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
