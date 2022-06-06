import styles from "./main.module.css"
import Particles from 'react-tsparticles';
import { Component } from "react";
import { loadFull } from "tsparticles";
import Faq from "../Faq/Faq";
import Mission from "../Mission/Mission";
import Gallery from "../Gallery/Gallery";
import Roadmap from "../Roadmap/Roadmap";
class Main extends Component {
    constructor() {
        super()
        this.state = {
            showFaq: false,
            showRm: false,
            showM: false,
            showGallery: false
        }
        this.particlesInit = this.particlesInit.bind(this)
        this.particlesLoaded = this.particlesLoaded.bind(this)
    }
     async particlesInit(main)  {
        console.log(main);

        await loadFull(main);
    
      };
     particlesLoaded (container)  {
        console.log(container);
      };
    render() {
    return (
        <>
        <Particles 
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    
                    id="tsparticles"
                    options={{
                        background: {
                          
                        },
                        fpsLimit: 60,
                        interactivity: {
                          events: {
                            onClick: {
                              enable: false,
                              mode: "push",
                            },
                            onHover: {
                              enable: true,
                              mode: "repulse",
                            },
                            resize: true,
                          },
                          modes: {
                            bubble: {
                              distance: 400,
                              duration: 5,
                              opacity: 0.8,
                              size: 20,
                            },
                            push: {
                              quantity: 2,
                            },
                            repulse: {
                              distance: 100,
                              duration: 0.4,
                            },
                          },
                        },
                        particles: {
                          color: {
                            value: "#ffffff",
                          },
                          links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                          },
                          collisions: {
                            enable: true,
                          },
                          move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1.7,
                            straight: false,
                          },
                          number: {
                            density: {
                              enable: true,
                              area: 800,
                            },
                            value: 60,
                          },
                          opacity: {
                            value: 0.5,
                          },
                          shape: {
                            type: "circle",
                          },
                          size: {
                            random: true,
                            value: 5,
                          },
                        },
                        detectRetina: true,
                      }}
                      
                      />
        <div className={styles.parent}>
            <div className={styles.titles}>
              <ul>
                  <li onClick={() => {
                    this.setState({
                      showFaq: false,
                      showM: false,
                      showGallery: false, 
                      showRm: !this.state.showRm})
                  }} style={this.state.showRm? {color: "red"}: {color: "white"}}>Roadmap</li>
                  <li onClick={() => {
                    this.setState({
                      showFaq: false,
                      showRm: false,
                      showGallery: false, showM: !this.state.showM})
                  }} style={this.state.showM? {color: "red"}: {color: "white"}}>Mission</li>
                  <li onClick={() => {
                    this.setState({
                      showRm: false,
                      showM: false,
                      showGallery: false, showFaq: !this.state.showFaq})
                  }} style={this.state.showFaq? {color: "red"}: {color: "white"}}>Faq</li>
                  <li onClick={() => {
                    this.setState({
                      showRm: false,
                      showM: false,
                      showFaq: false, showGallery: !this.state.showGallery})
                  }}style={this.state.showGallery? {color: "red"}: {color: "white"}}>Gallery</li>
              </ul>
            </div>
            {
              this.state.showFaq ? (
                <Faq />
              ) : (null)
            }
            {
              this.state.showM ? (
                <Mission />
              ) : (
                null
              )
            }
            {
              this.state.showGallery ? (
                <Gallery />
              ) : (
                null
              )
            }

            {
              this.state.showRm ? (
                <Roadmap />
              ) : (
                null
              )
            }
        </div>
        </>
    )
    }
}

export default Main;