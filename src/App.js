import { RouterProvider } from 'react-router-dom';
import './App.css';
// import './App.scss'
import router from './Router/Routes/Routes';

function App() {

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

//max-w-screen-xl  className='mx-2'