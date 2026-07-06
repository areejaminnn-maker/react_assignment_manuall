import './SkillBadge.css'

// Receives a single skill string prop and renders it as a styled badge.
function SkillBadge({ skill }) {
  return <span className="skill-badge">{skill}</span>
}

export default SkillBadge
