import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/main/Header";
import Details from "./components/details/Details";
import Test from "./components/details/Test";
import Offers from "./components/details/Offers";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";

function App() {
  return(
        <div>
          <Header></Header>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>

           {/*<Details/>;*/}
           {/* <Test></Test>*/}
           {/* <Offers></Offers>*/}
        </div>

      )


}

export default App;
