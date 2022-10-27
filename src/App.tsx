import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          className="font-medium text-[#646cff] leading-[inherit] hover:text-[#747bff] dark:hover:text-[#535bf2]">
          <img
            src="/vite.svg"
            alt="Vite logo"
            className="box-content inline-block p-[1.5em] will-change-[filter] h-[6em] hover:drop-shadow-[0_0_2em_#646cffaa]"
          />
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          className="font-medium text-[#646cff] leading-[inherit] hover:text-[#747bff] dark:hover:text-[#535bf2]">
          <img
            src={reactLogo}
            alt="React logo"
            className="box-content inline-block p-[1.5em] will-change-[filter] animate-[spin_infinite_20s_linear] h-[6em] hover:drop-shadow-[0_0_2em_#61dafbaa]"
          />
        </a>
      </div>

      <h1 className="text-[3.2em] leading-[1.1]">Vite + React</h1>

      <div className="p-[2em]">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="cursor-pointer text-[1em] font-[inherit] font-medium bg-[#f9f9f9] dark:bg-[#1a1a1a] py-[0.6em] px-[1.2em] rounded-lg border border-solid border-transparent transition-[border] duration-[250ms] hover:border-[#646cff]">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
