import { useState } from "react";
import useMightyMouse from "react-hook-mighty-mouse";
import styles from "./eyes.module.css"

export default function Eyes() {
    const {
        positionRelative: { angle: angleLeftEye }
      } = useMightyMouse(true, "left-eye", { x: 45, y: 45 });
      const {
        positionRelative: { angle: angleRightEye }
      } = useMightyMouse(true, "right-eye", { x: 45, y: 45 });
    
      const redEye =
        (angleLeftEye < 30 || (angleLeftEye < 360 && angleLeftEye > 330)) &&
        (angleRightEye > 150 && angleRightEye < 210);
      const styleLeftEye = {
        transform: `rotate(${-angleLeftEye}deg)`,
        backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
        transition: `all 0s ease`
      };
      const styleRightEye = {
        transform: `rotate(${-angleRightEye}deg)`,
        backgroundColor: redEye ? "#f8c6c6" : "#f3efef",
        transition: `all 0s ease`
      };
      return (
        <div className={styles.eyes-follow-tired}>
          <div className={styles.container}>
            <div className={styles.eyelid} />
            <div className={styles.eyes}>
              <div id="left-eye" className={styles.eye} style={styleLeftEye}>
                <div className={styles.pupil} />
              </div>
              <div id="right-eye" className="eye" style={styleRightEye}>
                <div className={styles.pupil} />
              </div>
            </div>
          </div>
          
        </div>
      );
}