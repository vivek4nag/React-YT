import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Pizza", "Burger", "pakodas", "Noodles", "Sugars", "pasta"];
  // let foodItems = [];

  // if(foodItems.length ===0){
  //   return <h3>I am still hungry</h3>
  // }
  // instead of above if else. we are using ternary operator
  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null


  // another way is using truthy falsy wala stuff falsy value like null will simply be ignored by JS hence we will write the condition like this

  return (
    // either we use <React.Fragment></React.Fragment> to wrap elements or we can simply wrap in <></> i.e. khaali
    <React.Fragment>
      <h1>Healthy food</h1>

      {/* {emptyMessage} */} {/* this is ternary operator wala part */}
      
      {/* below is truthy falsy stuff.. we are using and operator bcz agr length me kuch bhi hai to right side wala h3 ko ignore maar dega & length 0 hai to right me move krega & wo h3 wala render ho jayga */}
      {foodItems.length === 0 && <h3>I am Still Hungry</h3>}

      <ul className="list-group">
        {/* suppose we want to generate the below list items using loops. So we can use map method */}
        {/* <li className="list-group-item">Burger</li>
        <li className="list-group-item">Pakodas</li>
        <li className="list-group-item">Noodles</li>
        <li className="list-group-item">sugars</li>
        <li className="list-group-item">Pizza</li> */}

        
        {foodItems.map((item, index) => (
          <li className="list-group-item" key={index}>{item}</li>
        ))}
        {/* the map() method in React requires a key prop to uniquely identify each element in the list. When rendering lists in React, the key prop helps React efficiently update and manage the DOM by tracking which elements have changed, been added, or removed. you need to provide a unique key prop for each <li> element inside the map() method. A common approach is to use the index of the array item as the key, though it's preferable to use a unique identifier if available. */}
      </ul>
    </React.Fragment>
  );
}

export default App;
