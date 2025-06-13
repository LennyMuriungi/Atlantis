
import { Link } from "react-router-dom";
import WishlistButton from "./WishlistButton";


const ProductListing = () => {
  
  const bestSellers = [
    { id: "bs1", name: "Atlantis Signature Blend", price: "$24.99", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop", category: "coffee" },
    { id: "bs2", name: "Ocean Mist Vape", price: "$89.99", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop", category: "vapes" },
    { id: "bs3", name: "Wildflower Honey", price: "$18.99", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop", category: "honey" },
    { id: "bs4", name: "Deep Current Coffee", price: "$28.99", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop", category: "coffee" },
    { id: "bs5", name: "Blue Wave Pro", price: "$129.99", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop", category: "vapes" },
    { id: "bs6", name: "Manuka Gold", price: "$45.99", image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=300&h=300&fit=crop", category: "honey" },
    { id: "bs7", name: "Ethiopian Origin", price: "$32.99", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=300&fit=crop", category: "coffee" },
    { id: "bs8", name: "Atlantis Pro Max", price: "$159.99", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop", category: "vapes" },
    { id: "bs9", name: "Clover Honey", price: "$22.99", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=300&fit=crop", category: "honey" },
    { id: "bs10", name: "Limited Edition Blend", price: "$38.99", image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=300&h=300&fit=crop", category: "coffee" }
  ];

  const onOffers = [
    { id: "of1", name: "Morning Blend Coffee", price: "$19.99", originalPrice: "$26.99", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop", category: "coffee" },
    { id: "of2", name: "Starter Vape Kit", price: "$69.99", originalPrice: "$89.99", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop", category: "vapes" },
    { id: "of3", name: "Raw Honey Set", price: "$35.99", originalPrice: "$45.99", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=300&fit=crop", category: "honey" },
    { id: "of4", name: "Colombian Single Origin", price: "$22.99", originalPrice: "$29.99", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop", category: "coffee" },
    { id: "of5", name: "Compact Vape", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop", category: "vapes" },
    { id: "of6", name: "Acacia Honey", price: "$28.99", originalPrice: "$35.99", image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=300&h=300&fit=crop", category: "honey" },
    { id: "of7", name: "House Blend", price: "$16.99", originalPrice: "$24.99", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=300&fit=crop", category: "coffee" },
    { id: "of8", name: "Mini Vape", price: "$39.99", originalPrice: "$54.99", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop", category: "vapes" },
    { id: "of9", name: "Organic Honey", price: "$25.99", originalPrice: "$32.99", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=300&fit=crop", category: "honey" },
    { id: "of10", name: "Breakfast Blend", price: "$18.99", originalPrice: "$25.99", image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=300&h=300&fit=crop", category: "coffee" }
  ];

  const ProductItem = ({ item, isOffer = false }: { item: any, isOffer?: boolean }) => (
    <div className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isOffer && (
            <div className="absolute top-3 left-3 bg-crimson text-white px-2 py-1 rounded text-sm font-bold">
              SALE
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-black mb-2 line-clamp-2">{item.name}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-crimson">{item.price}</span>
              {isOffer && item.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      <div className="absolute top-3 right-3">
        <WishlistButton item={item} />
      </div>
      <Link to={`/product/${item.id}`} className="block">
      <div className="p-4 pt-0">
        <button onClick={() => window.scrollTo({top: 0 , behavior: "smooth"})} className="bg-russian-violet hover:bg-dark-purple text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200 w-full">
          View Details
        </button>
      </div>
      </Link>
    </div>
  );

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Best Sellers Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Best Sellers</h2>
            <p className="text-xl text-gray-600">Our most popular products loved by customers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {bestSellers.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* On Offer Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Special Offers</h2>
            <p className="text-xl text-gray-600">Limited time deals you don't want to miss</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {onOffers.map((item) => (
              <ProductItem key={item.id} item={item} isOffer={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
