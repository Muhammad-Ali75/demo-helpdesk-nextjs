import Link from "next/link";
import Image from "next/image";
//logo
import LOGO from "./x-logo.png";

export default function NavBar() {
  return (
    <nav>
      <Image
        src={LOGO}
        alt="logo"
        placeholder="blur"
        width={100}
        quality={100}
      />
      <h1>Demo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
