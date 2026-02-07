import Link from "next/link";
import { Recipe } from "@/lib/data/types";

interface RecipeCardProps {
  recipe: Recipe;
}

const cardGradients = [
  "from-orange-200 to-orange-300",
  "from-teal-100 to-teal-200",
  "from-amber-200 to-amber-300",
  "from-rose-200 to-rose-300",
  "from-orange-200 to-teal-200",
  "from-amber-100 to-orange-200",
];

export function RecipeCard({ recipe }: RecipeCardProps) {
  const hash = recipe.slug.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const gradient = cardGradients[hash % cardGradients.length];

  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group block bg-white rounded-xl shadow-sm border border-stone-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center text-6xl emoji-bob">
          🐟
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-semibold text-stone-900 mb-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>

        {/* Description */}
        {recipe.description && (
          <p className="text-sm text-stone-600 mb-3 line-clamp-2">
            {recipe.description}
          </p>
        )}

        {/* Fish Type Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {recipe.fishType.map((fish) => (
            <span
              key={fish}
              className="inline-block px-2.5 py-0.5 bg-teal-100 text-teal-800 text-xs font-medium rounded-full"
            >
              {fish}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-stone-500 border-t border-stone-100 pt-3">
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
