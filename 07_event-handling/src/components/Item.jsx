import PropTypes from 'prop-types';
// prop-types are mainly for improving code quality and catching issues during development. While not mandatory, they are highly recommended, especially for larger apps or teams.

import css from "./Item.module.css"
// the above import stuff is called css module. used basically in larger project so as to avoid conflict in naming of same clss for different elements
// we create a css file of same name as the targeted jsx file... bss naam ke beech me module add kr dete hai. then usko import krte hai &  we use it like this ==> className={`${css['custom-item']} list-group-item`} . module compiler automatically ek random name daal deta class name pe so that match na ho 

const Item = ({foodItem}) => {
  // let {foodItem} = props
  // console.log(styles);

  // just for simplicity we are writting the buy button click wla event listner here & then passing the function inside the button onClick function
    const handleBuyButtonClicked = (event) => {
      console.log(event);
      
      console.log(`${foodItem} being bought`)
    }
  
    return(
      // hum is list pr click ka event listner lgayenge
        <li className={`${css['custom-item']} list-group-item`} >
          <span className = {css['custom-item']}> {foodItem} </span>

          <button 
            className={`${css.button} btn btn-info`}
            onClick={(event) => handleBuyButtonClicked(event)} // using onClick event listner & then writting JS code inside curly braces.
            // also jab bhi aisa koi eventlistner pass hota hai event bhi pass hota hai. to event object ko bhi pass krna hai & usko print krke dekh skte hai. This event will have details of the event happened.
          
          >Buy</button>
          {/* button me pehla wala class humne define kiya hai to usko varaible me rkhe hai & dusra wala bootstrap ka maal hai jo ki bootstrap ki page se uthaya hai  */}
        </li>

    )
}

// PropTypes.string.isRequired: Since foodItem is a string (like "Pizza", "Burger", etc.), you should use PropTypes.string to validate it. The .isRequired means the foodItem must be passed and cannot be undefined.
Item.propTypes = {
  foodItem: PropTypes.string.isRequired, // `foodItem` is a string, not an array
};


export default Item