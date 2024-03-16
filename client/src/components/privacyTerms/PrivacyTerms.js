import privacyTermsDesign from './PrivacyTermsDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';

const PrivacyTerms = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);

  const [isOpenMenu, setOpenMenu] = useState(false);

  const expandWindow = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };
  
  const logoutUser = () => {
    const logoutResult = window.confirm('Are you sure you want to logout?');
    if(logoutResult === true) {
      localStorage.setItem('loginConfirmation', JSON.stringify({login: false}));
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
      if(isOpenMenu && !event.target.closest(`.${privacyTermsDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={privacyTermsDesign.privacyTerms}>

      <header className={privacyTermsDesign.header}>
        {
        isOpenMenu?
        (
          <div className={privacyTermsDesign.menuIcon}>
            <div className={privacyTermsDesign.closeMenuIcon}>ⓧ</div>
          </div>
        ):
        (
          <div className={privacyTermsDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
            <div className={privacyTermsDesign.menuIconBar}></div>
            <div className={privacyTermsDesign.menuIconBar}></div>
            <div className={privacyTermsDesign.menuIconBar}></div>      
          </div>
        )
        }
        <nav className={privacyTermsDesign.nav}>
          <Link to='/'><div className={privacyTermsDesign.navItem} id={privacyTermsDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={privacyTermsDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={privacyTermsDesign.navItem}>About</div></Link>         
          <div className={privacyTermsDesign.navItem} id={privacyTermsDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={privacyTermsDesign.navItem} onClick={logoutUser}>Logout</div>
              ):
              (
                <Link to='/login'><div className={privacyTermsDesign.navItem} id={privacyTermsDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>
       
      {isOpenMenu && (
       <div className={privacyTermsDesign.sidebarMenu} > 
        <div className={privacyTermsDesign.sidebarMenuItems}>
          <Link to='/profile'>My Profile</Link><br/>
          <hr/> 
          <Link to='/menus'>See Menus</Link><br/>
          <hr/>
          <span onClick={handleOrderVisibility}>My Order</span><br/>
          <hr/>
          <Link to='/contact-feedback'>Contact / Feedback</Link><br/>
          <hr/> 
          <Link to='/about'>About</Link>
        </div>  
       </div>
      )}

      <section className={privacyTermsDesign.section}>
        <p className={privacyTermsDesign.terms}><b>Terms and Conditions</b></p>
        <ul>
          <li>This website is for demostration of knowledge and it's only a demo website.</li>
          <li>Need to store User's personal information like Name, Phone Number and Address for proper and efficient delivery of Ordered foods items.</li>
          <li>Website is protected by 'Copyright' means one cannot copy or replicate this website, its design, content and data.</li>
          <li>All rights are reserved for developer only.</li>
          <li>All users data are handled as per 'Privacy Policy' given below.</li>
        </ul>

        <div className={privacyTermsDesign.privacyPolicy}>
          <p><b>Privacy Policy</b></p>
          <ul>
            <li>Website neither share collected users data with any third partities nor with any people.</li>
            <li>APIs such as localStorage and sessionStorage are used to remember user's operating device.</li>
            <li>Data is encrypted in transfer or upon submission.</li>
            <li>Data is strictly used for website functionality only.</li>
            <li>Users data confidentiality is highly prioritized work considered in this website.</li>
          </ul>
        </div>
      </section>

      <footer className={privacyTermsDesign.footer} >
        <div className={privacyTermsDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={privacyTermsDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={privacyTermsDesign.footContent3}>Follow On</div>

        <div className={privacyTermsDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={privacyTermsDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={privacyTermsDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={privacyTermsDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={privacyTermsDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div> 
      </footer>

    </div>  
  );
}

export default PrivacyTerms;