import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TodoProvider from "./context/TodoProvider";
import Home from "./pages/Home";
import Todos from "./pages/Todos";

function App() {


  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={
          <TodoProvider>
            <Todos />
          </TodoProvider>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;
