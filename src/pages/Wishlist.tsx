
import { Link } from "react-router-dom";
import { useWishlist } from "../contexts/WishlistContext";
import { Trash2, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const totalValue = wishlist.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + price;
  }, 0);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-4">Your Wishlist is Empty</h1>
            <p className="text-gray-600 mb-8">Start adding items you love to your wishlist</p>
            <Link to="/" className="bg-russian-violet hover:bg-dark-purple text-white px-8 py-3 rounded-lg font-medium">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-black mb-8">Your Wishlist</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="grid gap-6">
                {wishlist.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-black">{item.name}</h3>
                      <p className="text-gray-600 capitalize">{item.category}</p>
                      <p className="text-lg font-bold text-crimson">{item.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        className="bg-russian-violet hover:bg-dark-purple text-white"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => removeFromWishlist(item.id)}
                        className="border-crimson text-crimson hover:bg-crimson hover:text-white"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-black">Summary</h3>
                <div className="text-right">
                  <p className="text-gray-600">Total Items: {wishlist.length}</p>
                  <p className="text-2xl font-bold text-crimson">${totalValue.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-black mb-4">Payment Options</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="bg-russian-violet hover:bg-dark-purple text-white h-12">
                    Pay with Card
                  </Button>
                  <Button variant="outline" className="border-maroon text-maroon hover:bg-maroon hover:text-white h-12">
                    Cash on Delivery
                  </Button>
                </div>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Choose your preferred payment method. Cash on delivery available for local orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
