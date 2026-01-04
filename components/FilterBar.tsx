"use client";

import { RecipeFilters } from "@/lib/data/types";
import { FishTypeSelect } from "./FishTypeSelect";
import { SelectFilter } from "./SelectFilter";

interface FilterBarProps {
  filters: RecipeFilters;
  onFilterChange: (filters: RecipeFilters) => void;
  fishTypes: string[];
  cookingMethods: string[];
  cuisines: string[];
}

export function FilterBar({
  filters,
  onFilterChange,
  fishTypes,
  cookingMethods,
  cuisines,
}: FilterBarProps) {
  const updateFilter = (key: keyof RecipeFilters, value: string | undefined) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Fish Type - Searchable */}
          <FishTypeSelect
            value={filters.fishType}
            onChange={(value) => updateFilter("fishType", value)}
            fishTypes={fishTypes}
          />

          {/* Cooking Method */}
          <SelectFilter
            label="Cooking Method"
            value={filters.cookingMethod}
            onChange={(value) => updateFilter("cookingMethod", value)}
            options={cookingMethods}
            placeholder="All Methods"
          />

          {/* Cuisine */}
          <SelectFilter
            label="Cuisine"
            value={filters.cuisine}
            onChange={(value) => updateFilter("cuisine", value)}
            options={cuisines}
            placeholder="All Cuisines"
            searchable={true}
          />

          {/* Difficulty */}
          <SelectFilter
            label="Difficulty"
            value={filters.difficulty}
            onChange={(value) => updateFilter("difficulty", value)}
            options={["easy", "medium", "hard"]}
            placeholder="All Levels"
          />
        </div>

        {/* Active Filters Display */}
        {(filters.fishType ||
          filters.cookingMethod ||
          filters.cuisine ||
          filters.difficulty) && (
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-gray-600">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {filters.fishType && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full capitalize">
                  {filters.fishType}
                  <button
                    onClick={() => updateFilter("fishType", undefined)}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.cookingMethod && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full capitalize">
                  {filters.cookingMethod}
                  <button
                    onClick={() => updateFilter("cookingMethod", undefined)}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.cuisine && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {filters.cuisine}
                  <button
                    onClick={() => updateFilter("cuisine", undefined)}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.difficulty && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full capitalize">
                  {filters.difficulty}
                  <button
                    onClick={() => updateFilter("difficulty", undefined)}
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() =>
                  onFilterChange({
                    fishType: undefined,
                    cookingMethod: undefined,
                    cuisine: undefined,
                    difficulty: undefined,
                  })
                }
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
