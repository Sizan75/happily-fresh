import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Route/Route';

function App() {
  return (
    <RouterProvider router={route}></RouterProvider>
  );
}

export default App;
