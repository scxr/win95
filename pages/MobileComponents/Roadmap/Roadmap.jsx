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
                                2022 Q2/Q3

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <ul>
                            <li>Build a strong community, and collab with other projects bringing something new to the space.</li>
                            <br />
                            <li>Release 10,000 NFTs on the Ethereum blockchain</li>
                            <br />
                            <li>Upon minting and reveal release the paint site, reachable through the paint icon. This will allow users to place their NFTs at a pre-determined location on a canvas. Certain spots on the canvas will grant a monetary reward instantly claimable. See FAQ section for more information.</li>
                            <br />
                            <li>Release staking for the NFTs to passively earn our PUZZLE coin. Every week a challenge will be released, winners of the challenge will have their staking rewards increased by a certain % depending on how hard the challenge is. (See FAQ for types of challenges we will be using)</li>
                            <br />
                            <li>Release a site where 13 challenges will be released every month (timespan is not solidified) where users can purchase a ticket for a small price, nft owners will get 50% off of all tickets, all entries will go into a prize pot, the house will take a small commission (approx. 5-7%) and whoever completes all 13 challenges will receive the entire prize pool.</li>

                        </ul>
                        </AccordionPanel>
                    </AccordionItem>
                    
                    <AccordionItem>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{ fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                2022 Q4

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <ul>
                            <li>Expand our team to enable us to bring out more revolutionary products for the holders which will increase the value of their holdings.</li>
                            <br />
                            <li>Host an in person event (Europe) where users will be able to compete over the challenges, with keynote speeches about NFTs and solidity development/security. Pizza will be provided ;) </li>
                            <br />
                            <li>Host an in person event (Americas) similar to the EU event.</li>
                            
                        </ul>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem style={{color: "white"}}>
                        <h2>
                            <AccordionButton className={styles.accordionButton} _expanded={{ color: "rgb(0,250,0)" }}>
                                <Box style={{ fontFamily: "W95"}} flex="1" textAlign="left" opacity="100%" _focus={{ boxShadow: "none", marginLeft: "200px !important"}}>
                                2023 Q1

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} padding="10">
                        <ul>
                            <li>Become the puzzle central for blockchain, to achieve this we will release free courses for cryptography techniques, common stegonography methodology and things of the sort.</li>
                            <br />
                            <li>TBA</li>
                            
                            
                        </ul>
                        </AccordionPanel>
                    </AccordionItem>
                    
                </Accordion>
        </div>
    )
}

export default Roadmap;