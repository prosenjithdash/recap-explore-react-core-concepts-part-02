import { useEffect, useState } from "react"

export default function Users() {
    // state declare for user api load
    const [users, setUsers] = useState([]);

    // call api from outSide component
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data=>setUsers(data))
    },[])
    
    return (
        <div>
            <p>Users: {users.length }</p>
        </div>
    )
}

/**
 * 1. Declare a state to hold the data
 * 2. useEffect with call back and dependency array
 * 3. use fetch to load data
 */