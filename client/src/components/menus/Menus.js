import menusDesign from './MenusDesign.module.css';
import socialHandles from '../../socialHandles';
import breakfastImg from '../images/breakfast.jpg';
import indVegImg from '../images/special indian veggies.jpg';
import mahaSpecialImg from '../images/maharastrian foods.jpg';
import punjabSpecialImg from '../images/punjabi food.jpg';
import fastFoodsImg from '../images/fast-foods.jpg';
import specialJuicesImg from '../images/juices.jpg';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';

const Menus = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const topHeadingAnimation = useRef(null);
  const menuListItemsAnimation = useRef(null);
  const menuIconChange = useRef(null);

  if(loginConfirmation == null)
    window.location.reload(false);

  const [isOpenMenu, setOpenMenu] = useState(false);

  const expandWindow = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };

  const logoutUser = () => {
    const logoutResult = window.confirm('Are you sure you want to logout?');
    if(logoutResult === true) {
      localStorage.setItem('loginConfirmation', JSON.stringify({ login: false }));
      localStorage.removeItem('BreakfastData');
      localStorage.removeItem('IndVegData');
      localStorage.removeItem('MahaSpecialData');
      localStorage.removeItem('PunjabSpecialData');
      localStorage.removeItem('FastFoodsData');
      localStorage.removeItem('SpecialJuicesData');
      window.location.reload(false);
    }
  }

  const handleCartVisibility = () => {
    if(loginConfirmation.login === true)
      navigate('/cart');
    else
      navigate('/login');
  }

  const handleOrderVisibility = () => {
    if(loginConfirmation.login === true)
      navigate('/ordered-data');
    else
      navigate('/login');
  }

  useEffect(() => {

    const menusAnimationConfirmation = sessionStorage.getItem('menusAnimationConfirmation');

    if(menusAnimationConfirmation === 'false') {
      topHeadingAnimation.current.style.fontSize = '40px';
      topHeadingAnimation.current.style.padding = '10px 0';
      menuListItemsAnimation.current.style.visibility = 'visible';
      menuListItemsAnimation.current.style.top = '100px';
    }
    else {
      topHeadingAnimation.current.style.animation = `${menusDesign.styleChange1} 1s 1s forwards`;
      menuListItemsAnimation.current.style.animation = `${menusDesign.styleChange2} 1s 2s forwards`;
    }

    sessionStorage.setItem('menusAnimationConfirmation', JSON.stringify(false));

  }, []);

  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${menusDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={menusDesign.menus}>

      <header className={menusDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={menusDesign.menuIcon}>
                <div className={menusDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={menusDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={menusDesign.menuIconBar}></div>
                <div className={menusDesign.menuIconBar}></div>
                <div className={menusDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={menusDesign.nav}>
          <Link to='/'><div className={menusDesign.navItem}>Home</div></Link>
          <Link to='/about'><div className={menusDesign.navItem}>About</div></Link>
          <div className={menusDesign.navItem} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={menusDesign.navItem} id={menusDesign.logoutLink} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={menusDesign.navItem} id={menusDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={menusDesign.sidebarMenu} >
          <div className={menusDesign.sidebarMenuItems}>
            <Link to='/profile'>My Profile</Link><br />
            <hr />
            <Link to='/menus'>See Menus</Link><br />
            <hr />
            <span onClick={handleOrderVisibility}>My Order</span><br />
            <hr />
            <Link to='/contact-feedback'>Contact/Feedback</Link><br />
            <hr />
            <Link to='/about'>About</Link>
          </div>
        </div>
      )}

      <section className={menusDesign.section}>
        <div className={menusDesign.topHeading} ref={topHeadingAnimation}>HOTEL DEMO</div>
        <div className={menusDesign.menuListItems} ref={menuListItemsAnimation}>
          <Link to='/breakfast'><div className={menusDesign.breakfast}><span>Morning BreakFast</span>
            <div className={menusDesign.imgContainer}><img src={breakfastImg} alt='Mixed BreakFast Dishes Image' /></div></div></Link>
          <Link to='/ind-veggies'><div className={menusDesign.indVeg}><span>Indian Veggies</span>
            <div className={menusDesign.imgContainer}><img src={indVegImg} alt='Mixed Indian Vegetarian Dishes Image' /></div></div></Link>
          <Link to='/maha-special'><div className={menusDesign.mahaSpecial}><span>Maharashtrian Spacial</span>
            <div className={menusDesign.imgContainer}><img src={mahaSpecialImg} alt='Mixed Maharashtrian Special Dishes Image' /></div></div></Link>
          <Link to='/punjab-special'><div className={menusDesign.punjabSpecial}><span>Punjabi Special</span>
            <div className={menusDesign.imgContainer}><img src={punjabSpecialImg} alt='Mixed Punjabi Special Dishes Image' /></div></div></Link>
          <Link to='/fast-foods'><div className={menusDesign.fastFoods}><span>Fast Foods</span>
            <div className={menusDesign.imgContainer}><img src={fastFoodsImg} alt='Mixed Fast Food Dishes Image' /></div></div></Link>
          <Link to='/special-juices'><div className={menusDesign.specialJuices}><span>Special Juices</span>
            <div className={menusDesign.imgContainer}><img src={specialJuicesImg} alt='Mixed Special Juice Dishes Image' /></div></div></Link>
        </div>
      </section>

      <footer className={menusDesign.footer}>
        <div className={menusDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={menusDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={menusDesign.footContent3}>Follow On</div>

        <div className={menusDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={menusDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={menusDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={menusDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={menusDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={menusDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default Menus;