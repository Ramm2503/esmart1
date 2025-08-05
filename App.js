
import { About } from './about';
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
