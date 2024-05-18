import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Context, initialState, reducer } from "./reducers";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
      </div>
    </Context.Provider>
  );
}

export default App;
