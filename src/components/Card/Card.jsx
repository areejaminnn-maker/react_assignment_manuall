import { cloneElement } from 'react'
import './Card.css'

// Accepts a title prop and children — TeamMember is rendered as the
// children of this component, demonstrating the children prop.
//
// Card receives onFollow from Section and forwards it to its child (TeamMember)
// via cloneElement, WITHOUT ever calling it itself. This is the second
// prop-drilling layer: Section -> Card -> TeamMember.
function Card({ title, onFollow, children }) {
  const childWithProps = cloneElement(children, { onFollow })

  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      {childWithProps}
    </div>
  )
}

export default Card