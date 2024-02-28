import styles from './App.module.scss';
import LandingPage from './pages/LandingPage.jsx';
import ListPage from './pages/ListPage.jsx';

function App() {
  return (
    <>
      <LandingPage />
      <ListPage />
      <h1 className={styles.hello}>2+2=22</h1>
    </>
  );
}

export default App;
