import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function EnglishHome() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">LLM2Card</h1>
          <p className="text-xl md:text-2xl text-purple-600 mb-8">
            <span className="text-purple-600">LLM</span>
            <span className="text-gray-700"> to Knowledge Card Tool</span>
          </p>
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <div className="relative p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <span className="inline-block px-3 py-1 bg-gray-100 text-sm rounded-full mb-2">Markdown</span>
                <p className="text-sm text-gray-600 mb-2">Convert your LLM-generated content into beautiful knowledge cards...</p>
              </div>
            </div>
          </div>

          <Link href="/editor">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Get Started
            </Button>
          </Link>

          <div className="flex justify-center gap-2 mt-6">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">100% Free</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Unlimited Exports</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Multiple Themes</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-800 text-xs rounded-full">No Watermarks</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-purple-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 mb-2">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                  <span className="text-sm text-purple-700 font-medium">One-Click Conversion Example</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">One-Click Conversion</h3>
              <p className="text-sm text-gray-600">
                Quickly convert LLM-generated Markdown content into beautiful knowledge cards, making your content more attractive.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-blue-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-2">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                    <path d="M18 14h-8" />
                    <path d="M15 18h-5" />
                    <path d="M10 6h8v4h-8V6Z" />
                  </svg>
                  <span className="text-sm text-blue-700 font-medium">Multiple Themes Example</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Multiple Themes</h3>
              <p className="text-sm text-gray-600">
                Over 15 beautiful themes to meet different platform and content style needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-green-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mb-2">
                    <rect width="7" height="9" x="3" y="3" rx="1" />
                    <rect width="7" height="5" x="14" y="3" rx="1" />
                    <rect width="7" height="9" x="14" y="12" rx="1" />
                    <rect width="7" height="5" x="3" y="16" rx="1" />
                  </svg>
                  <span className="text-sm text-green-700 font-medium">Auto-Split Example</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Auto-Split</h3>
              <p className="text-sm text-gray-600">
                Long text automatically splits into multiple cards. Export image collections with one click for easy publishing on various platforms.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-4 relative bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center p-4 bg-amber-50 rounded-lg w-full h-full flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500 mb-2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                  <span className="text-sm text-amber-700 font-medium">Custom Style Example</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Custom Styles</h3>
              <p className="text-sm text-gray-600">
                Adjust card dimensions, font size, colors, and more to create your own unique knowledge card style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howItWorks" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Input Markdown Content</h3>
              <p className="text-sm text-gray-600">
                Enter or paste LLM-generated Markdown text in the editor, supporting headings, lists, images, and other formats.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Choose Theme Style</h3>
              <p className="text-sm text-gray-600">
                Select from multiple beautiful themes, adjust styles and layouts to create personalized cards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">One-Click Export</h3>
              <p className="text-sm text-gray-600">
                Once satisfied with the preview, export as PNG or SVG images with one click, ready to share on social media platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About LLM2Card</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              LLM2Card is a tool designed specifically for content creators, quickly converting Large Language Model (LLM) generated Markdown content into beautiful knowledge cards.
              Whether publishing on social media, blogs, or other platforms, LLM2Card helps you create professional, visually appealing content layouts.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Beautiful Themes</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Free to Use</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">0</div>
                <div className="text-sm text-gray-600">Watermarks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Is LLM2Card free?</h3>
              <p className="text-gray-600">
                Yes, LLM2Card is completely free with no hidden costs. You can use all features without limitations, including multiple themes and watermark-free exports.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Can I customize the card style?</h3>
              <p className="text-gray-600">
                Absolutely. LLM2Card offers various customization options, including adjusting card dimensions, font size, colors, spacing, and more to create your unique card style.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How does it handle long text?</h3>
              <p className="text-gray-600">
                LLM2Card supports automatic text splitting. The system intelligently divides content into multiple cards, and you can export all cards at once or select individual ones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do exported images have watermarks?</h3>
              <p className="text-gray-600">
                No. All images exported from LLM2Card are watermark-free. You can use them directly for content publishing on any platform without any brand identifiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Language Switcher Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-medium mb-4">Language / 选择语言</h3>
          <div className="flex justify-center gap-4">
            <Link href="/zh" className="px-4 py-2 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors">
              中文
            </Link>
            <Link href="/en" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              English
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-purple-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Using LLM2Card Now</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Convert your LLM-generated content into beautiful knowledge cards and make your content more professional and attractive!
          </p>
          <Link href="/editor">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Use for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
