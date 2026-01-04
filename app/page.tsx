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
            Every Fish Deserves
            <br />
            Its Moment in the Pan
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
            From Cajun blackened catfish to Mediterranean salt-baked branzino.
            From cedar-planked salmon to tandoori pomfret. Every fish, every
            tradition, every technique. No shellfish, no life stories, no bait
            and switch.
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

      {/* NO SHELLFISH Declaration */}
      <section className="py-16 bg-white border-y-4 border-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-2xl mb-4">
              🚫 ABSOLUTELY NO SHELLFISH 🚫
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Fish Only. We're Not Kidding.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-bold text-green-900 mb-2 text-lg">
                ALLOWED (Fish)
              </h3>
              <p className="text-sm text-green-800">
                Salmon · Tuna · Catfish · Branzino · Sardines · Mackerel ·
                Halibut · Cod · Trout · Snapper · Literally any fish with fins
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
              <div className="text-3xl mb-2">❌</div>
              <h3 className="font-bold text-red-900 mb-2 text-lg">
                BANNED FOREVER (Shellfish)
              </h3>
              <p className="text-sm text-red-800">
                Shrimp · Lobster · Crab · Scallops · Clams · Mussels · Oysters
                · Crawfish · Don't even ask about octopus
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-lg text-gray-700 font-medium mb-2">
              "But what about bacon-wrapped scallops?"
            </p>
            <p className="text-2xl font-bold text-gray-900">NO.</p>
            <p className="text-sm text-gray-600 mt-2">
              (Bacon-wrapped trout? YES. Fish is the star. Read the{" "}
              <Link href="/faq" className="text-blue-600 hover:underline">
                FAQ
              </Link>
              .)
            </p>
          </div>
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

      {/* Quick Traditions Callout */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-gray-900">
              Cajun blackened catfish.
            </span>{" "}
            Cedar-planked salmon.{" "}
            <span className="font-semibold text-gray-900">
              Mediterranean salt-baked branzino.
            </span>{" "}
            Tandoori pomfret.{" "}
            <span className="font-semibold text-gray-900">
              Southern fried fish.
            </span>{" "}
            Nordic cured gravlax.
          </p>
          <p className="text-gray-600 mt-4">
            23 cooking methods. 40+ fish types. Zero shellfish. Zero life
            stories. Zero BS.
          </p>
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
