import React, { useState } from 'react'

function Form() {

    const [username, setUsername] = useState('')
    const [usernameText, setUsernameText] = useState('')
    const [userSelect, setuserSelect] = useState('')
    const borderinput = {
        border: '2px solid black',
        margin: '10px'
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(username)
        console.log(usernameText)
        console.log(userSelect)
        alert(`input type: ${username}`)
        alert(`textarea text ${usernameText}`)
        alert(`Select tag ${userSelect}`)

    }

    return (
        <>
            <h4>Hi - Input functions</h4>

            <div >
                <form onSubmit={handleSubmit}>
                    <label>Enter Name </label>
                    <input type='text' value={username} style={borderinput}
                        onChange={(event) => setUsername(event.target.value)} /><br />
                    <textarea value={usernameText} name="textareaa" rows="4" cols="5" style={{ padding: '10px', marginLeft: "20px", border: '2px solid black' }} onChange={(event) => setUsernameText(event.target.value)} /><br />

                    {/* Select tag */}
                    <label style={{marginTop:'20px'}}>Choose a car:</label>
                    <select id='cars' value={userSelect} onChange={(event)=>setuserSelect(event.target.value)}>
                        <option value="tata">Tata</option>
                        <option value="ford">Ford</option>
                        <option value="mahindra">Mahindra</option>
                    </select>
                    <br />
                    
                    <button type="submit" style={{ backgroundColor: 'blue', padding: '10px', borderRadius: '10px', marginLeft: "20px" }}> Submit </button>
                </form>
            </div>

        </>
    )

}

export default Form;