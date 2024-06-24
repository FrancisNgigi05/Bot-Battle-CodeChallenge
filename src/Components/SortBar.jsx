import React, { useState } from 'react';

function SortBar( { botClasses, bclass, setBclass, handleSort } ) {
    // const [bclass, setbClass] = useState("Witch");

    const botClassesDisplayed = botClasses.map((b, index) => {
        return (
            <option key={index} value={b}>{b}</option>
        )
    })

    return (
        <div>
            <label htmlFor="sort-options">Sort By Class:</label>
            <select name="Bot Class" value={bclass} onChange={(e) => setBclass(e.target.value)}>
                {/* Options for the classes will be displayed here */}
                <option value="All">All</option>
                {botClassesDisplayed}
            </select>
            <button onClick={() => handleSort('health')}>Sort by Health</button>
            <button onClick={() => handleSort('damage')}>Sort by Damage</button>
            <button onClick={() => handleSort('armor')}>Sort by Armor</button>
        </div>
    )
}

export default SortBar;