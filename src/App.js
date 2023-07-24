// import './App.css';
// import Mainheading from "./components/mainheading";
import Cards from "./components/cards";
import {arr} from "./constants";
import Ilearned from "./components/ilearned";

// to render all the content of arr of obj

function fun (arr) {
  return(
    <Cards 
    key = {arr.id}
    id = {arr.id}
    name = {arr.name}
    img = {arr.img}
    />
  )
}

const App = () =>  (
    <div> 
      {/* <h2>OK this will work</h2> */}

      {/* <Mainheading /> */}

      {/* <Cards 
      id = {arr[0].id}
      name = {arr[0].name}
      /> */}

      <h1 className='my-4 text-xl font-semibold text-center font-mono'>The following are the cards from array in constants.js</h1>

      {
        arr.map(fun)
      }
    <Ilearned />
    </div>
)

export default App;
