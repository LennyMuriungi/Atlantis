
import WishlistButton from "../components/WishlistButton";

const Coffee = () => {
  const coffeeTypes = [
    {
      id: "atlantis-blend",
      name: "Atlantis Blend",
      description: "Our signature medium roast with notes of chocolate and caramel",
      origin: "Colombian & Brazilian beans",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    {
      id: "ocean-blue",
      name: "Ocean Blue",
      description: "Dark roast with bold, smoky flavors and hints of vanilla",
      origin: "Ethiopian highlands",
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    },
    {
      id: "deep-current",
      name: "Deep Current",
      description: "Light roast with bright acidity and floral undertones",
      origin: "Costa Rican single origin",
      price: "$26.99",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen text-atlantis-black-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-atlantis-blue-800 mb-4">
            Premium Coffee
          </h1>
          <p className="text-xl dark:text-white max-w-3xl mx-auto">
            Experience the finest coffee from around the world, carefully selected and expertly roasted to perfection. Each cup tells a story of passion, quality, and sustainability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coffeeTypes.map((coffee, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-6 overflow-hidden relative">
                <img 
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <WishlistButton item={{ ...coffee, category: "coffee" }} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-atlantis-blue-700 mb-2">{coffee.name}</h3>
              <p className="text-gray-600 mb-3">{coffee.description}</p>
              <p className="text-sm text-atlantis-green-600 mb-3">{coffee.origin}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-atlantis-blue-800">{coffee.price}</span>
                <button className="bg-atlantis-blue-600 text-white px-6 py-2 rounded-lg hover:bg-atlantis-blue-700 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-atlantis-blue-800 mb-6 text-center">
            Our Coffee Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-atlantis-green-700 mb-3">Ethically Sourced</h3>
              <p className="text-gray-700 mb-6">
                We work directly with coffee farmers around the world, ensuring fair trade practices and sustainable farming methods that benefit both the environment and local communities.
              </p>
              <h3 className="text-xl font-semibold text-atlantis-green-700 mb-3">Expert Roasting</h3>
              <p className="text-gray-700">
                Our master roasters bring out the unique characteristics of each bean, creating profiles that highlight the natural flavors and aromas that make each origin special.
              </p>
            </div>
            <div className="text-l font-semibold text-atlantis-green-700 mb-3 bg-gradient-to-br from-atlantis-blue-50 to-atlantis-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-atlantis-blue-700 mb-4">Why Choose Atlantis Coffee?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Small batch roasting for freshness
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Direct trade relationships
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Carbon-neutral shipping
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  100% satisfaction guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
