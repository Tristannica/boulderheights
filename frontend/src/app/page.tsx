import Map from "../../components/Map";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold">Boulder Heights Community Map</h1>
        <p className="text-lg text-gray-700 mt-2">
          Visual updates on local spraying, wildlife, snow events, and more.
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl px-4">
        <Map />
      </div>

      <div className="text-center mt-6">
        <a
          href="https://docs.google.com/forms/…" // Replace with actual form URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Submit an Update
        </a>
      </div>
    </main>
  );
}
