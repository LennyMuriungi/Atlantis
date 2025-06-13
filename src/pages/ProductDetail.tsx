
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Combined product data
  const allProducts = {
    // Best Sellers
    "bs1": { name: "Atlantis Signature Blend", price: "$24.99", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop", category: "coffee", description: "Our signature medium roast coffee with rich notes of chocolate and caramel. Expertly crafted from premium Colombian and Brazilian beans, this blend delivers a perfectly balanced cup with exceptional smoothness and depth." },
    "bs2": { name: "Ocean Mist Vape", price: "$89.99", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop", category: "vapes", description: "Advanced vaping device featuring temperature control technology and premium build quality. Designed for experienced users who demand reliability and exceptional vapor production with every use." },
    "bs3": { name: "Wildflower Honey", price: "$18.99", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop", category: "honey", description: "Pure, raw honey harvested from diverse wildflower meadows. This unprocessed golden treasure retains all natural enzymes and beneficial compounds, offering a complex floral taste profile." },
    "bs4": { name: "Deep Current Coffee", price: "$28.99", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop", category: "coffee", description: "Dark roast coffee with bold, smoky flavors and hints of vanilla. Sourced from Ethiopian highlands, this premium single-origin offers an intense, full-bodied experience for coffee connoisseurs." },
    "bs5": { name: "Blue Wave Pro", price: "$129.99", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", category: "vapes", description: "Professional-grade vaping device with variable wattage control and OLED display. Built with precision engineering and premium materials for the ultimate vaping experience." },
    "bs6": { name: "Manuka Gold", price: "$45.99", image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&h=400&fit=crop", category: "honey", description: "Premium Manuka honey from New Zealand with natural antibacterial properties. This exceptional honey offers unique therapeutic benefits alongside its rich, distinctive flavor profile." },
    "bs7": { name: "Ethiopian Origin", price: "$32.99", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop", category: "coffee", description: "Single-origin Ethiopian coffee with bright acidity and floral undertones. Hand-picked from high-altitude farms, this light roast showcases the unique terroir of its mountainous origin." },
    "bs8": { name: "Atlantis Pro Max", price: "$159.99", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category: "vapes", description: "Our flagship vaping device featuring cutting-edge technology and premium construction. Designed for enthusiasts who demand the finest in performance, safety, and style." },
    "bs9": { name: "Clover Honey", price: "$22.99", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop", category: "honey", description: "Light, delicate honey with a mild, sweet flavor profile. Sourced from sustainable clover fields, this pure honey offers a clean taste that's perfect for everyday use." },
    "bs10": { name: "Limited Edition Blend", price: "$38.99", image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=400&h=400&fit=crop", category: "coffee", description: "Exclusive small-batch coffee blend featuring rare beans from multiple origins. This limited release showcases our master roaster's artistry with complex flavor notes and exceptional quality." },
    
    // On Offers
    "of1": { name: "Morning Blend Coffee", price: "$19.99", originalPrice: "$26.99", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop", category: "coffee", description: "Start your day right with this smooth morning blend coffee. Featuring a perfect balance of brightness and body, this medium roast delivers consistent quality in every cup." },
    "of2": { name: "Starter Vape Kit", price: "$69.99", originalPrice: "$89.99", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop", category: "vapes", description: "Complete beginner-friendly vaping kit with everything you need to start. Includes device, charger, and user guide, all designed with safety and ease of use as top priorities." },
    "of3": { name: "Raw Honey Set", price: "$35.99", originalPrice: "$45.99", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop", category: "honey", description: "Curated collection of three different raw honey varieties. This set allows you to explore diverse flavor profiles while enjoying the pure, unprocessed goodness of artisanal honey." },
    "of4": { name: "Colombian Single Origin", price: "$22.99", originalPrice: "$29.99", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop", category: "coffee", description: "Premium single-origin coffee from Colombian highlands. This medium roast showcases the region's exceptional quality with notes of caramel sweetness and bright acidity." },
    "of5": { name: "Compact Vape", price: "$49.99", originalPrice: "$69.99", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop", category: "vapes", description: "Portable and discreet vaping device perfect for on-the-go use. Despite its compact size, it delivers impressive performance and battery life in a sleek, modern design." },
    "of6": { name: "Acacia Honey", price: "$28.99", originalPrice: "$35.99", image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400&h=400&fit=crop", category: "honey", description: "Premium acacia honey with a light, delicate flavor and smooth texture. Known for its slow crystallization and pure taste, this honey is perfect for both culinary and therapeutic use." },
    "of7": { name: "House Blend", price: "$16.99", originalPrice: "$24.99", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop", category: "coffee", description: "Our beloved house blend coffee offering exceptional value without compromising on quality. This versatile medium roast is perfect for daily brewing and delivers consistent satisfaction." },
    "of8": { name: "Mini Vape", price: "$39.99", originalPrice: "$54.99", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", category: "vapes", description: "Ultra-compact vaping device with surprising power and performance. Perfect for users who value portability without sacrificing quality or vapor production." },
    "of9": { name: "Organic Honey", price: "$25.99", originalPrice: "$32.99", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=400&fit=crop", category: "honey", description: "Certified organic honey produced using sustainable beekeeping practices. This pure, natural honey supports both environmental conservation and your commitment to organic living." },
    "of10": { name: "Breakfast Blend", price: "$18.99", originalPrice: "$25.99", image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=400&h=400&fit=crop", category: "coffee", description: "Energizing breakfast blend designed to kickstart your morning. This light-medium roast offers bright flavors and smooth finish that pairs perfectly with your morning routine." }
  };

  const product = id ? allProducts[id as keyof typeof allProducts] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Button onClick={() => navigate("/")}>Return Home</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    // Here you would typically add the item to cart context/state
    console.log(`Added ${quantity} x ${product.name} to cart`);
    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">Select Quantity</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                      className="w-20 text-center"
                      min="1"
                    />
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-lg">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-bold text-primary">
                        ${(parseFloat(product.price.replace('$', '')) * quantity).toFixed(2)}
                      </span>
                    </div>
                    {/*Adds item to cart*/}
                    <Button onClick={addToCart} className="w-full h-12 text-lg">
                      Add to Cart
                    </Button>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">Quality Guarantee</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Premium quality materials and ingredients
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Rigorous quality control testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      100% satisfaction guarantee
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Fast and secure shipping
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
