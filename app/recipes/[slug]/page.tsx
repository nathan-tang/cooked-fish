import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { AdSlot } from "@/components/AdSlot";
import { Footer } from "@/components/Footer";
import {
  getAllRecipes,
  getRecipeBySlug,
  getRelatedRecipes,
} from "@/lib/recipeUtils";
import { Metadata } from "next";

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all recipes
export async function generateStaticParams() {
  const recipes = getAllRecipes();
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  return {
    title: `${recipe.title} | cooked.fish`,
    description:
      recipe.description ||
      `Learn how to make ${recipe.title} with this ${recipe.difficulty} ${recipe.cuisine} recipe.`,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  const relatedRecipes = getRelatedRecipes(recipe, 3);
  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Recipe Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-stone-600">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/recipes" className="hover:text-orange-600">
              Recipes
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-900">{recipe.title}</span>
          </div>

          {/* Title and Description */}
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            {recipe.title}
          </h1>
          {recipe.description && (
            <p className="text-xl text-stone-600 mb-6">{recipe.description}</p>
          )}

          {/* Fish Type Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {recipe.fishType.map((fish) => (
              <Link
                key={fish}
                href={`/recipes?fish=${encodeURIComponent(fish)}`}
                className="inline-block px-4 py-2 bg-teal-100 text-teal-800 font-medium rounded-full hover:bg-teal-200 transition-colors"
              >
                {fish}
              </Link>
            ))}
          </div>

          {/* Recipe Meta */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6 border-y border-stone-200">
            <div>
              <div className="text-sm text-stone-600 mb-1">Prep Time</div>
              <div className="text-lg font-semibold">{recipe.prepTime} min</div>
            </div>
            <div>
              <div className="text-sm text-stone-600 mb-1">Cook Time</div>
              <div className="text-lg font-semibold">{recipe.cookTime} min</div>
            </div>
            <div>
              <div className="text-sm text-stone-600 mb-1">Total Time</div>
              <div className="text-lg font-semibold">{totalTime} min</div>
            </div>
            <div>
              <div className="text-sm text-stone-600 mb-1">Servings</div>
              <div className="text-lg font-semibold">{recipe.servings}</div>
            </div>
            <div>
              <div className="text-sm text-stone-600 mb-1">Difficulty</div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    recipe.difficulty === "easy"
                      ? "bg-green-500"
                      : recipe.difficulty === "medium"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                ></span>
                <span className="text-lg font-semibold capitalize">
                  {recipe.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Slot */}
      <div className="py-6 bg-white border-b border-stone-200">
        <AdSlot slot="header" />
      </div>

      {/* Recipe Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-stone-200/60 p-8 mb-8">
          {/* Recipe Image Placeholder */}
          <div className="w-full h-96 bg-gradient-to-br from-orange-100 via-amber-50 to-teal-100 rounded-xl mb-8 flex items-center justify-center">
            <span className="text-9xl emoji-bob">🐟</span>
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span className="text-lg text-stone-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ad Slot - In Content */}
          <div className="my-8">
            <AdSlot slot="in-content" className="flex justify-center" />
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="step-number">
                    {index + 1}
                  </span>
                  <p className="text-lg text-stone-700 pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Recipe Info Footer */}
          <div className="mt-8 pt-8 border-t border-stone-200">
            <div className="flex flex-wrap gap-4 text-sm text-stone-600">
              <span>
                <strong>Cuisine:</strong> {recipe.cuisine}
              </span>
              <span>
                <strong>Cooking Method:</strong>{" "}
                <span className="capitalize">{recipe.cookingMethod}</span>
              </span>
              {recipe.tags && recipe.tags.length > 0 && (
                <span>
                  <strong>Tags:</strong> {recipe.tags.join(", ")}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-8">
              Related Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRecipes.map((relatedRecipe) => (
                <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
