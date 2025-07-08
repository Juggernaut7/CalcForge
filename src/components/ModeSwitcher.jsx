// src/components/ModeSwitcher.jsx
import { useState } from "react";
import Standard from "../pages/Standard";
import Scientific from "../pages/Scientific";
import Programmer from "../pages/Programmer";
import Finance from "../pages/Finance";

const ModeSwitcher = () => {
  const modes = ["Standard", "Scientific", "Programmer", "Finance"];
  const [mode, setMode] = useState("Standard");

  const render = {
    Standard: <Standard />,
    Scientific: <Scientific />,
    Programmer: <Programmer />,
    Finance: <Finance />
  }[mode];

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        {modes.map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1 rounded ${mode === m ? "bg-indigo-600 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
          >
            {m}
          </button>
        ))}
      </div>
      {render}
    </div>
  );
};

export default ModeSwitcher;
