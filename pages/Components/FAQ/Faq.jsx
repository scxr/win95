import styles from "./faq.module.css"
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

const Faq = (props) => {
    const [state, actions] = useMinimise()
    return (
        <>
        {
            state.minController.faq.closed? (
                null
            ) : (
            <Draggable>
            <div className={styles.parent}>
                <div className={styles.bar}>
                <p>{props.title}</p>
                                <img src="/images/close.png" onClick={() => props.handleClose("close")} />
                                <br/>
                                <img src="/images/8208.png" style={{marginRight: "20px"}} onClick={() => {
                                    actions.minimise("faq")
                                    actions.addMin("faq", "/images/help.jpg")
                                    }} />
                </div>
                <div className={styles.container}>
                <h1 style={{textAlign: "center", fontFamily: "W95"}}>FAQ</h1>

                <Accordion defaultIndex={[]} allowMultiple={true} className={styles.accordion}>
                    <AccordionItem>
                        <h2 style={{fontFamily: "W95"}}>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                What is NONE?

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        
                        <p>We're a collective of strong minded individuals that aim to achieve a single goal; being the best in our field.</p>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                How many spots are there?


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <p>Wave 1 of initiates will have a maximum of 50 users. We have plans to expand in the future.</p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                How much do you charge for entry into NONE?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <p>$0 USD, 0 BTC, 0 ETH. We just ask for your proactivness in helping achieve our ultimate goal.</p>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                How will I know I made it in?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <p>We will contact you...</p>
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

export default Faq;