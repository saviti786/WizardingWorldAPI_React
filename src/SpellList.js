import React from "react";
import SpellCard from "./SpellCard";

export default function SpellList({ spells }) {
  return (
    <div className="spell-grid">
      {spells.map((spell) => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </div>
  );
}
