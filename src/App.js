
import './App.css';

function App() {
let array = [2 ,3,4,5,6,7];

    return (
        <div>
       { array.map((singleElement) =>{
            if(singleElement %2===0){
             return <div><i>{singleElement}</i></div>
            }else{
             return <div> <strong>{singleElement}</strong></div>
            }
        }
    )
    
    
    }
    </div>
    );
}``
export default App;


 
