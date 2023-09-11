
import './App.css'

function App() {
 
  function isRotated(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    if (a.length < 3) {
        return a === b;
    }
    let clockwise = a.slice(2) + a.slice(0, 2);
    let anticlockwise = a.slice(-2) + a.slice(0, -2);
    return b === clockwise || b === anticlockwise;
}

// Driver code
let a = "amazon";
let b = "azonam";
console.log(isRotated(a, b)); // Output: true

a = "geeksforgeeks";
b = "geeksgeeksfor";
console.log(isRotated(a, b)); // Output: false
 
}

export default App
