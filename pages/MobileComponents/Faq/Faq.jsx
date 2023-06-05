import styles from "./faq.module.css"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

const Faq = () => {
    return (
        <div className={styles.parent}>
            <h1 style={{color: "white"}}>Faq</h1>

            <Accordion defaultIndex={[]} allowMultiple={true} className={styles.accordion}>
                    <AccordionItem>
                        <h2 style={{fontFamily: "W95"}}>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                 What is NONE?

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10" >
                        
                        <p>We're a collective of strong minded individuals that aim to achieve a single goal; being the best in our field.</p>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
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
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
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
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
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
        
    )
}

export default Faq;