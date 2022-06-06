import styles from "./computerInfo.module.css"
import Draggable from "react-draggable";
import {useMinimise} from "../../context/minimisedStore"
import { useEffect } from "react";

const Inf=(props) => {
    const [state, actions] = useMinimise()
    useEffect(() => {
        console.log("Controlled", state.minController.info)
    }, [state.minController])
    return (
        <>
        {
            state.minController.ComputerInfo.closed ? (
                null
            ) : (
                <Draggable>
                    <div className={styles.infoCont}>
                        <div className={styles.greyBar}>
                        <img src="/images/close.png" style={{height:"18px"}} onClick={() => props.handleClose("close")} />
                        <img src="/images/8208.png" onClick={() => {
                            props.handleClose("min")
                            actions.minimise("ComputerInfo")
                            actions.addMin("ComputerInfo", "images/MyComputer.png")
                        }} style={{marginRight: "30px", height: "18px"}}/>
                        </div>
                        <h1>System Corrupt</h1>
                        <div className={styles.topCont}>
                        <img src="/images/glitchskull.gif" />
                        <span>ᛚᛟᚱᛖᛗ ᛁᛈᛋᚢᛗ ᛁᛋ ᛋᛁᛗᛈᛚᛃ ᛞᚢᛗᛗᛃ ᛏᛖᚲᛋᛏ ᛟᚠ ᚦᛖ ᛈᚱᛁᚾᛏᛁᛝ ᚨᚾᛞ ᛏᛃᛈᛖᛋᛖᛏᛏᛁᛝ ᛁᚾᛞᚢᛋᛏᚱᛃ ᛚᛟᚱᛖᛗ ᛁᛈᛋᚢᛗ ᚺᚨᛋ ᛒᛖᛖᚾ ᚦᛖ ᛁᚾᛞᚢᛋᛏᚱᛃᛋ ᛋᛏᚨᚾᛞᚨᚱᛞ ᛞᚢᛗᛗᛃ ᛏᛖᚲᛋᛏ ᛖᚹᛖᚱ ᛋᛁᚾᚲᛖ ᚦᛖ ᛋ ᚹᚺᛖᚾ ᚨᚾ ᚢᚾᚲᚾᛟᚹᚾ ᛈᚱᛁᚾᛏᛖᚱ ᛏᛟᛟᚲ ᚨ ᚷᚨᛚᛚᛖᛃ ᛟᚠ ᛏᛃᛈᛖ ᚨᚾᛞ ᛋᚲᚱᚨᛗᛒᛚᛖᛞ ᛁᛏ ᛏᛟ ᛗᚨᚲᛖ ᚨ ᛏᛃᛈᛖ ᛋᛈᛖᚲᛁᛗᛖᚾ ᛒᛟᛟᚲ ᛁᛏ ᚺᚨᛋ ᛋᚢᚱᚹᛁᚹᛖᛞ ᚾᛟᛏ ᛟᚾᛚᛃ ᚠᛁᚹᛖ ᚲᛖᚾᛏᚢᚱᛁᛖᛋ ᛒᚢᛏ ᚨᛚᛋᛟ ᚦᛖ ᛚᛖᚨᛈ ᛁᚾᛏᛟ ᛖᛚᛖᚲᛏᚱᛟᚾᛁᚲ ᛏᛃᛈᛖᛋᛖᛏᛏᛁᛝ ᚱᛖᛗᚨᛁᚾᛁᛝ ᛖᛋᛋᛖᚾᛏᛁᚨᛚᛚᛃ ᚢᚾᚲᚺᚨᛝᛖᛞ ᛁᛏ ᚹᚨᛋ ᛈᛟᛈᚢᛚᚨᚱᛁᛋᛖᛞ ᛁᚾ ᚦᛖ ᛋ ᚹᛁᚦ ᚦᛖ ᚱᛖᛚᛖᚨᛋᛖ ᛟᚠ ᛚᛖᛏᚱᚨᛋᛖᛏ ᛋᚺᛖᛖᛏᛋ ᚲᛟᚾᛏᚨᛁᚾᛁᛝ ᛚᛟᚱᛖᛗ ᛁᛈᛋᚢᛗ ᛈᚨᛋᛋᚨᚷᛖᛋ ᛋᚢᛒᛗᛁᛏ ᛏ ᚺ ᛁᛋ ᛗᛖᛋᛋᚨᚷᛖ ᚠᛟᚱ ᚠᚱᛖᛖ ᚹᛚ ᛟ ᚾ ᛚᛃ ᛏ ᚺ ᚱ ᛖ ᛖ ᛋ ᛈ ᛟ ᛏ ᛋ</span>
                        </div>
                        <hr className={styles.vrhr} />
                        <p>ỳ̸̢̖͖̰̺͉͉̍̔͐̽͌̐͆͌̔͆̕͝o̸̼͈̱̖̤͎̎͜ͅu̸͚͈͛̅̐̒̀̕ ̸̨͓̩͍̗̭̅̾s̸̮͖͍͛h̷̛̠͙͇̣̲̫̼̳̤̭͑̎̓̌̀̊̇̑͗́́̈͘ô̵̹͎̟͉͚͇̪͙͓̭̲̥͂̌͌͝ư̸͉͆̓͑̐͋̑̈̉͝͝l̷̢̝͎̤̥̲̞̬̞̫̩̄̇̅̊̐̔̃̾͌͗̋̅͠ḓ̷̢͖͙̙̟̰͌͆̿͗͋̎̃͆̋̋͝͠ ̷͈̆͂̽̈́̓̂̏͘͠͝n̴̫̎̌̊͐̄̋̑ó̸̬̮̪̲̖̤͖̩̯̦͚͍͒͂͌̄̆̍̆̕̕͝͝t̴̡͓̘̩̐̓̅́̽̚͝͝͠ ̷̳̓͋̏͒̔̀̂b̴̡̳̣̦̰̱͓̗͊͒̏͒̀̈́̓͊̿͐͛̊̚͜ͅë̵͔̘́̊ ̴̨̫̥̳̪͔̭͙̼͉͈̝̳̖̱̇̓̀͋̋͆͊̓̈́̚͘͘h̶̤͈͚̺̹̓̆̂͐͑́͒e̷̡͚͖̘̪͈̝̻̣̣̠̟͒͑̈́͛̍͌̓̀̿̾̈́͘͝͠͝r̴̢͔̪̪̘͙̫̪͎̟̗̊͗͠ͅe̴̘̟̥̘͐͋̓̃̋̀͘,̷̧̛͚̩͈̼̤̱̯̜̫̫̝̮̳̅͐̕ ̵̥̙͎̠͕̩͕̤̝̼̔̂̊̇̽̌̊̅̆̔͠l̶̘̺̱͖͚͔̗̫͙̲̅ę̸̛̛̜̜͚̙͖͋̈́̂̑̐̀̐̊͌͌̃̕͠ͅa̵̗͖̠̙͍̓̂̆͌̉̈́̒̕͜v̷̬͕̈́̈͝e̴̡͖̲̺̦̼͇̬̣͎͎̙͋̈́͆̓̆̒̿͆̇̋͘͝ ̶̛̥͕̠̔̀̅̆͐̔̈́̓̓͑̄̔̚ͅw̸̧̆̽͐̄͛̆̄̿̕h̵̘͖͉̀̈́̐̇̿͐̃͝i̶̢̛̦͇̦͋̽̆̅̌̽͐̾̔̃͒͜͝ͅl̴̮̾̋̇̈̇̾̀͝ȩ̵̭̫̥͍̯̓ ̸̧̥̫̜̼͚̩̬̤̝̻͖̲͚͑̐͛̐̈̈́̔̚͠y̶̘̻̪̪̘̝̭͓͍̺̩̠̠̼̆̀̐̎̈́̋͠õ̸̢̠̦̥̺͈̘̭̤͇̠͚̪͜͜͝ȕ̸̫̰͈̜͕̮͖̯̇̅̕͜ ̵̛̾̐̀̃͋̔͋̑̈̅͘͝ͅc̶̗̫̖̖͔͚͈̣̐̎̀̔͆̔͝a̷̘̙͍͈̲̪̰̭͑̈́̔͋͛͋̾̓̉̒̓͜n̸͍̦̦̩̮̂̊̇͝ͅ ̵͚͈͖̞͐̓̆̌͒͐̆͋̌̓̍̓̐</p>
                    </div>
                </Draggable>
            )
        }
        
        </>
    )
}

export default Inf;