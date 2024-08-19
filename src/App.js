import { Cards } from './components/Cards/Cards';
import { Menu } from './components/Menu/Menu';
import { ProfileCard } from './components/Profile Card/ProfileCard';
import { Buttons } from './components/Buttons/Buttons';

function App() {
  return (
    <>
      <ProfileCard/>
      <Buttons/>
      <Cards />
      <Menu />
    </>
  );
}

export default App;
