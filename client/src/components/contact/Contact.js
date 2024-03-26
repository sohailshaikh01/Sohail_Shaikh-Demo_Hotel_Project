import contactDesign from './ContactDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from 'react';

const Contact = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);

  const [isOpenMenu, setOpenMenu] = useState(false);

  const expandWindow = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };

  if(loginConfirmation === null) 
    window.location.reload(false);
  
  const logoutUser = () => {
    const logoutResult = window.confirm("Are you sure you want to logout?");
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

  const [Feedback, setFeedback] = useState({
    feedback: '',
  });

  const formData = (event) => {
    const { name, value } = event.target;
    setFeedback({
      [name]: value
    });
  }

  const handleFormSubmit = (event) => {

    event.preventDefault();

    if(loginConfirmation.login === false) {
      localStorage.setItem('loginConfirmation', JSON.stringify({ userId: 'anonymous' }));
    }

    const feedbackConfirmation = window.confirm("Sure to submit this feedback?");

    if(feedbackConfirmation === true) {
      fetch('https://demo-hotel-project.onrender.com/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([loginConfirmation.userId, Feedback]),
      })
        .then(response => {
          if(response.status === 500) 
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          else {
            alert("Feedback Submitted Successfully");
            if(loginConfirmation.userId === 'anonymous') {
              localStorage.setItem('loginConfirmation', JSON.stringify({ userId: undefined }));
            }
          }
        })
        .catch(error => console.error(error));
    }
  }

  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${contactDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={contactDesign.contact}>

      <header className={contactDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={contactDesign.menuIcon}>
                <div className={contactDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={contactDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={contactDesign.menuIconBar}></div>
                <div className={contactDesign.menuIconBar}></div>
                <div className={contactDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={contactDesign.nav}>
          <Link to='/'><div className={contactDesign.navItem} id={contactDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={contactDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={contactDesign.navItem}>About</div></Link>
          <div className={contactDesign.navItem} id={contactDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={contactDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={contactDesign.navItem} id={contactDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={contactDesign.sidebarMenu} >
          <div className={contactDesign.sidebarMenuItems}>
            <Link to='/profile'>My Profile</Link><br />
            <hr />
            <Link to='/menus'>See Menus</Link><br />
            <hr />
            <span onClick={handleOrderVisibility}>My Order</span><br />
            <hr />
            <Link to='/contact-feedback'>Contact / Feedback</Link><br />
            <hr />
            <Link to='/about'>About</Link>
          </div>
        </div>
      )}

      <section className={contactDesign.section}>
        <center>
          <p className={contactDesign.contactEmailAlert}>Contact through Email:</p>
          <p className={contactDesign.contactEmail}>ssodd80@gmail.com</p>
          <p className={contactDesign.orText}>OR</p>
          <p className={contactDesign.feedbackNote}>Give your Feedback below</p>

          <form className='contactDesign.form' onSubmit={handleFormSubmit}>
            <label className={contactDesign.mandatory}>*</label>
            <textarea name='feedback' className={contactDesign.feedbackTextarea} onChange={formData} placeholder='Your Feedback' required />
            <center>
              <input type='submit' className={contactDesign.submit} name='submit' value='Submit' />
            </center>
          </form>
        </center>
      </section>

      <footer className={contactDesign.footer} >
        <div className={contactDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={contactDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={contactDesign.footContent3}>Follow On</div>

        <div className={contactDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={contactDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={contactDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={contactDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={contactDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={contactDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default Contact;