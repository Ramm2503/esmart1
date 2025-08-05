import react from "react";
import './instant.css'
import { Link } from "react-router-dom";
import Products from './product';

export const Instant=()=>{

const products = [
    
        
  {
    id: "362",
    name: "Noise N1",
    img: "mi1.webp",
    price: "₹2,999",
    discount: "20% Off",
    rating: 5
  },
  {
    id: "363",
    name: "Noise New launched",
    img: "mi2.webp",
    price: "₹3,199",
    discount: "10% Off",
    rating: 4
  },
  {
    id: "364",
    name: "Fossil Gen 6",
    img: "mi3.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "365",
    name: "Titan Smart 3 ",
    img: "mi4.webp",
    price: "₹2,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "366",
    name: "FireBlout g3",
    img: "mi5.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "367",
    name: "Noise ",
    img: "mi6.webp",
    price: "₹9,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "368",
    name: "boat",
    img: "mi7.webp",
    price: "₹10,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "369",
    name: "Noise g16 ",
    img: "mi8.webp",
    price: "₹12,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "370",
    name: "Titan ",
    img: "mi9.webp",
    price: "₹14,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "371",
    name: "Noise N1 ",
    img: "mi10.webp",
    price: "₹11,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "372",
    name: "Fossil WE2",
    img: "mi11.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "373",
    name: "Blout",
    img: "mi12.webp",
    price: "₹1,599",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "374",
    name: "Noise g44",
    img: "mi13.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "375",
    name: "Fossil F1",
    img: "mi14.webp",
    price: "₹12,799",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "376",
    name: "Titan",
    img: "mi15.webp",
    price: "₹4,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "377",
    name: "Titan New One",
    img: "mi16.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "378",
    name: "Fossil",
    img: "mi17.webp",
    price: "₹8,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "379",
    name: "Titan ",
    img: "mi18.webp",
    price: "₹7,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "380",
    name: "Fossil F3",
    img: "mi19.webp",
    price: "₹4,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "381",
    name: "Noise VS",
    img: "mi20.webp",
    price: "₹5,899",
    discount: "15% Off",
    rating: 4
  }
];


  return (
   <div>
    <h1 className="h1d">Camera </h1>
    <div className="product-gridins">
      
      {products.map((item, index) => (
        <div className="card1ins" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="priceins">{item.price}</div>
          <div className="discountins">{item.discount}</div>
          <div className="ratingins">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliveryins"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnins">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};


    