
const Vapes = () => {
  const vapeProducts = [
    {
      name: "Atlantis Pro",
      description: "Advanced vaping device with temperature control and long battery life",
      features: ["Temperature Control", "Fast Charging", "Premium Build"],
      price: "$89.99"
    },
    {
      name: "Ocean Breeze",
      description: "Compact and portable with exceptional flavor delivery",
      features: ["Portable Design", "Flavor Enhancement", "Easy Use"],
      price: "$59.99"
    },
    {
      name: "Deep Sea",
      description: "Professional-grade device for experienced users",
      features: ["Variable Wattage", "OLED Display", "Cloud Production"],
      price: "$129.99"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-atlantis-blue-800 mb-4">
            Innovative Vapes
          </h1>
          <p className="text-xl dark:text-white max-w-3xl mx-auto">
            Discover our cutting-edge vaping technology designed with safety, quality, and innovation at the forefront. Every device is crafted to deliver an exceptional experience.
          </p>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 rounded">
          <p className="text-yellow-800">
            <strong>Important:</strong> This product is intended for adults only (21+). Please vape responsibly and follow all local regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {vapeProducts.map((vape, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop" 
                  alt={vape.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-atlantis-blue-700 mb-2">{vape.name}</h3>
              <p className="text-gray-600 mb-4">{vape.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-atlantis-green-600 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {vape.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-atlantis-green-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-atlantis-blue-800">{vape.price}</span>
                <button className="bg-atlantis-blue-600 text-white px-6 py-2 rounded-lg hover:bg-atlantis-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-atlantis-blue-800 mb-6 text-center">
            Safety & Quality First
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-atlantis-green-700 mb-3">Rigorous Testing</h3>
              <p className="text-gray-700 mb-6">
                Every Atlantis vape undergoes extensive quality control testing to ensure safety, reliability, and consistent performance. We exceed industry standards in every aspect.
              </p>
              <h3 className="text-xl font-semibold text-atlantis-green-700 mb-3">Premium Materials</h3>
              <p className="text-gray-700">
                We use only the finest materials and components, from medical-grade stainless steel to high-quality batteries, ensuring durability and safety.
              </p>
            </div>
            <div className="text-l font-semibold text-atlantis-green-700 mb-3 bg-gradient-to-br from-atlantis-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-atlantis-blue-700 mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Lab-tested for purity and safety
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Compliant with all regulations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Responsible marketing practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-atlantis-green-500 rounded-full mr-3"></span>
                  Adult-only sales verification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vapes;
