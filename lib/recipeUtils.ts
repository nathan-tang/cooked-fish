import { Recipe, RecipeFilters } from "./data/types";
import { recipes } from "./data/recipes";

/**
 * Get all recipes
 */
export function getAllRecipes(): Recipe[] {
  return recipes;
}

/**
 * Get recipe by ID
 */
export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}

/**
 * Get recipe by slug (for URL routing)
 */
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

/**
 * Get all unique fish types from all recipes
 * Flattens the fishType arrays and returns unique values, sorted alphabetically
 */
export function getAllFishTypes(): string[] {
  const allFishTypes = recipes.flatMap((recipe) => recipe.fishType);
  return Array.from(new Set(allFishTypes)).sort();
}

/**
 * Get all unique cooking methods
 */
export function getAllCookingMethods(): string[] {
  const methods = recipes.map((recipe) => recipe.cookingMethod);
  return Array.from(new Set(methods)).sort();
}

/**
 * Get all unique cuisines
 */
export function getAllCuisines(): string[] {
  const cuisines = recipes.map((recipe) => recipe.cuisine);
  return Array.from(new Set(cuisines)).sort();
}

/**
 * Normalize fish name for fuzzy matching
 * Handles: spacing, hyphens, case, common aliases
 */
function normalizeFishName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[-\s]/g, "") // Remove hyphens and spaces
    .replace(/fish$/i, ""); // Remove trailing "fish"
}

/**
 * Check if a fish name matches the search query (fuzzy)
 * Supports partial matches and common variations
 */
function fishNameMatches(fishName: string, query: string): boolean {
  const normalizedFish = normalizeFishName(fishName);
  const normalizedQuery = normalizeFishName(query);

  // Exact match after normalization
  if (normalizedFish === normalizedQuery) return true;

  // Partial match (e.g., "mahi" matches "mahi mahi")
  if (normalizedFish.includes(normalizedQuery)) return true;
  if (normalizedQuery.includes(normalizedFish)) return true;

  return false;
}

/**
 * Search recipes by fish type with fuzzy matching
 */
export function searchRecipesByFish(query: string): Recipe[] {
  if (!query.trim()) return recipes;

  return recipes.filter((recipe) =>
    recipe.fishType.some((fish) => fishNameMatches(fish, query))
  );
}

/**
 * Filter recipes based on multiple criteria
 */
export function filterRecipes(filters: RecipeFilters): Recipe[] {
  let filtered = recipes;

  // Filter by fish type
  if (filters.fishType) {
    filtered = filtered.filter((recipe) =>
      recipe.fishType.some((fish) => fishNameMatches(fish, filters.fishType!))
    );
  }

  // Filter by cooking method
  if (filters.cookingMethod) {
    filtered = filtered.filter(
      (recipe) => recipe.cookingMethod === filters.cookingMethod
    );
  }

  // Filter by difficulty
  if (filters.difficulty) {
    filtered = filtered.filter(
      (recipe) => recipe.difficulty === filters.difficulty
    );
  }

  // Filter by cuisine
  if (filters.cuisine) {
    filtered = filtered.filter((recipe) => recipe.cuisine === filters.cuisine);
  }

  // Search by title or description
  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filtered = filtered.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(query) ||
        recipe.description?.toLowerCase().includes(query) ||
        recipe.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
        recipe.fishType.some((fish) => fishNameMatches(fish, query))
    );
  }

  return filtered;
}

/**
 * Get featured/random recipes for homepage
 */
export function getFeaturedRecipes(count: number = 6): Recipe[] {
  // For MVP, just return first N recipes
  // In production, could be random, highest rated, or editor's picks
  return recipes.slice(0, count);
}

/**
 * Get related recipes based on fish type or cuisine
 */
export function getRelatedRecipes(
  recipe: Recipe,
  count: number = 4
): Recipe[] {
  const related = recipes.filter((r) => {
    if (r.id === recipe.id) return false;

    // Match by fish type
    const hasSameFish = r.fishType.some((fish) =>
      recipe.fishType.includes(fish)
    );

    // Match by cuisine
    const hasSameCuisine = r.cuisine === recipe.cuisine;

    return hasSameFish || hasSameCuisine;
  });

  // Shuffle and return count
  return related.sort(() => 0.5 - Math.random()).slice(0, count);
}
