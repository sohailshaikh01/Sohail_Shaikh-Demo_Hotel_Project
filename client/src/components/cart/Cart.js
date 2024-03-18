import cartDesign from './CartDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from 'react';

const Cart = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();
  var totalPayableAmount = 0;

  const menuIconDesign = useRef(null);

  const [isOpenMenu, setOpenMenu] = useState(false);

  const expandWindow = (event) => {
    event.stopPropagation();
    setOpenMenu(true);
  };

  if(loginConfirmation == null) {
    window.location.reload(false);
  }

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

  const resetCart = () => {
    const resetResult = window.confirm("Are you sure about resetting this cart? This will erase all cart items.");
    if(resetResult === true) {
      fetch('http://localhost:3001/cart-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([loginConfirmation.userId, "eraseCart"]),
      })
        .then(response => {
          if(response.status === 500) 
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          else {
            setFetechedCartData([]);
            localStorage.removeItem('BreakfastData');
            localStorage.removeItem('IndVegData');
            localStorage.removeItem('MahaSpecialData');
            localStorage.removeItem('PunjabSpecialData');
            localStorage.removeItem('FastFoodsData');
            localStorage.removeItem('SpecialJuicesData');
            window.location.reload(false);
          }
        })
        .catch(error => console.error(error));
    }
  }

  const [FetechedCartData, setFetechedCartData] = useState([]);

  const confirmOrder = () => {
    const confirm = window.confirm("Sure about confirming this order?");
    if(confirm === true) {
      fetch('http://localhost:3001/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([loginConfirmation.userId, "checkPreviousOrder"]),
      })
        .then(response => {
          if(response.status === 500) 
            alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
          else if(response.status === 204) {
            fetch('http://localhost:3001/order', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(FetechedCartData),
            })
              .then(response => {
                if(response.status === 500) 
                  alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
                else {
                  alert("Order Confirmed Successfully.\nThank You for Ordering through Hotel Demo.");
                  fetch('http://localhost:3001/cart-data', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify([loginConfirmation.userId, "eraseCart"]),
                  })
                    .then(response => {
                      if(response.status === 500)
                        alert("Internal server error occurred.\nPlease try after some time if error is occuring again and again during process.");
                      else {
                        setFetechedCartData([]);
                        localStorage.removeItem('BreakfastData');
                        localStorage.removeItem('IndVegData');
                        localStorage.removeItem('MahaSpecialData');
                        localStorage.removeItem('PunjabSpecialData');
                        localStorage.removeItem('FastFoodsData');
                        localStorage.removeItem('SpecialJuicesData');
                        window.location.reload(false);
                      }
                    })
                    .catch(error => console.error(error));
                }
              })
              .catch(error => console.error(error));
          }
          else 
            alert("Let Your Previous Order be Delivered. Then Order Again.\nThank You for trusting Hotel Demo.")
        })
        .catch(error => console.error(error));
    }
  }

  useEffect(() => {

    if(loginConfirmation.login === false)
      navigate('/login');

    fetch('http://localhost:3001/cart-data', {
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
          setFetechedCartData([...resData.result]);
      })
      .catch(error => console.error(error)
      );

  }, []);

  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${cartDesign.sidebarMenuItems}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={cartDesign.cart}>

      <header className={cartDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={cartDesign.menuIcon}>
                <div className={cartDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={cartDesign.menuIcon} ref={menuIconDesign} onClick={expandWindow}>
                <div className={cartDesign.menuIconBar}></div>
                <div className={cartDesign.menuIconBar}></div>
                <div className={cartDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={cartDesign.nav}>
          <Link to='/'><div className={cartDesign.navItem} id={cartDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={cartDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={cartDesign.navItem}>About</div></Link>
          <Link to='/ordered-data'><div className={cartDesign.navItem} id={cartDesign.orderLink}>My Order</div></Link>
          <div className={cartDesign.navItem} onClick={logoutUser}>Logout</div>
        </nav>
      </header>

      {isOpenMenu && (
        <div className={cartDesign.sidebarMenu} >
          <div className={cartDesign.sidebarMenuItems}>
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

      <section className={cartDesign.section}>
        {FetechedCartData.length > 0 ?
          (
            <>
              <div>
                <table className={cartDesign.cartTable1} align='center'>
                  <tr>
                    <th width='0%' colSpan={0}>Food Item</th>
                    <th width='0%' className={cartDesign.midCol}>Item Count</th>
                    <th>Total Price</th>
                  </tr>

                  {FetechedCartData.map((records) => {
                    const menuItem = records['menu_item'];
                    const menuItemCount = records['quantity'];
                    const totalPrice = records['total_price'];
                    totalPayableAmount = totalPayableAmount + totalPrice;

                    return (
                        <tr>
                          <td>{menuItem}</td>
                          <td className={cartDesign.midCol}>{menuItemCount}</td>
                          <td>{totalPrice}</td>
                        </tr>
                    );
                  })}
                </table>
              </div>

              <table className={cartDesign.cartTable2} align='center'>
                <tr>
                  <td className={cartDesign.cartTotalAmount}>Total Payable Amount: Rs. {totalPayableAmount}</td>
                  <td align='right' className={cartDesign.reset}><button className={cartDesign.button} onClick={resetCart}>Reset Order</button></td>
                  <td align='right'><button className={cartDesign.button} onClick={confirmOrder}>Confirm Order</button></td>
                </tr>
              </table>

              <div className={cartDesign.note}>
                <p>*Only Cash on Delivey Accepted.</p>
                <p>*Order will be delivered generally within 1 hour within Kolhapur city and generally within 1.5 hour in other areas of  Kolhapur district.</p>
              </div>
            </>
          ) :
          (
            <p className={cartDesign.emptyCartText}>No food items in your Cart</p>
          )
        }
      </section>

      <footer className={cartDesign.footer} >
        <div className={cartDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={cartDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={cartDesign.footContent3}>Follow On</div>

        <div className={cartDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={cartDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={cartDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={cartDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={cartDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={cartDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default Cart;
