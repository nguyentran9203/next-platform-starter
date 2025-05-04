import Head from 'next/head'
import Link from 'next/link'

export default function SmallApartmentPlants() {
  return (
    <>
      <Head>
        <title>Top 5 Plants for Small Apartments | Urban Plant Reviews</title>
        <meta name="description" content="Explore the best indoor plants for small apartments: compact, stylish, and easy to care for." />
      </Head>

      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Top 5 Plants for Small Apartments</h1>
        <p className="mb-4">Here's our list of compact, stylish, and low-maintenance plants perfect for small apartments.</p>

        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Snake Plant</strong> – Vertical growth, tough as nails.</li>
          <li><strong>ZZ Plant</strong> – Thrives in low light, almost unkillable.</li>
          <li><strong>Pothos</strong> – Fast-growing and great for hanging.</li>
          <li><strong>Peace Lily</strong> – Air purifier, beautiful white blooms.</li>
          <li><strong>Spider Plant</strong> – Pet-safe, playful runners.</li>
        </ol>

        <nav className="mt-8">
          <Link href="/reviews" className="text-blue-600 hover:underline">← Back to All Reviews</Link>
        </nav>
      </main>
    </>
  );
}
