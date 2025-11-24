import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import IceDuelFishBattleStack from './IceDuelFishBattle/IceDuelFishBattleNavigation/IceDuelFishBattleStack';
import IceDuelFishBattleLoader from './IceDuelFishBattle/IceDuelFishBattleComponents/IceDuelFishBattleLoader';

const App = () => {
  const [isVisibleLoader, setIsVisibleLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleLoader(true);
    }, 5000);
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
