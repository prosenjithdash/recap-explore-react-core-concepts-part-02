import { useEffect, useState } from "react"

export default function Friends() {



    const FriendsStyle = {
        margin: '15px',
        padding: '50px',
        border: '4px solid red',
        borderRadius:'34px'

  }
    
    
    const [data, setData] = useState([])

    // Load API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data));
    },[])
    return (
        <div style={FriendsStyle}>
            <p>Friends:{data.length} </p>
        </div>
    )
}