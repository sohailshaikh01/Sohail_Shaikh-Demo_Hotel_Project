import mahaSpecialDesign from './MahaSpecialDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from 'react';
import {CartContext} from './CartReference';

const MahaSpecial = () => {

  const {setCartData} = useContext(CartContext);

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const mahaSpecialItemNumsAlert = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const mahaSpecialItemCount = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
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

  const mahaSpecialCount = JSON.parse(localStorage.getItem('MahaSpecialData')) || [
    { 'Tambda Rassa': 0, 'Total Price': 0 },
    { 'Pandhra Rassa': 0, 'Total Price': 0 },
    { 'Chicken Rassa': 0, 'Total Price': 0 },
    { 'Sol Kadhi': 0, 'Total Price': 0 },
    { 'Puran Poli': 0, 'Total Price': 0 },
    { 'Pithla': 0, 'Total Price': 0 },
    { 'Amti Dal': 0, 'Total Price': 0 },
    { 'Bharli Vangi': 0, 'Total Price': 0 }
  ];

  const [MahaSpecialData, setMahaSpecialData] = useState(mahaSpecialCount);

  const [isClicked1, setClick1] = useState(false);
  const [isClicked2, setClick2] = useState(false);
  const [isClicked3, setClick3] = useState(false);
  const [isClicked4, setClick4] = useState(false);
  const [isClicked5, setClick5] = useState(false);
  const [isClicked6, setClick6] = useState(false);
  const [isClicked7, setClick7] = useState(false);
  const [isClicked8, setClick8] = useState(false);

  if(isClicked1) {
    if(MahaSpecialData[0]['Tambda Rassa'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Tambda Rassa': 1, 'Total Price': 20 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[0].current.style.visibility = 'visible';
    mahaSpecialItemCount[0].current.style.visibility = 'visible';
  }

  if(isClicked2) {
    if(MahaSpecialData[1]['Pandhra Rassa'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Pandhra Rassa': 1, 'Total Price': 20 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[1].current.style.visibility = 'visible';
    mahaSpecialItemCount[1].current.style.visibility = 'visible';
  }

  if(isClicked3) {
    if(MahaSpecialData[2]['Chicken Rassa'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Chicken Rassa': 1, 'Total Price': 40 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[2].current.style.visibility = 'visible';
    mahaSpecialItemCount[2].current.style.visibility = 'visible';
  }

  if(isClicked4) {
    if(MahaSpecialData[3]['Sol Kadhi'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Sol Kadhi': 1, 'Total Price': 15 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[3].current.style.visibility = 'visible';
    mahaSpecialItemCount[3].current.style.visibility = 'visible';
  }

  if(isClicked5) {
    if(MahaSpecialData[4]['Puran Poli'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Puran Poli': 1, 'Total Price': 15 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[4].current.style.visibility = 'visible';
    mahaSpecialItemCount[4].current.style.visibility = 'visible';
  }

  if(isClicked6) {
    if(MahaSpecialData[5]['Pithla'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Pithla': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[5].current.style.visibility = 'visible';
    mahaSpecialItemCount[5].current.style.visibility = 'visible';
  }

  if(isClicked7) {
    if(MahaSpecialData[6]['Amti Dal'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Amti Dal': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[6].current.style.visibility = 'visible';
    mahaSpecialItemCount[6].current.style.visibility = 'visible';
  }

  if(isClicked8) {
    if(MahaSpecialData[7]['Bharli Vangi'] === 0) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Bharli Vangi': 1, 'Total Price': 20 };
          }
          return data;
        });
        return update;
      });
    }
    mahaSpecialItemNumsAlert[7].current.style.visibility = 'visible';
    mahaSpecialItemCount[7].current.style.visibility = 'visible';
  }

  const handleClick = (mahaSpecialMenuItemNumber) => {

    if(mahaSpecialMenuItemNumber === 1) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Tambda Rassa': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[0]['Tambda Rassa'] === 0)
        setClick1(true);
      else
        setClick1(false);
    }

    else if(mahaSpecialMenuItemNumber === 2) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Pandhra Rassa': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[1]['Pandhra Rassa'] === 0)
        setClick2(true);
      else
        setClick2(false);
    }

    else if(mahaSpecialMenuItemNumber === 3) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Chicken Rassa': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[2]['Chicken Rassa'] === 0)
        setClick3(true);
      else
        setClick3(false);
    }

    else if(mahaSpecialMenuItemNumber === 4) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Sol Kadhi': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[3]['Sol Kadhi'] === 0)
        setClick4(true);
      else
        setClick4(false);
    }

    else if(mahaSpecialMenuItemNumber === 5) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Puran Poli': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[4]['Puran Poli'] === 0)
        setClick5(true);
      else
        setClick5(false);
    }

    else if(mahaSpecialMenuItemNumber === 6) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Pithla': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[5]['Pithla'] === 0)
        setClick6(true);
      else
        setClick6(false);
    }

    else if(mahaSpecialMenuItemNumber === 7) {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Amti Dal': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[6]['Amti Dal'] === 0)
        setClick7(true);
      else
        setClick7(false);
    }

    else {
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Bharli Vangi': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(MahaSpecialData[7]['Bharli Vangi'] === 0)
        setClick8(true);
      else
        setClick8(false);
    }

  }

  const incrementItem = (itemNumber) => {

    if(itemNumber === 1)
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Tambda Rassa': MahaSpecialData[0]['Tambda Rassa'] + 1, 'Total Price': (MahaSpecialData[0]['Tambda Rassa'] + 1) * 20 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 2)
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Pandhra Rassa': MahaSpecialData[1]['Pandhra Rassa'] + 1, 'Total Price': (MahaSpecialData[1]['Pandhra Rassa'] + 1) * 20 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 3)
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Chicken Rassa': MahaSpecialData[2]['Chicken Rassa'] + 1, 'Total Price': (MahaSpecialData[2]['Chicken Rassa'] + 1) * 40 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 4)
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Sol Kadhi': MahaSpecialData[3]['Sol Kadhi'] + 1, 'Total Price': (MahaSpecialData[3]['Sol Kadhi'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 5)
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Puran Poli': MahaSpecialData[4]['Puran Poli'] + 1, 'Total Price': (MahaSpecialData[4]['Puran Poli'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 6)
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Pithla': MahaSpecialData[5]['Pithla'] + 1, 'Total Price': (MahaSpecialData[5]['Pithla'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 7)
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Amti Dal': MahaSpecialData[6]['Amti Dal'] + 1, 'Total Price': (MahaSpecialData[6]['Amti Dal'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else
      setMahaSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Bharli Vangi': MahaSpecialData[7]['Bharli Vangi'] + 1, 'Total Price': (MahaSpecialData[7]['Bharli Vangi'] + 1) * 20 };
          }
          return data;
        });
        return update;
      });

  }

  const decrementItem = (itemNumber) => {

    if(itemNumber === 1) {
      if(MahaSpecialData[0]['Tambda Rassa'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Tambda Rassa': 1, 'Total Price': 20 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Tambda Rassa': MahaSpecialData[0]['Tambda Rassa'] - 1, 'Total Price': (MahaSpecialData[0]['Tambda Rassa'] * 20) - 20 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 2) {
      if(MahaSpecialData[1]['Pandhra Rassa'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Pandhra Rassa': 1, 'Total Price': 20 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Pandhra Rassa': MahaSpecialData[1]['Pandhra Rassa'] - 1, 'Total Price': (MahaSpecialData[1]['Pandhra Rassa'] * 20) - 20 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 3) {
      if(MahaSpecialData[2]['Chicken Rassa'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Chicken Rassa': 1, 'Total Price': 40 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Chicken Rassa': MahaSpecialData[2]['Chicken Rassa'] - 1, 'Total Price': (MahaSpecialData[2]['Chicken Rassa'] * 40) - 40 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 4) {
      if(MahaSpecialData[3]['Sol Kadhi'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Sol Kadhi': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Sol Kadhi': MahaSpecialData[3]['Sol Kadhi'] - 1, 'Total Price': (MahaSpecialData[3]['Sol Kadhi'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 5) {
      if(MahaSpecialData[4]['Puran Poli'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Puran Poli': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Puran Poli': MahaSpecialData[4]['Puran Poli'] - 1, 'Total Price': (MahaSpecialData[4]['Puran Poli'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 6) {
      if(MahaSpecialData[5]['Pithla'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Pithla': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Pithla': MahaSpecialData[5]['Pithla'] - 1, 'Total Price': (MahaSpecialData[5]['Pithla'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 7) {
      if(MahaSpecialData[6]['Amti Dal'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Amti Dal': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Amti Dal': MahaSpecialData[6]['Amti Dal'] - 1, 'Total Price': (MahaSpecialData[6]['Amti Dal'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else {
      if(MahaSpecialData[7]['Bharli Vangi'] === 1) {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Bharli Vangi': 1, 'Total Price': 20 };
            }
            return data;
          });
          return update;
        });
      }

      else {
        setMahaSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Bharli Vangi': MahaSpecialData[7]['Bharli Vangi'] - 1, 'Total Price': (MahaSpecialData[7]['Bharli Vangi'] * 20) - 20 }
            }
            return data;
          });
          return update;
        });
      }
    }

  }

  useEffect(() => {

    if(MahaSpecialData[0]['Tambda Rassa'] === 0) {
      mahaSpecialItemNumsAlert[0].current.style.visibility = 'hidden';
      mahaSpecialItemCount[0].current.style.visibility = 'hidden';
    }

    if(MahaSpecialData[1]['Pandhra Rassa'] === 0) {
      mahaSpecialItemNumsAlert[1].current.style.visibility = 'hidden';
      mahaSpecialItemCount[1].current.style.visibility = 'hidden';
    }

    if(MahaSpecialData[2]['Chicken Rassa'] === 0) {
      mahaSpecialItemNumsAlert[2].current.style.visibility = 'hidden';
      mahaSpecialItemCount[2].current.style.visibility = 'hidden';
    }

    if(MahaSpecialData[3]['Sol Kadhi'] === 0) {
      mahaSpecialItemNumsAlert[3].current.style.visibility = 'hidden';
      mahaSpecialItemCount[3].current.style.visibility = 'hidden';
    }

    if(MahaSpecialData[4]['Puran Poli'] === 0) {
      mahaSpecialItemNumsAlert[4].current.style.visibility = 'hidden';
      mahaSpecialItemCount[4].current.style.visibility = 'hidden';
    }

    if(MahaSpecialData[5]['Pithla'] === 0) {
      mahaSpecialItemNumsAlert[5].current.style.visibility = 'hidden';
      mahaSpecialItemCount[5].current.style.visibility = 'hidden';
    }

    if(MahaSpecialData[6]['Amti Dal'] === 0) {
      mahaSpecialItemNumsAlert[6].current.style.visibility = 'hidden';
      mahaSpecialItemCount[6].current.style.visibility = 'hidden';
    }

    if(MahaSpecialData[7]['Bharli Vangi'] === 0) {
      mahaSpecialItemNumsAlert[7].current.style.visibility = 'hidden';
      mahaSpecialItemCount[7].current.style.visibility = 'hidden';
    }

    localStorage.setItem('MahaSpecialData', JSON.stringify(MahaSpecialData));

    if(isPageRefreshed.current === false) {
      setCartData(MahaSpecialData);
    }

    isPageRefreshed.current = false;

  }, [MahaSpecialData]);


  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${mahaSpecialDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={mahaSpecialDesign.mahaSpecial}>

      <header className={mahaSpecialDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={mahaSpecialDesign.menuIcon}>
                <div className={mahaSpecialDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={mahaSpecialDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={mahaSpecialDesign.menuIconBar}></div>
                <div className={mahaSpecialDesign.menuIconBar}></div>
                <div className={mahaSpecialDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={mahaSpecialDesign.nav}>
          <Link to='/'><div className={mahaSpecialDesign.navItem} id={mahaSpecialDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={mahaSpecialDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={mahaSpecialDesign.navItem}>About</div></Link>
          <div className={mahaSpecialDesign.navItem} id={mahaSpecialDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={mahaSpecialDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={mahaSpecialDesign.navItem} id={mahaSpecialDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={mahaSpecialDesign.sidebarMenu} >
          <div className={mahaSpecialDesign.sidebarMenuItems}>
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

      <section className={mahaSpecialDesign.section}>
        <div className={mahaSpecialDesign.trackCartAlert}>
          <div className={mahaSpecialDesign.arrowSymbol}>⤵</div>
          <div className={mahaSpecialDesign.trackCartAlertText}>Track Added Items in Cart Here</div>
        </div>
        <div className={mahaSpecialDesign.topHeading}>HOTEL DEMO</div>
        <div className={mahaSpecialDesign.mahaSpecialList}>
          <center>
            <div className={mahaSpecialDesign.mahaSpecialRow1}>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem1}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Tambda Rassa</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.20/-(Per Plate)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} name='mahaSpecialMenuItem1' onClick={() => handleClick(1)}><span>{(isClicked1 || MahaSpecialData[0]['Tambda Rassa'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[0]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[0]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(1)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[0]['Tambda Rassa']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(1)}><span>-</span></div>
                </div>
              </div>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem2}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Pandhra Rassa</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.20/-(Per Plate)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} onClick={() => handleClick(2)}><span>{(isClicked2 || MahaSpecialData[1]['Pandhra Rassa'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[1]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[1]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(2)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[1]['Pandhra Rassa']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(2)}><span>-</span></div>
                </div>
              </div>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem3}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Chicken Rassa</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.40/-(Per Plate)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} onClick={() => handleClick(3)}><span>{(isClicked3 || MahaSpecialData[2]['Chicken Rassa'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[2]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[2]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(3)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[2]['Chicken Rassa']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(3)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={mahaSpecialDesign.mahaSpecialRow2}>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem4}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Sol Kadhi</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.15/-(Per Plate)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} onClick={() => handleClick(4)}><span>{(isClicked4 || MahaSpecialData[3]['Sol Kadhi'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[3]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[3]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(4)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[3]['Sol Kadhi']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(4)}><span>-</span></div>
                </div>
              </div>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem5}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Puran Poli</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.15/-(Per Piece)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} onClick={() => handleClick(5)}><span>{(isClicked5 || MahaSpecialData[4]['Puran Poli'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[4]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[4]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(5)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[4]['Puran Poli']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(5)}><span>-</span></div>
                </div>
              </div>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem6}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Pithla</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} onClick={() => handleClick(6)}><span>{(isClicked6 || MahaSpecialData[5]['Pithla'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[5]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[5]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(6)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[5]['Pithla']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(6)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={mahaSpecialDesign.mahaSpecialRow3}>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem7}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Amti Dal</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} onClick={() => handleClick(7)}><span>{(isClicked7 || MahaSpecialData[6]['Amti Dal'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[6]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[6]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(7)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[6]['Amti Dal']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(7)}><span>-</span></div>
                </div>
              </div>

              <div className={mahaSpecialDesign.mahaSpecialMenuItem8}>
                <div className={mahaSpecialDesign.mahaSpecialMenuItemImg}></div>
                <div className={mahaSpecialDesign.mahaSpecialMenuItem}>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemDish}>Bharli Vangi</span>
                  <span className={mahaSpecialDesign.mahaSpecialMenuItemPrice}>Rs.20/-(Per Plate)</span>
                </div>
                <div className={mahaSpecialDesign.addButton} onClick={() => handleClick(8)}><span>{(isClicked8 || MahaSpecialData[7]['Bharli Vangi'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={mahaSpecialDesign.mahaSpecialItemNumsAlert} ref={mahaSpecialItemNumsAlert[7]}>Number of Items to Order</div>
                <div className={mahaSpecialDesign.mahaSpecialItemCount} ref={mahaSpecialItemCount[7]}>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => incrementItem(8)}><span>+</span></div>
                  <div className={mahaSpecialDesign.itemCount}><span>{MahaSpecialData[7]['Bharli Vangi']}</span></div>
                  <div className={mahaSpecialDesign.arithChar} onClick={() => decrementItem(8)}><span>-</span></div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>

      <footer className={mahaSpecialDesign.footer}>
        <div className={mahaSpecialDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={mahaSpecialDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={mahaSpecialDesign.footContent3}>Follow On</div>

        <div className={mahaSpecialDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={mahaSpecialDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={mahaSpecialDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={mahaSpecialDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={mahaSpecialDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={mahaSpecialDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default MahaSpecial;