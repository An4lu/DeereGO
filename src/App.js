import { Cards } from './components/Cards/Cards';
import { Menu } from './components/Menu/Menu';
import { ProfileCard } from './components/Profile Card/ProfileCard';
import { Buttons } from './components/Buttons/Buttons';
import { Status } from './components/Status/Status';

function App() {
  return (
    <>
      <ProfileCard/>
      <Buttons/>
      <Cards />
      <Status/>
      <Menu />
    </>
  );
}

export default App;
