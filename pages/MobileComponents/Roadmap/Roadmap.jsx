import styles from "./roadmap.module.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
const Roadmap = () => {
    return (
        <div className={styles.parent}>
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
    )
}

export default Roadmap;