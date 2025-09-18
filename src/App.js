import React, { useEffect, useState } from "react";
import "mvp.css";
import "./styles.css";
import SpellList from "./SpellList";

export default function App() {
  const [spells, setSpells] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://wizard-world-api.herokuapp.com/Spells")
      .then((res) => res.json())
      .then((data) => setSpells(data))
      .catch((error) => console.error("Failed to fetch spells", error));
  }, []);

  const filteredSpells = spells.filter((spell) =>
    spell.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>Wizarding World Spells</h1>
      <input
        type="text"
        placeholder="Search spells by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SpellList spells={filteredSpells} />
    </main>
  );
}
