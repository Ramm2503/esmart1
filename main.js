import HelpPage from './help';
import { Nav } from './home';
import {Route,Routes} from 'react-router-dom'
import PrivacyPolicy from './privacy';
import ComplaintForm from './complaint';
import CustomerCare from './customer';
import ContactPage from './contact';

import { Computer } from './computer';
import { Mobile } from './moblie';
import { Power } from './powerbag';
import { Stand } from './stand';

import { Amazon } from './amazon';
import { Apple } from './apple';
import { Samgungbank } from './samgungbank';
import { Xiaomibank } from './xiaomibank';
import { Headphone } from './headphone';
import { Noisebads } from './noisebuds';
import { Boult } from './boult';
import { Oneplus } from './oneplus';
import { Jpl } from './jpl';
import { Realme } from './realme';
import { Boat } from './boat';
import { Case } from './case';
import { Neckband } from './neckband';
import { Stick } from './stick';
import { Watch } from './watch';
import { Premium } from './premium';
import { Middle } from './middle';
import { Budget } from './budget';
import { Joy } from './joy';
import { Mouse } from './mouse';
import { Bigheadphone } from './bigheadphone';
import { Keyboard } from './keyboard';
import { Camera } from './camera';
import { Mirror } from './smallcam';
import { Action } from './action';
import { Instant } from './instant';
import { Dslr } from './dslr';
import { Dash } from './dash';
import { Drone } from './drone';
import { Applebank } from './applebank';

import ProductsDetails from './productdetails';
import { Login } from './login';
import AddToCart from './components/addtocart';
import ProductList from './productlist';
import CartPage from './components/cartpage';
import Signup from './signup';








