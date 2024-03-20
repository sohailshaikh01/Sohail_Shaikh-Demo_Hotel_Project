import loginDesign from './LoginDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';

const Login = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));
  
  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const loginSuccess = useRef(null);

  const [isOpenMenu, setOpenMenu] = useState(false);

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

  const [LoginDetails, setLoginDetails]=useState({
    username: '',
    password: ''
  });

  const formData = (e) => {
    const {name, value} = e.target;
    setLoginDetails({
        ...LoginDetails,
        [name]:value
    });
  }

  const handleFormSubmit = (event) => {

    event.preventDefault();

    fetch('https://plum-inquisitive-giraffe.cyclic.app/login' ,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(LoginDetails),
    })
      .then(response => {
        if(response.status === 500){
          alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          return;
        }
        if(response.status === 404) {
          alert("Username Doesn't Exist");
          return;
        }
        if(response.status === 400){
          alert('Wrong Password');
          return;
        }
        return response.json();
      })
      .then(resData => {
          console.log(resData);
          localStorage.setItem('loginConfirmation', JSON.stringify({login: true, userId: resData.userId}));
          loginSuccess.current.style.display = 'inline';

          setTimeout(() => {
            loginSuccess.current.style.display='none'
            navigate('/');
          }, 1000)
      })
      .catch(error=>console.error(error)
    );

  }

  useEffect(() => {

    if(loginConfirmation.login === true)
      navigate('/');

  },[]);
  
  useEffect(() => {
  
    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${loginDesign.sidebarMenuItems}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={loginDesign.login}>

      <header className={loginDesign.header}>
        {
        isOpenMenu?
        (
          <div className={loginDesign.menuIcon}>
            <div className={loginDesign.closeMenuIcon}>ⓧ</div>
          </div>
        ):
        (
          <div className={loginDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
            <div className={loginDesign.menuIconBar}></div>
            <div className={loginDesign.menuIconBar}></div>
            <div className={loginDesign.menuIconBar}></div>
          </div>
        )
        }
        <nav className={loginDesign.nav}>
          <Link to='/'><div className={loginDesign.navItem}>Home</div></Link>
          <Link to='/menus'><div className={loginDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={loginDesign.navItem} id={loginDesign.aboutLink}>About</div></Link>
        </nav>
      </header>
       
      {isOpenMenu && (
        <div className={loginDesign.sidebarMenu} > 
          <div className={loginDesign.sidebarMenuItems}>
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

      <section className={loginDesign.section}>
        <span className={loginDesign.loginSuccess} ref={loginSuccess}><center>Login Successful ✔</center></span>
        <div className={loginDesign.topHeading}>HOTEL DEMO</div>
        <center>
          <form className={loginDesign.form} onSubmit={handleFormSubmit}>
            <input type='text' name='username' className={loginDesign.username} placeholder=' Your Registered Username' onChange={formData} required/>
            <input type='password' name='password' className={loginDesign.password} placeholder=" Your Account's Password" onChange={formData} required/>
            <center>
              <input className={loginDesign.signIn} type='submit' value='Sign In'/>
              <div className={loginDesign.signUpAlert}>Don't Have an Account?</div>
              <Link to='/sign-up'><input className={loginDesign.signUp} type='button' value='Sign Up'/></Link>
            </center>
           </form>
        </center>
      </section>

      <footer className={loginDesign.footer}>
        <div className={loginDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={loginDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={loginDesign.footContent3}>Follow On</div>

        <div className={loginDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={loginDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={loginDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={loginDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={loginDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div> 

        <Link to='/privacy-terms'><div className={loginDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>  
  );
}

export default Login;