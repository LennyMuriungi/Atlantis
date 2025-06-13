
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  gradient: string;
}

const ProductCard = ({ title, description, image, link, gradient }: ProductCardProps) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-br ${gradient}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-white">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-blue-100 mb-4">{description}</p>
        <Link 
          to={link}
          className="inline-block bg-white text-atlantis-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
