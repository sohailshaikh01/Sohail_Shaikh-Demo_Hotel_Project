import {CartReference} from './components/menus/CartReference';
import Homepage from './components/homepage/Homepage';
import Menus from './components/menus/Menus';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import OrderedData from './components/order/OrderedData';
import Login from './components/loginPage/Login'
import SignUp from './components/loginPage/component/signUp/SignUp'
import Profile from './components/profile/Profile'
import PasswordModification from './components/profile/component/passwordModification/PasswordModification'
import Contact from './components/contact/Contact'
import Breakfast from './components/menus/Breakfast';
import IndVeggies from './components/menus/IndVeggies';
import MahaSpecial from './components/menus/MahaSpecial';
import PunjabSpecial from './components/menus/PunjabSpecial';
import FastFoods from './components/menus/FastFoods';
import SpecialJuices from './components/menus/SpecialJuices';
import PrivacyTerms from './components/privacyTerms/PrivacyTerms'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>  
        <CartReference>    
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/menus' element={<Menus />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/ordered-data' element={<OrderedData />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/password-modification' element={<PasswordModification />} />
            <Route path='/contact-feedback' element={<Contact />} />
            <Route path='/breakfast' element={<Breakfast />} />
            <Route path='/ind-veggies' element={<IndVeggies />} />
            <Route path='/maha-special' element={<MahaSpecial />} />
            <Route path='/punjab-special' element={<PunjabSpecial />} />
            <Route path='/fast-foods' element={<FastFoods />} />
            <Route path='/special-juices' element={<SpecialJuices />} />
            <Route path='/privacy-terms' element={<PrivacyTerms />} />
          </Routes>
        </CartReference>
      </Router>     
    </div>
  );
}

export default App;
