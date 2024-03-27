import orderedDataDesign from './OrderedDataDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from "react-router-dom";
import {useRef, useState, useEffect} from 'react';

const OrderedData = () => {

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();
  var totalPayableAmount = 0;

  const menuIconChange = useRef(null);

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

  const [OrderedData, setOrderedData] = useState([]);

  useEffect(() => {
    
    if(loginConfirmation.login === false)
      navigate('/login');

    fetch('https://sohailshaikh-hoteldemo.cyclic.app/ordered-data', {
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
        setOrderedData([...resData.result]);
      })
      .catch(error => console.error(error)
      );

  }, []);


  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${orderedDataDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={orderedDataDesign.orderedData}>

      <header className={orderedDataDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={orderedDataDesign.menuIcon}>
                <div className={orderedDataDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={orderedDataDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={orderedDataDesign.menuIconBar}></div>
                <div className={orderedDataDesign.menuIconBar}></div>
                <div className={orderedDataDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={orderedDataDesign.nav}>
          <Link to='/'><div className={orderedDataDesign.navItem} id={orderedDataDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={orderedDataDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={orderedDataDesign.navItem}>About</div></Link>
          <Link to='/cart'><div className={orderedDataDesign.navItem} id={orderedDataDesign.cartLink}>My Cart</div></Link>
          <div className={orderedDataDesign.navItem} onClick={logoutUser}>Logout</div>
        </nav>
      </header>

      {isOpenMenu && (
        <div className={orderedDataDesign.sidebarMenu} >
          <div className={orderedDataDesign.sidebarMenuItems}>
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

      <section className={orderedDataDesign.section}>
        {OrderedData.length > 0 ?
          (
            <>
              <div>
                <span className={orderedDataDesign.userID}>User ID: <b>{OrderedData[0].user_id}</b></span>
                <span className={orderedDataDesign.orderID}>Order ID: <b>{OrderedData[0].order_id}</b></span>
                <table className={orderedDataDesign.table1} align='center'>
                  <tr>
                    <th width='0%' colSpan={0}>Food Item</th>
                    <th width='0%' className={orderedDataDesign.midCol}>Item Count</th>
                    <th>Total Price</th>
                  </tr>

                  {OrderedData.map((records) => {
                    const menuItem = records['menu_item'];
                    const menuItemCount = records['quantity'];
                    const totalPrice = records['total_price'];
                    totalPayableAmount = totalPayableAmount + totalPrice;

                    return (
                        <tr>
                          <td>{menuItem}</td>
                          <td className={orderedDataDesign.midCol}>{menuItemCount}</td>
                          <td>{totalPrice}</td>
                        </tr>
                    );
                  })}
                </table>
              </div>

              <table className={orderedDataDesign.table2} align='center'>
                <tr>
                  <td className={orderedDataDesign.totalAmount}>Total Payable Amount: Rs. {totalPayableAmount}</td>
                </tr>
              </table>

              <div className={orderedDataDesign.note}>
                <p>*Only Cash on Delivey Accepted.</p>
                <p>*Order will be delivered generally within 1 hour within Kolhapur city and generally within 1.5 hour in other areas of  Kolhapur district.</p>
              </div>
            </>
          ) :
          (
            <p className={orderedDataDesign.emptyOrderText}>No Any Food Item Ordered Yet.<br />Order Quality Food Items from Hotel Demo <b>Now</b>.</p>
          )
        }
      </section>

      <footer className={orderedDataDesign.footer} >
        <div className={orderedDataDesign.footcontent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={orderedDataDesign.footcontent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={orderedDataDesign.footcontent3}>Follow On</div>

        <div className={orderedDataDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={orderedDataDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={orderedDataDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={orderedDataDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={orderedDataDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={orderedDataDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default OrderedData;
