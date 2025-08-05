import react from "react";
import './keyboard.css'

import { Link } from "react-router-dom";

export const Keyboard=()=>{
 const products = [
    
        
    {
        id: "121",
        name: "Logitech M240",
        img: "key1.jpg",
        price: "₹12,999",
        discount: "20% Off",
        rating: 5
    },
    {
        id: "122",
        name: "Hyper Pulse Fire",
        img: "key2.jpg",
        price: "₹11,199",
        discount: "10% Off",
        rating: 4
    },
    {
        id: "123",
        name: "Zebronics Zeb-Power",
        img: "key3.jpg",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "124",
        name: "Dell MS116",
        img: "key4.webp",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "125",
        name: "Hyper Pulse Fire",
        img: "key5.webp",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "126",
        name: "Logitech M240",
        img: "key6.webp",
        price: "₹9,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "127",
        name: "Zebronics Zeb-Power",
        img: "key7.webp",
        price: "₹10,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "128",
        name: "Hyper Pulse Fire",
        img: "key8.webp",
        price: "₹12,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "129",
        name: "Dell MS116",
        img: "key9.webp",
        price: "₹14,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "130",
        name: "Hyper Pulse Fire",
        img: "key10.webp",
        price: "₹11,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "131",
        name: "Hyper Pulse Fire",
        img: "key11.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "132",
        name: "Zebronics Zeb-Power",
        img: "key12.webp",
        price: "₹1,599",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "133",
        name: "Logitech M240",
        img: "key13.webp",
        price: "₹1,499",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "134",
        name: "Zebronics Zeb-Power",
        img: "key14.webp",
        price: "₹2,799",
        discount: "30% Off",
        rating: 3
    },
    {
        id: "135",
        name: "Dell MS116",
        img: "key15.webp",
        price: "₹12,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "136",
        name: "Zebronics Zeb-Power",
        img: "key16.webp",
        price: "₹13,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "137",
        name: "Hyper Pulse Fire",
        img: "key17.webp",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "138",
        name: "Hyper Pulse Fire",
        img: "key18.webp",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "139",
        name: "Zebronics Zeb-Power",
        img: "key19.webp",
        price: "₹10,899",
        discount: "15% Off",
        rating: 4
    },
    {
        id: "140",
        name: "Logitech M240",
        img: "key20.webp",
        price: "₹11,899",
        discount: "15% Off",
        rating: 4
    }
];


    


  return (
   <div>
    <h1 className="h1d1">Keyboard</h1>
    <div className="product-gridkey">
      
      {products.map((item, index) => (
        <div className="card1key" key={item.id}>
            <Link to={`/products/${item.id}`} className="linktag">
          <img src={item.img} alt={item.name} />
          <h2>{item.name}</h2>
          <div className="pricekey">{item.price}</div>
          <div className="discountkey">{item.discount}</div>
          <div className="ratingkey">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
          <div className="deliverykey"><i className="fas fa-truck"></i> Free Delivery</div>
          <button className="add-btnkey">Add to Cart</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};