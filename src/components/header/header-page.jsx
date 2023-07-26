import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/ir.svg";

export const HeaderPage = () => {
  return (
    <header>
      <div className="topNav">
        <Image alt="Logo" src={logo} width={50} height={50} />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <h1>Lorem ipsum dolor sit amet</h1>
    </header>
  );
};
