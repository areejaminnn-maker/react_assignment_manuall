import SkillBadge from '../SkillBadge/SkillBadge.jsx'
import './TeamMember.css'

// Receives name, role, age, isAdmin, skills, address, onFollow as props.
// onFollow arrives here after being drilled through Section and Card —
// this is where the callback is finally invoked.
function TeamMember({ name, role, age, isAdmin, skills, address, onFollow }) {
  const handleFollowClick = () => {
    onFollow(name)
  }

  return (
    <>
      <div className="member-header">
        <h4 className="member-name">{name}</h4>
        {isAdmin && <span className="admin-badge">Admin</span>}
      </div>

      <p className="member-role">{role}</p>

      <ul className="member-meta">
        <li>
          <strong>Age:</strong> {age}
        </li>
        <li>
          <strong>Location:</strong> {address.city}, {address.country}
        </li>
      </ul>

      <div className="skills-wrap">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      <button className="follow-btn" onClick={handleFollowClick}>
        Follow
      </button>
    </>
  )
}

export default TeamMember