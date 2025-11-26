import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import IceDuelFishBattleStack from './FishBattle/FishBattleNavigation/IceDuelFishBattleStack';
import IceDuelFishBattleLoader from './FishBattle/FishBattleComponents/IceDuelFishBattleLoader';

const App = () => {
  const [isVisibleLoader, setIsVisibleLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleLoader(true);
    }, 6000);
  }, []);

  return (
    <NavigationContainer>
      {isVisibleLoader ? (
        <IceDuelFishBattleStack />
      ) : (
        <IceDuelFishBattleLoader />
      )}
    </NavigationContainer>
  );
};

export default App;
