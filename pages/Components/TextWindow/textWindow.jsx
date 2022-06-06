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
Who doesnt love a puzzle? And who doesnt love a competition? We are here to bring both to the web3 space. We plan to be a place where people can have fun, make money and learn all at the same time. We don’t want to be just another project who promises all these things just in a bid to get peoples money, this is something we are truely passionate about and will be working hard to make sure the project can realise its full potential. We look forward to welcoming you along this journey

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