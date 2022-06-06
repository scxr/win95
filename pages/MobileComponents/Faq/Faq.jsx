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
                                What is the "paint" site?

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10" >
                        
                        <p>The paint site will be a canvas where all NFTs can be placed. Each NFT minted will contain an X/Y co-ordinate in their metadata, these will be completely randomly generated upon the creation of the metadata, the rarity of the NFT will have no weight on the co-oridinates. The co-ordinates that will be used for rewards will also be randomly generated. These rewarding co-ordinates will be put into a password locked zip file that will be downloadable by anyone in the discord server. Upon all rewards being claimed the password will be sent out to the server, this is to give complete transparency to our community. Placing your NFT will not do anything in regards to your nft (in terms of burning etc., it is a completely free action to perform).</p>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                What challenges will be used?


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <p>We plan to use stegonography challenges, cryptography challenges, forensics challenges and possibly smart contract exploitation. Any smart contract exploitation challenge will be rewarded more handsomely than the other 3 (in most circumstances). It is not planned to use smart contract exploitation challenges in our 13 challenge platform as we are aware that it is an incredibly niche subset of people who would be able to complete these. All categories of challenges will be viewable prior to any set of challenges being released.</p>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                What is the supply ?


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <p>10,000</p>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                What chain is this on?



                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <p>Ethereum</p>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{fontFamily: "W95", fontSize: "24px"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                What is the cost? 



                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <p>0.0777 Eth</p>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
        </div>
        
    )
}

export default Faq;