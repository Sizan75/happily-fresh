import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Route/Route';

function App() {
  return (
   <div>
     <RouterProvider router={route}></RouterProvider>
    <Toaster
    position="top-center"
    reverseOrder={false}
  />
   </div>
  );
}

export default App;
