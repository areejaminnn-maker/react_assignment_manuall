import team from './data/team.js'
import Section from './components/Section/Section.jsx'
import Card from './components/Card/Card.jsx'
import TeamMember from './components/TeamMember/TeamMember.jsx'
import './App.css'

function App() {
  // Defined here in App.jsx. This is the ONE place the callback lives —
  // it is drilled down through Section, then Card (neither of which call
  // it), before it is finally invoked inside TeamMember's Follow button.
  const handleFollow = (memberName) => {
    console.log(`${memberName} was followed!`)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Team Profile Directory</h1>
        <p>Meet the people building the product.</p>
      </header>

      <Section title="Engineering Team" onFollow={handleFollow}>
        {team.map((member) => (
          <Card key={member.id} title={member.role}>
            <TeamMember
              name={member.name}
              role={member.role}
              age={member.age}
              isAdmin={member.isAdmin}
              skills={member.skills}
              address={member.address}
            />
          </Card>
        ))}
      </Section>
    </div>
  )
}

export default App