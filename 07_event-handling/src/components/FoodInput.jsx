import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const handleOnChnage = (event) => {
    console.log(event.target.value);
    // yahn we are using onChange evet listner & usme console me jaake is event ko dekhe to usme target ke andar jo value hai.. that is the value being types inside the input box
  };

  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.foodInput}
      onChange={handleOnChnage}
    />
  );
};

export default FoodInput;
