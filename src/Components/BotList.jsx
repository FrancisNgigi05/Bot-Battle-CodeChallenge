import React, { useState } from 'react';
import BotItem from './BotItem';

function BotList( { bots, handleAddArmyClick, deleteBot } ) {
    const botsDisplayed = bots.map((b) => {
        return (
            <BotItem key={b.id} bots={b} handleAddArmyClick={handleAddArmyClick} deleteBot={deleteBot} />
        )
    })

    return (
        <div>
            {botsDisplayed}
        </div>
    )
}

export default BotList;