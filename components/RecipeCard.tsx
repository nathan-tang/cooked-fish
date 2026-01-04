import Link from "next/link";
import { Recipe } from "@/lib/data/types";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-sky-100 to-blue-200 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl">
          🐟
        </div>
        {/* Placeholder for actual images - will use Next Image later */}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {recipe.title}
        </h3>

        {/* Description */}
        {recipe.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {recipe.description}
          </p>
        )}

        {/* Fish Type Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {recipe.fishType.map((fish) => (
            <span
              key={fish}
              className="inline-block px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
            >
              {fish}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-3">
            {/* Cooking Method */}
            <span className="capitalize">{recipe.cookingMethod}</span>

            {/* Difficulty */}
            <span className="flex items-center gap-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  recipe.difficulty === "easy"
                    ? "bg-green-500"
                    : recipe.difficulty === "medium"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                }`}
              ></span>
              {recipe.difficulty}
            </span>
          </div>

          {/* Time */}
          <span className="text-xs">
            {recipe.prepTime + recipe.cookTime} min
          </span>
        </div>
      </div>
    </Link>
  );
}
