
import './App.css'

function App() {

  function handlejsShop() {
    alert('All shop items')
  }

  const passNumk = (num) => {
    alert(num + 5);
  }

  return (
    <>
      
      <h1>Core concepts part 2 </h1>
      <button onClick={handlejsShop}>Shop</button>
      <button onClick={() => passNumk(20)}>Add Num</button>
    </>
  )
}

export default App
