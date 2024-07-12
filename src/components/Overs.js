import styled from "styled-components"
import { useAppContext } from "../context/Context"

const Arrays = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: auto;
`
const Array = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    font-size: 18px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 2px 8px;
`
const Element = styled.div`
    border: 2px solid black;
    height: 30px;
    margin: 10px 8px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5px 10px;
    background: #e7c7c7;
`
const ElementTitle = styled.div`
    margin: 15px 0px;
    text-decoration: underline;
    font-size: 18px;
    font-weight : bold;
`
const Overs =  ()=>{
    const [appState, dispatch] = useAppContext()
    
    return (
            <Arrays>
                {appState.oversArray.map((over, i)=> {
                    return <Array>
                        <ElementTitle>Over {(appState.oversArray.length)-i} -</ElementTitle>
                        {over.map((element)=> {
                            return <Element>{element}</Element>
                        })}
                    </Array>
                    
                })}
            </Arrays>
    )
}

export default Overs