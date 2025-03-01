import React, { useState } from "react";


function RandomColor() {
    const [color, setColor] = useState("#000000"),
        [colorType, setColorType] = useState('hex'),
        randomColoUtility = (length) => {
            return Math.floor(Math.random() * length)
        },
        randomHexColor = () => {
            let color = "#",
                hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            for (let i = 0; i < 6; i++) {
                color += hex[randomColoUtility(hex.length)];
            }
            setColor(color);
            setColorType('hex')
        },
        randomRgbColor = () => {
            const r = randomColoUtility(256),
                g = randomColoUtility(256),
                b = randomColoUtility(256)
            setColor(`rgb(${r},${g},${b})`)
            setColorType('rgb')

        }
    return (
        <div style={{ height: "100vh", width: "100vw",padding:"20px",boxSizing:"border-box", backgroundColor: color, transition: "all 0.5s" ,color:"white"}}>
            <button onClick={() => randomHexColor()}> Hex color</button>
            <button onClick={() => randomRgbColor()}> Rgb color</button>
            <h2>color type is {colorType === 'hex' ? "Hex" : "Rgb"}</h2>
            <h2>color is {color}</h2>
        </div>
    )
}

export default RandomColor;