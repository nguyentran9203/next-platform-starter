import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Urban Plant Reviews | Best Indoor Plants for Your Space</title>
        <meta name="description" content="Discover the best indoor plants for apartments, low light, and pet-safe environments. Honest reviews and care guides to help your plants thrive." />
      </Head>

      <main className="p-6 max-w-6xl mx-auto bg-gray-900 min-h-screen text-white">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-green-300 mb-4">Urban Plant Reviews</h1>
          <p className="text-lg text-gray-200">
            Honest reviews & care tips for houseplants that thrive in urban spaces.
          </p>
        </section>


        {/* 🌟 Plant of the Week Card */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-green-200">🌟 Plant of the Week</h2>
          <div className="border border-green-800 rounded-lg p-6 shadow-md bg-green-950 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="/snake-plant.jpg"
              alt="Snake Plant"
              className="w-full sm:w-48 rounded"
            />
            <div>
              <h3 className="text-2xl font-bold text-green-300 mb-2">Snake Plant (Sansevieria)</h3>
              <p className="text-gray-100 mb-3">
                Known for its air-purifying power and resilience, the Snake Plant is a perfect pick for beginners and busy people. Low-light tolerant and virtually unkillable.
              </p>
              <Link href="/reviews/small-apartment-plants" className="text-sm text-green-400 hover:underline">
                Read more → Top 5 Plants for Small Apartments
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Plant Guides */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-green-200">Explore More Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <Link href="/reviews/small-apartment-plants" className="block border border-green-800 rounded p-4 hover:shadow-lg hover:bg-green-950 transition">
              <h3 className="text-xl font-semibold text-green-300 mb-2">Top 5 Plants for Small Apartments</h3>
              <p className="text-sm text-gray-200">Compact, stylish, and easy to care for in tight spaces.</p>
            </Link>

            <Link href="/reviews/low-light-plants" className="block border border-green-800 rounded p-4 hover:shadow-lg hover:bg-green-950 transition">
              <h3 className="text-xl font-semibold text-green-300 mb-2">Best Plants for Low Light</h3>
              <p className="text-sm text-gray-200">Perfect for rooms with minimal sunlight or north-facing windows.</p>
            </Link>

            <Link href="/reviews/pet-safe-plants" className="block border border-green-800 rounded p-4 hover:shadow-lg hover:bg-green-950 transition">
              <h3 className="text-xl font-semibold text-green-300 mb-2">Pet-Safe Houseplants</h3>
              <p className="text-sm text-gray-200">Non-toxic choices for homes with cats and dogs.</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
