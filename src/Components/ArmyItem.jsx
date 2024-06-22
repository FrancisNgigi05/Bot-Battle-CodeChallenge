import React from 'react';

function ArmyItem( { army, onRemove } ) {
    const { id, health, damage, armor, bot_class, catchphrase, avatar_url, created_at, updated_at } = army

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
                <button onClick={() => onRemove(id)}>Remove From Army</button>
            </ul> 
        </div>
    )
}

export default ArmyItem;