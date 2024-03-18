import breakfastDesign from './BreakfastDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from 'react';
import {CartContext} from './CartReference';

const Breakfast = () => {

  const {setCartData} = useContext(CartContext);

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const breakfastItemNumsAlert = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const breakfastItemCount = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
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

  const breakfastCount = JSON.parse(localStorage.getItem('BreakfastData')) || [
    { 'Idli': 0, 'Total Price': 0 },
    { 'Dosa': 0, 'Total Price': 0 },
    { 'Upma': 0, 'Total Price': 0 },
    { 'Appe': 0, 'Total Price': 0 },
    { 'Pav Bhaji': 0, 'Total Price': 0 },
    { 'Misal Pav': 0, 'Total Price': 0 },
    { 'Poha': 0, 'Total Price': 0 },
    { 'Vada Pav': 0, 'Total Price': 0 }
  ];

  const [BreakfastData, setBreakfastData] = useState(breakfastCount);

  const [isClicked1, setClick1] = useState(false);
  const [isClicked2, setClick2] = useState(false);
  const [isClicked3, setClick3] = useState(false);
  const [isClicked4, setClick4] = useState(false);
  const [isClicked5, setClick5] = useState(false);
  const [isClicked6, setClick6] = useState(false);
  const [isClicked7, setClick7] = useState(false);
  const [isClicked8, setClick8] = useState(false);

  if(isClicked1) {
    if(BreakfastData[0]['Idli'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Idli': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[0].current.style.visibility = 'visible';
    breakfastItemCount[0].current.style.visibility = 'visible';
  }

  if(isClicked2) {
    if(BreakfastData[1]['Dosa'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Dosa': 1, 'Total Price': 30 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[1].current.style.visibility = 'visible';
    breakfastItemCount[1].current.style.visibility = 'visible';
  }

  if(isClicked3) {
    if(BreakfastData[2]['Upma'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Upma': 1, 'Total Price': 20 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[2].current.style.visibility = 'visible';
    breakfastItemCount[2].current.style.visibility = 'visible';
  }

  if(isClicked4) {
    if(BreakfastData[3]['Appe'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Appe': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[3].current.style.visibility = 'visible';
    breakfastItemCount[3].current.style.visibility = 'visible';
  }

  if(isClicked5) {
    if(BreakfastData[4]['Pav Bhaji'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Pav Bhaji': 1, 'Total Price': 30 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[4].current.style.visibility = 'visible';
    breakfastItemCount[4].current.style.visibility = 'visible';
  }

  if(isClicked6) {
    if(BreakfastData[5]['Misal Pav'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Misal Pav': 1, 'Total Price': 30 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[5].current.style.visibility = 'visible';
    breakfastItemCount[5].current.style.visibility = 'visible';
  }

  if(isClicked7) {
    if(BreakfastData[6]['Poha'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Poha': 1, 'Total Price': 30 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[6].current.style.visibility = 'visible';
    breakfastItemCount[6].current.style.visibility = 'visible';
  }

  if(isClicked8) {
    if(BreakfastData[7]['Vada Pav'] === 0) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Vada Pav': 1, 'Total Price': 20 };
          }
          return data;
        });
        return update;
      });
    }
    breakfastItemNumsAlert[7].current.style.visibility = 'visible';
    breakfastItemCount[7].current.style.visibility = 'visible';
  }

  const handleClick = (breakfastMenuItemNumber) => {

    if(breakfastMenuItemNumber === 1) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Idli': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[0]['Idli'] === 0)
        setClick1(true);
      else
        setClick1(false);
    }

    else if(breakfastMenuItemNumber === 2) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Dosa': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[1]['Dosa'] === 0)
        setClick2(true);
      else
        setClick2(false);
    }

    else if(breakfastMenuItemNumber === 3) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Upma': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[2]['Upma'] === 0)
        setClick3(true);
      else
        setClick3(false);
    }

    else if(breakfastMenuItemNumber === 4) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Appe': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[3]['Appe'] === 0)
        setClick4(true);
      else
        setClick4(false);
    }

    else if(breakfastMenuItemNumber === 5) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Pav Bhaji': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[4]['Pav Bhaji'] === 0)
        setClick5(true);
      else
        setClick5(false);
    }

    else if(breakfastMenuItemNumber === 6) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Misal Pav': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[5]['Misal Pav'] === 0)
        setClick6(true);
      else
        setClick6(false);
    }

    else if(breakfastMenuItemNumber === 7) {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Poha': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[6]['Poha'] === 0)
        setClick7(true);
      else
        setClick7(false);
    }

    else {
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Vada Pav': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(BreakfastData[7]['Vada Pav'] === 0)
        setClick8(true);
      else
        setClick8(false);
    }

  }

  const incrementItem = (itemNumber) => {

    if(itemNumber === 1) 
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Idli': BreakfastData[0]['Idli'] + 1, 'Total Price': (BreakfastData[0]['Idli'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 2)
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Dosa': BreakfastData[1]['Dosa'] + 1, 'Total Price': (BreakfastData[1]['Dosa'] + 1) * 30 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 3)
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Upma': BreakfastData[2]['Upma'] + 1, 'Total Price': (BreakfastData[2]['Upma'] + 1) * 20 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 4)
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Appe': BreakfastData[3]['Appe'] + 1, 'Total Price': (BreakfastData[3]['Appe'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 5)
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Pav Bhaji': BreakfastData[4]['Pav Bhaji'] + 1, 'Total Price': (BreakfastData[4]['Pav Bhaji'] + 1) * 30 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 6)
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Misal Pav': BreakfastData[5]['Misal Pav'] + 1, 'Total Price': (BreakfastData[5]['Misal Pav'] + 1) * 30 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 7)
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Poha': BreakfastData[6]['Poha'] + 1, 'Total Price': (BreakfastData[6]['Poha'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

    else
      setBreakfastData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Vada Pav': BreakfastData[7]['Vada Pav'] + 1, 'Total Price': (BreakfastData[7]['Vada Pav'] + 1) * 20 };
          }
          return data;
        });
        return update;
      });

  }

  const decrementItem = (itemNumber) => {

    if(itemNumber === 1) {
      if(BreakfastData[0]['Idli'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Idli': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Idli': BreakfastData[0]['Idli'] - 1, 'Total Price': (BreakfastData[0]['Idli'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 2) {
      if(BreakfastData[1]['Dosa'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Dosa': 1, 'Total Price': 30 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Dosa': BreakfastData[1]['Dosa'] - 1, 'Total Price': (BreakfastData[1]['Dosa'] * 30) - 30 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 3) {
      if(BreakfastData[2]['Upma'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Upma': 1, 'Total Price': 20 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Upma': BreakfastData[2]['Upma'] - 1, 'Total Price': (BreakfastData[2]['Upma'] * 20) - 20 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 4) {
      if(BreakfastData[3]['Appe'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Appe': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Appe': BreakfastData[3]['Appe'] - 1, 'Total Price': (BreakfastData[3]['Appe'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 5) {
      if(BreakfastData[4]['Pav Bhaji'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Pav Bhaji': 1, 'Total Price': 30 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Pav Bhaji': BreakfastData[4]['Pav Bhaji'] - 1, 'Total Price': (BreakfastData[4]['Pav Bhaji'] * 30) - 30 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 6) {
      if(BreakfastData[5]['Misal Pav'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Misal Pav': 1, 'Total Price': 30 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Misal Pav': BreakfastData[5]['Misal Pav'] - 1, 'Total Price': (BreakfastData[5]['Misal Pav'] * 30) - 30 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 7) {
      if(BreakfastData[6]['Poha'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Poha': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Poha': BreakfastData[6]['Poha'] - 1, 'Total Price': (BreakfastData[6]['Poha'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else {
      if(BreakfastData[7]['Vada Pav'] === 1) {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Vada Pav': 1, 'Total Price': 20 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setBreakfastData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Vada Pav': BreakfastData[7]['Vada Pav'] - 1, 'Total Price': (BreakfastData[7]['Vada Pav'] * 20) - 20 }
            }
            return data;
          });
          return update;
        });
      }
    }

  }

  useEffect(() => {

    if(BreakfastData[0]['Idli'] === 0) {
      breakfastItemNumsAlert[0].current.style.visibility = 'hidden';
      breakfastItemCount[0].current.style.visibility = 'hidden';
    }

    if(BreakfastData[1]['Dosa'] === 0) {
      breakfastItemNumsAlert[1].current.style.visibility = 'hidden';
      breakfastItemCount[1].current.style.visibility = 'hidden';
    }

    if(BreakfastData[2]['Upma'] === 0) {
      breakfastItemNumsAlert[2].current.style.visibility = 'hidden';
      breakfastItemCount[2].current.style.visibility = 'hidden';
    }

    if(BreakfastData[3]['Appe'] === 0) {
      breakfastItemNumsAlert[3].current.style.visibility = 'hidden';
      breakfastItemCount[3].current.style.visibility = 'hidden';
    }

    if(BreakfastData[4]['Pav Bhaji'] === 0) {
      breakfastItemNumsAlert[4].current.style.visibility = 'hidden';
      breakfastItemCount[4].current.style.visibility = 'hidden';
    }

    if(BreakfastData[5]['Misal Pav'] === 0) {
      breakfastItemNumsAlert[5].current.style.visibility = 'hidden';
      breakfastItemCount[5].current.style.visibility = 'hidden';
    }

    if(BreakfastData[6]['Poha'] === 0) {
      breakfastItemNumsAlert[6].current.style.visibility = 'hidden';
      breakfastItemCount[6].current.style.visibility = 'hidden';
    }

    if(BreakfastData[7]['Vada Pav'] === 0) {
      breakfastItemNumsAlert[7].current.style.visibility = 'hidden';
      breakfastItemCount[7].current.style.visibility = 'hidden';
    }

    localStorage.setItem('BreakfastData', JSON.stringify(BreakfastData));

    if(isPageRefreshed.current === false) {
      setCartData(BreakfastData);
    }

    isPageRefreshed.current = false;

  }, [BreakfastData]);

  
  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${breakfastDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };
    
    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={breakfastDesign.breakfast}>

      <header className={breakfastDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={breakfastDesign.menuIcon}>
                <div className={breakfastDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={breakfastDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={breakfastDesign.menuIconBar}></div>
                <div className={breakfastDesign.menuIconBar}></div>
                <div className={breakfastDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={breakfastDesign.nav}>
          <Link to='/'><div className={breakfastDesign.navItem} id={breakfastDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={breakfastDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={breakfastDesign.navItem}>About</div></Link>
          <div className={breakfastDesign.navItem} id={breakfastDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={breakfastDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={breakfastDesign.navItem} id={breakfastDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={breakfastDesign.sidebarMenu} >
          <div className={breakfastDesign.sidebarMenuItems}>
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

      <section className={breakfastDesign.section}>
        <div className={breakfastDesign.trackCartAlert}>
          <div className={breakfastDesign.arrowSymbol}>⤵</div>
          <div className={breakfastDesign.trackCartAlertText}>Track Added Items in Cart Here</div>
        </div>
        <div className={breakfastDesign.topHeading}>HOTEL DEMO</div>
        <div className={breakfastDesign.breakfastList}>
          <center>
            <div className={breakfastDesign.breakfastRow1}>

              <div className={breakfastDesign.breakfastMenuItem1}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Idli</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} name='breakfastMenuItem1' onClick={() => handleClick(1)}><span>{(isClicked1 || BreakfastData[0]['Idli'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[0]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[0]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(1)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[0]['Idli']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(1)}><span>-</span></div>
                </div>
              </div>

              <div className={breakfastDesign.breakfastMenuItem2}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Dosa</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.30/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} onClick={() => handleClick(2)}><span>{(isClicked2 || BreakfastData[1]['Dosa'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[1]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[1]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(2)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[1]['Dosa']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(2)}><span>-</span></div>
                </div>
              </div>

              <div className={breakfastDesign.breakfastMenuItem3}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Upma</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.20/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} onClick={() => handleClick(3)}><span>{(isClicked3 || BreakfastData[2]['Upma'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[2]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[2]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(3)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[2]['Upma']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(3)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={breakfastDesign.breakfastRow2}>

              <div className={breakfastDesign.breakfastMenuItem4}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Appe</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} onClick={() => handleClick(4)}><span>{(isClicked4 || BreakfastData[3]['Appe'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[3]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[3]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(4)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[3]['Appe']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(4)}><span>-</span></div>
                </div>
              </div>

              <div className={breakfastDesign.breakfastMenuItem5}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Pav Bhaji</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.30/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} onClick={() => handleClick(5)}><span>{(isClicked5 || BreakfastData[4]['Pav Bhaji'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[4]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[4]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(5)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[4]['Pav Bhaji']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(5)}><span>-</span></div>
                </div>
              </div>

              <div className={breakfastDesign.breakfastMenuItem6}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Misal Pav</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.30/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} onClick={() => handleClick(6)}><span>{(isClicked6 || BreakfastData[5]['Misal Pav'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[5]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[5]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(6)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[5]['Misal Pav']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(6)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={breakfastDesign.breakfastRow3}>

              <div className={breakfastDesign.breakfastMenuItem7}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Poha</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.15/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} onClick={() => handleClick(7)}><span>{(isClicked7 || BreakfastData[6]['Poha'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[6]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[6]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(7)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[6]['Poha']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(7)}><span>-</span></div>
                </div>
              </div>

              <div className={breakfastDesign.breakfastMenuItem8}>
                <div className={breakfastDesign.breakfastMenuItemImg}></div>
                <div className={breakfastDesign.breakfastMenuItem}>
                  <span className={breakfastDesign.breakfastMenuItemDish}>Vada Pav</span>
                  <span className={breakfastDesign.breakfastMenuItemPrice}>Rs.20/-(Per Plate)</span>
                </div>
                <div className={breakfastDesign.addButton} onClick={() => handleClick(8)}><span>{(isClicked8 || BreakfastData[7]['Vada Pav'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={breakfastDesign.breakfastItemNumsAlert} ref={breakfastItemNumsAlert[7]}>Number of Items to Order</div>
                <div className={breakfastDesign.breakfastItemCount} ref={breakfastItemCount[7]}>
                  <div className={breakfastDesign.arithChar} onClick={() => incrementItem(8)}><span>+</span></div>
                  <div className={breakfastDesign.itemCount}><span>{BreakfastData[7]['Vada Pav']}</span></div>
                  <div className={breakfastDesign.arithChar} onClick={() => decrementItem(8)}><span>-</span></div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>

      <footer className={breakfastDesign.footer}>
        <div className={breakfastDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={breakfastDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={breakfastDesign.footContent3}>Follow On</div>

        <div className={breakfastDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank' rel='noopener noreferrer'><img className={breakfastDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank' rel='noopener noreferrer'><img className={breakfastDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank' rel='noopener noreferrer'><img className={breakfastDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank' rel='noopener noreferrer'><img className={breakfastDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={breakfastDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default Breakfast;