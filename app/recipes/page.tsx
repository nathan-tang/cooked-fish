"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { RecipeCard } from "@/components/RecipeCard";
import { AdSlot } from "@/components/AdSlot";
import {
  getAllRecipes,
  getAllFishTypes,
  getAllCookingMethods,
  getAllCuisines,
  filterRecipes,
} from "@/lib/recipeUtils";
import { RecipeFilters } from "@/lib/data/types";

function RecipesContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [filters, setFilters] = useState<RecipeFilters>({});
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Set initial search query from URL
  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
    }
  }, [initialQuery]);

  // Get all data for filters
  const allFishTypes = useMemo(() => getAllFishTypes(), []);
  const allCookingMethods = useMemo(() => getAllCookingMethods(), []);
  const allCuisines = useMemo(() => getAllCuisines(), []);

  // Filter recipes based on current filters and search
  const filteredRecipes = useMemo(() => {
    return filterRecipes({
      ...filters,
      searchQuery,
    });
  }, [filters, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header with Search */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Browse All Recipes
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Find the perfect recipe for any fish. Search by fish type, cooking
            method, cuisine, or just browse everything.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="Search by fish type, recipe name, or tags..."
              initialValue={initialQuery}
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        filters={filters}
        onFilterChange={setFilters}
        fishTypes={allFishTypes}
        cookingMethods={allCookingMethods}
        cuisines={allCuisines}
      />

      {/* Ad Slot */}
      <div className="py-6 bg-white border-b border-gray-200">
        <AdSlot slot="header" />
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredRecipes.length === 0 ? (
              <span>No recipes found. Try adjusting your filters.</span>
            ) : (
              <span>
                Showing <strong>{filteredRecipes.length}</strong>{" "}
                {filteredRecipes.length === 1 ? "recipe" : "recipes"}
              </span>
            )}
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🐟</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No recipes found
            </h3>
            <p className="text-gray-600 mb-6">
              Try different filters or search terms
            </p>
            <button
              onClick={() => {
                setFilters({});
                setSearchQuery("");
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom Ad */}
        {filteredRecipes.length > 6 && (
          <div className="mt-12">
            <AdSlot slot="in-content" className="flex justify-center" />
          </div>
        )}
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

export default function RecipesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <Header />
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="text-6xl mb-4">🐟</div>
              <p className="text-gray-600">Loading recipes...</p>
            </div>
          </div>
        </div>
      }
    >
      <RecipesContent />
    </Suspense>
  );
}
