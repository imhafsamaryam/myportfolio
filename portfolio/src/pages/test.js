import React, { useState } from 'react'

const TestPage = () => {
    const givenList = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

    const [value, setValue] = useState("");
    const [filterdList, setFilterdList] = (givenList)
    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value)
        // console.log(value)
        const mappedData = givenList.map((item) => {
            // console.log(item);
            if (value == item) {
                console.log("Input value is in the list ", item)
            } else {
                console.log("Not in the list")
            }
        })
        // console.log(mappedData)
    }
    return (
        <div>
            <input
                value={value}
                onChange={(e) => handleChange(e)}
                style={{ color: "black" }}
            />
        </div>
    )
}

export default TestPage
