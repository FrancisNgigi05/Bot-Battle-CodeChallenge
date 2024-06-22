import React from 'react';
import ArmyList from './ArmyList';

function YourBotArmy( { army, onRemove } ) {

    return (
    <div>
        {/* Hello  */}
        <ArmyList army={army} onRemove={onRemove} />
    </div>
  )
}

export default YourBotArmy;