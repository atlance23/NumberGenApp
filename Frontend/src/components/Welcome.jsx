import React, {useState} from "react";

export default function Welcome() {

    let [number, setNumber] = useState(0);

    const fetchNumber = () => {
        // Fetch a number
        fetch('http://localhost:5173/api')
            .then(response => response.json())
            .then(data => {
                setNumber(data.number);
                console.log("Fetched number:", number);
            })
            .catch(error => console.error('Error fetching number:', error));
    };

    return (
        <section id="welcome">
            <div>
                <div>
                    <h2>{(number) ? `The number is ${number}` : "Click the button!"}</h2>
                    <button onClick={fetchNumber}>Generate Number</button>
                </div>
            </div>
        </section>
    );
}