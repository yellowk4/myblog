import classes from './Header.module.css';
import Link from 'next/link';

function Header() {
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
    </header>
  );
}

export default Header;
