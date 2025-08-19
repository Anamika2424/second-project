import './App.css';

 function Calculator ()  {
let operator = "+";
let a= 10, b=5, result= 0;

function Addition (){
result = a +b;
console.log("Addition is : " , result );
}
function Substraction(){
result = a -b;
console.log("Substraction is : " , result );

}
function Multiplication (){
result = a *b;
console.log("Muliplication is : " , result );
}
function Division(){
result = a /b;
console.log("Division is : " , result );
}

  return (
   <div>
    <h2>Calculator</h2>
    <div>First number is :10</div>
    <div>Second number is :5</div>
    
  <div>  <button onClick={Addition}>Addition</button></div>
  <div>  <button onClick={Substraction}>Substraction</button></div> 
   <div> <button onClick={Multiplication}>Muliplication</button></div>
  <div> <button onClick={Division}>Division</button></div>


   </div>
  );
}

export default Calculator;
