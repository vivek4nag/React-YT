import PropTypes from 'prop-types';
// prop-types are mainly for improving code quality and catching issues during development. While not mandatory, they are highly recommended, especially for larger apps or teams.

import css from "./Item.module.css"
// the above import stuff is called css module. used basically in larger project so as to avoid conflict in naming of same clss for different elements
// we create a css file of same name as the targeted jsx file... bss naam ke beech me module add kr dete hai. then usko iport krte hai &  we use it like this ==> className={`${css['custom-item']} list-group-item`} . module compiler automatically ek random name daal deta class name pe so that match na ho 

const Item = ({foodItem}) => {
  // let {foodItem} = props
  // console.log(styles);
  
    return(
        <li className={`${css['custom-item']} list-group-item`} >
          <span className = {css['custom-item']}> {foodItem} </span>
        </li>

    )
}

// PropTypes.string.isRequired: Since foodItem is a string (like "Pizza", "Burger", etc.), you should use PropTypes.string to validate it. The .isRequired means the foodItem must be passed and cannot be undefined.
Item.propTypes = {
  foodItem: PropTypes.string.isRequired, // `foodItem` is a string, not an array
};


export default Item