export const toggleOverDisplay = ()=>{
    return {
        type: "TOGGLE_OVER_DISPLAY",
    }
}

export const updateOverBallArray = (e)=>{
    return {
        type: "UPDATE_OVER_BALL_ARRAY",
        payload: e.target.value,
    }
}

export const updateBallCount = ()=>{
    return {
        type: "UPDATE_BALL_COUNT",
    }
}

export const updateRuns = (e)=>{
    return {
        type: "UPDATE_RUNS",
        payload: e.target.value,
    }
}

export const updateWickets = ()=>{
    return {
        type: "UPDATE_WICKETS",
    }
}

export const updateExtras = ()=>{
    return {
        type: "UPDATE_EXTRAS",
    }
}

export const updateOversArray = ()=>{
    return {
        type: "UPDATE_OVERS_ARRAY"
    }
}

export const deleteLastBall = ()=>{
    return {
        type: "DELETE_LAST_BALL"
    }
}

export const updatedeletednums = (item)=>{
    return {
        type: "UPDATE_DELETED_NUMS",
        payload: item,
    }
}

export const updatedeletedchar = (item)=>{
    return {
        type: "UPDATE_DELETED_CHAR",
        payload: item,
    }
}

export const resetRuns_Wickets = (item)=>{
    return {
        type: "RESET_RUNS_WICKETS",
    }
}

export const updateNoBallRuns = (Run)=>{
    return {
        type: "UPDATE_NO_BALL_RUNS",
        payload: Run
    }
}