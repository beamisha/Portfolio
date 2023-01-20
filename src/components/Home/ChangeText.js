import React, { useState, useEffect, useCallback } from "react";

const names = [
    'code', 'empower',
]

function ChangeText() {
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 5000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return(
        <p>{newName}</p>
    )
}

export default ChangeText