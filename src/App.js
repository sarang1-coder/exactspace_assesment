import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer />
      <div className="App bg-black">
      <h1 className='p-3 mb-2 bg-secondary text-white'>
        <i>Hi Welcome to Photo Gallery</i>
      </h1>
      <Main/>
    </div>
    </>

    

  );
}

export default App;
