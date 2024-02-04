import React from 'react'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {
  const {currentUser, logout} = UserAuth();


const handle




  return (
    <div className=' navbar bg-neutral text-neutral-content'>
        <div className="containerWrap flex justify-between">
  <a className="btn btn-ghost normal-case text-xl">WhoChat</a>
  <button onClick={handleLogout} >Logout</button>
</div>
    </div>
  )
}

export default Navbar