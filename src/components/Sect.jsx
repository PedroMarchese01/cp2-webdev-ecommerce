import React from 'react'

const Sect = ({title, children}) => {
  return (
    <section>
        <h2>{title}</h2>
        <div>{children}</div>
    </section>
  )
}

export default Sect