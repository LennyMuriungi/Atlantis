
import ProductCard from "./ProductCard";

const ProductShowcase = () => {
  const categories = [
    {
      title: "Premium Coffee",
      description: "Ethically sourced, expertly roasted coffee beans from around the world",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      link: "/coffee",
      gradient: "from-maroon to-crimson"
    },
    {
      title: "Innovative Vapes",
      description: "Cutting-edge vaping technology with premium quality and safety standards",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
      link: "/vapes",
      gradient: "from-russian-violet to-dark-purple"
    },
    {
      title: "Pure Honey",
      description: "Raw, unprocessed honey harvested from sustainable beekeeping practices",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      link: "/honey",
      gradient: "from-maroon to-russian-violet"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Our Premium Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium products
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <ProductCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
