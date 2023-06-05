import Draggable from "react-draggable"
import styles from "./textWindow.module.css"
import { useState } from "react"
import {useMinimise} from "../../context/minimisedStore"

const TextWindow = (props) => {
    console.log(props)
    const [state, actions] = useMinimise()
    const [isMin, setIsMin] = useState(false)
    return (
        
            <>
            {
                state.minController[props.title].closed? (
                    null
                ) : (
                    <Draggable>
                        <div className={styles.textWindow}>
                            <div className={styles.bar} >
                                <p>{props.title}</p>
                                <img src="/images/close.png" onClick={() => props.handleClose("close")} />
                                <br/>
                                <img src="/images/8208.png" style={{marginRight: "20px"}} onClick={() => {
                                    actions.minimise(props.title)
                                    actions.addMin(props.title, "images/Notepad.png")
                                    }} />
                            </div>
                            <div className={styles.txt}>
                            <p>
Our mission is to create a community of like minded individuals that are willing to work together to achieve a common goal. We will provide the tools and resources to help you achieve your this, but determination will be needed.

                            </p>
                            </div>
                        </div>   
                    </Draggable>
                )
            }
            </>
        
        
    )
}

export default TextWindow