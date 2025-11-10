import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav">
      <Image
        src="/images/logo.png"
        className="nav-logo"
        alt="Logo"
        width={50}
        height={50}
      />
      <div className="art">
        <Link
          href="https://www.wildberries.ru/catalog/390990015/detail.aspx?targetUrl=SP"
          className="articul"
        >
          <span className="wb-wrapper">
            <Image
              src="/images/Wb.png"
              alt="WB"
              width={24}
              height={24}
              className="wb"
            />
          </span>
          <span>390990015</span>
        </Link>
      </div>
    </nav>
  );
}
