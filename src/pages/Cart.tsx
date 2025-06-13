
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  quantity: number;
}

const Cart = () => {
  // Mock cart data - in a real app this would come from a cart context
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "bs1", name: "Atlantis Signature Blend", price: "$24.99", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop", category: "coffee", quantity: 2 },
    { id: "bs2", name: "Ocean Mist Vape", price: "$89.99", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop", category: "vapes", quantity: 1 },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">Add some items to your cart to get started</p>
            <Link to="/" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium">
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
      <div className="flex-1 bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
            
            <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
              <div className="grid gap-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                      <p className="text-muted-foreground capitalize">{item.category}</p>
                      <p className="text-lg font-bold text-primary">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 font-medium">{item.quantity}</span>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-card-foreground">Order Summary</h3>
                <div className="text-right">
                  <p className="text-muted-foreground">Total Items: {totalItems}</p>
                  <p className="text-2xl font-bold text-primary">${totalValue.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Checkout Options</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="h-12">
                    Pay with Card
                  </Button>
                  <Button variant="outline" className="h-12">
                    Cash on Delivery
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center mt-4">
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

export default Cart;
