import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { ThemeProvider } from './context';

const router = createBrowserRouter([...routes]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

