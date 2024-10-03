import { Icon } from '@iconify/react';
import { loginData } from '../../data/loginData';
import Button from '../../components/Button';

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-[440px]'>
        <div className='flex flex-col items-center gap-6'>
          <Icon icon='fluent-emoji-high-contrast:raccoon' className='home-icon text-purple w-[60px] h-[60px]' />
          <p>Log in with the username and passcode below and assign the task to another user.</p>
          <div className='flex justify-center items-center gap-7'>
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
          <div className='flex flex-col gap-4 mt-7 w-[440px]'>
            <div>
              <input type='text' placeholder='username' className='border border-slate-400 rounded-sm p-2 w-full' />
            </div>
            <div>
              <input type='password' placeholder='passcode' className='border border-slate-400 rounded-sm p-2 w-full' />
            </div>
          </div>
          <Button buttonName='Log in' buttonStyle='text-white bg-purple hover:opacity-90 rounded-md px-6 py-2 w-full' />
        </div>
      </div>
    </div>
  );
};

export default Login;
