import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Urban Plant Reviews</title>
        <meta name="description" content="Have a question or want to suggest a plant for review? Reach out to Urban Plant Reviews using the contact form." />
      </Head>

      <main className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6 text-gray-700">
          Have a question, suggestion, or just want to talk plants? We'd love to hear from you!
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us what’s on your mind!"
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          This is a demo form — no actual email will be sent.
        </p>

        <nav className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </nav>
      </main>
    </>
  );
}
