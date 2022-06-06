import { createStore, createHook } from "react-sweet-state";

const MinStore = createStore({
    initialState: {
        minimised: [],
        minController: {
            "roadmap.txt": {closed: false},
            "mission.txt": {closed: false},
            "ComputerInfo": {closed: false},
            "image#0001": {closed: false},
            "image#0002": {closed: false},
            "faq": {closed: false}
            
        }
    },
    actions: {
        addMin: (title, img) => ({setState, getState}) => {
            let a = false
            for (let i of getState().minimised) {
                if (i.title == title) {
                    a = true
                }
            }
            if (!a) {
                setState({
                    minimised: [...getState().minimised, {title:title,img: img}]
                })
            } 
            
        },
        rmMin: (title, img) => ({setState, getState}) => {
            
            
            setState({
                minimised: [...getState().minimised.filter(function(item) {
                    return item.title != title
                })]
            })
        },
        minimise: (n) => ({setState, getState}) => {
            console.log("RRR", n)
            if (n == "roadmap.txt") {
                console.log("correct")
                setState({
                    minController: {...getState().minController, "roadmap.txt" : {closed: true}}
                })
            } else if (n == "roadmap.txto") {
                setState({
                    minController: {...getState().minController, "roadmap.txt" : {closed: false}}
                })
            }  else if (n=="mission.txt") {
                setState({
                    minController: {...getState().minController, "mission.txt" : {closed: true}}
                })
            } else if(n=="mission.txto") {
                setState({
                    minController: {...getState().minController, "mission.txt" : {closed: false}}
                })
            } else if(n=="ComputerInfo") {
                setState({
                    minController: {...getState().minController, "ComputerInfo" : {closed: true}}
                })
            } else if (n=="ComputerInfoo") {
                console.log("ok")
                setState({
                    minController: {...getState().minController, "ComputerInfo" : {closed: false}}
                })
                console.log("MINNNNN", getState().minController)
            } else if (n=="image#0001") {
                setState({
                    minController: {...getState().minController, "image#0001" : {closed: true}}
                })
            }else if (n=="image#0001o") {
                console.log("opening image")
                setState({
                    minController: {...getState().minController, "image#0001" : {closed: false}}
                })
            } else if (n=="faq") {
                setState({
                    minController: {...getState().minController, "faq" : {closed: true}}
                })
            }else if (n=="faqo") {
                console.log("opening image")
                setState({
                    minController: {...getState().minController, "faq" : {closed: false}}
                })
            }
        }
    }
})

export const useMinimise = createHook(MinStore)