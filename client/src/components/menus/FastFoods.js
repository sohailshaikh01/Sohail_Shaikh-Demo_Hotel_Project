import fastFoodsDesign from './FastFoodsDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from 'react';
import {CartContext} from './CartReference';

const FastFoods = () => {

  const {setCartData} = useContext(CartContext);

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const fastFoodsItemNumsAlert = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const fastFoodsItemCount = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
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

  const fastFoodsCount = JSON.parse(localStorage.getItem('FastFoodsData')) || [
    { 'Veg Burger': 0, 'Total Price': 0 },
    { 'Sandwich': 0, 'Total Price': 0 },
    { 'Pizza': 0, 'Total Price': 0 },
    { 'Taco': 0, 'Total Price': 0 },
    { 'Gobi Manchurian': 0, 'Total Price': 0 },
    { 'Noodles': 0, 'Total Price': 0 },
    { 'Classic Pancakes': 0, 'Total Price': 0 },
  ];

  const [FastFoodsData, setFastFoodsData] = useState(fastFoodsCount);

  const [isClicked1, setClick1] = useState(false);
  const [isClicked2, setClick2] = useState(false);
  const [isClicked3, setClick3] = useState(false);
  const [isClicked4, setClick4] = useState(false);
  const [isClicked5, setClick5] = useState(false);
  const [isClicked6, setClick6] = useState(false);
  const [isClicked7, setClick7] = useState(false);

  if(isClicked1) {
    if(FastFoodsData[0]['Veg Burger'] === 0) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Veg Burger': 1, 'Total Price': 40 };
          }
          return data;
        });
        return update;
      });
    }
    fastFoodsItemNumsAlert[0].current.style.visibility = 'visible';
    fastFoodsItemCount[0].current.style.visibility = 'visible';
  }

  if(isClicked2) {
    if(FastFoodsData[1]['Sandwich'] === 0) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Sandwich': 1, 'Total Price': 35 };
          }
          return data;
        });
        return update;
      });
    }
    fastFoodsItemNumsAlert[1].current.style.visibility = 'visible';
    fastFoodsItemCount[1].current.style.visibility = 'visible';
  }

  if(isClicked3) {
    if(FastFoodsData[2]['Pizza'] === 0) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Pizza': 1, 'Total Price': 45 };
          }
          return data;
        });
        return update;
      });
    }
    fastFoodsItemNumsAlert[2].current.style.visibility = 'visible';
    fastFoodsItemCount[2].current.style.visibility = 'visible';
  }

  if(isClicked4) {
    if(FastFoodsData[3]['Taco'] === 0) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Taco': 1, 'Total Price': 50 };
          }
          return data;
        });
        return update;
      });
    }
    fastFoodsItemNumsAlert[3].current.style.visibility = 'visible';
    fastFoodsItemCount[3].current.style.visibility = 'visible';
  }

  if(isClicked5) {
    if(FastFoodsData[4]['Gobi Manchurian'] === 0) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Gobi Manchurian': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    fastFoodsItemNumsAlert[4].current.style.visibility = 'visible';
    fastFoodsItemCount[4].current.style.visibility = 'visible';
  }

  if(isClicked6) {
    if(FastFoodsData[5]['Noodles'] === 0) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Noodles': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    fastFoodsItemNumsAlert[5].current.style.visibility = 'visible';
    fastFoodsItemCount[5].current.style.visibility = 'visible';
  }

  if(isClicked7) {
    if(FastFoodsData[6]['Classic Pancakes'] === 0) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Classic Pancakes': 1, 'Total Price': 15 };
          }
          return data;
        });
        return update;
      });
    }
    fastFoodsItemNumsAlert[6].current.style.visibility = 'visible';
    fastFoodsItemCount[6].current.style.visibility = 'visible';
  }

  const handleClick = (fastFoodsMenuItemNumber) => {

    if(fastFoodsMenuItemNumber === 1) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Veg Burger': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(FastFoodsData[0]['Veg Burger'] === 0)
        setClick1(true);
      else
        setClick1(false);
    }

    else if(fastFoodsMenuItemNumber === 2) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Sandwich': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(FastFoodsData[1]['Sandwich'] === 0)
        setClick2(true);
      else
        setClick2(false);
    }

    else if(fastFoodsMenuItemNumber === 3) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Pizza': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(FastFoodsData[2]['Pizza'] === 0)
        setClick3(true);
      else
        setClick3(false);
    }

    else if(fastFoodsMenuItemNumber === 4) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Taco': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(FastFoodsData[3]['Taco'] === 0)
        setClick4(true);
      else
        setClick4(false);
    }

    else if(fastFoodsMenuItemNumber === 5) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Gobi Manchurian': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(FastFoodsData[4]['Gobi Manchurian'] === 0)
        setClick5(true);
      else
        setClick5(false);
    }

    else if(fastFoodsMenuItemNumber === 6) {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Noodles': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(FastFoodsData[5]['Noodles'] === 0)
        setClick6(true);
      else
        setClick6(false);
    }

    else {
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Classic Pancakes': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(FastFoodsData[6]['Classic Pancakes'] === 0)
        setClick7(true);
      else
        setClick7(false);
    }

  }

  const incrementItem = (itemNumber) => {

    if(itemNumber === 1)
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Veg Burger': FastFoodsData[0]['Veg Burger'] + 1, 'Total Price': (FastFoodsData[0]['Veg Burger'] + 1) * 40 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 2)
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Sandwich': FastFoodsData[1]['Sandwich'] + 1, 'Total Price': (FastFoodsData[1]['Sandwich'] + 1) * 35 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 3)
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Pizza': FastFoodsData[2]['Pizza'] + 1, 'Total Price': (FastFoodsData[2]['Pizza'] + 1) * 45 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 4)
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Taco': FastFoodsData[3]['Taco'] + 1, 'Total Price': (FastFoodsData[3]['Taco'] + 1) * 50 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 5)
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Gobi Manchurian': FastFoodsData[4]['Gobi Manchurian'] + 1, 'Total Price': (FastFoodsData[4]['Gobi Manchurian'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 6)
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Noodles': FastFoodsData[5]['Noodles'] + 1, 'Total Price': (FastFoodsData[5]['Noodles'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else
      setFastFoodsData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Classic Pancakes': FastFoodsData[6]['Classic Pancakes'] + 1, 'Total Price': (FastFoodsData[6]['Classic Pancakes'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

  }

  const decrementItem = (itemNumber) => {

    if(itemNumber === 1) {
      if(FastFoodsData[0]['Veg Burger'] === 1) {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Veg Burger': 1, 'Total Price': 40 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Veg Burger': FastFoodsData[0]['Veg Burger'] - 1, 'Total Price': (FastFoodsData[0]['Veg Burger'] * 40) - 40 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 2) {
      if(FastFoodsData[1]['Sandwich'] === 1) {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Sandwich': 1, 'Total Price': 35 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Sandwich': FastFoodsData[1]['Sandwich'] - 1, 'Total Price': (FastFoodsData[1]['Sandwich'] * 35) - 35 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 3) {
      if(FastFoodsData[2]['Pizza'] === 1) {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Pizza': 1, 'Total Price': 45 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Pizza': FastFoodsData[2]['Pizza'] - 1, 'Total Price': (FastFoodsData[2]['Pizza'] * 45) - 45 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 4) {
      if(FastFoodsData[3]['Taco'] === 1) {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Taco': 1, 'Total Price': 50 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Taco': FastFoodsData[3]['Taco'] - 1, 'Total Price': (FastFoodsData[3]['Taco'] * 50) - 50 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 5) {
      if(FastFoodsData[4]['Gobi Manchurian'] === 1) {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Gobi Manchurian': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Gobi Manchurian': FastFoodsData[4]['Gobi Manchurian'] - 1, 'Total Price': (FastFoodsData[4]['Gobi Manchurian'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 6) {
      if(FastFoodsData[5]['Noodles'] === 1) {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Noodles': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Noodles': FastFoodsData[5]['Noodles'] - 1, 'Total Price': (FastFoodsData[5]['Noodles'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else {
      if(FastFoodsData[6]['Classic Pancakes'] === 1) {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Classic Pancakes': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setFastFoodsData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Classic Pancakes': FastFoodsData[6]['Classic Pancakes'] - 1, 'Total Price': (FastFoodsData[6]['Classic Pancakes'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

  }

  useEffect(() => {

    if(FastFoodsData[0]['Veg Burger'] === 0) {
      fastFoodsItemNumsAlert[0].current.style.visibility = 'hidden';
      fastFoodsItemCount[0].current.style.visibility = 'hidden';
    }

    if(FastFoodsData[1]['Sandwich'] === 0) {
      fastFoodsItemNumsAlert[1].current.style.visibility = 'hidden';
      fastFoodsItemCount[1].current.style.visibility = 'hidden';
    }

    if(FastFoodsData[2]['Pizza'] === 0) {
      fastFoodsItemNumsAlert[2].current.style.visibility = 'hidden';
      fastFoodsItemCount[2].current.style.visibility = 'hidden';
    }

    if(FastFoodsData[3]['Taco'] === 0) {
      fastFoodsItemNumsAlert[3].current.style.visibility = 'hidden';
      fastFoodsItemCount[3].current.style.visibility = 'hidden';
    }

    if(FastFoodsData[4]['Gobi Manchurian'] === 0) {
      fastFoodsItemNumsAlert[4].current.style.visibility = 'hidden';
      fastFoodsItemCount[4].current.style.visibility = 'hidden';
    }

    if(FastFoodsData[5]['Noodles'] === 0) {
      fastFoodsItemNumsAlert[5].current.style.visibility = 'hidden';
      fastFoodsItemCount[5].current.style.visibility = 'hidden';
    }

    if(FastFoodsData[6]['Classic Pancakes'] === 0) {
      fastFoodsItemNumsAlert[6].current.style.visibility = 'hidden';
      fastFoodsItemCount[6].current.style.visibility = 'hidden';
    }

    localStorage.setItem('FastFoodsData', JSON.stringify(FastFoodsData));

    if(isPageRefreshed.current === false) {
      setCartData(FastFoodsData);
    }

    isPageRefreshed.current = false;

  }, [FastFoodsData]);


  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${fastFoodsDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);

  
  return (
    <div className={fastFoodsDesign.fastFoods}>

      <header className={fastFoodsDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={fastFoodsDesign.menuIcon}>
                <div className={fastFoodsDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={fastFoodsDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={fastFoodsDesign.menuIconBar}></div>
                <div className={fastFoodsDesign.menuIconBar}></div>
                <div className={fastFoodsDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={fastFoodsDesign.nav}>
          <Link to='/'><div className={fastFoodsDesign.navItem} id={fastFoodsDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={fastFoodsDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={fastFoodsDesign.navItem}>About</div></Link>
          <div className={fastFoodsDesign.navItem} id={fastFoodsDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={fastFoodsDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={fastFoodsDesign.navItem} id={fastFoodsDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={fastFoodsDesign.sidebarMenu} >
          <div className={fastFoodsDesign.sidebarMenuItems}>
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

      <section className={fastFoodsDesign.section}>
        <div className={fastFoodsDesign.trackCartAlert}>
          <div className={fastFoodsDesign.arrowSymbol}>⤵</div>
          <div className={fastFoodsDesign.trackCartAlertText}>Track Added Items in Cart Here</div>
        </div>
        <div className={fastFoodsDesign.topHeading}>HOTEL DEMO</div>
        <div className={fastFoodsDesign.fastFoodsList}>
          <center>
            <div className={fastFoodsDesign.fastFoodsRow1}>

              <div className={fastFoodsDesign.fastFoodsMenuItem1}>
                <div className={fastFoodsDesign.fastFoodsMenuItemImg}></div>
                <div className={fastFoodsDesign.fastFoodsMenuItem}>
                  <span className={fastFoodsDesign.fastFoodsMenuItemDish}>Veg Burger</span>
                  <span className={fastFoodsDesign.fastFoodsMenuItemPrice}>Rs.40/-</span>
                </div>
                <div className={fastFoodsDesign.addButton} name='fastFoodsMenuItem1' onClick={() => handleClick(1)}><span>{(isClicked1 || FastFoodsData[0]['Veg Burger'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={fastFoodsDesign.fastFoodsItemNumsAlert} ref={fastFoodsItemNumsAlert[0]}>Number of Items to Order</div>
                <div className={fastFoodsDesign.fastFoodsItemCount} ref={fastFoodsItemCount[0]}>
                  <div className={fastFoodsDesign.arithChar} onClick={() => incrementItem(1)}><span>+</span></div>
                  <div className={fastFoodsDesign.itemCount}><span>{FastFoodsData[0]['Veg Burger']}</span></div>
                  <div className={fastFoodsDesign.arithChar} onClick={() => decrementItem(1)}><span>-</span></div>
                </div>
              </div>

              <div className={fastFoodsDesign.fastFoodsMenuItem2}>
                <div className={fastFoodsDesign.fastFoodsMenuItemImg}></div>
                <div className={fastFoodsDesign.fastFoodsMenuItem}>
                  <span className={fastFoodsDesign.fastFoodsMenuItemDish}>Sandwich</span>
                  <span className={fastFoodsDesign.fastFoodsMenuItemPrice}>Rs.35/-</span>
                </div>
                <div className={fastFoodsDesign.addButton} onClick={() => handleClick(2)}><span>{(isClicked2 || FastFoodsData[1]['Sandwich'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={fastFoodsDesign.fastFoodsItemNumsAlert} ref={fastFoodsItemNumsAlert[1]}>Number of Items to Order</div>
                <div className={fastFoodsDesign.fastFoodsItemCount} ref={fastFoodsItemCount[1]}>
                  <div className={fastFoodsDesign.arithChar} onClick={() => incrementItem(2)}><span>+</span></div>
                  <div className={fastFoodsDesign.itemCount}><span>{FastFoodsData[1]['Sandwich']}</span></div>
                  <div className={fastFoodsDesign.arithChar} onClick={() => decrementItem(2)}><span>-</span></div>
                </div>
              </div>

              <div className={fastFoodsDesign.fastFoodsMenuItem3}>
                <div className={fastFoodsDesign.fastFoodsMenuItemImg}></div>
                <div className={fastFoodsDesign.fastFoodsMenuItem}>
                  <span className={fastFoodsDesign.fastFoodsMenuItemDish}>Veg Pizza</span>
                  <span className={fastFoodsDesign.fastFoodsMenuItemPrice}>Rs.45/-</span>
                </div>
                <div className={fastFoodsDesign.addButton} onClick={() => handleClick(3)}><span>{(isClicked3 || FastFoodsData[2]['Pizza'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={fastFoodsDesign.fastFoodsItemNumsAlert} ref={fastFoodsItemNumsAlert[2]}>Number of Items to Order</div>
                <div className={fastFoodsDesign.fastFoodsItemCount} ref={fastFoodsItemCount[2]}>
                  <div className={fastFoodsDesign.arithChar} onClick={() => incrementItem(3)}><span>+</span></div>
                  <div className={fastFoodsDesign.itemCount}><span>{FastFoodsData[2]['Pizza']}</span></div>
                  <div className={fastFoodsDesign.arithChar} onClick={() => decrementItem(3)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={fastFoodsDesign.fastFoodsRow2}>

              <div className={fastFoodsDesign.fastFoodsMenuItem4}>
                <div className={fastFoodsDesign.fastFoodsMenuItemImg}></div>
                <div className={fastFoodsDesign.fastFoodsMenuItem}>
                  <span className={fastFoodsDesign.fastFoodsMenuItemDish}>Taco</span>
                  <span className={fastFoodsDesign.fastFoodsMenuItemPrice}>Rs.50/-</span>
                </div>
                <div className={fastFoodsDesign.addButton} onClick={() => handleClick(4)}><span>{(isClicked4 || FastFoodsData[3]['Taco'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={fastFoodsDesign.fastFoodsItemNumsAlert} ref={fastFoodsItemNumsAlert[3]}>Number of Items to Order</div>
                <div className={fastFoodsDesign.fastFoodsItemCount} ref={fastFoodsItemCount[3]}>
                  <div className={fastFoodsDesign.arithChar} onClick={() => incrementItem(4)}><span>+</span></div>
                  <div className={fastFoodsDesign.itemCount}><span>{FastFoodsData[3]['Taco']}</span></div>
                  <div className={fastFoodsDesign.arithChar} onClick={() => decrementItem(4)}><span>-</span></div>
                </div>
              </div>

              <div className={fastFoodsDesign.fastFoodsMenuItem5}>
                <div className={fastFoodsDesign.fastFoodsMenuItemImg}></div>
                <div className={fastFoodsDesign.fastFoodsMenuItem}>
                  <span className={fastFoodsDesign.fastFoodsMenuItemDish}>Gobi<br />Manchurian</span>
                  <span className={fastFoodsDesign.fastFoodsMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={fastFoodsDesign.addButton} onClick={() => handleClick(5)}><span>{(isClicked5 || FastFoodsData[4]['Gobi Manchurian'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={fastFoodsDesign.fastFoodsItemNumsAlert} ref={fastFoodsItemNumsAlert[4]}>Number of Items to Order</div>
                <div className={fastFoodsDesign.fastFoodsItemCount} ref={fastFoodsItemCount[4]}>
                  <div className={fastFoodsDesign.arithChar} onClick={() => incrementItem(5)}><span>+</span></div>
                  <div className={fastFoodsDesign.itemCount}><span>{FastFoodsData[4]['Gobi Manchurian']}</span></div>
                  <div className={fastFoodsDesign.arithChar} onClick={() => decrementItem(5)}><span>-</span></div>
                </div>
              </div>

              <div className={fastFoodsDesign.fastFoodsMenuItem6}>
                <div className={fastFoodsDesign.fastFoodsMenuItemImg}></div>
                <div className={fastFoodsDesign.fastFoodsMenuItem}>
                  <span className={fastFoodsDesign.fastFoodsMenuItemDish}>Noodles</span>
                  <span className={fastFoodsDesign.fastFoodsMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={fastFoodsDesign.addButton} onClick={() => handleClick(6)}><span>{(isClicked6 || FastFoodsData[5]['Noodles'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={fastFoodsDesign.fastFoodsItemNumsAlert} ref={fastFoodsItemNumsAlert[5]}>Number of Items to Order</div>
                <div className={fastFoodsDesign.fastFoodsItemCount} ref={fastFoodsItemCount[5]}>
                  <div className={fastFoodsDesign.arithChar} onClick={() => incrementItem(6)}><span>+</span></div>
                  <div className={fastFoodsDesign.itemCount}><span>{FastFoodsData[5]['Noodles']}</span></div>
                  <div className={fastFoodsDesign.arithChar} onClick={() => decrementItem(6)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={fastFoodsDesign.fastFoodsRow3}>

              <div className={fastFoodsDesign.fastFoodsMenuItem7}>
                <div className={fastFoodsDesign.fastFoodsMenuItemImg}></div>
                <div className={fastFoodsDesign.fastFoodsMenuItem}>
                  <span className={fastFoodsDesign.fastFoodsMenuItemDish}>Classic<br />Pancakes</span>
                  <span className={fastFoodsDesign.fastFoodsMenuItemPrice}>Rs.15/-(Per Piece)</span>
                </div>
                <div className={fastFoodsDesign.addButton} onClick={() => handleClick(7)}><span>{(isClicked7 || FastFoodsData[6]['Classic Pancakes'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={fastFoodsDesign.fastFoodsItemNumsAlert} ref={fastFoodsItemNumsAlert[6]}>Number of Items to Order</div>
                <div className={fastFoodsDesign.fastFoodsItemCount} ref={fastFoodsItemCount[6]}>
                  <div className={fastFoodsDesign.arithChar} onClick={() => incrementItem(7)}><span>+</span></div>
                  <div className={fastFoodsDesign.itemCount}><span>{FastFoodsData[6]['Classic Pancakes']}</span></div>
                  <div className={fastFoodsDesign.arithChar} onClick={() => decrementItem(7)}><span>-</span></div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>

      <footer className={fastFoodsDesign.footer}>
        <div className={fastFoodsDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={fastFoodsDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={fastFoodsDesign.footContent3}>Follow On</div>

        <div className={fastFoodsDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={fastFoodsDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={fastFoodsDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={fastFoodsDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={fastFoodsDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={fastFoodsDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default FastFoods;