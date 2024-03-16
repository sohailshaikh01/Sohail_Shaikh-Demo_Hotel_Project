import passwordModificationDesign from './PasswordModificationDesign.module.css';
import socialHandles from '../../../../socialHandles';
import linkedinImg from '../../../images/linkedin_logo.jpg';
import facebookImg from '../../../images/facebook_logo.jpg';
import instagramImg from '../../../images/instagram_logo.jpg';
import twitterImg from '../../../images/twitter_logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from 'react';

const PasswordModification = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);

  const [isOpenMenu, setOpenMenu] = useState(false);

  const expandWindow = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };

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
      navigate('/');
    }
  }

  const [PasswordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: ''
  });

  const formData = (e) => {
    const { name, value } = e.target;
    setPasswordData({
      ...PasswordData,
      [name]: value
    });
  }

  const handleFormSubmit = (event) => {

    event.preventDefault();

    const confirmPasswordUpdate = window.confirm("Sure about updating your Password?");
    if(confirmPasswordUpdate === true) {
      fetch('http://localhost:3001/password-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([loginConfirmation.userId, PasswordData]),
      })
        .then(response => {
          if(response.status === 500)
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          else if(response.ok)
            alert("Password Updated Successfully");
          else
            alert("Wrong Current/Old Password");
        })
        .catch(error => console.error(error));
    }

  }

  useEffect(() => {
    if(loginConfirmation.login === false) {
      navigate('/login');
    }
  }, [])

  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${passwordModificationDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);
    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={passwordModificationDesign.passwordModification}>

      <header className={passwordModificationDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={passwordModificationDesign.menuIcon}>
                <div className={passwordModificationDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={passwordModificationDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={passwordModificationDesign.menuIconBar}></div>
                <div className={passwordModificationDesign.menuIconBar}></div>
                <div className={passwordModificationDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={passwordModificationDesign.nav}>
          <Link to='/'><div className={passwordModificationDesign.navItem} id={passwordModificationDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={passwordModificationDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={passwordModificationDesign.navItem}>About</div></Link>
          <Link to='/cart'><div className={passwordModificationDesign.navItem} id={passwordModificationDesign.cartLink}>My Cart</div></Link>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={passwordModificationDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={passwordModificationDesign.navItem} id={passwordModificationDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={passwordModificationDesign.sidebarMenu} >
          <div className={passwordModificationDesign.sidebarMenuItems}>
            <Link to='/profile'>My Profile</Link><br />
            <hr />
            <Link to='/menus'>See Menus</Link><br />
            <hr />
            <Link to='/ordered-data'>My Order</Link><br />
            <hr />
            <Link to='/contact-feedback'>Contact / Feedback</Link><br />
            <hr />
            <Link to='/about'>About</Link>
          </div>
        </div>
      )}

      <section className={passwordModificationDesign.section}>
        <center>
          <form className='passwordModificationDesign.form' onSubmit={handleFormSubmit}>
            <label className={passwordModificationDesign.mandatory}>*</label>
            <input type='password' name='currentPassword' className={passwordModificationDesign.passwordInput} placeholder=' Enter Current Password' onChange={formData} required />

            <label className={passwordModificationDesign.mandatory}>*</label>
            <input type='password' name='newPassword' className={passwordModificationDesign.passwordInput} placeholder=' Enter New Password' onChange={formData} required />
            
            <center>
              <input className={passwordModificationDesign.saveBtn} type='submit' value='Save' />
            </center>
          </form>
        </center>
      </section>

      <footer className={passwordModificationDesign.footer}>
        <div className={passwordModificationDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={passwordModificationDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={passwordModificationDesign.footContent3}>Follow On</div>

        <div className={passwordModificationDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={passwordModificationDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={passwordModificationDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={passwordModificationDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={passwordModificationDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={passwordModificationDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default PasswordModification;