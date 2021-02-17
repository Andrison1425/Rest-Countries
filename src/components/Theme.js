import React, { useState, useEffect } from 'react'

const Theme = () => {
  const [themeState, setThemeState] = useState(true);

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
 
  return (
    <div>
      <h4 onClick={handleChange}>{themeState ? 
      (
        <>
            <i className="far fa-moon"></i>
            Light Mode
        </> 
      ) : 
      (
        <>
            <i className="fas fa-sun"></i>            
            Dark Mode
        </> 
      )
      }</h4>
    </div>
  )
}

export default Theme;