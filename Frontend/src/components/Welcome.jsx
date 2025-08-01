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
        <section className="homeHero">
            <div id="numberGen">
                <h2 className="font-bold" id="number" style={{fontSize: '32px'}}>{(number) ? `The number is: ${number}` : "Click the button!"}</h2>
                <button className="bg-black-500 text-white font-bold mt-8 py-1 px-4 rounded-full" onClick={fetchNumber}>Generate Number</button>
            </div>
        </section>
    );
}