/* eslint-disable react/jsx-key */
// upar wale line se basically hum key ko ignore kr rhe just for this file
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  // making list of buttons needed
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button className={styles.button}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
