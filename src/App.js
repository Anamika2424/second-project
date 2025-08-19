import './App.css';

function App(){
let array= [2 , 4, 5, 6 , 7];

  return (
<div>{
    array.map((singleElement ) =>{
      return  singleElement*2
    }
  )
}
   </div> 
  );
  
}
export default App;