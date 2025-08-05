import react from "react";
import './action.css';
import { Link } from "react-router-dom";
import products from './product';

export const Action=()=>{
 
    const products = [
    
  {
    id: "342",
    name: "Noise N1",
    img: "action1.webp",
    price: "₹2,999",
    discount: "20% Off",
    rating: 5
  },
  {
    id: "343",
    name: "Noise New launched",
    img: "action2.webp",
    price: "₹3,199",
    discount: "10% Off",
    rating: 4
  },
  {
    id: "344",
    name: "Fossil Gen 6",
    img: "action3.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "345",
    name: "Titan Smart 3 ",
    img: "action4.webp",
    price: "₹2,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "346",
    name: "FireBlout g3",
    img: "action5.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "347",
    name: "Noise ",
    img: "action6.webp",
    price: "₹9,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "348",
    name: "boat",
    img: "action7.webp",
    price: "₹10,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "349",
    name: "Noise g16 ",
    img: "action8.webp",
    price: "₹12,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "350",
    name: "Titan ",
    img: "action9.webp",
    price: "₹14,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "351",
    name: "Noise N1 ",
    img: "action10.webp",
    price: "₹11,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "352",
    name: "Fossil WE2",
    img: "action11.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "353",
    name: "Blout",
    img: "action12.webp",
    price: "₹1,599",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "354",
    name: "Noise g44",
    img: "action13.webp",
    price: "₹1,499",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "355",
    name: "Fossil F1",
    img: "action14.webp",
    price: "₹12,799",
    discount: "30% Off",
    rating: 3
  },
  {
    id: "356",
    name: "Titan",
    img: "action15.webp",
    price: "₹4,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "357",
    name: "Titan New One",
    img: "action16.webp",
    price: "₹3,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "358",
    name: "Fossil",
    img: "action17.webp",
    price: "₹8,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "359",
    name: "Titan ",
    img: "action18.webp",
    price: "₹7,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "360",
    name: "Fossil F3",
    img: "action19.webp",
    price: "₹4,899",
    discount: "15% Off",
    rating: 4
  },
  {
    id: "361",
    name: "Noise VS",
    img: "action20.webp",
    price: "₹5,899",
    discount: "15% Off",
    rating: 4
  }



    
  ];

  return (
   <div>
    <h1 className="h1d">Camera </h1>
    <div className="product-gridaction">
      
      {products.map((item, index) => (
        <div className="card1action" key={item.id}>
          <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="priceaction">{item.price}</div>
          <div className="discountaction">{item.discount}</div>
          <div className="ratingaction">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliveryaction"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnaction">Add to Cart</button>
          </Link> 
        </div>
      ))}
    </div>
    </div>
  );
};


    