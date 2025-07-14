import { useEffect, useState } from "react"
import Friend from "./Friend";

export default function Friends() {



    const FriendsStyle = {
        margin: '15px',
        padding: '50px',
        border: '4px solid red',
        borderRadius:'34px'

  }
    
    
    const [friends, setFriends] = useState([])

    // Load API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data));
    },[])
    return (
        <div style={FriendsStyle}>
            <p>Friends:{setFriends.length} </p>
            
            {
                friends.map((friend) =><Friend friend={friend}></Friend>)
            }
            
        </div>
    )
}