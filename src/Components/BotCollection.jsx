import React from 'react';
import BotList from './BotList';

function BotCollection( { bots, handleAddArmyClick, deleteBot } ) {
  return (
    <div>
      <BotList bots={bots} handleAddArmyClick={handleAddArmyClick} deleteBot={deleteBot} />
    </div>
  )
}

export default BotCollection;