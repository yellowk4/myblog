import classes from './Header.module.css';
import Link from 'next/link';
import { useAuth } from '@/firebase/auth'; // 사용자 인증

function Header() {
  const { user, loginWithGoogle, logout } = useAuth();

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link href="/">My Blog (feat: next.js)</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/post">게시글</Link>
          </li>
          <li>
            <Link href="/about">소개</Link>
          </li>
        </ul>
      </nav>

      <div className="space-x-4">
        {user ? (
          <button onClick={logout} className="p-2 bg-red-500 rounded">
            로그아웃
          </button>
        ) : (
          <>
            <button onClick={loginWithGoogle} className="p-2 bg-blue-500 rounded">
              Google로 로그인
            </button>
            <Link href="/login">
              <button className="p-2 bg-green-500 rounded">로그인</button>
            </Link>
            <Link href="/signup">
              <button className="p-2 bg-yellow-500 rounded">회원가입</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
