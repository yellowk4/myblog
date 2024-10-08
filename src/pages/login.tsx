import { useAuth } from '@/firebase/auth';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/');
    } catch (error) {
      // setError(error.message);
      setError('로그인에 실패했습니다.');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin} className="grid grid-cols-3 gap-6 p-4 rounded-xl bg-gray-600">
        <div className="flex flex-wrap gap-4 col-span-2">
          <label className="inline-flex items-center w-full">
            <span className="min-w-[100px]">이메일:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border shadow-sm border-slate-300 rounded-md text-zinc-900"
            />
          </label>
          <label className="inline-flex items-center w-full">
            <span className="min-w-[100px]">비밀번호:</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border shadow-sm border-slate-300 rounded-md text-zinc-900"
            />
          </label>
        </div>
        <button type="submit" className="p-2 ml-10 bg-green-500 rounded max-w-[150px]">
          로그인
        </button>
      </form>

      <div className="flex justify-center gap-6 mt-10">
        <button onClick={loginWithGoogle} className="block p-2 bg-blue-500 rounded ">
          Google로 로그인
        </button>
        <Link href="/signup">
          <button className="block p-2 bg-yellow-500 rounded ">회원가입</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
