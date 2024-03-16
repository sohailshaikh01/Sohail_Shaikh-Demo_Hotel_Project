import profileDesign from './ProfileDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from 'react';

const Profile = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const editNameRef = useRef(null);
  const editAddressRef = useRef(null);

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
      window.location.reload(false);
    }
  }

  const editName = () => {
    editNameRef.current.disabled = false;
  }

  const editAddress = () => {
    editAddressRef.current.disabled = false;
  }

  const [ProfileData, setProfileData] = useState({
    name: '',
    address: ''
  });

  const formData = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...ProfileData,
      [name]: value
    });
  }

  const handleFormSubmit = (event) => {

    event.preventDefault();

    const confirmUpdate = window.confirm("Sure about updating your Profile?");
    if(confirmUpdate === true) {
      fetch('http://localhost:3001/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([loginConfirmation.userId, ProfileData]),
      })
        .then(response => {
          if(response.status === 500) 
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          else
            alert("Profile Updated Successfully");
        })
        .catch(error => console.error(error));
    }

  }

  useEffect(() => {

    if(loginConfirmation.login === false) {
      navigate('/login');
    }

    fetch('http://localhost:3001/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([loginConfirmation.userId]),
    })
      .then(response => {
        if(response.status === 500) {
          alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          return;
        }
        return response.json();
      })
      .then(resData => {
        setProfileData(previousState => {
          return { ...previousState, name: resData.result[0].name, address: resData.result[0].address }
        });
      })
      .catch(error => console.error(error)
      );

  }, [])

  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${profileDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={profileDesign.profile}>

      <header className={profileDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={profileDesign.menuIcon}>
                <div className={profileDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={profileDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={profileDesign.menuIconBar}></div>
                <div className={profileDesign.menuIconBar}></div>
                <div className={profileDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={profileDesign.nav}>
          <Link to='/'><div className={profileDesign.navItem} id={profileDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={profileDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={profileDesign.navItem}>About</div></Link>
          <Link to='/cart'><div className={profileDesign.navItem} id={profileDesign.cartLink}>My Cart</div></Link>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={profileDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={profileDesign.navItem} id={profileDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={profileDesign.sidebarMenu} >
          <div className={profileDesign.sidebarMenuItems}>
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

      <section className={profileDesign.section}>
        <div className={profileDesign.topHeading}>My Profile</div>
        <center>
          <form className='profileDesign.form' onSubmit={handleFormSubmit}>
            <label className={profileDesign.mandatory}>*</label>
            <fieldset>
              <legend>Name</legend>
              <input type='text' name='name' id='name' className={profileDesign.name} value={ProfileData.name} placeholder=' Your Name' onChange={formData} ref={editNameRef} required disabled />
            </fieldset>
            <label for='name' className={profileDesign.editName} onClick={editName}>Edit</label>

            <center>
              <label className={profileDesign.mandatory}>*</label>
            </center>
            <fieldset>
              <legend>Address</legend>
              <textarea name='address' id='address' className={profileDesign.address} value={ProfileData.address} placeholder='Your Address for Food Items Delivery' onChange={formData} ref={editAddressRef} required disabled />
            </fieldset>
            <label for='address' className={profileDesign.editAddress} onClick={editAddress}>Edit</label>

            <center>
              <Link to='/password-modification'><div className={profileDesign.editPassword}>Edit Password</div></Link>
              <input className={profileDesign.saveBtn} type='submit' value='Save' />
            </center>
          </form>
        </center>
      </section>

      <footer className={profileDesign.footer}>
        <div className={profileDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={profileDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={profileDesign.footContent3}>Follow On</div>

        <div className={profileDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={profileDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={profileDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={profileDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={profileDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={profileDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default Profile;