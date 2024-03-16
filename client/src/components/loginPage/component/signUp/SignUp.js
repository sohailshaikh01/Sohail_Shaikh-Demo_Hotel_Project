import signUpDesign from './SignUpDesign.module.css';
import socialHandles from '../../../../socialHandles';
import linkedinImg from '../../../images/linkedin_logo.jpg';
import facebookImg from '../../../images/facebook_logo.jpg';
import instagramImg from '../../../images/instagram_logo.jpg';
import twitterImg from '../../../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';

const SignUp = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const username = useRef(null);
  const phone = useRef(null);
  const phoneLengthAlert1 = useRef(null);
  const phoneLengthAlert2 = useRef(null);
  const phoneAlert = useRef(null);
  const usernameAlert = useRef(null);
  const phoneLengthFlag = useRef(0);
  const phoneFlag = useRef(0);
  const usernameFlag = useRef(0);

  const [isOpenMenu, setOpenMenu]=useState(false);

  const expandWindow = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };
  
  const handleOrderVisibility = () => {
    if(loginConfirmation.login === true)
      navigate('/ordered-data');
    else
      navigate('/login');
  }
  
  const [NewUser, setNewUser]=useState({
    username: '',
    password: '',
    name: '',
    phone: '',
    address: ''
  });

  const checkDuplicates = (event) => {

    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    if(fieldName === 'phone' && fieldValue.length < 10) {
      phoneLengthFlag.current = 1;
      phoneLengthAlert2.current.style.display='inline';
    }
    else {
      phoneLengthAlert1.current.style.display='none';

      fetch('http://localhost:3001/sign-up-checkDuplicates' ,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({fieldName, fieldValue}),
      })
        .then(response => {
          if(response.status === 500)
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          else if(response.status === 409) {
            if(fieldName==='username') {
              usernameAlert.current.style.display='inline';
              usernameFlag.current = 1;
            }
            else {
              phoneAlert.current.style.display='inline';
              phoneFlag.current = 1;
            }
          }
        })
        .catch(error=>console.error(error)
      );
    }
  }  
  
  const formData = (e) => {
    
    const {name, value} = e.target;

    if(name==='phone') {
      const numbers = value.replace(/[^\d]/g, '');
      
      if(value.length>10) {
        phoneLengthAlert1.current.style.display='inline';
      }
      else {
        setNewUser({
          ...NewUser,
          [name]: numbers
        });
        
        phoneLengthAlert1.current.style.display='none';
        phoneLengthAlert2.current.style.display='none';
        phoneLengthFlag.current = 0;
        phoneFlag.current = 0;
        phoneAlert.current.style.display='none';
        phone.current.style.borderColor='white';
      }
    }
    else {
      if(name==='username') {
        usernameFlag.current = 0;
        usernameAlert.current.style.display='none';
        username.current.style.borderColor='white';
      }
      setNewUser({
          ...NewUser,
          [name]: value
      });
    }
  }

  const handleFormSubmit = (event) => {

    if(phoneLengthFlag.current === 1) {
      phone.current.style.borderColor='yellow';
      event.preventDefault();
    }
    if(usernameFlag.current === 1) {
      username.current.style.borderColor='yellow';
      event.preventDefault();
    }
    if(phoneFlag.current === 1) {
      phone.current.style.borderColor='yellow';
      event.preventDefault();
    }
    if(phoneLengthFlag.current === 0 && usernameFlag.current === 0 && phoneFlag.current === 0) {
      event.preventDefault();

      fetch('http://localhost:3001/sign-up' ,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(NewUser),
      })
        .then(response => {
          if(response.status === 500)
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          else {
            alert('You are Successfully Registered. Proceeding to Login Page...');
            navigate('/login');
          }
        })
        .catch(error=>console.error(error));
    }
  }
  
  useEffect(() => {
  
    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${signUpDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={signUpDesign.signUp}>

      <header className={signUpDesign.header}>
      {
        isOpenMenu?
        (
          <div className={signUpDesign.menuIcon}>
            <div className={signUpDesign.closeMenuIcon}>ⓧ</div>
          </div>
        ):
        (
          <div className={signUpDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
            <div className={signUpDesign.menuIconBar}></div>
            <div className={signUpDesign.menuIconBar}></div>
            <div className={signUpDesign.menuIconBar}></div>
          </div>
        )
        }
        <nav className={signUpDesign.nav}>
          <Link to='/'><div className={signUpDesign.navItem}>Home</div></Link>
          <Link to='/menus'><div className={signUpDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={signUpDesign.navItem}>About</div></Link>
          <Link to='/login'><div className={signUpDesign.navItem} id={signUpDesign.loginLink}>Login</div></Link>
        </nav>
      </header>
       
      {isOpenMenu && (
       <div className={signUpDesign.sidebarMenu} > 
        <div className={signUpDesign.sidebarMenuItems}>
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

      <section className={signUpDesign.section}>
        <div className={signUpDesign.topHeading}>HOTEL DEMO</div>
        <center>
          <form className={signUpDesign.form} onSubmit={handleFormSubmit}>

            <label className={signUpDesign.mandatory}>*</label>
            <input type='text' name='name' className={signUpDesign.inputs} placeholder=' Your Name' onChange={formData} required/>

            <label className={signUpDesign.mandatory}>*</label>
            <input type='tel' name='phone' className={signUpDesign.inputs} ref={phone} value={NewUser.phone} onBlur={checkDuplicates} placeholder=' Your Mobile Number' onChange={formData} required/>
            <span className={signUpDesign.phoneLengthAlert1} ref={phoneLengthAlert1}>Mobile Number must not exceed 10 digits</span>
            <span className={signUpDesign.phoneLengthAlert2} ref={phoneLengthAlert2}>Mobile Number must be 10 digits</span>
            <span className={signUpDesign.phoneAlert} ref={phoneAlert}>Mobile Number already exist</span>

            <label className={signUpDesign.mandatory}>*</label>
            <textarea name='address' className={signUpDesign.inputs} placeholder='Your Address for Delivery of Food Items' onChange={formData} required autoComplete='on'/>

            <label className={signUpDesign.mandatory}>*</label>
            <input type='text' name='username' className={signUpDesign.inputs} ref={username} value={NewUser.username} onBlur={checkDuplicates} placeholder=' Set Username for your Account' onChange={formData} required/>
            <span className={signUpDesign.usernameAlert} ref={usernameAlert}>Username already taken</span>

            <label className={signUpDesign.mandatory}>*</label>
            <input type='password' name='password' className={signUpDesign.inputs} placeholder=' Set Password' onChange={formData} required/>

            <center>
              <input type='submit' className={signUpDesign.register} value='Register'/>
            </center>

          </form>
        </center>
      </section>

      <footer className={signUpDesign.footer}>
        <div className={signUpDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={signUpDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={signUpDesign.footContent3}>Follow On</div>

        <div className={signUpDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={signUpDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={signUpDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={signUpDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={signUpDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div> 

        <Link to='/privacy-terms'><div className={signUpDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>  
  );
}

export default SignUp;