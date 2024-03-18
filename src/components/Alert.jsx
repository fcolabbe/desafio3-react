import React from 'react'

function Alert({ errormsg, status }) {
  return (
    <>
      <div className={status}>
        {errormsg}
      </div>
    </>
  )
}

export default Alert