// src/App.jsx
import { ToastContainer } from 'react-toastify';
import { CalcProvider } from './context/CalcContext';
import ModeSwitcher from './components/ModeSwitcher';
import { ThemeProvider } from './context/themeContext';

export default function App() {
  return (
    <ThemeProvider>
      <CalcProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <div className="max-w-md mx-auto px-4 py-6">
            <ModeSwitcher />
          </div>
          <ToastContainer position="top-center" />
        </div>
      </CalcProvider>
    </ThemeProvider>
  );
}
// 