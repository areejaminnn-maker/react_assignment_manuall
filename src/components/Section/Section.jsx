import { Children, cloneElement } from 'react'
import './Section.css'

// Accepts title and children — used to group a set of Cards under a
// named heading (e.g. "Engineering Team").
//
// Section also receives onFollow from App and forwards it to each Card
// child via cloneElement, WITHOUT ever calling it itself. This is the
// first prop-drilling layer: App -> Section -> Card.
function Section({ title, onFollow, children }) {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { onFollow })
  )

  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="content">{childrenWithProps}</div>
    </section>
  )
}

export default Section