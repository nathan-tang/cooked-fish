export interface Recipe {
  id: string;
  slug: string; // URL-friendly version of title (e.g., "grilled-salmon-teriyaki")
  title: string;
  fishType: string[]; // Support multiple fish types (e.g., ["salmon", "trout"] or ["any white fish"])
  cookingMethod:
    | "grilled"
    | "baked"
    | "pan-seared"
    | "poached"
    | "fried"
    | "smoked"
    | "steamed"
    | "raw"
    | "soup"
    | "braised"
    | "blackened"
    | "salt-baked"
    | "confit"
    | "tandoori"
    | "roasted"
    | "broiled"
    | "en-papillote"
    | "cured"
    | "pickled"
    | "stewed"
    | "deep-fried"
    | "planked"
    | "char-grilled";
  cuisine: string; // e.g., "Japanese", "Mediterranean", "American"
  prepTime: number; // minutes
  cookTime: number; // minutes
  servings: number;
  difficulty: "easy" | "medium" | "hard";
  ingredients: string[];
  instructions: string[];
  image: string; // Path to image or placeholder
  description?: string; // Short description for SEO/cards
  tags?: string[]; // Optional tags for additional categorization
  // Future: ratings, reviews, submittedBy, createdAt
}

export interface RecipeFilters {
  fishType?: string;
  cookingMethod?: string;
  difficulty?: string;
  cuisine?: string;
  searchQuery?: string;
}
