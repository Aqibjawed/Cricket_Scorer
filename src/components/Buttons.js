import { useRef, useState } from "react"
import styled from "styled-components"
import { useAppContext } from "../context/Context"
import { updateBallCount, updateOverBallArray, toggleOverDisplay, updateRuns, updateWickets, updateExtras, updateOversArray, deleteLastBall, updatedeletednums, updatedeletedchar, resetRuns_Wickets, updateNoBallRuns } from "../reducer/actionTypes"

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
`

const ButtonBar = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`

const Boutton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 10px 18px;
    border-radius: 50%;
    background: #e1c7c7;
`

const Boutton2 = styled.button`
    width: 90%;
    height: 40px;
    margin: 10px auto;
    align-items: center;
    font-size: 18px;
    border-radius: 10px;
    background: #dcc6c9;
`

const OverBalls = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: auto;
    padding: 0px 5px;
    border: 2px solid black;
    border-radius: 5px;
    background: #e0d1d3;
`

const Ball = styled.div`
    height: 30px;
    margin: 10px 5px;
    border: 2px solid black;
    padding: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px; 
`

const OverTitle = styled.div`
    width: 90%;
    font-size: 18px;
    font-weight: bold;
    margin: 5px;
    text-decoration: underline;
`

const Label = styled.div`
    width: 90%;
    margin: 10px auto;
    font-size: 18px;
    text-decoration: underline;
    font-weight: bold;
`

const Over = ({overBallsArray})=>{
    return (
        <div>
            <OverTitle>This Over </OverTitle>
            <OverBalls>
                {overBallsArray.map((ballscore)=>{
                    return <Ball>{ballscore}</Ball>
                })}
            </OverBalls>
        </div>
    )
}

const Buttons = ()=>{
    const [appState, dispatch] = useAppContext()
    const Ref = useRef()

    const handleDelete = ()=>{
        if(appState.overBallsArray.length > 0){
            dispatch(deleteLastBall())
            let item = appState.overBallsArray[appState.overBallsArray.length -1]
            console.log(item)
            if(item === 'W' || item === 'WD' || item.startsWith('NB')){
                item = String(item)
                dispatch(updatedeletedchar(item))
            }
            else{
                item = Number(item)
                dispatch(updatedeletednums(item))
            }
        }
    }

    const handleOverComplete = ()=>{
        dispatch(toggleOverDisplay());
        dispatch(updateOversArray());
    }
    
    const handleInningsComplete = ()=>{
        dispatch(toggleOverDisplay());
        dispatch(updateOversArray());
        dispatch(resetRuns_Wickets());
    }

    const handleclick= (e)=>{
        if(appState.overBallsArray.length === 0){
            dispatch(toggleOverDisplay())
        }
        
        if(Ref.current.checked){
            Ref.current.checked = false
            if(e.target.value >= 0){
                dispatch(updateNoBallRuns(Number(e.target.value)))
            }
            else{
                if(appState.overBallsArray.length === 0){
                    dispatch(toggleOverDisplay())
                }
            }
            return
        }

        if(e.target.value >= 0){
            dispatch(updateBallCount())
            dispatch(updateRuns(e))
        }
        else if(e.target.value === 'W'){
            dispatch(updateBallCount())
            dispatch(updateWickets())
        }
        else if(e.target.value === 'WD'){
            dispatch(updateExtras())
        }
        dispatch(updateOverBallArray(e))

        if(appState.ballCount >= 5 && e.target.value !== 'WD') {
            handleOverComplete();
        }
        if(appState.Wickets >= 9 && e.target.value == 'W'){
            handleInningsComplete();
        }
    }

    return(
        <Div>
            {appState.overDisplay? <Over overBallsArray={appState.overBallsArray}/>: null}
            <ButtonBar>
                <Boutton value={0} onClick={handleclick}>0</Boutton>
                <Boutton value={1} onClick={handleclick}>1</Boutton>
                <Boutton value={2} onClick={handleclick}>2</Boutton>
                <Boutton value={3} onClick={handleclick}>3</Boutton>
                <Boutton value={4} onClick={handleclick}>4</Boutton>
                <Boutton value={6} onClick={handleclick}>6</Boutton>
                <Boutton value={'W'} onClick={handleclick}>W</Boutton>
                <Boutton value={'WD'} onClick={handleclick}>WD</Boutton>
            </ButtonBar>
            <Label>
                <input ref={Ref} type="checkbox"/>
                No Ball
            </Label>
            <Boutton2 value={'NB'} onClick={handleDelete}>Delete Last Ball</Boutton2>
        </Div>
    )
}

export default Buttons