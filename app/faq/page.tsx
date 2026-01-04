import Link from "next/link";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | cooked.fish",
  description:
    "Answers to frequently asked questions about cooked.fish, the comprehensive fish recipe database.",
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Why only fish?",
    answer:
      "Fish is a distinct category of aquatic protein with unique characteristics, cooking methods, and nutritional profiles. By focusing exclusively on fish, we can provide comprehensive, specialized content that serves this specific need better than generalized seafood sites.",
  },
  {
    question: "Will you add shellfish recipes?",
    answer:
      "No. Shellfish (crustaceans and mollusks) are fundamentally different from fish in biological classification, preparation techniques, and culinary applications. This site is dedicated to fish only. We know scallops are delicious. We know shrimp are versatile. The answer is still no. If you're looking for lobster, shrimp, crab, clams, mussels, oysters, or scallops, there are many excellent resources elsewhere.",
  },
  {
    question: "Do you include fish soups and chowders?",
    answer:
      "Yes! As long as fish is the only animal protein throwing the party. Bouillabaisse? Absolutely. New England fish chowder? You bet. Tom yum pla? Of course. But the second a clam tries to crash the party, it's off the site. No clam chowder. No surf-and-turf stew. No \"I'll just add some shrimp for extra flavor.\" Fish soups are in. Mixed seafood identity crises are out. If it swims with fins and stars in the soup, we're cooking.",
  },
  {
    question: "Is this a joke?",
    answer:
      "No. This is a serious fish recipe database. The name is memorable and the domain extension is appropriate. We are committed to providing accurate, useful recipes for cooking fish.",
  },
  {
    question: "What types of fish do you cover?",
    answer:
      "We cover all edible fish species, from common varieties like salmon, tuna, and cod to less common species like monkfish, branzino, Arctic char, barramundi, Chilean sea bass, swordfish, snapper, and grouper. If it's a fish that can be cooked and eaten, we aim to have recipes for it.",
  },
  {
    question: "Can I submit my own recipes?",
    answer:
      "Not at this time. We are currently focused on building a comprehensive, curated collection of tested recipes. We may introduce user submissions in the future.",
  },
  {
    question: "How do I search for recipes?",
    answer:
      'Use the search bar on the homepage or recipes page to search by fish type, recipe name, cuisine, or cooking method. You can also use the filter options on the recipes page to narrow results by specific criteria. The search supports fuzzy matching, so searching for "mahi" will find "mahi mahi" recipes.',
  },
  {
    question: "Are the recipes tested?",
    answer:
      "Yes. All recipes are either tested in-house or sourced from reliable culinary sources with proven track records.",
  },
  {
    question: "Do you have nutritional information?",
    answer:
      "Not currently. Nutritional content can vary significantly based on portion sizes, specific ingredients, and preparation methods. We focus on providing clear recipes with accurate cooking instructions.",
  },
  {
    question: "Can I filter recipes by dietary restrictions?",
    answer:
      "Not yet. This is a planned feature. For now, you can review the ingredients list on each recipe page to determine if it meets your dietary needs.",
  },
  {
    question: "Why is the site so fast?",
    answer:
      "We use modern web technologies (Next.js, React 19, Tailwind CSS v4) and prioritize performance. The site is statically generated where possible and hosted on Vercel's edge network. We don't use heavy third-party scripts or bloated frameworks. No autoplaying videos, no tracking pixels from seventeen different ad networks, no essay about our founder's childhood before you can see a recipe. Just fish, fast.",
  },
  {
    question: "Are there ads on the site?",
    answer:
      "There are designated ad slots on the site to support development and hosting costs. We limit ad placements to maintain a good user experience.",
  },
  {
    question: "What about sustainability and ethical fishing?",
    answer:
      "We acknowledge that sustainable fishing practices are important. While we don't currently provide sustainability ratings for each recipe, we encourage users to source fish from responsible suppliers and to be aware of overfished species in their region.",
  },
  {
    question: "How often do you add new recipes?",
    answer:
      "We are actively expanding the recipe database. New recipes are added regularly, with a goal of having 50-75 recipes by the end of January 2026 and continued growth thereafter.",
  },
  {
    question: "Can I print recipes?",
    answer:
      "Yes. Each recipe page is designed to be print-friendly. Use your browser's print function (Ctrl+P or Cmd+P) to print any recipe.",
  },
  {
    question: "Do you have a mobile app?",
    answer:
      "No. The website is fully responsive and works well on mobile devices. We have no plans to develop a native mobile app at this time.",
  },
  {
    question: "What if I find an error in a recipe?",
    answer:
      "We strive for accuracy, but errors can occur. If you find a mistake, please contact us with details. Contact information will be available on the About page.",
  },
];

// Generate JSON-LD schema for FAQ
function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function FAQPage() {
  const schema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about cooked.fish
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Still have questions?
          </h2>
          <p className="text-blue-100 mb-6">
            Explore our recipes or learn more about our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipes"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Browse Recipes
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
            >
              About Us
            </Link>
          </div>
        </div>
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
              <Link
                href="/recipes"
                className="hover:text-white transition-colors"
              >
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
