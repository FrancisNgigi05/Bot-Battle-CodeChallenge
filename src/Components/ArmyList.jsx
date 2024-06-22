import React from 'react';
import ArmyItem from './ArmyItem';
function ArmyList( { army, onRemove } ) {
    const armyBotsDisplayed = army.map((a, index) => {
        return (
            <ArmyItem key={index} army={a} onRemove={onRemove} />
        );
    })

    return (
    <div>
      {armyBotsDisplayed}
    </div>
  )
}

export default ArmyList;