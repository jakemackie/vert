export default function Home() {
  // Basic overview of a grid page layout
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container grid-design">
        <div className="col-span-full bg-gray-400">
          Test
        </div>
        <div className="col-span-6 bg-gray-200">
          Test
        </div>
        <div className="col-span-6 bg-gray-600">
          Test
        </div>
      </div>
    </main>
  )
}
