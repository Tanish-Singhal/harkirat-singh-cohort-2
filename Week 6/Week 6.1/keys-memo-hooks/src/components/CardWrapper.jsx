import React from 'react'

// this has to be the children word only
// children will include all the things which we write inside the tag in app.jsx
function CardWrapper({children}) {
  return (
    <>
       <div style={{border: "2px solid white", padding: "20px", margin: "5px"}}>
        {children}
       </div>
    </>
  )
}

export default CardWrapper;