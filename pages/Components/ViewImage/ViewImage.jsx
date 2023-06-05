import styles from "./viewImage.module.css"
import Draggable from "react-draggable"
import { useRef } from "react"
import { useMinimise } from "../../context/minimisedStore"
const ImageWindow = (props) => {
    const nodeRef = useRef(null);
    const [state, actions] = useMinimise()
    console.log(props)
    console.log(state)
    return (
        <>
        {
            state.minController[props.title].closed ? (
                null
            ) : (
                <Draggable nodeRef={nodeRef}>
                    <div className={styles.imgWindow} ref={nodeRef}>
                    <div className={styles.bar} >
                        <p>{props.title}</p>
                        <img src="/images/close.png" onClick={() => props.handleClose("close")} />
                        <img src="/images/8208.png" style={{marginRight: "20px"}} onClick={() => {
                                    actions.minimise(";)")
                                    actions.addMin(props.title, ";)")
                                    }} />
                    </div>
                    <div className={styles.content}>
                        <img src={props.img} onDrag={() => {return false}} onDragStart={() => {return false}} />
                        <h3>{";)"}</h3>
                    </div>
                    </div>

                </Draggable>
                )
        }
        
        </>
    )
}

export default ImageWindow;