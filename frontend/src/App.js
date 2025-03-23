import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/hello")
            .then(response => setMessage(response.data))
            .catch(error => console.error(error));
    }, []);

    return <h1>{message}</h1>;
}

export default App;
