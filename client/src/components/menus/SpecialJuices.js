import specialJuicesDesign from './SpecialJuicesDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from 'react';
import {CartContext} from './CartReference';

const SpecialJuices = () => {

  const {setCartData} = useContext(CartContext);

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const specialJuicesItemNumsAlert = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const specialJuicesItemCount = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const isPageRefreshed = useRef(true);
  
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

  const specialJuicesCount = JSON.parse(localStorage.getItem('SpecialJuicesData')) || [
    { 'Mango Juice': 0, 'Total Price': 0 },
    { 'Orange Juice': 0, 'Total Price': 0 },
    { 'Mixed Fruit Juice': 0, 'Total Price': 0 },
    { 'Jaljeera': 0, 'Total Price': 0 },
    { 'Kokum Juice': 0, 'Total Price': 0 },
  ];

  const [SpecialJuicesData, setSpecialJuicesData] = useState(specialJuicesCount);

  const [isClicked1, setClick1] = useState(false);
  const [isClicked2, setClick2] = useState(false);
  const [isClicked3, setClick3] = useState(false);
  const [isClicked4, setClick4] = useState(false);
  const [isClicked5, setClick5] = useState(false);

  if(isClicked1) {
    if(SpecialJuicesData[0]['Mango Juice'] === 0) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Mango Juice': 1, 'Total Price': 15 };
          }
          return data;
        });
        return update;
      });
    }
    specialJuicesItemNumsAlert[0].current.style.visibility = 'visible';
    specialJuicesItemCount[0].current.style.visibility = 'visible';
  }

  if(isClicked2) {
    if(SpecialJuicesData[1]['Orange Juice'] === 0) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Orange Juice': 1, 'Total Price': 10 };
          }
          return data;
        });
        return update;
      });
    }
    specialJuicesItemNumsAlert[1].current.style.visibility = 'visible';
    specialJuicesItemCount[1].current.style.visibility = 'visible';
  }

  if(isClicked3) {
    if(SpecialJuicesData[2]['Mixed Fruit Juice'] === 0) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Mixed Fruit Juice': 1, 'Total Price': 15 };
          }
          return data;
        });
        return update;
      });
    }
    specialJuicesItemNumsAlert[2].current.style.visibility = 'visible';
    specialJuicesItemCount[2].current.style.visibility = 'visible';
  }

  if(isClicked4) {
    if(SpecialJuicesData[3]['Jaljeera'] === 0) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Jaljeera': 1, 'Total Price': 10 };
          }
          return data;
        });
        return update;
      });
    }
    specialJuicesItemNumsAlert[3].current.style.visibility = 'visible';
    specialJuicesItemCount[3].current.style.visibility = 'visible';
  }

  if(isClicked5) {
    if(SpecialJuicesData[4]['Kokum Juice'] === 0) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Kokum Juice': 1, 'Total Price': 10 };
          }
          return data;
        });
        return update;
      });
    }
    specialJuicesItemNumsAlert[4].current.style.visibility = 'visible';
    specialJuicesItemCount[4].current.style.visibility = 'visible';
  }

  const handleClick = (specialJuicesMenuItemNumber) => {

    if(specialJuicesMenuItemNumber === 1) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Mango Juice': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(SpecialJuicesData[0]['Mango Juice'] === 0)
        setClick1(true);
      else
        setClick1(false);
    }

    else if(specialJuicesMenuItemNumber === 2) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Orange Juice': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(SpecialJuicesData[1]['Orange Juice'] === 0)
        setClick2(true);
      else
        setClick2(false);
    }

    else if(specialJuicesMenuItemNumber === 3) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Mixed Fruit Juice': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(SpecialJuicesData[2]['Mixed Fruit Juice'] === 0)
        setClick3(true);
      else
        setClick3(false);
    }

    else if(specialJuicesMenuItemNumber === 4) {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Jaljeera': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(SpecialJuicesData[3]['Jaljeera'] === 0)
        setClick4(true);
      else
        setClick4(false);
    }

    else {
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Kokum Juice': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(SpecialJuicesData[4]['Kokum Juice'] === 0)
        setClick5(true);
      else
        setClick5(false);
    }

  }

  const incrementItem = (itemNumber) => {

    if(itemNumber === 1)
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Mango Juice': SpecialJuicesData[0]['Mango Juice'] + 1, 'Total Price': (SpecialJuicesData[0]['Mango Juice'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 2)
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Orange Juice': SpecialJuicesData[1]['Orange Juice'] + 1, 'Total Price': (SpecialJuicesData[1]['Orange Juice'] + 1) * 10 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 3)
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Mixed Fruit Juice': SpecialJuicesData[2]['Mixed Fruit Juice'] + 1, 'Total Price': (SpecialJuicesData[2]['Mixed Fruit Juice'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 4)
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Jaljeera': SpecialJuicesData[3]['Jaljeera'] + 1, 'Total Price': (SpecialJuicesData[3]['Jaljeera'] + 1) * 10 };
          }
          return data;
        });
        return update;
      });

    else
      setSpecialJuicesData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Kokum Juice': SpecialJuicesData[4]['Kokum Juice'] + 1, 'Total Price': (SpecialJuicesData[4]['Kokum Juice'] + 1) * 10 };
          }
          return data;
        });
        return update;
      });

  }

  const decrementItem = (itemNumber) => {

    if(itemNumber === 1) {
      if(SpecialJuicesData[0]['Mango Juice'] === 1) {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Mango Juice': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Mango Juice': SpecialJuicesData[0]['Mango Juice'] - 1, 'Total Price': (SpecialJuicesData[0]['Mango Juice'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 2) {
      if(SpecialJuicesData[1]['Orange Juice'] === 1) {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Orange Juice': 1, 'Total Price': 10 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Orange Juice': SpecialJuicesData[1]['Orange Juice'] - 1, 'Total Price': (SpecialJuicesData[1]['Orange Juice'] * 10) - 10 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 3) {
      if(SpecialJuicesData[2]['Mixed Fruit Juice'] === 1) {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Mixed Fruit Juice': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Mixed Fruit Juice': SpecialJuicesData[2]['Mixed Fruit Juice'] - 1, 'Total Price': (SpecialJuicesData[2]['Mixed Fruit Juice'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 4) {
      if(SpecialJuicesData[3]['Jaljeera'] === 1) {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Jaljeera': 1, 'Total Price': 10 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Jaljeera': SpecialJuicesData[3]['Jaljeera'] - 1, 'Total Price': (SpecialJuicesData[3]['Jaljeera'] * 10) - 10 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else {
      if(SpecialJuicesData[4]['Kokum Juice'] === 1) {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Kokum Juice': 1, 'Total Price': 10 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setSpecialJuicesData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Kokum Juice': SpecialJuicesData[4]['Kokum Juice'] - 1, 'Total Price': (SpecialJuicesData[4]['Kokum Juice'] * 10) - 10 }
            }
            return data;
          });
          return update;
        });
      }
    }

  }

  useEffect(() => {

    if(SpecialJuicesData[0]['Mango Juice'] === 0) {
      specialJuicesItemNumsAlert[0].current.style.visibility = 'hidden';
      specialJuicesItemCount[0].current.style.visibility = 'hidden';
    }

    if(SpecialJuicesData[1]['Orange Juice'] === 0) {
      specialJuicesItemNumsAlert[1].current.style.visibility = 'hidden';
      specialJuicesItemCount[1].current.style.visibility = 'hidden';
    }

    if(SpecialJuicesData[2]['Mixed Fruit Juice'] === 0) {
      specialJuicesItemNumsAlert[2].current.style.visibility = 'hidden';
      specialJuicesItemCount[2].current.style.visibility = 'hidden';
    }

    if(SpecialJuicesData[3]['Jaljeera'] === 0) {
      specialJuicesItemNumsAlert[3].current.style.visibility = 'hidden';
      specialJuicesItemCount[3].current.style.visibility = 'hidden';
    }

    if(SpecialJuicesData[4]['Kokum Juice'] === 0) {
      specialJuicesItemNumsAlert[4].current.style.visibility = 'hidden';
      specialJuicesItemCount[4].current.style.visibility = 'hidden';
    }

    localStorage.setItem('SpecialJuicesData', JSON.stringify(SpecialJuicesData));

    if(isPageRefreshed.current === false) {
      setCartData(SpecialJuicesData);
    }

    isPageRefreshed.current = false;

  }, [SpecialJuicesData]);


  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${specialJuicesDesign.sidebarMenuItems}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={specialJuicesDesign.specialJuices}>

      <header className={specialJuicesDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={specialJuicesDesign.menuIcon}>
                <div className={specialJuicesDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={specialJuicesDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={specialJuicesDesign.menuIconBar}></div>
                <div className={specialJuicesDesign.menuIconBar}></div>
                <div className={specialJuicesDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={specialJuicesDesign.nav}>
          <Link to='/'><div className={specialJuicesDesign.navItem} id={specialJuicesDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={specialJuicesDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={specialJuicesDesign.navItem}>About</div></Link>
          <div className={specialJuicesDesign.navItem} id={specialJuicesDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={specialJuicesDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={specialJuicesDesign.navItem} id={specialJuicesDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={specialJuicesDesign.sidebarMenu} >
          <div className={specialJuicesDesign.sidebarMenuItems}>
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

      <section className={specialJuicesDesign.section}>
        <div className={specialJuicesDesign.trackCartAlert}>
          <div className={specialJuicesDesign.arrowSymbol}>⤵</div>
          <div className={specialJuicesDesign.trackCartAlertText}>Track Added Items in Cart Here</div>
        </div>
        <div className={specialJuicesDesign.topHeading}>HOTEL DEMO</div>
        <div className={specialJuicesDesign.specialJuicesList}>
          <center>
            <div className={specialJuicesDesign.specialJuicesRow1}>

              <div className={specialJuicesDesign.specialJuicesMenuItem1}>
                <div className={specialJuicesDesign.specialJuicesMenuItemImg}></div>
                <div className={specialJuicesDesign.specialJuicesMenuItem}>
                  <span className={specialJuicesDesign.specialJuicesMenuItemDish}>Mango Juice</span>
                  <span className={specialJuicesDesign.specialJuicesMenuItemPrice}>Rs.15/-(Per Glass)</span>
                </div>
                <div className={specialJuicesDesign.addButton} name='specialJuicesMenuItem1' onClick={() => handleClick(1)}><span>{(isClicked1 || SpecialJuicesData[0]['Mango Juice'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={specialJuicesDesign.specialJuicesItemNumsAlert} ref={specialJuicesItemNumsAlert[0]}>Number of Items to Order</div>
                <div className={specialJuicesDesign.specialJuicesItemCount} ref={specialJuicesItemCount[0]}>
                  <div className={specialJuicesDesign.arithChar} onClick={() => incrementItem(1)}><span>+</span></div>
                  <div className={specialJuicesDesign.itemCount}><span>{SpecialJuicesData[0]['Mango Juice']}</span></div>
                  <div className={specialJuicesDesign.arithChar} onClick={() => decrementItem(1)}><span>-</span></div>
                </div>
              </div>

              <div className={specialJuicesDesign.specialJuicesMenuItem2}>
                <div className={specialJuicesDesign.specialJuicesMenuItemImg}></div>
                <div className={specialJuicesDesign.specialJuicesMenuItem}>
                  <span className={specialJuicesDesign.specialJuicesMenuItemDish}>Orange Juice</span>
                  <span className={specialJuicesDesign.specialJuicesMenuItemPrice}>Rs.10/-(Per Glass)</span>
                </div>
                <div className={specialJuicesDesign.addButton} onClick={() => handleClick(2)}><span>{(isClicked2 || SpecialJuicesData[1]['Orange Juice'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={specialJuicesDesign.specialJuicesItemNumsAlert} ref={specialJuicesItemNumsAlert[1]}>Number of Items to Order</div>
                <div className={specialJuicesDesign.specialJuicesItemCount} ref={specialJuicesItemCount[1]}>
                  <div className={specialJuicesDesign.arithChar} onClick={() => incrementItem(2)}><span>+</span></div>
                  <div className={specialJuicesDesign.itemCount}><span>{SpecialJuicesData[1]['Orange Juice']}</span></div>
                  <div className={specialJuicesDesign.arithChar} onClick={() => decrementItem(2)}><span>-</span></div>
                </div>
              </div>

              <div className={specialJuicesDesign.specialJuicesMenuItem3}>
                <div className={specialJuicesDesign.specialJuicesMenuItemImg}></div>
                <div className={specialJuicesDesign.specialJuicesMenuItem}>
                  <span className={specialJuicesDesign.specialJuicesMenuItemDish}>Mixed Fruit<br />Juice</span>
                  <span className={specialJuicesDesign.specialJuicesMenuItemPrice}>Rs.15/-(Per Glass)</span>
                </div>
                <div className={specialJuicesDesign.addButton} onClick={() => handleClick(3)}><span>{(isClicked3 || SpecialJuicesData[2]['Mixed Fruit Juice'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={specialJuicesDesign.specialJuicesItemNumsAlert} ref={specialJuicesItemNumsAlert[2]}>Number of Items to Order</div>
                <div className={specialJuicesDesign.specialJuicesItemCount} ref={specialJuicesItemCount[2]}>
                  <div className={specialJuicesDesign.arithChar} onClick={() => incrementItem(3)}><span>+</span></div>
                  <div className={specialJuicesDesign.itemCount}><span>{SpecialJuicesData[2]['Mixed Fruit Juice']}</span></div>
                  <div className={specialJuicesDesign.arithChar} onClick={() => decrementItem(3)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={specialJuicesDesign.specialJuicesRow2}>

              <div className={specialJuicesDesign.specialJuicesMenuItem4}>
                <div className={specialJuicesDesign.specialJuicesMenuItemImg}></div>
                <div className={specialJuicesDesign.specialJuicesMenuItem}>
                  <span className={specialJuicesDesign.specialJuicesMenuItemDish}>Jaljeera</span>
                  <span className={specialJuicesDesign.specialJuicesMenuItemPrice}>Rs.10/-(Per Glass)</span>
                </div>
                <div className={specialJuicesDesign.addButton} onClick={() => handleClick(4)}><span>{(isClicked4 || SpecialJuicesData[3]['Jaljeera'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={specialJuicesDesign.specialJuicesItemNumsAlert} ref={specialJuicesItemNumsAlert[3]}>Number of Items to Order</div>
                <div className={specialJuicesDesign.specialJuicesItemCount} ref={specialJuicesItemCount[3]}>
                  <div className={specialJuicesDesign.arithChar} onClick={() => incrementItem(4)}><span>+</span></div>
                  <div className={specialJuicesDesign.itemCount}><span>{SpecialJuicesData[3]['Jaljeera']}</span></div>
                  <div className={specialJuicesDesign.arithChar} onClick={() => decrementItem(4)}><span>-</span></div>
                </div>
              </div>

              <div className={specialJuicesDesign.specialJuicesMenuItem5}>
                <div className={specialJuicesDesign.specialJuicesMenuItemImg}></div>
                <div className={specialJuicesDesign.specialJuicesMenuItem}>
                  <span className={specialJuicesDesign.specialJuicesMenuItemDish}>Kokum Juice</span>
                  <span className={specialJuicesDesign.specialJuicesMenuItemPrice}>Rs.10/-(Per Glass)</span>
                </div>
                <div className={specialJuicesDesign.addButton} onClick={() => handleClick(5)}><span>{(isClicked5 || SpecialJuicesData[4]['Kokum Juice'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={specialJuicesDesign.specialJuicesItemNumsAlert} ref={specialJuicesItemNumsAlert[4]}>Number of Items to Order</div>
                <div className={specialJuicesDesign.specialJuicesItemCount} ref={specialJuicesItemCount[4]}>
                  <div className={specialJuicesDesign.arithChar} onClick={() => incrementItem(5)}><span>+</span></div>
                  <div className={specialJuicesDesign.itemCount}><span>{SpecialJuicesData[4]['Kokum Juice']}</span></div>
                  <div className={specialJuicesDesign.arithChar} onClick={() => decrementItem(5)}><span>-</span></div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>

      <footer className={specialJuicesDesign.footer}>
        <div className={specialJuicesDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={specialJuicesDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={specialJuicesDesign.footContent3}>Follow On</div>

        <div className={specialJuicesDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={specialJuicesDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={specialJuicesDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={specialJuicesDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={specialJuicesDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={specialJuicesDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default SpecialJuices;