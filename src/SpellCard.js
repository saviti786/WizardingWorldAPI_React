import React, { useState } from "react";

export default function SpellCard({ spell }) {
  const { name, type, effect, incantation } = spell;
  const [highlight, setHighlight] = useState(false);

  const toggleHighlight = () => {
    setHighlight(!highlight);
  };

  return (
    <div className={`card ${highlight ? "highlight" : ""}`}>
      <h3>{name} 🪄</h3>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Effect:</strong> {effect}
      </p>
      <p>
        <strong>Incantation:</strong> {incantation}
      </p>
      <button onClick={toggleHighlight}>
        {highlight ? "Unhighlight" : "Highlight"}
      </button>
    </div>
  );
}
