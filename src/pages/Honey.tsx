
const Honey = () => {
  const honeyTypes = [
    {
      name: "Wildflower Honey",
      description: "Pure, raw honey from diverse wildflower meadows",
      origin: "Local beekeepers, seasonal harvest",
      price: "$18.99"
    },
    {
      name: "Clover Honey",
      description: "Light, delicate honey with a mild, sweet flavor",
      origin: "Sustainable clover fields",
      price: "$16.99"
    },
    {
      name: "Manuka Honey",
      description: "Premium honey with natural antibacterial properties",
      origin: "New Zealand Manuka trees",
      price: "$45.99"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 ">
          <h1 className="text-5xl font-bold text-atlantis-blue-800 mb-4">
            Pure Honey
          </h1>
          <p className="text-xl dark:text-white max-w-3xl mx-auto">
            Experience nature's sweetest gift with our collection of pure, unprocessed honey. Each jar represents our commitment to sustainable beekeeping and environmental stewardship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {honeyTypes.map((honey, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-green-100 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop" 
                  alt={honey.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-atlantis-blue-700 mb-2">{honey.name}</h3>
              <p className="text-gray-600 mb-3">{honey.description}</p>
              <p className="text-sm text-atlantis-green-600 mb-3">{honey.origin}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-atlantis-blue-800">{honey.price}</span>
                <button className="bg-atlantis-green-600 text-white px-6 py-2 rounded-lg hover:bg-atlantis-green-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-atlantis-blue-800 mb-6 text-center">
            Sustainable Beekeeping
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-atlantis-green-700 mb-3">Protecting the Bees</h3>
              <p className="text-gray-700 mb-6">
                Our beekeeping partners follow sustainable practices that prioritize bee health and environmental protection. We support hive management techniques that promote natural bee behavior.
              </p>
              <h3 className="text-xl font-semibold text-atlantis-green-700 mb-3">Raw & Unprocessed</h3>
              <p className="text-gray-700">
                Our honey is never heated or filtered, preserving all the natural enzymes, pollen, and beneficial compounds that make honey a superfood.
              </p>
            </div>
            <div className="text-l font-semibold text-atlantis-green-700 mb-3 bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-atlantis-blue-700 mb-4">Honey Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Natural antioxidants and enzymes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Supports local bee populations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  No artificial additives
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Traceable to local apiaries
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-atlantis-green-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-atlantis-green-800 mb-4 text-center">
            Supporting Bee Conservation
          </h2>
          <p className="text-center text-atlantis-green-700 max-w-2xl mx-auto">
            A portion of every honey purchase goes directly to bee conservation efforts and supporting local beekeepers in maintaining healthy, thriving hives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Honey;
