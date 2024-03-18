import aboutDesign from './AboutDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from 'react';

const About = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));
 
  const navigate = useNavigate();

  const menuIconChange=useRef(null);

  const [isOpenMenu, setOpenMenu]=useState(false);

  const expandWindow = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };

  if(loginConfirmation === null)
    window.location.reload(false);
  
  const logoutUser = () => {
    const logoutResult = window.confirm("Are you sure you want to logout?");
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
      if(isOpenMenu && !event.target.closest(`.${aboutDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={aboutDesign.about}>

      <header className={aboutDesign.header}>
        {
        isOpenMenu?
        (
          <div className={aboutDesign.menuIcon}>
            <div className={aboutDesign.closeMenuIcon}>ⓧ</div>
          </div>
        ):
        (
          <div className={aboutDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
            <div className={aboutDesign.menuIconBar}></div>
            <div className={aboutDesign.menuIconBar}></div>
            <div className={aboutDesign.menuIconBar}></div>
          </div>
        )
        }
        <nav className={aboutDesign.nav}>
          <Link to='/'><div className={aboutDesign.navItem}>Home</div></Link>
          <Link to='/menus'><div className={aboutDesign.navItem}>Menus</div></Link>
          <div className={aboutDesign.navItem} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={aboutDesign.navItem} id={aboutDesign.logoutLink} onClick={logoutUser}>Logout</div>
              ):
              (
                <Link to='/login'><div className={aboutDesign.navItem} id={aboutDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>
       
      {isOpenMenu && (
       <div className={aboutDesign.sidebarMenu} > 
        <div className={aboutDesign.sidebarMenuItems}>
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

      <section className={aboutDesign.section}>
        <p className={aboutDesign.topParagraph}>
          <p>This Website is entirely Designed and Developed by me, named <b>Sohail Nazir Shaikh</b>.</p>
          <p>It is developed for demostration of knowledge and it's only a demo website.</p>
        </p>

        <p className={aboutDesign.middleParagraph}>
          <p>The Core technology used for Frontend is "ReactJS". Other technologies used for Frontend are "HTML", "CSS", "ECMAScript6(JavaScript 6)", "Responsive Web Design".</p>
          <p>Website is built "Responsive", meaning its elements and components will properly visible across different devices screen.</p>
          <p>The Core technology used for Backend is "NodeJS" and "ExpressJS".</p>
          <p>"MySQL" is used as DataBase for storage purpose in this website.</p>
        </p>

        <p className={aboutDesign.bottomParagraph}>
          <p>If you liked this website, follow me by clicking on below social media handles.</p> 
          <p>Please also give your valuable comments considering any part and aspect of this website.</p>
        </p>
      </section>

      <footer className={aboutDesign.footer} >
        <div className={aboutDesign.footContent1}>Follow On</div>

        <div className={aboutDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={aboutDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={aboutDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={aboutDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={aboutDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div> 

        <div className={aboutDesign.footContent2}>Copyright ©2024. All Rights Reserved.</div>

        <Link to='/privacy-terms'><div className={aboutDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>  
  );
}

export default About;