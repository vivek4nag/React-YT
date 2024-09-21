
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"

function App() {
  let foodItems = ["Pizza", "Burger", "pakodas", "Noodles", "Sugars", "pasta"];
  // let foodItems = [];

  return (
    <>
      <h1 className="food-heading">Healthy food</h1>
      {/* we are passing the foodItems array as a prop to both the ErrorMessage and FoodItems components.
       we are passing the foodItems array as a prop called items to both ErrorMessage and FoodItems. */}
      <ErrorMessage items = {foodItems}></ErrorMessage>

      <FoodItems items = {foodItems}></FoodItems>
    </>
  );
}

export default App;
