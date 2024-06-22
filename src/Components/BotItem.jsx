import React from 'react';
import BOTS_API from './url';

function BotItem( { bots, handleAddArmyClick, deleteBot } ) {
    const { id, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at } = bots
    // `${BOTS_API}/${id}`
    const handleDeleteBotPermanently = () => {
        fetch(`${BOTS_API}/${id}`, {
            method: "DELETE",
        })
            .then(() => deleteBot(id))
    }

    return (
        <div>
            <img src={avatar_url} alt="bot" />
            <ul>
                <li>Bot ID: {id}</li>
                <li>Health: {health}</li>
                <li>Damage: {damage}</li>
                <li>Armor: {armor}</li>
                <li>Bot Class: {bot_class}</li>
                <li>Catchphrase: {catchphrase}</li>
                <li>Created_At: {created_at}</li>
                <li>Updated_At: {updated_at}</li>
                <button onClick={handleDeleteBotPermanently}>DELETE</button>
                <button onClick={() => handleAddArmyClick(id)}>ADD TO ARMY</button>
            </ul> 
        </div>
    )
}

export default BotItem;