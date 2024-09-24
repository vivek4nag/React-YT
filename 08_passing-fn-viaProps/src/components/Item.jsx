import PropTypes from 'prop-types';

import css from "./Item.module.css"


// eslint-disable-next-line react/prop-types
const Item = ({ foodItem, handleBuyButton}) => {
    
  // pehle hum buyButtonclick wala ek function isi componen ke andar bna rhe the. lekin ab wo function directly hum as a rpop recieve kr rhe & nihe button click hone pr wo function ko simply  call laga rhe hai 
  
    return(
      // hum is list pr click ka event listner lgayenge
        <li className={`${css['custom-item']} list-group-item`} >
          <span className = {css['custom-item']}> {foodItem} </span>

          <button 
            className={`${css.button} btn btn-info`}
            onClick={handleBuyButton} // ye handle buy button parent component se as props pass hua hai & we will simpy emit it 
          
          >Buy</button>
        </li>

    )
}

// PropTypes.string.isRequired: Since foodItem is a string (like "Pizza", "Burger", etc.), you should use PropTypes.string to validate it. The .isRequired means the foodItem must be passed and cannot be undefined.
Item.propTypes = {
  foodItem: PropTypes.string.isRequired, // `foodItem` is a string, not an array
};


export default Item