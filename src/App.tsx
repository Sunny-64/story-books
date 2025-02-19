import ThemeProvider from './context/ThemeProvider';
import { Home } from './pages';

function App() {
  return (
    <ThemeProvider >
      <Home />
    </ThemeProvider>
  );
}

export default App;

