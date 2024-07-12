import { useState } from "react"
import styled from "styled-components"
import { useAppContext } from "../context/Context"

const Score = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    border: 2px solid grey;
    margin: 20px;
    border-radius: 10px;
`

const Runs = styled.div`
    width: 32%;
    margin: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #699969;
    padding: 10px;
    border-radius: 10px;

    & span{
        font-size: 25px;
        font-weight: bold;
        padding: 0px 10px;
        color: #699969;
    }
`

const Wickets = styled.div`
    width: 32%;
    margin: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #da5e5e;
    padding: 10px;
    border-radius: 10px;
    
    & span{
        color: #da5e5e;
        font-size: 25px;
        font-weight: bold;
        padding: 0px 10px;
    }
`

const Scorecard = ()=>{
    const [appState, dispatch] = useAppContext()
    
    return (
        <Score>
            <Runs>Runs <span>{appState.Runs}</span></Runs>
            <Wickets>Wickets <span>{appState.Wickets}</span></Wickets>
        </Score>
    )
}

export default Scorecard