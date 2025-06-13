import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search, Heart, ShoppingCart, Moon, Sun } from "lucide-react";
import { useWishlist } from "../contexts/WishlistContext";
import { useTheme } from "next-themes";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { wishlist } = useWishlist();
  const { theme, setTheme } = useTheme();

  const coffeeProducts = [
    { id: "c1", name: "Atlantis Blend", link: "/coffee" },
    { id: "c2", name: "Ocean Blue", link: "/coffee" },
    { id: "c3", name: "Deep Current", link: "/coffee" }
  ];

  const vapeProducts = [
    { id: "v1", name: "Atlantis Pro", link: "/vapes" },
    { id: "v2", name: "Ocean Mist", link: "/vapes" },
    { id: "v3", name: "Blue Wave", link: "/vapes" }
  ];

  const honeyProducts = [
    { id: "h1", name: "Pure Wildflower", link: "/honey" },
    { id: "h2", name: "Manuka Gold", link: "/honey" },
    { id: "h3", name: "Clover Honey", link: "/honey" }
  ];

  return (
    <header className="bg-gradient-to-br from-black to-maroon text-white shadow-md sticky top-0 z-50 border-b border-blue-800 dark:border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="text-2xl font-bold">
            Atlantis
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white text-black"
              />
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {/* Coffee Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-primary font-medium">
                Coffee <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white text-black border shadow-xl z-50 py-2">
                {coffeeProducts.map((product, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      to={product.link}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-slate-100 dark:hover:bg-muted hover:text-primary transition-colors rounded"
                    >
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Vapes Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-primary font-medium">
                Vapes <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white text-black border shadow-xl z-50 py-2">
                {vapeProducts.map((product, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      to={product.link}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-slate-100 dark:hover:bg-muted hover:text-primary transition-colors rounded"
                    >
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Honey Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-primary font-medium">
                Honey <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white text-black border shadow-xl z-50 py-2">
                {honeyProducts.map((product, index) => (
                  <DropdownMenuItem key={index} asChild>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      to={product.link}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-slate-100 dark:hover:bg-muted hover:text-primary transition-colors rounded"
                    >
                      {product.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Link */}
            <a href="#contact" className="hover:text-primary font-medium smooth-scroll duration-300">
              Contact
            </a>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* Cart and Wishlist */}
            <div className="flex space-x-2">
              <Link to="/cart" className="relative">
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/wishlist" className="relative">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlist.length}
                    </span>
                  )}
                </Button>
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex space-x-2">
              <Button asChild variant="outline">
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
