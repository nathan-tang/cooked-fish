import Link from "next/link";
import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { AdSlot } from "@/components/AdSlot";
import { HeroSearch } from "@/components/HeroSearch";
import { WaveDivider } from "@/components/WaveDivider";
import { Footer } from "@/components/Footer";
import { getFeaturedRecipes } from "@/lib/recipeUtils";

export default function Home() {
  const featuredRecipes = getFeaturedRecipes(6);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-amber-700 to-orange-900 text-white py-20 overflow-hidden">
        {/* Decorative blurred circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

          <p className="text-xl md:text-2xl text-orange-100 mb-10 max-w-3xl mx-auto">
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
              className="px-8 py-4 bg-white text-orange-700 font-semibold rounded-lg hover:bg-orange-50 transition-colors text-lg shadow-lg"
            >
              Browse All Recipes
            </Link>
            <Link
              href="/recipes?fish=salmon"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors text-lg border-2 border-white/40"
            >
              Find Recipes by Fish
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider color="#fafaf9" />

      {/* Ad Slot - Header */}
      <div className="py-6 bg-white border-b border-stone-200">
        <AdSlot slot="header" />
      </div>

      {/* Featured Recipes */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-stone-900">
              Featured Recipes
            </h2>
            <Link
              href="/recipes"
              className="text-orange-600 hover:text-orange-700 font-medium"
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
      <section className="py-12 bg-white texture-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-stone-700">
            <span className="font-semibold text-stone-900">
              Cajun blackened catfish.
            </span>{" "}
            Cedar-planked salmon.{" "}
            <span className="font-semibold text-stone-900">
              Mediterranean salt-baked branzino.
            </span>{" "}
            Tandoori pomfret.{" "}
            <span className="font-semibold text-stone-900">
              Southern fried fish.
            </span>{" "}
            Nordic cured gravlax.
          </p>
          <p className="text-stone-600 mt-4">
            23 cooking methods. 40+ fish types. Zero shellfish. Zero life
            stories. Zero BS.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
