// !STARTERCONF You can delete this page
import * as React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export default function AuthPage() {
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [progress, setProgress] = React.useState('0%');
  const [email, setEmail] = React.useState('');

  const getActiveColor = (type: string) => {
    if (type === 'Strong') return '#8BC926';
    if (type === 'Medium') return '#FEBD01';
    return '#FF0054';
  };

  const handlePassword = (passwordValue: string) => {
    const strengthChecks = {
      length: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    const verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength = '';
    if (verifiedList.length === 5) strength = 'Strong';
    else if (verifiedList.length >= 2) strength = 'Medium';
    else strength = 'Weak';

    setPassword(passwordValue);
    setMessage(strength);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
  };

  const validateEmail = (_email: string) => {
    return String(_email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = (): void => {
    if (!validateEmail(email)) console.log('Invalid Email.');
    if (password.length === 0) console.log('Invalid Password');
  };

  return (
    <Main
      meta={
        <Meta
          title="Presentation"
          description="Next js is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="mx-auto min-h-[60vh] max-w-4xl">
        <div className="grid place-items-center px-4 py-16 text-sm font-medium">
          <div className="w-full max-w-sm rounded-lg shadow">
            <form className="p-4 md:p-5 lg:p-6">
              <div className="grid gap-y-3">
                <input
                  type="text"
                  className="rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 focus:border-purple-400"
                  placeholder="email@example.com"
                  onChange={({ target }) => setEmail(target.value)}
                />
                <input
                  type="password"
                  className="rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 focus:border-purple-400"
                  placeholder="*********"
                  onChange={({ target }) => {
                    handlePassword(target.value);
                  }}
                />
                <div className="progress-bg bg-slate-300">
                  <div
                    className="progress"
                    style={{
                      width: progress,
                      backgroundColor: getActiveColor(message),
                    }}
                  ></div>
                </div>
                {password.length !== 0 ? (
                  <p
                    className="message"
                    style={{ color: getActiveColor(message) }}
                  >
                    Your password is {message}
                  </p>
                ) : null}
                <a href="#" className="text-xs text-purple-600 hover:underline">
                  Forget Password?
                </a>
                <button
                  className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-400"
                  onClick={handleSubmit}
                >
                  <svg
                    style={{ color: 'rgb(203, 213, 225)' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                      fill="#cbd5e1"
                    ></path>
                  </svg>
                  Sign in with Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>
  );
}
