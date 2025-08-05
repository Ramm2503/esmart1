import react from "react";
import './dash.css';
import Products from './product';
import { Link } from "react-router-dom";

export const Dash=()=>{

const products = [
    
  {
    id: "392",
    name: "Noise N1",
    img: "dash1.jpg",
    price: "₹2,999",
    discount: "20% Off",
    rating: 5
  },
  {
    id: "393",
    name: "Noise New launched",
    img: "dash2.jpg",
    price: "₹3,199",
    discount: "10% Off",
    rating: 4
  },
  {
    id: "394",
    name: "Fossil Gen 6",
    img: "dash3.jpg",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "395",
    name: "Titan Smart 3 ",
    img: "dash4.jpg",
    price: "₹2,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "396",
    name: "FireBlout g3",
    img: "dash5.jpg",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "397",
    name: "Noise ",
    img: "dash6.jpg",
    price: "₹9,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "398",
    name: "boat",
    img: "dash7.jpg",
    price: "₹10,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "399",
    name: "Noise g16 ",
    img: "dash8.jpg",
    price: "₹12,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "400",
    name: "Titan ",
    img: "dash9.jpg",
    price: "₹14,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "401",
    name: "Noise N1 ",
    img: "dash9.jpg",
    price: "₹11,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "402",
    name: "Fossil WE2",
    img: "dash10.jpg",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "403",
    name: "Blout",
    img: "dash11.jpg",
    price: "₹1,599",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "404",
    name: "Noise g44",
    img: "dash12.jpg",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "405",
    name: "Fossil F1",
    img: "dash13.jpg",
    price: "₹12,799",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "406",
    name: "Titan",
    img: "dash14.jpg",
    price: "₹4,899",
    discount: "15% Off",
    rating: 4
  }
];

    

  return (
   <div>
    <h1 className="h1d">Camera </h1>
    <div className="product-griddash">
      
      {products.map((item, index) => (
        <div className="card1dash" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricedash">{item.price}</div>
          <div className="discountdash">{item.discount}</div>
          <div className="ratingdash">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverydash"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btndash">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};


    