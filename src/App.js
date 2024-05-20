import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Context, initialState, reducer } from "./reducers";
import Main from "./components/Main/Main";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Context.Provider>
  );
}

export default App;
