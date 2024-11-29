export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/foods");
  const foods = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">음식 목록</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foods.map((food) => (
          <a
            href={`/foods/${food.id}`}
            key={food.id}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{food.name}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}