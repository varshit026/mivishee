import AppName from "./components/AppName";
import Box1 from "./components/cont1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import "./App.css";
function App() {
  
  return (
    <center class='todo-container'>
    <AppName />
    <div className="all-rows">
    <Box1 />
    {/* <br></br> */}
    <Box2 />
    <Box3></Box3>
    </div>

  
</center>
  );
}

export default App
