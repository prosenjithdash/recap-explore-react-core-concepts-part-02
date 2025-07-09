
import './App.css'
import Counter from './Counter';

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
      <Counter></Counter>
    </>
  )
}

export default App
