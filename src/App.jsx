import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">
      <h1
        className="text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-300 via-emerald-400 to-blue-500 bg-clip-text text-transparent"
        style={{
          textShadow: `
            0 0 10px rgba(34,211,238,0.7),
            0 0 20px rgba(16,185,129,0.6),
            0 0 40px rgba(59,130,246,0.5)
          `,
        }}
      >
        AF Pharma
      </h1>
      
    </div>
  );
};

export default App;