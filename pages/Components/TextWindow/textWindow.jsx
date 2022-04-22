import Draggable from "react-draggable"
import styles from "./textWindow.module.css"

const TextWindow = (props) => {
    console.log(props)
    return (
        <Draggable>
            
        <div className={styles.textWindow}>
            <div className={styles.bar} >
                <p>{props.title}</p>
                <img src="/images/close.png" onClick={() => props.handleClose("close")} />
            </div>
            <div className={styles.txt}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </p>
            </div>
        </div>   
        </Draggable>
    )
}

export default TextWindow