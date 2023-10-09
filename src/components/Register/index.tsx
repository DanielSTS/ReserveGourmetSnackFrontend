import Image from 'next/image';
import Link from 'next/link';
export default function Register() {
  return (
    <div className="bg-white shadow-md rounded m-auto h-auto flex">
      <div className="w-1/3 flex flex-col p-8 gap-16 bg-redMain shadow-md rounded">
        <Image
          className={'w-96 h-36 text-redMain'}
          src={'/admin-white.svg'}
          alt="Logo"
          width={140}
          height={140}
        />
        <p className="">
          <strong>Já tem uma conta ? </strong> Acesse agora mesmo!
        </p>
        <Link
          className="border-2 border-white bg-redMain text-white font-bold p-2 rounded-3xl focus:outline-none focus:shadow-outline text-center"
          href="/login"
        >
          Entrar
        </Link>
      </div>
      <div className="w-2/3 p-4  flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-redMain">
          Criar Conta
        </h2>
        <form className="flex flex-col gap-4 items-center">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="border-2 border-white bg-redMain text-white font-bold p-2 px-8 rounded-3xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cadastre-se
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
