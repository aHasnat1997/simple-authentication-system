import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Nav = () => {

  const { user, logOut } = useContext(UserContext);

  const logOutHandler = () => {
    logOut()
      .then(() => { })
      .catch(error => { console.log(error) })
  }


  return (
    <nav className='bg-neutral'>

      <div className="navbar max-w flex justify-between items-center">
        <div className="">
          <Link to='/' className="text-4xl cursor-pointer font-bold">Simple<span className='text-success'>App</span> </Link>
        </div>
        <div className="">
          <Link to='/dance' className='btn btn-ghost' >Want to see Dance?</Link>
        </div>
        <div className="flex-none gap-2">

          {user ? (<div className="dropdown dropdown-end">
            <div className="flex items-center gap-4">
              <h1>{user.email}</h1>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://picsum.photos/500/300?random" />
                </div>
              </label>
            </div>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li onClick={logOutHandler} className='btn btn-ghost border border-primary'>Log out</li>
            </ul>
          </div>) : <Link to='/log-in' className='btn btn-primary text-xl'>Log In</Link>}

        </div>
      </div>

    </nav>
  );
};

export default Nav;
