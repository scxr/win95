import styles from "./roadmap.module.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import Draggable from "react-draggable"
import {useMinimise} from "../../context/minimisedStore"

const Roadmap = (props) => {
    const [state, actions] = useMinimise()
    return (
        <>
        {
            state.minController[props.title].closed? (
                null
            ) : (
            <Draggable>
            <div className={styles.parent}>
                <div className={styles.bar}>
                <p>{props.title}</p>
                                <img src="/images/close.png" onClick={() => props.handleClose("close")} />
                                <br/>
                                <img src="/images/8208.png" style={{marginRight: "20px", backgroundColor: "#000000 !important", height: "15px"}} onClick={() => {
                                    actions.minimise(props.title)
                                    actions.addMin(props.title, "images/Notepad.png")
                                    }} />
                </div>
                <div className={styles.container}>
                <h1 style={{textAlign: "center", fontFamily: "W95"}}>Roadmap</h1>

                <Accordion defaultIndex={[]} allowMultiple={true} className={styles.accordion}>
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{ fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                Phase 1

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <ul>
                            <li>Open applications.</li>
                            <br />
                            <li>Accept a maximum of 50 uers to our wave 1 initiates pool.</li>
                            <br />
                            <li>Weed out the useless initiates while replacing them with new members through our rolling application process.</li>
                            <br />
                            <li>Create and market our insane value.</li>
                            

                        </ul>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{ fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                Phase 2

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <ul>
                            <li>???</li>
                            <br />
                            <li>??? </li>
                            <br />
                            <li>???</li>
                            
                        </ul>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{ fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                Phase 3

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <ul>
                            <li>???</li>
                            <br />
                            <li>??? </li>
                            <br />
                            <li>???</li>
                            
                            
                        </ul>
                        </AccordionPanel>
                    </AccordionItem>
                    
                </Accordion>
                
            </div>
            </div>
            </Draggable>
            
            )
        }
            
        </>
    )
}

export default Roadmap;