import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './routes';

function App() {
  return (
    <div>
        <>
          <Routes />
          <ToastContainer />
        </>
    </div>
  );
}

export default App;