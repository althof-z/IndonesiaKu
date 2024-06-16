import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import useInput from '../hooks/useInput';
import { auth, db } from '../utils/firebase.config.js'; // Adjust the import based on your actual file structure
import { toast } from 'react-toastify';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function RegisterInput() {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const navigate = useNavigate();

  const signUp = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (name === '' || email === '' || password === '') {
      toast.error('Isilah semua kolom!');
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: name,
        email,
      });

      toast.success('User Telah Dibuat!');
      navigate('/login');

      console.log(user);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={signUp}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={onNameChange}
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
            className="w-full px-5 py-3 text-base transition bg-transparent border rounded-md outline-none border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 placeholder:text-dark-6 focus:border-primary dark:focus:border-primary focus-visible:shadow-none"
          />
        </div>
        <div className="mb-9">
          <input
            type="submit"
            value="Sign Up"
            className="w-full px-5 py-3 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
          />
        </div>
      </form>
    </>
  );
}

export default RegisterInput;
