import './App.css';
import Styled from 'styled-components'
import Scorecard from './components/Scorecard';
import Buttons from './components/Buttons';
import AppContext from './context/Context';
import { useReducer } from 'react';
import { reducer } from './reducer/Reducer';
import { initState } from './reducer/InitialState';
import Overs from './components/Overs';

const Header = Styled.div`
  width: 95%;
  font-size: 35px;
  font-weight: bold;
  text-decoration: underline;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
`

function App() {
    const [appSate, dispatch] = useReducer(reducer, initState)
  return (
    <AppContext.Provider value={[appSate, dispatch]}>
      <div className="App">
        <Header>Cricket Scorer</Header>
        <Scorecard />
        <Buttons />
        <Overs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
