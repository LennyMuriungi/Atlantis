
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-atlantis-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Atlantis</h3>
            <p className="text-blue-200 mb-4">
              Premium coffee, innovative vapes, and pure honey - crafted with excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">📘</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">📷</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">🐦</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/coffee" className="text-blue-200 hover:text-white transition-colors">Coffee</Link></li>
              <li><Link to="/vapes" className="text-blue-200 hover:text-white transition-colors">Vapes</Link></li>
              <li><Link to="/honey" className="text-blue-200 hover:text-white transition-colors">Honey</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 Atlantis. All rights reserved. Proudly made by Lenny Muriungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
