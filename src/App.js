
import './App.css';

function App() {
let array = [2 ,3,4,5,6,7];

    return (
        <div>
       { array.map((singleElement) =>{
            return <div>{singleElement*2}</div>
        }
    )
    
    
    }
    </div>
    );
}
export default App;


 
