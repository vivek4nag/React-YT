import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";

function App() {
  let foodItems = ["Pizza", "Burger", "pakodas", "Noodles", "Sugars", "pasta"];
  // let foodItems = [];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        {/* we are passing the foodItems array as a prop to both the ErrorMessage and FoodItems components.
       we are passing the foodItems array as a prop called items to both ErrorMessage and FoodItems. */}
        <ErrorMessage items={foodItems}></ErrorMessage>

        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above foods are extremely good for your health</p>
      </Container>
      {/* note that we have used two container & container ka css ek alag module me hai so dono container pe same styling apply ho jaayga . SO container does not care ki uske andar kkya hai. humne ek generic container bna liya hai & ab usko hum kisi ko bhi wrap krne me use kr skte */}
    </>
  );
}

export default App;