function App() {
  return (
    <div className="App">
    

      <Routes>
        <Route path='/' element={<Nav/>}/>
        <Route path="/help" element={<HelpPage/>}/>
        <Route path='/privary' element={<PrivacyPolicy/>}/>
        <Route path='/complaint' element={<ComplaintForm/>}/>
        <Route path='/customer' element={<CustomerCare/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/computer' element={<Computer/>}/>
        <Route path='/moblie' element={<Mobile/>}/>
        <Route path='/powerbag' element={<Power/>}/>
        <Route path='/stand' element={<Stand/>}/>
        <Route path='/Amazon' element={<Amazon/>}/>
        <Route path='/apple' element={<Apple/>}/>
        <Route path='/xiaomibank' element={<Xiaomibank/>}/>
        <Route path='/headphone' element={<Headphone/>}/>   
        <Route path='/noisebuds' element={<Noisebads/>}/>     
        <Route path='/boult' element={<Boult/>}/> 
        <Route path='/oneplus' element={<Oneplus/>}/> 
        <Route path='/jpl' element={<Jpl/>}/> 
        <Route path='/realme' element={<Realme/>}/> 
        <Route path='/boat' element={<Boat/>}/> 
        <Route path='/case' element={<Case/>}/>
        <Route path='/neckband' element={<Neckband/>}/>
        <Route path='/stick' element={<Stick/>}/>
        <Route path='/premium' element={<Premium/>}/>
        <Route path='/middle' element={<Middle/>}/>
        <Route path='/budget' element={<Budget/>}/>
        <Route path='/joy' element={<Joy/>}/>
        <Route path='/mouse' element={<Mouse/>}/>
        <Route path='/bigheadphone' element={<Bigheadphone/>}/>
        <Route path='/keyboard' element={<Keyboard/>}/>
        <Route path='/camera' element={<Camera/>}/>
        <Route path='/smallcam' element={<Mirror/>}/>
        <Route path='/action' element={<Action/>}/>
        <Route path='/instant' element={<Instant/>}/>
        <Route path='/dslr' element={<Dslr/>}/>
        <Route path='/dash' element={<Dash/>}/>
        <Route path='/drone' element={<Drone/>}/>
        <Route path='/applebank' element={<Applebank/>}/>
        <Route path='/samgungbank' element={<Samgungbank/>}/>
        <Route path='/login' element={<Login/>}/>


        <Route path='/products' element={<ProductList/>}/>
        <Route path='/products/:id' element={<ProductsDetails/>}/>

        <Route path="/" element={<ProductsDetails />} />
        <Route path="/addtocart/:id" element={<AddToCart />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/signup' element={<Signup/>}/>
        


        
      </Routes>
     
          </div>
  );
}

export default App;


import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save to localStorage when cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./CartContext";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> 
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const Products = [
  {
    id: "1",
    name: "Noise N1",
    img: "/w1.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 12999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "2",
    name: "Noise New launched",
    img: "w2.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 11199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "3",
    name: "Fossil Gen 6",
    img: "w3.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "4",
    name: "Titan Smart 3 ",
    img: "/w4.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "5",
    name: "FireBlout g3",
    img: "w20.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "6",
    name: "Noise ",
    img: "w6.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "7",
    name: "boat",
    img: "w7.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "8",
    name: "Noise g16 ",
    img: "w12.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "9",
    name: "Titan ",
    img: "w9.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "10",
    name: "Noise N1 ",
    img: "w10.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "11",
    name: "Fossil WE2",
    img: "w11.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "12",
    name: "Blout",
    img: "w12.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "13",
    name: "Noise g44",
    img: "w13.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "14",
    name: "Fossil F1",
    img: "w14.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 2799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "15",
    name: "Titan",
    img: "w15.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 12899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "16",
    name: "Titan New One",
    img: "w16.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 13899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "17",
    name: "Fossil",
    img: "w17.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "18",
    name: "Titan ",
    img: "w18.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "19",
    name: "Fossil F3",
    img: "w19.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "20",
    name: "Noise VS",
    img: "w20.webp",
    details: "Noise Newly Launched ColorFit Pulse 3 with 1.96 Biggest Display Bluetooth Calling Smart Watch Premium Build Auto Sport Detection 06  & 170+ Watch Faces Smartwatch for Men & Women - Midnight Black",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "21",
    name: "Noise N1",
    img: "w21.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "22",
    name: "Noise New launched",
    img: "w22.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 3199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "23",
    name: "Fossil Gen 6",
    img: "w23.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "24",
    name: "Titan Smart 3 ",
    img: "w24.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "25",
    name: "FireBlout g3",
    img: "w25.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "26",
    name: "Noise ",
    img: "w26.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "27",
    name: "boat",
    img: "w27.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "28",
    name: "Noise g16 ",
    img: "w28.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "29",
    name: "Titan ",
    img: "w29.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "30",
    name: "Noise N1 ",
    img: "w30.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "31",
    name: "Fossil WE2",
    img: "w31.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "32",
    name: "Blout",
    img: "w32.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "33",
    name: "Noise g44",
    img: "w33.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "34",
    name: "Fossil F1",
    img: "w1.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 12799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "35",
    name: "Titan",
    img: "w35.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "36",
    name: "Titan New One",
    img: "w36.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "37",
    name: "Fossil",
    img: "w7.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 8899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "38",
    name: "Titan ",
    img: "w38.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 7899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "39",
    name: "Fossil F3",
    img: "w12.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "40",
    name: "Noise VS",
    img: "w22.webp",
    details: "FS2 Pro 1.96 AMOLED Smart Watch with BT Calling AI Voice Assistant, 100+ Sports Modes, 5-Day Battery, Fast Charge, Health Tracking, – Smartwatch for Men & Women (Beige)",
    price: 5899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "41",
    name: "Noise N1",
    img: "w50.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "42",
    name: "Noise New launched",
    img: "w51.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "43",
    name: "Fossil Gen 6",
    img: "w52.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "44",
    name: "Titan Smart 3 ",
    img: "w53.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "45",
    name: "FireBlout g3",
    img: "w54.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "46",
    name: "Noise ",
    img: "w55.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "47",
    name: "boat",
    img: "w56.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 3499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "48",
    name: "Noise g16 ",
    img: "w57.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "49",
    name: "Titan ",
    img: "w59.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 4499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "50",
    name: "Noise N1 ",
    img: "w51.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "51",
    name: "Fossil WE2",
    img: "w60.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "52",
    name: "Blout",
    img: "w61.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "53",
    name: "Noise g44",
    img: "w62.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "54",
    name: "Fossil F1",
    img: "w63.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 2799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "55",
    name: "Titan",
    img: "w31.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "56",
    name: "Titan New One",
    img: "w65.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "57",
    name: "Fossil",
    img: "w70.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "58",
    name: "Titan ",
    img: "w67.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "59",
    name: "Fossil F3",
    img: "68.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "60",
    name: "Noise VS",
    img: "w69.webp",
    details: "Smartwatch with Single chip BT Calling, 2.01 AMOLED Display, 500 Nits Brightness, Functional Crown, IP67 Waterproof, 170+ Watch Faces, 24Hr Health Monitor",
    price: 1899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "61",
    name: "Claw Shoot Wired USB",
    img: "j1.webp",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 12999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "62",
    name: "Game Sir Nova Lite",
    img: "j2.webp",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 11199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "63",
    name: "Enter USB Game Pad",
    img: "j3.webp",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "64",
    name: "Zebronica Max ",
    img: "j5.webp",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "65",
    name: "Claw Shoot Wired USB",
    img: "j6.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "66",
    name: "Claw Shoot Wired USB ",
    img: "j7.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "67",
    name: "Cosmic Byte",
    img: "j15.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "68",
    name: "Game Sir Nova Lite",
    img: "j18.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "69",
    name: "Zebronica Max",
    img: "j7.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "70",
    name: "Cosmic Byte ",
    img: "j9.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "71",
    name: "Game Sir Nova Lite",
    img: "j10.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "72",
    name: "Claw Shoot Wired USB",
    img: "j11.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "73",
    name: "Enter USB Game Pad",
    img: "j12.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "74",
    name: "Cosmic Byte",
    img: "j13.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 2799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "75",
    name: "Enter USB Game Pad",
    img: "j14.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 12899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "76",
    name: "Zebronica Max",
    img: "j15.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 13899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "77",
    name: "Cosmic Byte",
    img: "j16.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "78",
    name: "Claw Shoot Wired USB ",
    img: "j17.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "79",
    name: "Enter USB Game Pad",
    img: "j18.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "80",
    name: "Game Sir Nova Lite",
    img: "j19.jpg",
    details: "Wireless Gaming Controller For PC, Dual-Mode (2.4G & Type C), Hallsense™ Magnetic Hall 3D Joysticks & Triggers Gamepad, EZ Click Macros, New Precision & Turbo Mode, Dual Vibration Motors",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "81",
    name: "Logitech M240",
    img: "mouse1.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 12999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "82",
    name: "Hyper Pulse Fire",
    img: "mouse2.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 11199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "83",
    name: "Zebronics Zeb-Power",
    img: "mouse3.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "84",
    name: "Dell MS116",
    img: "mouse4.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "85",
    name: "Hyper Pulse Fire",
    img: "mouse5.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "86",
    name: "Logitech M240",
    img: "mouse6.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "87",
    name: "Zebronics Zeb-Power",
    img: "mouse7.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "88",
    name: "Hyper Pulse Fire",
    img: "mouse8.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "89",
    name: "Dell MS116",
    img: "mouse9.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "90",
    name: "Hyper Pulse Fire",
    img: "mouse10.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "91",
    name: "Hyper Pulse Fire",
    img: "mouse11.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "92",
    name: "Zebronics Zeb-Power",
    img: "mouse12.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "93",
    name: "Logitech M240",
    img: "mouse13.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "94",
    name: "Zebronics Zeb-Power",
    img: "mouse14.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 2799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "95",
    name: "Dell MS116",
    img: "mouse15.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 12899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "96",
    name: "Zebronics Zeb-Power",
    img: "mouse16.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 1389,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "97",
    name: "Hyper Pulse Fire",
    img: "mouse17.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "98",
    name: "Hyper Pulse Fire",
    img: "mouse18.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "99",
    name: "Zebronics Zeb-Power",
    img: "mouse19.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "100",
    name: "Logitech M240",
    img: "mouse20.jpg",
    details: "M650 L Full Size Wireless Mouse - for Large Sized Hands, 2-Year Battery, Silent Clicks, Customisable Side Buttons, Bluetooth, for PC/Mac/Multi-Device/Chromebook - Graphite",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "101",
    name: "Logitech M240",
    img: "h1.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 12999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "102",
    name: "Hyper Pulse Fire",
    img: "h2.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 11199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "103",
    name: "Zebronics Zeb-Power",
    img: "h19.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "104",
    name: "Dell MS116",
    img: "h4.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "105",
    name: "Hyper Pulse Fire",
    img: "h20.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "106",
    name: "Logitech M240",
    img: "h6.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "107",
    name: "Zebronics Zeb-Power",
    img: "h7.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "108",
    name: "Hyper Pulse Fire",
    img: "h8.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "109",
    name: "Dell MS116",
    img: "h9.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "110",
    name: "Hyper Pulse Fire",
    img: "h10.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "111",
    name: "Hyper Pulse Fire",
    img: "h2.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "112",
    name: "Zebronics Zeb-Power",
    img: "h12.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "113",
    name: "Logitech M240",
    img: "h6.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "114",
    name: "Zebronics Zeb-Power",
    img: "h14.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 2799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "115",
    name: "Dell MS116",
    img: "h15.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 12899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "116",
    name: "Zebronics Zeb-Power",
    img: "h1.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 13899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "117",
    name: "Hyper Pulse Fire",
    img: "h17.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "118",
    name: "Hyper Pulse Fire",
    img: "h18.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "119",
    name: "Zebronics Zeb-Power",
    img: "h19.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "120",
    name: "Logitech M240",
    img: "h20.jpg",
    details: "ver Ear Bluetooth Headphones with 70H Playtime, 40mm Bass Drivers, Zen™ ENC Mic, Type-C Fast Charging, 4 EQ Modes, BTv 5.4, AUX Option, Easy Control, IPX5 headphones wireless with mic (Black)",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "121",
    name: "Logitech M240",
    img: "key1.jpg",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 12999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "122",
    name: "Hyper Pulse Fire",
    img: "key2.jpg",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 11199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "123",
    name: "Zebronics Zeb-Power",
    img: "key3.jpg",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "124",
    name: "Dell MS116",
    img: "key4.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "125",
    name: "Hyper Pulse Fire",
    img: "key5.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "126",
    name: "Logitech M240",
    img: "key6.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "127",
    name: "Zebronics Zeb-Power",
    img: "key7.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "128",
    name: "Hyper Pulse Fire",
    img: "key8.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "129",
    name: "Dell MS116",
    img: "key9.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "130",
    name: "Hyper Pulse Fire",
    img: "key10.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "131",
    name: "Hyper Pulse Fire",
    img: "key11.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "132",
    name: "Zebronics Zeb-Power",
    img: "key12.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "133",
    name: "Logitech M240",
    img: "key13.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "134",
    name: "Zebronics Zeb-Power",
    img: "key14.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 2799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "135",
    name: "Dell MS116",
    img: "key15.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 12899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "136",
    name: "Zebronics Zeb-Power",
    img: "key16.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 13899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "137",
    name: "Hyper Pulse Fire",
    img: "key17.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "138",
    name: "Hyper Pulse Fire",
    img: "key18.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "139",
    name: "Zebronics Zeb-Power",
    img: "key19.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 10899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "140",
    name: "Logitech M240",
    img: "key20.webp",
    details: "Multimedia Wireless Keyboard 2.4 GHz & Bluetooth 5.0 Connectivity, Noiseless Experience, Compact Size for iOS iPad Air, Pro, Mini, Android, Windows Tablets PC",
    price: 11899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "141",
    name: "Realme N1 SWS",
    img: "st1.webp",
     details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  { id: "142", name: "Realme Buds VS104", img: "st2.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1199, discount: "10% Off", rating: 4 },
  { id: "143", name: "Realme Buds N1", img: "st3.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1899, discount: "15% Off", rating: 4 },
  { id: "144", name: "Realme Buds N1", img: "st4.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1499, discount: "30% Off", rating: 3 },
  { id: "145", name: "Realme Buds 124", img: "st5.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2499, discount: "30% Off", rating: 3 },
  { id: "146", name: "Realme Buds N1 Pro", img: "st6.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2499, discount: "30% Off", rating: 3 },
  { id: "147", name: "Realme Buds N1 Pro Gold", img: "st7.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1499, discount: "30% Off", rating: 3 },
  { id: "148", name: "Realme Airdrops joy", img: "st8.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1499, discount: "30% Off", rating: 3 },
  { id: "149", name: "Realme Master Buds", img: "st9.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2499, discount: "30% Off", rating: 3 },
  { id: "150", name: "Realme Buds N1 Pro", img: "st10.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1499, discount: "30% Off", rating: 3 },
  { id: "151", name: "Realme Buds VS601", img: "st11.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1499, discount: "30% Off", rating: 3 },
  { id: "152", name: "Realme Buds VS601", img: "st12.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 1599, discount: "30% Off", rating: 3 },
  { id: "153", name: "Realme Buds VS112", img: "st20.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2499, discount: "30% Off", rating: 3 },
  { id: "154", name: "Realme Buds VS104", img: "st14.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 3799, discount: "30% Off", rating: 3 },
  { id: "155", name: "Realme Buds VS155", img: "st15.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2899, discount: "15% Off", rating: 4 },
  { id: "156", name: "Realme Buds T300", img: "st16.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2599, discount: "15% Off", rating: 4 },
  { id: "157", name: "Realme Buds Air 3 Neo", img: "st17.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 3499, discount: "25% Off", rating: 5 },
  { id: "158", name: "Realme Buds Air 5", img: "st18.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 3999, discount: "20% Off", rating: 5 },
  { id: "159", name: "Realme Buds Wireless 3", img: "st19.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2999, discount: "20% Off", rating: 4 },
  { id: "160", name: "Realme Buds T100", img: "st21.webp", details: "Foldable Mobile Holder, Upto 9.6 inches, 360° Rotatable, Stepless Multi Angle Adjustment, Anti-Skid Base & Resting pad, Lightweight & Handy, Compatible with Mobile & Tablet", price: 2099, discount: "30% Off", rating: 4 },
  { id: "161", name: "Iphone 16", img: "i161.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2999, discount: "20% Off", rating: 5 },
  { id: "162", name: "Iphone 16+", img: "i164.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1199, discount: "10% Off", rating: 4 },
  { id: "163", name: "Iphone 14", img: "i165.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1899, discount: "15% Off", rating: 4 },
  { id: "164", name: "Iphone 13", img: "i166.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1499, discount: "30% Off", rating: 3 },
  { id: "165", name: "Iphone 11", img: "i167.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2499, discount: "30% Off", rating: 3 },
  { id: "166", name: "Oneplus 9r", img: "9r3.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2499, discount: "30% Off", rating: 3 },
  { id: "167", name: "Oneplus 9r", img: "9r4.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1499, discount: "30% Off", rating: 3 },
  { id: "168", name: "Oneplus 9r", img: "9r5.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1499, discount: "30% Off", rating: 3 },
  { id: "169", name: "Oneplus 9r", img: "9r7.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2499, discount: "30% Off", rating: 3 },
  { id: "170", name: "Oneplus 9r", img: "9r8.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1499, discount: "30% Off", rating: 3 },
  { id: "171", name: "Samgung", img: "a1.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1499, discount: "30% Off", rating: 3 },
  { id: "172", name: "Samgung", img: "a2.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1599, discount: "30% Off", rating: 3 },
  { id: "173", name: "Samgung", img: "a3.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2499, discount: "30% Off", rating: 3 },
  { id: "174", name: "Samgung", img: "a4.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 3799, discount: "30% Off", rating: 3 },
  { id: "175", name: "Samgung", img: "a5.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2899, discount: "15% Off", rating: 4 },
  { id: "176", name: "Oneplus 11R", img: "11r1.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1499, discount: "30% Off", rating: 3 },
  { id: "177", name: "Oneplus 11R", img: "11r2.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 1599, discount: "30% Off", rating: 3 },
  { id: "178", name: "Oneplus 11R", img: "11r3.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2499, discount: "30% Off", rating: 3 },
  { id: "179", name: "Oneplus 11R", img: "11r4.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 3799, discount: "30% Off", rating: 3 },
  { id: "180", name: "Oneplus 11R", img: "11r5.webp", details: "Fashionury Back Cover for Samsung Galaxy M35 5G | Camera Bump Protection | Matte Soft Silicon Flexible | All Side Shock Proof Rubberised Back Case Cover for Samsung Galaxy M35 5G", price: 2899, discount: "15% Off", rating: 4 },
  { id: "181", name: "Boat N1 SWS", img: "p1.jpg", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 2999, discount: "20% Off", rating: 5 },
  { id: "182", name: "Boat Buds VS104", img: "p2.jpg", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1199, discount: "10% Off", rating: 4 },
  { id: "183", name: "Boat Buds N1", img: "p3.jpg", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1899, discount: "15% Off", rating: 4 },
  { id: "184", name: "Boat Buds N1", img: "p4.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1499, discount: "30% Off", rating: 3 },
  { id: "185", name: "Boat Buds 124", img: "p5.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 2499, discount: "30% Off", rating: 3 },
  { id: "186", name: "Boat Buds N1 Pro", img: "p6.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 2499, discount: "30% Off", rating: 3 },
  { id: "187", name: "Boat Buds N1 Pro Gold", img: "p7.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1499, discount: "30% Off", rating: 3 },
  { id: "188", name: "Boat Airdrops joy", img: "p89.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1499, discount: "30% Off", rating: 3 },
  { id: "189", name: "Boat Master Buds", img: "p9.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 2499, discount: "30% Off", rating: 3 },
  { id: "190", name: "Boat Buds N1 Pro", img: "p10.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1499, discount: "30% Off", rating: 3 },
  { id: "191", name: "Boat Buds VS601", img: "p11.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1499, discount: "30% Off", rating: 3 },
  { id: "192", name: "Boat Buds VS601", img: "p12.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1599, discount: "30% Off", rating: 3 },
  { id: "193", name: "Boat Buds VS112", img: "p13.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 2499, discount: "30% Off", rating: 3 },
  { id: "194", name: "Boat Buds VS104", img: "p14.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 3799, discount: "30% Off", rating: 3 },
  { id: "195", name: "Boat Buds VS155", img: "p15.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 2899, discount: "15% Off", rating: 4 },
  { id: "196", name: "Boat Buds N1 Pro", img: "p16.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1499, discount: "30% Off", rating: 3 },
  { id: "197", name: "Boat Buds VS601", img: "p17.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1499, discount: "30% Off", rating: 3 },
  { id: "198", name: "Boat Buds VS601", img: "p18.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 1599, discount: "30% Off", rating: 3 },
  { id: "199", name: "Boat Buds VS112", img: "p19.webp", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 2499, discount: "30% Off", rating: 3 },
  { id: "200", name: "Boat Buds VS104", img: "p20.jpg", details: "Wireless Z3 in-Ear Neckband with 12.4mm Drivers, 3D Spatial Audio,10 mins Charge for 27 hrs Playback, AI Call Noise Cancellation, 4 EQ preset, Dynamic bass Enhancement & BT5.4", price: 3799, discount: "30% Off", rating: 3 },
  { id: "201", name: "NoisenBuds N1 SWS", img: "./noise1.jpg", details: "", price: 12999, discount: "20% Off", rating: 5 },
  { id: "202", name: "Noise Buds VS104", img: "noise2.jpg", price: 1199, discount: "10% Off", rating: 4 },
  { id: "203", name: "Noise Buds N1", img: "noise3.jpg", price: 899, discount: "15% Off", rating: 4 },
  { id: "204", name: "Noise Buds N1", img: "noise5.jpg", price: 499, discount: "30% Off", rating: 3 },
  { id: "205", name: "Portable Fan", img: "noise6.jpg", price: 499, discount: "30% Off", rating: 3 },
  { id: "206", name: "Noise Buds N1 Pro Green", img: "noise7.jpg", price: 499, discount: "30% Off", rating: 3 },
  { id: "207", name: "Noise Buds N1 Pro Gold", img: "noise8.jpg", price: 499, discount: "30% Off", rating: 3 },
  { id: "208", name: "Noise Airdrops joy", img: "noise9.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "209", name: "Noise Master Buds", img: "noise10.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "210", name: "Noise Buds N1 Pro", img: "noise11.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "211", name: "Noise Buds VS601", img: "noise12.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "212", name: "Noise Buds VS601", img: "noise13.webp", price: 1599, discount: "30% Off", rating: 3 },
  { id: "213", name: "Noise Buds VS112", img: "noise14.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "214", name: "Noise Buds VS104", img: "noise15.webp", price: 799, discount: "30% Off", rating: 3 },
  { id: "215", name: "Noise Buds VS155", img: "noise3.jpg", price: 899, discount: "15% Off", rating: 4 },
  { id: "216", name: "Boult Z60", img: "boult2.jpg", price: 12999, discount: "20% Off", rating: 5 },
  { id: "217", name: "Boult Audio K40", img: "boult3.jpg", price: 1199, discount: "10% Off", rating: 4 },
  { id: "218", name: "Boult Buds N1", img: "boult4.jpg", price: 1999, discount: "15% Off", rating: 4 },
  { id: "219", name: "Boult Buds N1", img: "boult5.jpg", price: 1099, discount: "30% Off", rating: 3 },
  { id: "220", name: "Boult Buds Nit 07", img: "boult6.webp", price: 999, discount: "30% Off", rating: 3 },
  { id: "221", name: "Boult Buds N1 Pro Green", img: "boult7.webp", price: 699, discount: "30% Off", rating: 3 },
  { id: "222", name: "Boult Buds N1 Pro Gold", img: "boult8.webp", price: 799, discount: "30% Off", rating: 3 },
  { id: "223", name: "Boult Z40 Sliver", img: "boult9.webp", price: 999, discount: "30% Off", rating: 3 },
  { id: "224", name: "Boult Master Buds", img: "boult10.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "225", name: "Boult Z40", img: "boult11.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "226", name: "Boult Buds VS601", img: "boult12.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "227", name: "Boult Buds VS601", img: "boult13.webp", price: 1599, discount: "30% Off", rating: 3 },
  { id: "228", name: "Boult Buds VS112", img: "boult14.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "229", name: "Boult Buds VS104", img: "boult15.webp", price: 1799, discount: "30% Off", rating: 3 },
  { id: "230", name: "Boult Buds VS155", img: "boult16.webp", price: 1899, discount: "15% Off", rating: 4 },
  { id: "231", name: "Oneplus N1 SWS", img: "oneplus1.webp", price: 12999, discount: "20% Off", rating: 5 },
  { id: "232", name: "Oneplus VS104", img: "oneplus2.webp", price: 1199, discount: "10% Off", rating: 4 },
  { id: "233", name: "Oneplus Buds N1", img: "oneplus3.webp", price: 899, discount: "15% Off", rating: 4 },
  { id: "234", name: "Oneplus Buds N1", img: "oneplus4.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "235", name: "Oneplus Buds Nord", img: "oneplus5.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "236", name: "Oneplus Buds N1 Pro", img: "oneplus6.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "237", name: "Oneplus Buds N1 Pro", img: "oneplus7.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "238", name: "Oneplus Airdrops Joy", img: "oneplus8.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "239", name: "Oneplus Master Buds", img: "oneplus9.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "240", name: "Oneplus Buds N1 Pro", img: "oneplus10.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "241", name: "Oneplus Buds VS601", img: "oneplus11.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "242", name: "Oneplus Buds VS601", img: "oneplus12.webp", price: 1599, discount: "30% Off", rating: 3 },
  { id: "243", name: "Oneplus Buds VS112", img: "oneplus13.jpg", price: 499, discount: "30% Off", rating: 3 },
  { id: "244", name: "Oneplus Buds VS104", img: "oneplus14.webp", price: 799, discount: "30% Off", rating: 3 },
  { id: "245", name: "Oneplus Buds VS155", img: "oneplus15.webp", price: 899, discount: "15% Off", rating: 4 },
  { id: "246", name: "JPL N1 SWS", img: "jpl14.webp", price: 12999, discount: "20% Off", rating: 5 },
  { id: "247", name: "JPL VS104", img: "jpl2.webp", price: 1199, discount: "10% Off", rating: 4 },
  { id: "248", name: "JPL Buds N1", img: "jpl3.webp", price: 899, discount: "15% Off", rating: 4 },
  { id: "249", name: "JPL Buds N1", img: "jpl4.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "250", name: "JPL Buds Nord", img: "jpl5.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "251", name: "JPL Buds N1 Pro", img: "jpl6.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "252", name: "JPL Buds N1 Pro", img: "jpl7.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "253", name: "JPL Airdrops Joy", img: "jpl8.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "254", name: "JPL Master Buds", img: "jpl9.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "255", name: "JPL Buds N1 Pro", img: "jpl10.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "256", name: "JPL Buds VS601", img: "jpl11.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "257", name: "JPL Buds VS601", img: "jpl15.webp", price: 1599, discount: "30% Off", rating: 3 },
  { id: "258", name: "JPL Buds VS112", img: "jpl16.webp", price: 499, discount: "30% Off", rating: 3 },
  { id: "259", name: "JPL Buds VS104", img: "jpl17.webp", price: 799, discount: "30% Off", rating: 3 },
  { id: "260", name: "JPL Buds VS155", img: "jpl18.webp", price: 899, discount: "15% Off", rating: 4 },
  { id: "261", name: "Realme N1 SWS", img: "real1.webp", price: 2999, discount: "20% Off", rating: 5 },
  { id: "262", name: "Realme Buds VS104", img: "real2.webp", price: 1199, discount: "10% Off", rating: 4 },
  { id: "263", name: "Realme Buds N1", img: "real3.webp", price: 1899, discount: "15% Off", rating: 4 },
  { id: "264", name: "Realme Buds N1", img: "real4.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "265", name: "Realme Buds 124", img: "real5.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "266", name: "Realme Buds N1 Pro", img: "real5.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "267", name: "Realme Buds N1 Pro Gold", img: "real6.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "268", name: "Realme Airdrops joy", img: "real7.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "269", name: "Realme Master Buds", img: "real8.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "270", name: "Realme Buds N1 Pro", img: "real9.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "271", name: "Realme Buds VS601", img: "real10.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "272", name: "Realme Buds VS601", img: "real11.webp", price: 1599, discount: "30% Off", rating: 3 },
  { id: "273", name: "Realme Buds VS112", img: "real12.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "274", name: "Realme Buds VS104", img: "real13.webp", price: 3799, discount: "30% Off", rating: 3 },
  { id: "275", name: "Realme Buds VS155", img: "real14.webp", price: 2899, discount: "15% Off", rating: 4 },
  { id: "276", name: "Boat N1 SWS", img: "boat1.webp", price: 2999, discount: "20% Off", rating: 5 },
  { id: "277", name: "Boat Buds VS104", img: "boat2.webp", price: 1199, discount: "10% Off", rating: 4 },
  { id: "278", name: "Boat Buds N1", img: "boat3.webp", price: 1899, discount: "15% Off", rating: 4 },
  { id: "279", name: "Boat Buds N1", img: "boat4.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "280", name: "Boat Buds 124", img: "boat5.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "281", name: "Boat Buds N1 Pro", img: "boat6.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "282", name: "Boat Buds N1 Pro Gold", img: "boat7.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "283", name: "Boat Airdrops joy", img: "boat8.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "284", name: "Boat Master Buds", img: "boat9.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "285", name: "Boat Buds N1 Pro", img: "boat10.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "286", name: "Boat Buds VS601", img: "boat11.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "287", name: "Boat Buds VS601", img: "boat13.webp", price: 1599, discount: "30% Off", rating: 3 },
  { id: "288", name: "Boat Buds VS112", img: "boat14.webp", price: 2499, discount: "30% Off", rating: 3 },
  { id: "289", name: "Boat Buds VS104", img: "boat15.webp", price: 3799, discount: "30% Off", rating: 3 },
  { id: "290", name: "Boat Buds VS155", img: "boat12.webp", price: 2899, discount: "15% Off", rating: 4 },
  { id: "291", name: "We Cool S5", img: "sell1.jpg", price: 2999, discount: "20% Off", rating: 5 },
  { id: "292", name: "We Cool S6s", img: "sell2.jpg", price: 1199, discount: "10% Off", rating: 4 },
  { id: "293", name: "We Cool S4", img: "sell3.jpg", price: 1899, discount: "15% Off", rating: 4 },
  { id: "294", name: "We Cool S4s", img: "sell4.jpg", price: 1499, discount: "30% Off", rating: 3 },
  { id: "295", name: "We Cool S6s", img: "sell5.jpg", price: 2499, discount: "30% Off", rating: 3 },
  { id: "296", name: "We Cool S7", img: "sell6.jpg", price: 2499, discount: "30% Off", rating: 3 },
  { id: "297", name: "We Cool S8s", img: "sell7.jpg", price: 1499, discount: "30% Off", rating: 3 },
  { id: "298", name: "We Cool S9s", img: "sell8.jpg", price: 1499, discount: "30% Off", rating: 3 },
  { id: "299", name: "We Cool S2", img: "sell9.jpg", price: 2499, discount: "30% Off", rating: 3 },
  { id: "300", name: "We Cool S6s", img: "sell10.jpg", price: 1499, discount: "30% Off", rating: 3 },
  { id: "301", name: "We Cool S", img: "sell11.jpg", price: 1499, discount: "30% Off", rating: 3 },
  { id: "302", name: "We Cool 4S", img: "sell12.jpg", price: 1599, discount: "30% Off", rating: 3 },
  { id: "303", name: "We Cool S3", img: "sell13.jpg", price: 2499, discount: "30% Off", rating: 3 },
  { id: "304", name: "We Cool S", img: "sell14.webp", price: 1499, discount: "30% Off", rating: 3 },
  { id: "305", name: "We Cool 4S", img: "sell15.webp", price: 1599, discount: "30% Off", rating: 3 },


  {
    id: "306",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank1.webp",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "307",
    name: "Boat New launch PB331",
    img: "bank2.webp",
    price: 3199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "308",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank3.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "309",
    name: "Boat New launch PB331",
    img: "bank4.webp",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "310",
    name: "Boat New launch PB331",
    img: "bank5.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "311",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank6.webp",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "312",
    name: "Boat New launch PB331",
    img: "bank7.webp",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "313",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank8.webp",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "314",
    name: "Boat New launch PB331",
    img: "bank9.webp",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "315",
    name: "Ambrane Magsafe 10000 MAH",
    img: "bank10.webp",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },

  {
    id: "322",
    name: "Noise N1",
    img: "mi1.webp",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "323",
    name: "Noise New launched",
    img: "mi2.webp",
    price: 3199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "324",
    name: "Fossil Gen 6",
    img: "mi3.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "325",
    name: "Titan Smart 3 ",
    img: "mi4.webp",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "326",
    name: "FireBlout g3",
    img: "mi5.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "327",
    name: "Noise ",
    img: "mi6.webp",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "328",
    name: "boat",
    img: "mi7.webp",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "329",
    name: "Noise g16 ",
    img: "mi8.webp",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "330",
    name: "Titan ",
    img: "mi9.webp",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "331",
    name: "Noise N1 ",
    img: "mi10.webp",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "332",
    name: "Fossil WE2",
    img: "mi11.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "333",
    name: "Blout",
    img: "mi12.webp",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "334",
    name: "Noise g44",
    img: "mi13.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "335",
    name: "Fossil F1",
    img: "mi14.webp",
    price: 12799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "336",
    name: "Titan",
    img: "mi15.webp",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "337",
    name: "Titan New One",
    img: "mi16.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "338",
    name: "Fossil",
    img: "mi17.webp",
    price: 8899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "339",
    name: "Titan ",
    img: "mi18.webp",
    price: 7899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "340",
    name: "Fossil F3",
    img: "mi19.webp",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "341",
    name: "Noise VS",
    img: "mi20.webp",
    price: 5899,
    discount: "15% Off",
    rating: 4
  },

  {
    id: "342",
    name: "Noise N1",
    img: "action1.webp",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "343",
    name: "Noise New launched",
    img: "action2.webp",
    price: 3199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "344",
    name: "Fossil Gen 6",
    img: "action3.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "345",
    name: "Titan Smart 3 ",
    img: "action4.webp",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "346",
    name: "FireBlout g3",
    img: "action5.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "347",
    name: "Noise ",
    img: "action6.webp",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "348",
    name: "boat",
    img: "action7.webp",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "349",
    name: "Noise g16 ",
    img: "action8.webp",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "350",
    name: "Titan ",
    img: "action9.webp",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "351",
    name: "Noise N1 ",
    img: "action10.webp",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "352",
    name: "Fossil WE2",
    img: "action11.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "353",
    name: "Blout",
    img: "action12.webp",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "354",
    name: "Noise g44",
    img: "action13.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "355",
    name: "Fossil F1",
    img: "action14.webp",
    price: 12799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "356",
    name: "Titan",
    img: "action15.webp",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "357",
    name: "Titan New One",
    img: "action16.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "358",
    name: "Fossil",
    img: "action17.webp",
    price: 8899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "359",
    name: "Titan ",
    img: "action18.webp",
    price: 7899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "360",
    name: "Fossil F3",
    img: "action19.webp",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "361",
    name: "Noise VS",
    img: "action20.webp",
    price: 5899,
    discount: "15% Off",
    rating: 4
  },

  {
    id: "362",
    name: "Noise N1",
    img: "mi1.webp",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "363",
    name: "Noise New launched",
    img: "mi2.webp",
    price: 3199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "364",
    name: "Fossil Gen 6",
    img: "mi3.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "365",
    name: "Titan Smart 3 ",
    img: "mi4.webp",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "366",
    name: "FireBlout g3",
    img: "mi5.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "367",
    name: "Noise ",
    img: "mi6.webp",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "368",
    name: "boat",
    img: "mi7.webp",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "369",
    name: "Noise g16 ",
    img: "mi8.webp",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "370",
    name: "Titan ",
    img: "mi9.webp",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "371",
    name: "Noise N1 ",
    img: "mi10.webp",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "372",
    name: "Fossil WE2",
    img: "mi11.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "373",
    name: "Blout",
    img: "mi12.webp",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "374",
    name: "Noise g44",
    img: "mi13.webp",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "375",
    name: "Fossil F1",
    img: "mi14.webp",
    price: 12799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "376",
    name: "Titan",
    img: "mi15.webp",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "377",
    name: "Titan New One",
    img: "mi16.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "378",
    name: "Fossil",
    img: "mi17.webp",
    price: 8899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "379",
    name: "Titan ",
    img: "mi18.webp",
    price: 7899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "380",
    name: "Fossil F3",
    img: "mi19.webp",
    price: 4899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "381",
    name: "Noise VS",
    img: "mi20.webp",
    price: 5899,
    discount: "15% Off",
    rating: 4
  },

  {
    id: "382",
    name: "Noise N1",
    img: "d1.webp",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "383",
    name: "Noise New launched",
    img: "d2.webp",
    price: 3199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "384",
    name: "Fossil Gen 6",
    img: "d3.webp",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "385",
    name: "Titan Smart 3 ",
    img: "d4.jpg",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "386",
    name: "FireBlout g3",
    img: "d5.jpg",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "387",
    name: "Noise ",
    img: "d6.jpg",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "388",
    name: "boat",
    img: "d7.jpg",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "389",
    name: "Noise g16 ",
    img: "d8.jpg",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "390",
    name: "Titan ",
    img: "d9.jpg",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "391",
    name: "Noise N1 ",
    img: "d10.jpg",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },

  {
    id: "392",
    name: "Noise N1",
    img: "dash1.jpg",
    price: 2999,
    discount: "20% Off",
    rating: 5
  },
  {
    id: "393",
    name: "Noise New launched",
    img: "dash2.jpg",
    price: 3199,
    discount: "10% Off",
    rating: 4
  },
  {
    id: "394",
    name: "Fossil Gen 6",
    img: "dash3.jpg",
    price: 3899,
    discount: "15% Off",
    rating: 4
  },
  {
    id: "395",
    name: "Titan Smart 3 ",
    img: "dash4.jpg",
    price: 2499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "396",
    name: "FireBlout g3",
    img: "dash5.jpg",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "397",
    name: "Noise ",
    img: "dash6.jpg",
    price: 9499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "398",
    name: "boat",
    img: "dash7.jpg",
    price: 10499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "399",
    name: "Noise g16 ",
    img: "dash8.jpg",
    price: 12499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "400",
    name: "Titan ",
    img: "dash9.jpg",
    price: 14499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "401",
    name: "Noise N1 ",
    img: "dash9.jpg",
    price: 11499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "402",
    name: "Fossil WE2",
    img: "dash10.jpg",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "403",
    name: "Blout",
    img: "dash11.jpg",
    price: 1599,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "404",
    name: "Noise g44",
    img: "dash12.jpg",
    price: 1499,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "405",
    name: "Fossil F1",
    img: "dash13.jpg",
    price: 12799,
    discount: "30% Off",
    rating: 3
  },
  {
    id: "406",
    name: "Titan",
    img: "dash14.jpg",
    price: 4899,
    discount: "15% Off",
    rating: 4
  }
];
export default Products;

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
