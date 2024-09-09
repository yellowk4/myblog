import classes from './Header.module.css';
import Link from 'next/link';
import { useAuth } from '@/firebase/auth'; // 사용자 인증
import { Button } from '@/components/ui/button';
import { UserIcon } from '@heroicons/react/20/solid';

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
            <Button asChild>
              <Link href="/login">
                <UserIcon className="mr-1 h-6 w-6" /> 로그인
              </Link>
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
