import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { toast } from 'react-toastify';

const SingUpForm = () => {

  const { singUp } = useContext(UserContext)
  // console.log(singUp);

  const singUpHandler = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    singUp(email, password)
      .then(result => {
        const singUpUser = result.user;
        console.log(singUpUser);
        e.target.reset()
        toast.success('Successfully Sing Up', {
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
        toast.error('email already in use', {
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
    <div className='max-w h-[91vh] flex flex-col items-center justify-center gap-8'>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Sing Up now!</h1>
      </div>
      <form onSubmit={singUpHandler} className='flex flex-col gap-4 p-8 shadow-2xl rounded-xl'>
        <input className='input input-bordered input-info w-full' type="text" name="name" id="name" placeholder='User Name' autoComplete="off" required />

        <input className='input input-bordered input-info w-full' type="email" name="email" id="email" placeholder='your@mail.com' autoComplete="off" required />

        <input className='input input-bordered input-info w-full' type="password" name="password" id="password" placeholder='password' required />

        <div className='flex gap-2'>
          <input className='checkbox checkbox-primary' type="checkbox" name="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">Accept our Terms and Condition </label>
        </div>

        <div>
          <p>Already, Sing up?<Link to='/log-in' className='btn btn-link'>Log in</Link></p>
        </div>

        <div className='flex gap-4'>
          <button className='btn btn-primary' type="submit">Submit</button>
          <button className='btn btn-ghost btn-secondary border border-secondary' type="reset">Reset</button>
        </div>

      </form>
    </div>
  );
};

export default SingUpForm;
