import Draggable from "react-draggable"
import styles from "./warning.module.css"

const Warning = (props) => {
    console.log(props)
    return (
        <Draggable>
            
        <div className={styles.textWindow}>
            <div className={styles.bar} >
                <p>{props.title}</p>
                <img src="/images/close.png" onClick={() => props.handleClose("close")} />
            </div>
            <div className={styles.warningCont}>
            <img src="/images/warning.png" />
            <span><p>{props.warningCont}</p></span>
            <br />
            
            </div>
            <div className={styles.choice}>
            <button onClick={() => props.redirector("change")}>Go to paint</button>
            <button onClick={() => props.redirector("stay")}>Stay</button>
            </div>
           
            
        </div>   
        </Draggable>
    )
}

export default Warning