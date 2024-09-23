/* eslint-disable react/prop-types */ // props validation ka error aarha tha to usko bandh krnr kr liye

// Hum yahn simply ek container bna rhe hai jiske andar saara maal render ho ske..
// so we are passing the contents inside container in App.jsx as props in the container & container is simply rendering those children 

import styles from "./Container.module.css"

const Container = (props) =>{
    return <div className={styles.container}>{props.children}</div>
}

export default Container