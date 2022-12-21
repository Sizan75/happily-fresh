import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Route/Route';
import AOS from 'aos';
function App() {
  AOS.init();
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
