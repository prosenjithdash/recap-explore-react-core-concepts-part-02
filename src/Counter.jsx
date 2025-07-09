import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)
    
    // Event handler
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}

// What is the state?
// Ans: State is a store a update value;
