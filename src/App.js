import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle'
import Routes from './pages/Routes'
import Footer from './components/Footer'
import Header from './components/Header'
import { useAuthContext } from './contexts/AuthContext';
import ScreenLoader from './components/ScreenLoader/ScreenLoader';

function App() {

  const { isAppLoading } = useAuthContext()
  if (isAppLoading) {
    return <ScreenLoader />
  }
  else {
    return (
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    );
  }

}

export default App;
