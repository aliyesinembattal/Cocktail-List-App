/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/cocktail-logo.png" width={128} height={128} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/cocktails">
        <a>Cocktail Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
