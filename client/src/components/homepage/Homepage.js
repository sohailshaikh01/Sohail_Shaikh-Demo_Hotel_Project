import homepageDesign from './HomepageDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';

const Homepage = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

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

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${homepageDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={homepageDesign.homepage}>

      <header className={homepageDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={homepageDesign.menuIcon}>
                <div className={homepageDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={homepageDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={homepageDesign.menuIconBar}></div>
                <div className={homepageDesign.menuIconBar}></div>
                <div className={homepageDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={homepageDesign.nav}>
          <Link to='/'><div className={homepageDesign.navItem} id={homepageDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={homepageDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={homepageDesign.navItem}>About</div></Link>
          <div className={homepageDesign.navItem} id={homepageDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={homepageDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={homepageDesign.navItem} id={homepageDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={homepageDesign.sidebarMenu} >
          <div className={homepageDesign.sidebarMenuItems}>
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

      <section className={homepageDesign.section}>
        <div className={homepageDesign.topHeading}>HOTEL DEMO</div>
        <div className={homepageDesign.middleHeading}>Top Quality Foods. All at Affordable Price</div>
        <div className={homepageDesign.bottomHeading}>We Deliver Foods Across INDIA</div>
      </section>

      <footer className={homepageDesign.footer}>
        <div className={homepageDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={homepageDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={homepageDesign.footContent3}>Follow On</div>

        <div className={homepageDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={homepageDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={homepageDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={homepageDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={homepageDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={homepageDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default Homepage;