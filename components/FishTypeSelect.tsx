"use client";

import { useState, useRef, useEffect } from "react";

interface FishTypeSelectProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  fishTypes: string[];
}

export function FishTypeSelect({
  value,
  onChange,
  fishTypes,
}: FishTypeSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter fish types based on search query
  const filteredFishTypes = fishTypes.filter((fish) =>
    fish.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (fish: string) => {
    onChange(fish);
    setSearchQuery("");
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange(undefined);
    setSearchQuery("");
  };

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        Fish Type
      </label>

      {/* Display selected value or input */}
      {value ? (
        <div className="flex items-center gap-2">
          <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm">
            {value}
          </div>
          <button
            onClick={handleClear}
            className="px-3 py-2 text-sm text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search fish type..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm text-gray-900 placeholder-gray-500"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      )}

      {/* Dropdown */}
      {isOpen && !value && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredFishTypes.length > 0 ? (
            <>
              <button
                onClick={() => {
                  onChange(undefined);
                  setIsOpen(false);
                  setSearchQuery("");
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-blue-50 border-b border-gray-200 font-medium text-gray-600"
              >
                All Fish
              </button>
              {filteredFishTypes.map((fish) => (
                <button
                  key={fish}
                  onClick={() => handleSelect(fish)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-blue-50 transition-colors"
                >
                  {fish}
                </button>
              ))}
            </>
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No fish types found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
