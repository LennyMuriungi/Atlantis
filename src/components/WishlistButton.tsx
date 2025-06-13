
import { Heart } from "lucide-react";
import { useWishlist } from "../contexts/WishlistContext";

interface WishlistButtonProps {
  item: {
    id: string;
    name: string;
    price: string;
    image: string;
    category: string;
  };
}

const WishlistButton = ({ item }: WishlistButtonProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(item.id);

  const handleToggle = () => {
    if (inWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-all duration-200 ${
        inWishlist
          ? 'bg-red-100 text-red-600 hover:bg-red-200'
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-red-500'
      }`}
    >
      <Heart className={`h-5 w-5 ${inWishlist ? 'fill-current' : ''}`} />
    </button>
  );
};

export default WishlistButton;
