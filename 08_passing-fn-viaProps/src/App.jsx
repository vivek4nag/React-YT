import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Pizza", "Burger", "pakodas", "Noodles", "Sugars", "pasta"];
  // let foodItems = [];

  const handleOnChnage = (event) => {
    console.log(event.target.value);
    TextToShow = event.target.value;
  } // ye wala function pehle FoodInput.jsx me defined tha. lekin ab idhar defined hai & isko as a prop hum pass kr rhe

  // suppose hum jo text enter kr rhe use dikhana hai innput box ke niche ==> humne texttoshow naam se variable decalre kiya.. use handleOnchange me pass krke event ki value bhi assign kr di & niche main container me p tag me text to show pass bhi kar diya but wo value render nhi hoga bczz In React, when you want to update a value and have the component re-render based on that value, you need to use the useState hook. next project me we are going to do this only
  let TextToShow = "Food Items Entered By User"

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        {/* we are passing the foodItems array as a prop to both the ErrorMessage and FoodItems components.
       we are passing the foodItems array as a prop called items to both ErrorMessage and FoodItems. */}
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChnage={handleOnChnage}></FoodInput>

        <p>{TextToShow}</p>

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
