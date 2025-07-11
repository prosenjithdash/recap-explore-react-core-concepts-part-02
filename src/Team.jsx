import { useState } from "react"

export default function Team() {
    // State:
    const [team, setTeam] = useState(11);

    // Team Style:

    const teamStyle = {
        border: '5px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'

    }

    // Add New Team Members with Event Handle
    const handleAddPlayer = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    // Reduce Team Member with Event Handler
    const handleReducePlayer = () => {
        const reduce = team - 1;
        setTeam(reduce);
    }
    return (
        <div style={teamStyle}>
            <h3>Players:{team} </h3>
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={handleReducePlayer}>Reduce Player</button>
        </div>
    )
}