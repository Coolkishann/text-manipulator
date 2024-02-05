import logo from './logo.svg';
import './App.css';
import Kishan from './component/Kishan';
import Textarea from './component/TextArea';
import { useState, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState({
    isDarkMode: false,
  });

  useEffect(() => {
    // Update the body background color based on the selected theme
    document.body.style.backgroundColor = mode.isDarkMode ? 'black' : 'white';
  }, [mode.isDarkMode]);

  const toggleMode = () => {
    setMode(prevMode => ({
      isDarkMode: !prevMode.isDarkMode,
    }));
  };
  const btnstyle = {
    color: mode.isDarkMode ? '#61DAFB' : 'black',
    backgroundColor: mode.isDarkMode ? 'black' : 'white',
    border: '3px solid ' + (mode.isDarkMode ? '#61DAFB' : 'black')
  };

  return (
    <div className={mode.isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button className='mode' onClick={toggleMode} style={btnstyle}>
        {mode.isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
      </button>
      <Textarea mode={mode}></Textarea>
    </div>
  );
}

export default App;
