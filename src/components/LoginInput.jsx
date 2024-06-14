import React from 'react';
import useInput from '../hooks/useInput';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase.config';

function LoginInput() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();

  const signIn = async (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill in all fields!');
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user

      console.log(user);
      toast.success('User has been created!');
      navigate('/destination');
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <form>
      <div className="mb-[22px]">
        <input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
          className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="mb-[22px]">
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={onPasswordChange}
          className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
        />
      </div>
      <div className="mb-9">
        <input
          type="button"
          onClick={signIn}
          value="Sign In"
          className="w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
        />
      </div>
    </form>
  );
}

export default LoginInput;
