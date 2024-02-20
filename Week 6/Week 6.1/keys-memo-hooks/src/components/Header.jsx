import React from 'react'

// FIXME: Object Destructing
// function Header({title}) {
//   return (
//     <div>
//         {title}
//     </div>
//   )
// }

// FIXME: React Memo
// It lets you skip re-rendering a component when its props are unchanged.
const Header = React.memo(function Header({title}) {
  return (
    <div>
        {title}
    </div>
  )
});

export default Header;