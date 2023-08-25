import "./globals.css";
import { Rubik } from "next/font/google";

//Components
import NavBar from "./components/NavBar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Demo Next App",
  description: "Practice Next.Js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
