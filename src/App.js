import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/main/Header";
import Details from "./components/details/Details";
import Test from "./components/details/Test";
import Offers from "./components/details/Offers";

function App() {
  return(
        <div>
          <Header></Header>
            {/*<Home></Home>*/}
           {/*<Details/>;*/}
            <Test></Test>
           {/* <Offers></Offers>*/}
        </div>

      )


}

export default App;
