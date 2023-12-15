import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginAccount from './components/login';
import MainPage from './components/mainPage';
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from './components/mode-toggle';
import DarkModeChatArea from './components/Chat';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container">
        <ModeToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginAccount />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/chat" element={<DarkModeChatArea />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
