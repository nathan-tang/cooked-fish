"use client";

import { useState, useRef, useEffect } from "react";

interface SelectFilterProps {
  label: string;
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  options: string[];
  placeholder?: string;
  searchable?: boolean;
}

export function SelectFilter({
  label,
  value,
  onChange,
  options,
  placeholder = "All",
  searchable = false,
}: SelectFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter options based on search query
  const filteredOptions = searchable
    ? options.filter((option) =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

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

  const handleSelect = (option: string) => {
    onChange(option);
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
        {label}
      </label>

      {/* Display selected value or button */}
      {value ? (
        <div className="flex items-center gap-2">
          <div className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-sm capitalize">
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 text-left border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 flex items-center justify-between"
        >
          <span>{placeholder}</span>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}

      {/* Dropdown */}
      {isOpen && !value && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {searchable && (
            <div className="p-2 border-b border-gray-200">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${label.toLowerCase()}...`}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
            </div>
          )}

          <button
            onClick={() => {
              onChange(undefined);
              setIsOpen(false);
              setSearchQuery("");
            }}
            className="w-full px-3 py-2 text-left text-sm hover:bg-blue-50 border-b border-gray-200 font-medium text-gray-600"
          >
            {placeholder}
          </button>

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full px-3 py-2 text-left text-sm hover:bg-blue-50 transition-colors capitalize"
              >
                {option}
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
