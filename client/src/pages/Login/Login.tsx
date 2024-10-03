import { Icon } from '@iconify/react';
import { loginData } from '../../data/loginData';

const Login = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='flex flex-col items-center gap-6'>
        <Icon icon='fluent-emoji-high-contrast:raccoon' className='home-icon text-purple w-[60px] h-[60px]' />
        <p>Log in with the username and passcode below and assign the task to yourself.</p>
        <div className='flex gap-7'>
          {loginData.map((login) => (
            <fieldset key={login.id} className='border-2 border-gray-300 p-4 rounded'>
              <legend className='text-lg font-semibold px-2'>{login.accountName}</legend>
              <p>
                username:<span className='font-bold ml-2'>{login.userName}</span>
              </p>
              <p>
                passcode:<span className='font-bold ml-2'>{login.passcode}</span>
              </p>
            </fieldset>
          ))}
        </div>
        <div className='flex flex-col gap-4 mt-7'>
          <div>
            <label htmlFor='' className=''>
              username
            </label>
            <input type='text' className='border border-slate-400 rounded-sm ml-4 p-1 w-60' />
          </div>
          <div>
            <label htmlFor='' className=''>
              passcode
            </label>
            <input type='password' className='border border-slate-400 rounded-sm ml-[1.2rem] p-1 w-60' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
