import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Urban Plant Reviews</title>
        <meta
          name="description"
          content="Learn more about Urban Plant Reviews — who we are, what we do, and why we love helping people discover the best indoor plants for urban living."
        />
      </Head>

      <main className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Urban Plant Reviews</h1>

        <p className="mb-4 text-white-700">
          🌱 Urban Plant Reviews is your go-to guide for finding the perfect indoor plants for apartments, small homes, and busy lifestyles. Whether you're a beginner or a seasoned plant parent, we provide honest reviews, care tips, and curated lists to make plant shopping easier and smarter.
        </p>

        <p className="mb-4 text-white-700">
          We believe that greenery can transform even the tiniest space into a more peaceful and productive place. That’s why we focus on low-maintenance, space-efficient, and pet-safe options that suit modern urban living.
        </p>

        <p className="mb-4 text-white-700">
          This site is run by a small team of plant enthusiasts with real-world experience in living with, caring for, and sometimes killing (oops!) a wide variety of houseplants.
        </p>

        <p className="mb-6 text-white-700">
          Every review is based on hands-on experience — we test how easy the plants are to care for, how they respond to different lighting, and whether they’re a good fit for people with pets or limited space.
        </p>

        <p className="text-sm text-white-500">Have a suggestion? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> — we’d love to hear from you.</p>

        <nav className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </nav>
      </main>
    </>
  );
}
