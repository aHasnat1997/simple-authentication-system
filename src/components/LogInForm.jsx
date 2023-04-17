import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { toast } from 'react-toastify';

const LogInForm = () => {

  const { logIn } = useContext(UserContext);

  const logInHandler = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    logIn(email, password)
      .then(result => {
        const logInUser = result.user;
        console.log(logInUser);
        e.target.reset()
        toast.success('Successfully Log In', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch(error => {
        console.log(error);
        e.target.reset()
        toast.error('User is not Sing Up', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })

  }



  return (
    <div className='max-w'>
      <div className="hero">
        <div className="hero-content h-[91vh] flex flex-col items-center justify-center gap-8">
          <div className="text-center mt-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card w-full shadow-2xl">
            <form onSubmit={logInHandler} className="card-body">
              <div className="form-control">
                <input type="email" name='email' placeholder="Email" className="input input-bordered" autoComplete='off' required />
              </div>
              <div className="form-control">
                <input type="password" name='password' placeholder="password" className="input input-bordered" autoComplete='off' required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>New to App?<Link to='/sing-up' className='btn btn-link'>Sing Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
