export default async function FoodDetailPage({ params }) {
    const res = await fetch(`http://localhost:3000/api/foods/${params.id}`);
    const food = await res.json();
  
    if (!food) {
      return <p>음식을 찾을 수 없습니다.</p>;
    }
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{food.name}</h1>
        <img
          src={food.image}
          alt={food.name}
          className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
        />
        <p className="text-lg">{food.description}</p>
      </div>
    );
  }