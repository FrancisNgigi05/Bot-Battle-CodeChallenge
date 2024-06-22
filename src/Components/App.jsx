import React, { useState, useEffect } from 'react';
import BOTS_API from './url';
import BotCollection from './BotCollection';
import NavBar from './NavBar';
import Error from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import YourBotArmy from './YourBotArmy';
function App() {
  // Where all the bots fetched from the server will be stored
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  const fetchingBots = () => {
    fetch(BOTS_API)
      .then((r) => r.json())
      .then((data) => setBots(data))
  }
  // Executing the fetch functionality
  useEffect(() => {
    fetchingBots();
  }, []);

  useEffect(() => {
    setArmy(army);
  }, [bots]);

  // console.log(bots);

  // Handling the logic of adding a bot to the army
  const handleAddArmyClick = (id) => {
    // Checking if the bot was already added in the army
    const isAlreadyInArmy = army.some((bot) => bot.id === id);

    // If not in army
    if (!isAlreadyInArmy) {
      const addBot = bots.find((b) => b.id === id);
      if (army) {
        setArmy([...army, addBot]);
      }
      else {
        setArmy([addBot]);
      }
    }
    // If present in army just return
    else {
      return;
    }
  }

  // Handling the logic of removing the bot from army
  const handleRemoveFromArmy = (id) => {
    const newArmy = army.filter((a) => a.id !== id);
    setArmy(newArmy)
  }

  // Handling the logic of deleting a bot from the server and in the Bot Collection
  const handleDeleteBot = (id) => {
    const newBotsArray = bots.filter((b) => b.id !== id);
    setBots(newBotsArray);
    // Also delete the bot in the army
    const newArmyArray = army.filter((a) => a.id !== id);
    setArmy(newArmyArray);
  }

  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<BotCollection bots={bots} handleAddArmyClick={handleAddArmyClick} deleteBot={handleDeleteBot} />} />
          <Route path="/army" element={<YourBotArmy army={army} onRemove={handleRemoveFromArmy} />} />
          <Route path="*" element={<Error />} />
        </Routes>  
      </div>
    </BrowserRouter>
  )
}

export default App;