import punjabSpecialDesign from './PunjabSpecialDesign.module.css';
import socialHandles from '../../socialHandles';
import linkedinImg from '../images/linkedin_logo.jpg';
import facebookImg from '../images/facebook_logo.jpg';
import instagramImg from '../images/instagram_logo.jpg';
import twitterImg from '../images/twitter_logo.jpg';
import {Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect, useContext} from 'react';
import {CartContext} from './CartReference';

const PunjabSpecial = () => {

  const {setCartData} = useContext(CartContext);

  const loginConfirmation = JSON.parse(localStorage.getItem('loginConfirmation'));

  const navigate = useNavigate();

  const menuIconChange = useRef(null);
  const punjabSpecialItemNumsAlert = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const punjabSpecialItemCount = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
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

  const punjabSpecialCount = JSON.parse(localStorage.getItem('PunjabSpecialData')) || [
    { 'Butter Chicken': 0, 'Total Price': 0 },
    { 'Rajma Masala': 0, 'Total Price': 0 },
    { 'Paratha': 0, 'Total Price': 0 },
    { 'Dal Makhani': 0, 'Total Price': 0 },
    { 'Malai Lassi': 0, 'Total Price': 0 },
    { 'Sarson da Saag': 0, 'Total Price': 0 },
    { 'Makki di Roti': 0, 'Total Price': 0 },
    { 'Matar Paneer': 0, 'Total Price': 0 },
    { 'Pinni': 0, 'Total Price': 0 }
  ];

  const [PunjabSpecialData, setPunjabSpecialData] = useState(punjabSpecialCount);

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
    if(PunjabSpecialData[0]['Butter Chicken'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Butter Chicken': 1, 'Total Price': 60 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[0].current.style.visibility = 'visible';
    punjabSpecialItemCount[0].current.style.visibility = 'visible';
  }

  if(isClicked2) {
    if(PunjabSpecialData[1]['Rajma Masala'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Rajma Masala': 1, 'Total Price': 30 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[1].current.style.visibility = 'visible';
    punjabSpecialItemCount[1].current.style.visibility = 'visible';
  }

  if(isClicked3) {
    if(PunjabSpecialData[2]['Paratha'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Paratha': 1, 'Total Price': 15 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[2].current.style.visibility = 'visible';
    punjabSpecialItemCount[2].current.style.visibility = 'visible';
  }

  if(isClicked4) {
    if(PunjabSpecialData[3]['Dal Makhani'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Dal Makhani': 1, 'Total Price': 30 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[3].current.style.visibility = 'visible';
    punjabSpecialItemCount[3].current.style.visibility = 'visible';
  }

  if(isClicked5) {
    if(PunjabSpecialData[4]['Malai Lassi'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Malai Lassi': 1, 'Total Price': 15 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[4].current.style.visibility = 'visible';
    punjabSpecialItemCount[4].current.style.visibility = 'visible';
  }

  if(isClicked6) {
    if(PunjabSpecialData[5]['Sarson da Saag'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Sarson da Saag': 1, 'Total Price': 25 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[5].current.style.visibility = 'visible';
    punjabSpecialItemCount[5].current.style.visibility = 'visible';
  }

  if(isClicked7) {
    if(PunjabSpecialData[6]['Makki di Roti'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Makki di Roti': 1, 'Total Price': 10 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[6].current.style.visibility = 'visible';
    punjabSpecialItemCount[6].current.style.visibility = 'visible';
  }

  if(isClicked8) {
    if(PunjabSpecialData[7]['Matar Paneer'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Matar Paneer': 1, 'Total Price': 35 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[7].current.style.visibility = 'visible';
    punjabSpecialItemCount[7].current.style.visibility = 'visible';
  }

  if(isClicked9) {
    if(PunjabSpecialData[8]['Pinni'] === 0) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 8) {
            return { ...data, 'Pinni': 1, 'Total Price': 10 };
          }
          return data;
        });
        return update;
      });
    }
    punjabSpecialItemNumsAlert[8].current.style.visibility = 'visible';
    punjabSpecialItemCount[8].current.style.visibility = 'visible';
  }

  const handleClick = (punjabSpecialMenuItemNumber) => {

    if(punjabSpecialMenuItemNumber === 1) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Butter Chicken': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[0]['Butter Chicken'] === 0)
        setClick1(true);
      else
        setClick1(false);
    }

    else if(punjabSpecialMenuItemNumber === 2) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Rajma Masala': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[1]['Rajma Masala'] === 0)
        setClick2(true);
      else
        setClick2(false);
    }

    else if(punjabSpecialMenuItemNumber === 3) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Paratha': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[2]['Paratha'] === 0)
        setClick3(true);
      else
        setClick3(false);
    }

    else if(punjabSpecialMenuItemNumber === 4) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Dal Makhani': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[3]['Dal Makhani'] === 0)
        setClick4(true);
      else
        setClick4(false);
    }

    else if(punjabSpecialMenuItemNumber === 5) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Malai Lassi': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[4]['Malai Lassi'] === 0)
        setClick5(true);
      else
        setClick5(false);
    }

    else if(punjabSpecialMenuItemNumber === 6) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Sarson da Saag': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[5]['Sarson da Saag'] === 0)
        setClick6(true);
      else
        setClick6(false);
    }

    else if(punjabSpecialMenuItemNumber === 7) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Makki di Roti': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[6]['Makki di Roti'] === 0)
        setClick7(true);
      else
        setClick7(false);
    }

    else if(punjabSpecialMenuItemNumber === 8) {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Matar Paneer': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[7]['Matar Paneer'] === 0)
        setClick8(true);
      else
        setClick8(false);
    }

    else {
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 8) {
            return { ...data, 'Pinni': 0, 'Total Price': 0 };
          }
          return data;
        });
        return update;
      });

      if(PunjabSpecialData[8]['Pinni'] === 0)
        setClick9(true);
      else
        setClick9(false);
    }

  }

  const incrementItem = (itemNumber) => {

    if(itemNumber === 1)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 0) {
            return { ...data, 'Butter Chicken': PunjabSpecialData[0]['Butter Chicken'] + 1, 'Total Price': (PunjabSpecialData[0]['Butter Chicken'] + 1) * 60 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 2)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 1) {
            return { ...data, 'Rajma Masala': PunjabSpecialData[1]['Rajma Masala'] + 1, 'Total Price': (PunjabSpecialData[1]['Rajma Masala'] + 1) * 30 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 3)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 2) {
            return { ...data, 'Paratha': PunjabSpecialData[2]['Paratha'] + 1, 'Total Price': (PunjabSpecialData[2]['Paratha'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 4)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 3) {
            return { ...data, 'Dal Makhani': PunjabSpecialData[3]['Dal Makhani'] + 1, 'Total Price': (PunjabSpecialData[3]['Dal Makhani'] + 1) * 30 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 5)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 4) {
            return { ...data, 'Malai Lassi': PunjabSpecialData[4]['Malai Lassi'] + 1, 'Total Price': (PunjabSpecialData[4]['Malai Lassi'] + 1) * 15 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 6)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 5) {
            return { ...data, 'Sarson da Saag': PunjabSpecialData[5]['Sarson da Saag'] + 1, 'Total Price': (PunjabSpecialData[5]['Sarson da Saag'] + 1) * 25 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 7)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 6) {
            return { ...data, 'Makki di Roti': PunjabSpecialData[6]['Makki di Roti'] + 1, 'Total Price': (PunjabSpecialData[6]['Makki di Roti'] + 1) * 10 };
          }
          return data;
        });
        return update;
      });

    else if(itemNumber === 8)
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 7) {
            return { ...data, 'Matar Paneer': PunjabSpecialData[7]['Matar Paneer'] + 1, 'Total Price': (PunjabSpecialData[7]['Matar Paneer'] + 1) * 35 };
          }
          return data;
        });
        return update;
      });

    else
      setPunjabSpecialData(previousState => {
        const update = previousState.map((data, index) => {
          if(index === 8) {
            return { ...data, 'Pinni': PunjabSpecialData[8]['Pinni'] + 1, 'Total Price': (PunjabSpecialData[8]['Pinni'] + 1) * 10 };
          }
          return data;
        });
        return update;
      });

  }

  const decrementItem = (itemNumber) => {

    if(itemNumber === 1) {
      if(PunjabSpecialData[0]['Butter Chicken'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Butter Chicken': 1, 'Total Price': 60 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 0) {
              return { ...data, 'Butter Chicken': PunjabSpecialData[0]['Butter Chicken'] - 1, 'Total Price': (PunjabSpecialData[0]['Butter Chicken'] * 60) - 60 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 2) {
      if(PunjabSpecialData[1]['Rajma Masala'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Rajma Masala': 1, 'Total Price': 30 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 1) {
              return { ...data, 'Rajma Masala': PunjabSpecialData[1]['Rajma Masala'] - 1, 'Total Price': (PunjabSpecialData[1]['Rajma Masala'] * 30) - 30 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 3) {
      if(PunjabSpecialData[2]['Paratha'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Paratha': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 2) {
              return { ...data, 'Paratha': PunjabSpecialData[2]['Paratha'] - 1, 'Total Price': (PunjabSpecialData[2]['Paratha'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 4) {
      if(PunjabSpecialData[3]['Dal Makhani'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Dal Makhani': 1, 'Total Price': 30 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 3) {
              return { ...data, 'Dal Makhani': PunjabSpecialData[3]['Dal Makhani'] - 1, 'Total Price': (PunjabSpecialData[3]['Dal Makhani'] * 30) - 30 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 5) {
      if(PunjabSpecialData[4]['Malai Lassi'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Malai Lassi': 1, 'Total Price': 15 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 4) {
              return { ...data, 'Malai Lassi': PunjabSpecialData[4]['Malai Lassi'] - 1, 'Total Price': (PunjabSpecialData[4]['Malai Lassi'] * 15) - 15 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 6) {
      if(PunjabSpecialData[5]['Sarson da Saag'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Sarson da Saag': 1, 'Total Price': 25 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 5) {
              return { ...data, 'Sarson da Saag': PunjabSpecialData[5]['Sarson da Saag'] - 1, 'Total Price': (PunjabSpecialData[5]['Sarson da Saag'] * 25) - 25 }
            }
            return data;
          });
          return update;
        });
      }
    }
    else if(itemNumber === 7) {
      if(PunjabSpecialData[6]['Makki di Roti'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Makki di Roti': 1, 'Total Price': 10 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 6) {
              return { ...data, 'Makki di Roti': PunjabSpecialData[6]['Makki di Roti'] - 1, 'Total Price': (PunjabSpecialData[6]['Makki di Roti'] * 10) - 10 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else if(itemNumber === 8) {
      if(PunjabSpecialData[7]['Matar Paneer'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Matar Paneer': 1, 'Total Price': 35 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 7) {
              return { ...data, 'Matar Paneer': PunjabSpecialData[7]['Matar Paneer'] - 1, 'Total Price': (PunjabSpecialData[7]['Matar Paneer'] * 35) - 35 }
            }
            return data;
          });
          return update;
        });
      }
    }

    else {
      if(PunjabSpecialData[8]['Pinni'] === 1) {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 8) {
              return { ...data, 'Pinni': 1, 'Total Price': 10 };
            }
            return data;
          });
          return update;
        });
      }
      else {
        setPunjabSpecialData(previousState => {
          const update = previousState.map((data, index) => {
            if(index === 8) {
              return { ...data, 'Pinni': PunjabSpecialData[8]['Pinni'] - 1, 'Total Price': (PunjabSpecialData[8]['Pinni'] * 10) - 10 }
            }
            return data;
          });
          return update;
        });
      }
    }

  }

  useEffect(() => {

    if(PunjabSpecialData[0]['Butter Chicken'] === 0) {
      punjabSpecialItemNumsAlert[0].current.style.visibility = 'hidden';
      punjabSpecialItemCount[0].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[1]['Rajma Masala'] === 0) {
      punjabSpecialItemNumsAlert[1].current.style.visibility = 'hidden';
      punjabSpecialItemCount[1].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[2]['Paratha'] === 0) {
      punjabSpecialItemNumsAlert[2].current.style.visibility = 'hidden';
      punjabSpecialItemCount[2].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[3]['Dal Makhani'] === 0) {
      punjabSpecialItemNumsAlert[3].current.style.visibility = 'hidden';
      punjabSpecialItemCount[3].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[4]['Malai Lassi'] === 0) {
      punjabSpecialItemNumsAlert[4].current.style.visibility = 'hidden';
      punjabSpecialItemCount[4].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[5]['Sarson da Saag'] === 0) {
      punjabSpecialItemNumsAlert[5].current.style.visibility = 'hidden';
      punjabSpecialItemCount[5].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[6]['Makki di Roti'] === 0) {
      punjabSpecialItemNumsAlert[6].current.style.visibility = 'hidden';
      punjabSpecialItemCount[6].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[7]['Matar Paneer'] === 0) {
      punjabSpecialItemNumsAlert[7].current.style.visibility = 'hidden';
      punjabSpecialItemCount[7].current.style.visibility = 'hidden';
    }

    if(PunjabSpecialData[8]['Pinni'] === 0) {
      punjabSpecialItemNumsAlert[8].current.style.visibility = 'hidden';
      punjabSpecialItemCount[8].current.style.visibility = 'hidden';
    }

    localStorage.setItem('PunjabSpecialData', JSON.stringify(PunjabSpecialData));

    if(isPageRefreshed.current === false) {
      setCartData(PunjabSpecialData);
    }

    isPageRefreshed.current = false;

  }, [PunjabSpecialData]);


  useEffect(() => {

    const clickOutside = (event) => {
      if(isOpenMenu && !event.target.closest(`.${punjabSpecialDesign.sidebarMenu}`)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', clickOutside);

    return () => {
      document.body.removeEventListener('click', clickOutside);
    };

  }, [isOpenMenu]);

  
  return (
    <div className={punjabSpecialDesign.punjabSpecial}>

      <header className={punjabSpecialDesign.header}>
        {
          isOpenMenu ?
            (
              <div className={punjabSpecialDesign.menuIcon}>
                <div className={punjabSpecialDesign.closeMenuIcon}>ⓧ</div>
              </div>
            ) :
            (
              <div className={punjabSpecialDesign.menuIcon} ref={menuIconChange} onClick={expandWindow}>
                <div className={punjabSpecialDesign.menuIconBar}></div>
                <div className={punjabSpecialDesign.menuIconBar}></div>
                <div className={punjabSpecialDesign.menuIconBar}></div>
              </div>
            )
        }
        <nav className={punjabSpecialDesign.nav}>
          <Link to='/'><div className={punjabSpecialDesign.navItem} id={punjabSpecialDesign.homepageLink}>Home</div></Link>
          <Link to='/menus'><div className={punjabSpecialDesign.navItem}>Menus</div></Link>
          <Link to='/about'><div className={punjabSpecialDesign.navItem}>About</div></Link>
          <div className={punjabSpecialDesign.navItem} id={punjabSpecialDesign.cartLink} onClick={handleCartVisibility}>My Cart</div>
          {
            (loginConfirmation.login === true) ?
              (
                <div className={punjabSpecialDesign.navItem} onClick={logoutUser}>Logout</div>
              ) :
              (
                <Link to='/login'><div className={punjabSpecialDesign.navItem} id={punjabSpecialDesign.loginLink}>Login</div></Link>
              )
          }
        </nav>
      </header>

      {isOpenMenu && (
        <div className={punjabSpecialDesign.sidebarMenu} >
          <div className={punjabSpecialDesign.sidebarMenuItems}>
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

      <section className={punjabSpecialDesign.section}>
        <div className={punjabSpecialDesign.trackCartAlert}>
          <div className={punjabSpecialDesign.arrowSymbol}>⤵</div>
          <div className={punjabSpecialDesign.trackCartAlertText}>Track Added Items in Cart Here</div>
        </div>
        <div className={punjabSpecialDesign.topHeading}>HOTEL DEMO</div>
        <div className={punjabSpecialDesign.punjabSpecialList}>
          <center>
            <div className={punjabSpecialDesign.punjabSpecialRow1}>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem1}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Butter Chicken</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.60/-(Per Plate)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} name='punjabSpecialMenuItem1' onClick={() => handleClick(1)}><span>{(isClicked1 || PunjabSpecialData[0]['Butter Chicken'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[0]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[0]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(1)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[0]['Butter Chicken']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(1)}><span>-</span></div>
                </div>
              </div>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem2}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Rajma Masala</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.30/-(Per Plate)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(2)}><span>{(isClicked2 || PunjabSpecialData[1]['Rajma Masala'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[1]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[1]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(2)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[1]['Rajma Masala']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(2)}><span>-</span></div>
                </div>
              </div>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem3}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Paratha</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.15/-(Per Piece)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(3)}><span>{(isClicked3 || PunjabSpecialData[2]['Paratha'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[2]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[2]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(3)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[2]['Paratha']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(3)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={punjabSpecialDesign.punjabSpecialRow2}>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem4}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Dal Makhani</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.30/-(Per Plate)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(4)}><span>{(isClicked4 || PunjabSpecialData[3]['Dal Makhani'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[3]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[3]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(4)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[3]['Dal Makhani']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(4)}><span>-</span></div>
                </div>
              </div>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem5}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Malai Lassi</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.15/-(Per Glass)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(5)}><span>{(isClicked5 || PunjabSpecialData[4]['Malai Lassi'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[4]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[4]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(5)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[4]['Malai Lassi']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(5)}><span>-</span></div>
                </div>
              </div>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem6}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Sarson da Saag</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.25/-(Per Plate)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(6)}><span>{(isClicked6 || PunjabSpecialData[5]['Sarson da Saag'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[5]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[5]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(6)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[5]['Sarson da Saag']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(6)}><span>-</span></div>
                </div>
              </div>
            </div>

            <div className={punjabSpecialDesign.punjabSpecialRow3}>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem7}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Makki di Roti</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.10/-(Per Piece)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(7)}><span>{(isClicked7 || PunjabSpecialData[6]['Makki di Roti'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[6]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[6]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(7)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[6]['Makki di Roti']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(7)}><span>-</span></div>
                </div>
              </div>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem8}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Matar Paneer</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.35/-(Per Plate)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(8)}><span>{(isClicked8 || PunjabSpecialData[7]['Matar Paneer'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[7]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[7]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(8)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[7]['Matar Paneer']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(8)}><span>-</span></div>
                </div>
              </div>

              <div className={punjabSpecialDesign.punjabSpecialMenuItem9}>
                <div className={punjabSpecialDesign.punjabSpecialMenuItemImg}></div>
                <div className={punjabSpecialDesign.punjabSpecialMenuItem}>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemDish}>Pinni</span>
                  <span className={punjabSpecialDesign.punjabSpecialMenuItemPrice}>Rs.10/-(Per Piece)</span>
                </div>
                <div className={punjabSpecialDesign.addButton} onClick={() => handleClick(9)}><span>{(isClicked9 || PunjabSpecialData[8]['Pinni'] > 0) ? 'REMOVE' : 'ADD'}</span></div>
                <div className={punjabSpecialDesign.punjabSpecialItemNumsAlert} ref={punjabSpecialItemNumsAlert[8]}>Number of Items to Order</div>
                <div className={punjabSpecialDesign.punjabSpecialItemCount} ref={punjabSpecialItemCount[8]}>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => incrementItem(9)}><span>+</span></div>
                  <div className={punjabSpecialDesign.itemCount}><span>{PunjabSpecialData[8]['Pinni']}</span></div>
                  <div className={punjabSpecialDesign.arithChar} onClick={() => decrementItem(9)}><span>-</span></div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>

      <footer className={punjabSpecialDesign.footer}>
        <div className={punjabSpecialDesign.footContent1}>Copyright ©2024. All Rights Reserved.</div>
        <div className={punjabSpecialDesign.footContent2}>Website Designed and Developed by Sohail Shaikh</div>
        <div className={punjabSpecialDesign.footContent3}>Follow On</div>

        <div className={punjabSpecialDesign.footImages}>
          <a href={socialHandles.linkedin} target='_blank'><img className={punjabSpecialDesign.footLogo} src={linkedinImg} alt='LinkedIn Logo' /></a>
          <a href={socialHandles.facebook} target='_blank'><img className={punjabSpecialDesign.footLogo} src={facebookImg} alt='Facebook Logo' /></a>
          <a href={socialHandles.instagram} target='_blank'><img className={punjabSpecialDesign.footLogo} src={instagramImg} alt='Instagram Logo' /></a>
          <a href={socialHandles.twitter} target='_blank'><img className={punjabSpecialDesign.footLogo} src={twitterImg} alt='Twitter Logo' /></a>
        </div>

        <Link to='/privacy-terms'><div className={punjabSpecialDesign.privacyAndTerms}>Privacy Policy · Terms & Conditions</div></Link>
      </footer>

    </div>
  );
}

export default PunjabSpecial;