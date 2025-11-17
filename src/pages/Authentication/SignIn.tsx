import React, { useState } from 'react';
import ChaskiLogoW from '../../images/chaski-logo/chaskilogowhite.svg';
import ChaskiLogoB from '../../images/chaski-logo/chaskilogoblack.svg';
import { UserSignUpT } from '../../types';
import useSignup from '../../hooks/useSignup';
import { CiMail } from "react-icons/ci";
import { FaRegUser, FaLock } from "react-icons/fa";

const initialStateLogin: UserSignUpT = {
  email: '',
  user_name: '',
  password: ''
};

const SignIn: React.FC = () => {

  const [inputLogin, setInputLogin] = useState<UserSignUpT>(initialStateLogin);
  const { loading, login } = useSignup();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLogin({
      ...inputLogin,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(inputLogin);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-boxdark px-4">
      
      <div className="max-w-md w-full rounded-xl border dark:border-strokedark shadow-xl p-8 bg-white dark:bg-boxdark">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img className="dark:hidden w-36" src={ChaskiLogoB} alt="logo" />
          <img className="hidden dark:block w-36" src={ChaskiLogoW} alt="logo" />
        </div>

        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-black dark:text-white mb-8">
          Iniciar Sesión
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-dark dark:text-white">
              Correo electrónico
            </label>

            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={inputLogin.email}
                onChange={handleChange}
                className="w-full border rounded-lg dark:border-form-strokedark bg-transparent py-3 pl-10 pr-4 text-black dark:text-white outline-none focus:border-primary dark:focus:border-primary"
              />
              <CiMail className="absolute left-3 top-3.5 text-xl text-gray-500" />
            </div>
          </div>

          {/* Usuario */}
          <div>
            <label className="block mb-1 text-sm font-medium dark:text-white">
              Usuario
            </label>

            <div className="relative">
              <input
                id="user_name"
                type="text"
                placeholder="Nombre de usuario"
                value={inputLogin.user_name}
                onChange={handleChange}
                className="w-full border rounded-lg dark:border-form-strokedark bg-transparent py-3 pl-10 pr-4 text-black dark:text-white outline-none focus:border-primary dark:focus:border-primary"
              />
              <FaRegUser className="absolute left-3 top-3.5 text-lg text-gray-500" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium dark:text-white">
              Contraseña
            </label>

            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="********"
                value={inputLogin.password}
                onChange={handleChange}
                className="w-full border rounded-lg dark:border-form-strokedark bg-transparent py-3 pl-10 pr-4 text-black dark:text-white outline-none focus:border-primary dark:focus:border-primary"
              />
              <FaLock className="absolute left-3 top-3.5 text-lg text-gray-500" />
            </div>
          </div>

          {/* Botón verde */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 border border-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-60"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Ingresar"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignIn;
