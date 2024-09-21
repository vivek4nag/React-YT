import PropTypes from 'prop-types';
//prop-types are mainly for improving code quality and catching issues during development. While not mandatory, they are highly recommended, especially for larger apps or teams.
import Item from "./Item";

// similarly here we receive the same items prop and map over it to pass each individual item to the Item component.
// items.map((item) => <Item key={item} foodItem={item} />): We are mapping over the items array, and for each item, you create an Item component. We pass each item in the array as a prop called foodItem to the Item component.
// The Item component is responsible for rendering each individual food item. The foodItem prop is passed from the FoodItems component.

const FoodItems = ( {items} ) => {

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key = {item} foodItem = {item}></Item>
      ))}
    </ul>
  );
};

FoodItems.propTypes = {
  items: PropTypes.array.isRequired
};

export default FoodItems;
