import { initState } from "./InitialState"

export const reducer = (state, action)=>{
    switch(action.type){
        case "TOGGLE_OVER_DISPLAY": {
            return {
                ...state,
                overDisplay: !state.overDisplay,
            }
        }
        case "UPDATE_OVER_BALL_ARRAY": {
            const newArray = state.overBallsArray
            newArray.push(action.payload)
            return {
                ...state,
                overBallsArray: newArray,
            }
        }
        case "UPDATE_BALL_COUNT": {
            return {
                ...state,
                ballCount: state.ballCount +1,
            }
        }
        case "UPDATE_RUNS": {
            const prevRuns = Number(state.Runs)
            const currRuns = Number(action.payload)
            return {
                ...state,
                Runs: prevRuns + currRuns,
            }
        }
        case "UPDATE_WICKETS": {
            return {
                ...state,
                Wickets: state.Wickets +1,
            }
        }
        case "UPDATE_EXTRAS": {
            const prevRuns = Number(state.Runs)
            return {
                ...state,
                Runs: prevRuns + 1,
            }
        }
        case "RESET_OVER_BALL_ARRAY": {
            return {
                ...state,
                overBallsArray: [],
                ballCount: 0,
            }
        }
        case "UPDATE_OVERS_ARRAY": {
            const newArray = state.overBallsArray
            const newArrays = []

            newArrays.push(newArray)
            state.oversArray.forEach(element => {
                newArrays.push(element)
            });
            return {
                ...state,
                oversArray: newArrays,
                overBallsArray: [],
                ballCount: 0,
            }
        }
        case "DELETE_LAST_BALL": {
            let newArray = state.overBallsArray
            if(newArray.length < 1){
                return state
            }
            newArray = newArray.slice(0, newArray.length-1)
            let display = state.overDisplay
            if(newArray.length === 0){
                display = false
            }
            return {
                ...state,
                overDisplay: display,
                overBallsArray: newArray,
            }
        }
        case "UPDATE_DELETED_NUMS": {
            return {
                ...state,
                Runs: state.Runs -action.payload,
                ballCount: state.ballCount -1,
            }
        }
        case "UPDATE_DELETED_CHAR": {
            console.log(action.payload)
            if(action.payload === 'W') {
                return {
                    ...state,
                    Wickets: state.Wickets -1,
                    ballCount: state.ballCount -1,
                }
            }
            else if(action.payload.startsWith('NB')) {
                let run = action.payload[action.payload.length-1]
                run = Number(run)
                run = run + 1
                return {
                    ...state,
                    Runs: state.Runs - run,
                }
            }
            else {
                return {
                    ...state,
                    Runs: state.Runs -1,
                }
            }
        }
        case "RESET_RUNS_WICKETS": {
            return {
                ...state,
                Runs: 0,
                Wickets: 0,
            }
        }
        case "UPDATE_NO_BALL_RUNS": {
            let runs= action.payload +1
            let prevRuns= state.Runs
            let overElement = `NB+${action.payload}`
            let newOverBallsArray = state.overBallsArray
            newOverBallsArray.push(overElement)
            return {
                ...state,
                Runs: prevRuns+runs,
                overBallsArray: newOverBallsArray
            }
        }
        default:
            return state;
    }
}