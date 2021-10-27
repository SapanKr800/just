import ReactPlayer from "react-player";
import './App.css';
import Popup from 'reactjs-popup';
function App() {
  return (
    <div className="App">
   
   <h1 >Hi </h1>



    <Popup trigger={<button className="button"> Open Modal </button>} modal>
    <div> 
      
    <ReactPlayer
              url="https://www.youtube.com/watch?v=GQ0PzxV2p9k"
              playing={true}
            />
       </div>
  </Popup>
    </div>
  );
}


  

export default App;
