import indVeggiesDesign from './IndVeggiesDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate } from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from 'react';
import {CartContext} from './CartReference';

const IndVeggies = () => {

  const {setCartData} = useContext(CartContext);

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const indVegItemNumsAlert = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const indVegItemCount = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
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

  const indVegCount = JSON.parse(localStorage.getItem('IndVegData')) || [
    { 'Paneer Masala': 0, 'Total Price': 0 },
    { 'Palak Paneer': 0, 'Total Price': 0 },
    { 'Chapati': 0, 'Total Price': 0 },
    { 'Plain Rice': 0, 'Total Price': 0 },
    { 'Jeera Rice': 0, 'Total Price': 0 },
    { 'Veg Biryani': 0, 'Total Price': 0 },
    { 'Masoor Dal': 0, 'Total Price': 0 },
    { 'Matki Curry': 0, 'Total Price': 0 },
    { 'Chana Masala': 0, 'Total Price': 0 }
  ];

  const [IndVegData, setIndVegData] = useState(indVegCount);

  const [isClicked1, setClick1] = useState(false);
  const [isClicked2, setClick2] = useState(false);
  const [isClicked3, setClick3] = useState(false);
  const [isClicked4, setClick4] = useState(false);
  const [isClicked5, setClick5] = useState(false);
  const [isClicked6, setClick6] = useState(false);
  const [isClicked7, setClick7] = useState(false);
  const [isClicked8, setClick8] = useState(false);
  const [isClicked9, setClick9] = useState(false);

  if(isClicked1) {
    if(IndVegData[0]['Paneer Masala'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Paneer Masala': 1, 'Total Price': 35 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[0].current.style.visibility = 'visible';
    indVegItemCount[0].current.style.visibility = 'visible';
  }

  if(isClicked2) {
    if(IndVegData[1]['Palak Paneer'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Palak Paneer': 1, 'Total Price': 35 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[1].current.style.visibility = 'visible';
    indVegItemCount[1].current.style.visibility = 'visible';
  }

  if(isClicked3) {
    if(IndVegData[2]['Chapati'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Chapati': 1, 'Total Price': 10 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[2].current.style.visibility = 'visible';
    indVegItemCount[2].current.style.visibility = 'visible';
  }

  if(isClicked4) {
    if(IndVegData[3]['Plain Rice'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Plain Rice': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[3].current.style.visibility = 'visible';
    indVegItemCount[3].current.style.visibility = 'visible';
  }

  if(isClicked5) {
    if(IndVegData[4]['Jeera Rice'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Jeera Rice': 1, 'Total Price': 35 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[4].current.style.visibility = 'visible';
    indVegItemCount[4].current.style.visibility = 'visible';
  }

  if(isClicked6) {
    if(IndVegData[5]['Veg Biryani'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Veg Biryani': 1, 'Total Price': 50 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[5].current.style.visibility = 'visible';
    indVegItemCount[5].current.style.visibility = 'visible';
  }

  if(isClicked7) {
    if(IndVegData[6]['Masoor Dal'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Masoor Dal': 1, 'Total Price': 20 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[6].current.style.visibility = 'visible';
    indVegItemCount[6].current.style.visibility = 'visible';
  }

  if(isClicked8) {
    if(IndVegData[7]['Matki Curry'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Matki Curry': 1, 'Total Price': 20 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[7].current.style.visibility = 'visible';
    indVegItemCount[7].current.style.visibility = 'visible';
  }

  if(isClicked9) {
    if(IndVegData[8]['Chana Masala'] === 0) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 8) {
            return { ...data, 'Chana Masala': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    indVegItemNumsAlert[8].current.style.visibility = 'visible';
    indVegItemCount[8].current.style.visibility = 'visible';
  }

  const handleClick = (indVegMenuItemNumber) => {

    if(indVegMenuItemNumber === 1) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Paneer Masala': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[0]['Paneer Masala'] === 0)
        setClick1(true);
      else
        setClick1(false);
    }

    else if(indVegMenuItemNumber === 2) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Palak Paneer': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[1]['Palak Paneer'] === 0)
        setClick2(true);
      else
        setClick2(false);
    }

    else if(indVegMenuItemNumber === 3) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Chapati': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[2]['Chapati'] === 0)
        setClick3(true);
      else
        setClick3(false);
    }

    else if(indVegMenuItemNumber === 4) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Plain Rice': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[3]['Plain Rice'] === 0)
        setClick4(true);
      else
        setClick4(false);
    }

    else if(indVegMenuItemNumber === 5) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Jeera Rice': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[4]['Jeera Rice'] === 0)
        setClick5(true);
      else
        setClick5(false);
    }

    else if(indVegMenuItemNumber === 6) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Veg Biryani': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[5]['Veg Biryani'] === 0)
        setClick6(true);
      else
        setClick6(false);
    }

    else if(indVegMenuItemNumber === 7) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Masoor Dal': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[6]['Masoor Dal'] === 0)
        setClick7(true);
      else
        setClick7(false);
    }

    else if(indVegMenuItemNumber === 8) {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Matki Curry': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[7]['Matki Curry'] === 0)
        setClick8(true);
      else
        setClick8(false);
    }

    else {
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 8) {
            return { ...data, 'Chana Masala': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(IndVegData[8]['Chana Masala'] === 0)
        setClick9(true);
      else
        setClick9(false);
    }

  }

  const incrementItem = (itemNumber) => {

    if(itemNumber === 1)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Paneer Masala': IndVegData[0]['Paneer Masala'] + 1, 'Total Price': (IndVegData[0]['Paneer Masala'] + 1) * 35 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 2)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Palak Paneer': IndVegData[1]['Palak Paneer'] + 1, 'Total Price': (IndVegData[1]['Palak Paneer'] + 1) * 35 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 3)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Chapati': IndVegData[2]['Chapati'] + 1, 'Total Price': (IndVegData[2]['Chapati'] + 1) * 10 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 4)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Plain Rice': IndVegData[3]['Plain Rice'] + 1, 'Total Price': (IndVegData[3]['Plain Rice'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 5)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Jeera Rice': IndVegData[4]['Jeera Rice'] + 1, 'Total Price': (IndVegData[4]['Jeera Rice'] + 1) * 35 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 6)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Veg Biryani': IndVegData[5]['Veg Biryani'] + 1, 'Total Price': (IndVegData[5]['Veg Biryani'] + 1) * 50 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 7)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Masoor Dal': IndVegData[6]['Masoor Dal'] + 1, 'Total Price': (IndVegData[6]['Masoor Dal'] + 1) * 20 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 8)
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Matki Curry': IndVegData[7]['Matki Curry'] + 1, 'Total Price': (IndVegData[7]['Matki Curry'] + 1) * 20 };
          }
          return data;
        });
        return update;
      });

    else
      setIndVegData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 8) {
            return { ...data, 'Chana Masala': IndVegData[8]['Chana Masala'] + 1, 'Total Price': (IndVegData[8]['Chana Masala'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

  }

  const decrementItem = (itemNumber) => {

    if(itemNumber === 1) {
      if(IndVegData[0]['Paneer Masala'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Paneer Masala': 1, 'Total Price': 35 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Paneer Masala': IndVegData[0]['Paneer Masala'] - 1, 'Total Price': (IndVegData[0]['Paneer Masala'] * 35) - 35 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 2) {
      if(IndVegData[1]['Palak Paneer'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Palak Paneer': 1, 'Total Price': 35 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Palak Paneer': IndVegData[1]['Palak Paneer'] - 1, 'Total Price': (IndVegData[1]['Palak Paneer'] * 35) - 35 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 3) {
      if(IndVegData[2]['Chapati'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Chapati': 1, 'Total Price': 10 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Chapati': IndVegData[2]['Chapati'] - 1, 'Total Price': (IndVegData[2]['Chapati'] * 10) - 10 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 4) {
      if(IndVegData[3]['Plain Rice'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Plain Rice': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Plain Rice': IndVegData[3]['Plain Rice'] - 1, 'Total Price': (IndVegData[3]['Plain Rice'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 5) {
      if(IndVegData[4]['Jeera Rice'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Jeera Rice': 1, 'Total Price': 35 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Jeera Rice': IndVegData[4]['Jeera Rice'] - 1, 'Total Price': (IndVegData[4]['Jeera Rice'] * 35) - 35 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 6) {
      if(IndVegData[5]['Veg Biryani'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Veg Biryani': 1, 'Total Price': 50 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Veg Biryani': IndVegData[5]['Veg Biryani'] - 1, 'Total Price': (IndVegData[5]['Veg Biryani'] * 50) - 50 }
            }
            return data;
          });
          return update;
        });
      }
    }
    else if(itemNumber === 7) {
      if(IndVegData[6]['Masoor Dal'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Masoor Dal': 1, 'Total Price': 20 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Masoor Dal': IndVegData[6]['Masoor Dal'] - 1, 'Total Price': (IndVegData[6]['Masoor Dal'] * 20) - 20 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 8) {
      if(IndVegData[7]['Matki Curry'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Matki Curry': 1, 'Total Price': 20 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Matki Curry': IndVegData[7]['Matki Curry'] - 1, 'Total Price': (IndVegData[7]['Matki Curry'] * 20) - 20 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else {
      if(IndVegData[8]['Chana Masala'] === 1) {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 8) {
              return { ...data, 'Chana Masala': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setIndVegData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 8) {
              return { ...data, 'Chana Masala': IndVegData[8]['Chana Masala'] - 1, 'Total Price': (IndVegData[8]['Chana Masala'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }

  }

  useEffect(() => {

    if(IndVegData[0]['Paneer Masala'] === 0) {
      indVegItemNumsAlert[0].current.style.visibility = 'hidden';
      indVegItemCount[0].current.style.visibility = 'hidden';
    }

    if(IndVegData[1]['Palak Paneer'] === 0) {
      indVegItemNumsAlert[1].current.style.visibility = 'hidden';
      indVegItemCount[1].current.style.visibility = 'hidden';
    }

    if(IndVegData[2]['Chapati'] === 0) {
      indVegItemNumsAlert[2].current.style.visibility = 'hidden';
      indVegItemCount[2].current.style.visibility = 'hidden';
    }

    if(IndVegData[3]['Plain Rice'] === 0) {
      indVegItemNumsAlert[3].current.style.visibility = 'hidden';
      indVegItemCount[3].current.style.visibility = 'hidden';
    }

    if(IndVegData[4]['Jeera Rice'] === 0) {
      indVegItemNumsAlert[4].current.style.visibility = 'hidden';
      indVegItemCount[4].current.style.visibility = 'hidden';
    }

    if(IndVegData[5]['Veg Biryani'] === 0) {
      indVegItemNumsAlert[5].current.style.visibility = 'hidden';
      indVegItemCount[5].current.style.visibility = 'hidden';
    }

    if(IndVegData[6]['Masoor Dal'] === 0) {
      indVegItemNumsAlert[6].current.style.visibility = 'hidden';
      indVegItemCount[6].current.style.visibility = 'hidden';
    }

    if(IndVegData[7]['Matki Curry'] === 0) {
      indVegItemNumsAlert[7].current.style.visibility = 'hidden';
      indVegItemCount[7].current.style.visibility = 'hidden';
    }

    if(IndVegData[8]['Chana Masala'] === 0) {
      indVegItemNumsAlert[8].current.style.visibility = 'hidden';
      indVegItemCount[8].current.style.visibility = 'hidden';
    }

    localStorage.setItem('IndVegData', JSON.stringify(IndVegData));

    if(isPageRefreshed.current === false) {
      setCartData(IndVegData);
    }

    isPageRefreshed.current = false;

  }, [IndVegData]);


  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${indVeggiesDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);


  return (
    <div className={indVeggiesDesign.indVeg}>

      <header className={indVeggiesDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={indVeggiesDesign.menuIcon}>
                <div className={indVeggiesDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={indVeggiesDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={indVeggiesDesign.menuIconBar}></div>
                <div className={indVeggiesDesign.menuIconBar}></div>
                <div className={indVeggiesDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={indVeggiesDesign.nav}>
          <Link to='/'><div className={indVeggiesDesign.navItem} id={indVeggiesDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={indVeggiesDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={indVeggiesDesign.navItem}>About</div></Link>
          <div className={indVeggiesDesign.navItem} id={indVeggiesDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={indVeggiesDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={indVeggiesDesign.navItem} id={indVeggiesDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={indVeggiesDesign.sidebarMenu}>
          <div className={indVeggiesDesign.sidebarMenuItems}>
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

      <section className={indVeggiesDesign.section}>
        <div className={indVeggiesDesign.trackCartAlert}>
          <div className={indVeggiesDesign.arrowSymbol}>⤵</div>
          <div className={indVeggiesDesign.trackCartAlertText}>Track Added Items in Cart Here</div>
        </div>
        <div className={indVeggiesDesign.topHeading}>HOTEL DEMO</div>
        <div className={indVeggiesDesign.indVegList}>
          <center>
            <div className={indVeggiesDesign.indVegRow1}>

              <div className={indVeggiesDesign.indVegMenuItem1}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Paneer Masala</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.35/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} name='indVegMenuItem1' onClick={() => handleClick(1)}><span>{(isClicked1 || IndVegData[0]['Paneer Masala'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[0]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[0]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(1)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[0]['Paneer Masala']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(1)}><span>-</span></div>
                </div>
              </div>

              <div className={indVeggiesDesign.indVegMenuItem2}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Palak Paneer</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.35/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(2)}><span>{(isClicked2 || IndVegData[1]['Palak Paneer'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[1]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[1]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(2)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[1]['Palak Paneer']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(2)}><span>-</span></div>
                </div>
              </div>

              <div className={indVeggiesDesign.indVegMenuItem3}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Chapati</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.10/-(Per Piece)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(3)}><span>{(isClicked3 || IndVegData[2]['Chapati'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[2]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[2]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(3)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[2]['Chapati']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(3)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={indVeggiesDesign.indVegRow2}>

              <div className={indVeggiesDesign.indVegMenuItem4}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Plain Rice</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(4)}><span>{(isClicked4 || IndVegData[3]['Plain Rice'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[3]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[3]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(4)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[3]['Plain Rice']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(4)}><span>-</span></div>
                </div>
              </div>

              <div className={indVeggiesDesign.indVegMenuItem5}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Jeera Rice</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.35/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(5)}><span>{(isClicked5 || IndVegData[4]['Jeera Rice'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[4]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[4]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(5)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[4]['Jeera Rice']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(5)}><span>-</span></div>
                </div>
              </div>

              <div className={indVeggiesDesign.indVegMenuItem6}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Veg Biryani</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.50/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(6)}><span>{(isClicked6 || IndVegData[5]['Veg Biryani'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[5]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[5]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(6)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[5]['Veg Biryani']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(6)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={indVeggiesDesign.indVegRow3}>

              <div className={indVeggiesDesign.indVegMenuItem7}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Masoor Dal</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.20/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(7)}><span>{(isClicked7 || IndVegData[6]['Masoor Dal'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[6]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[6]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(7)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[6]['Masoor Dal']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(7)}><span>-</span></div>
                </div>
              </div>

              <div className={indVeggiesDesign.indVegMenuItem8}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Matki Curry</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.20/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(8)}><span>{(isClicked8 || IndVegData[7]['Matki Curry'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[7]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[7]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(8)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[7]['Matki Curry']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(8)}><span>-</span></div>
                </div>
              </div>

              <div className={indVeggiesDesign.indVegMenuItem9}>
                <div className={indVeggiesDesign.indVegMenuItemImg}></div>
                <div className={indVeggiesDesign.indVegMenuItem}>
                  <span className={indVeggiesDesign.indVegMenuItemDish}>Chana Masala</span>
                  <span className={indVeggiesDesign.indVegMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={indVeggiesDesign.addButton} onClick={() => handleClick(9)}><span>{(isClicked9 || IndVegData[8]['Chana Masala'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={indVeggiesDesign.indVegItemNumsAlert} ref={indVegItemNumsAlert[8]}>Number of Items to Order</div>
                <div className={indVeggiesDesign.indVegItemCount} ref={indVegItemCount[8]}>
                  <div className={indVeggiesDesign.arithChar} onClick={() => incrementItem(9)}><span>+</span></div>
                  <div className={indVeggiesDesign.itemCount}><span>{IndVegData[8]['Chana Masala']}</span></div>
                  <div className={indVeggiesDesign.arithChar} onClick={() => decrementItem(9)}><span>-</span></div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>

      <footer className={indVeggiesDesign.footer}>
        <div className={indVeggiesDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={indVeggiesDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={indVeggiesDesign.footContent3}>Follow On</div>

        <div className={indVeggiesDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={indVeggiesDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={indVeggiesDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={indVeggiesDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={indVeggiesDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={indVeggiesDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default IndVeggies;