import classes from './Header.module.css';
import Link from 'next/link';
import { useAuth } from '@/firebase/auth'; // 사용자 인증

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <Link href="/">My Blog (next.js)</Link>
      </h1>
      <nav className="grow">
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
            <Link href="/login">로그인</Link>
            <Link href="/signup">회원가입</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
