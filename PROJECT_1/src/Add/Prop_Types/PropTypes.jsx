import { useState } from "react"
import TeamList from "./components/Team/TeamList"
import { teamData } from "./data/teamData"
import "./styles/style.css"

export default function PropTypes() {
  const [selected, setSelected] = useState("")

  return (
    <div className="app">
      <h1>Team Dashboard</h1>

      {selected && <h2>Selected: {selected}</h2>}

      <TeamList members={teamData} onSelect={setSelected} />
    </div>
  )
}