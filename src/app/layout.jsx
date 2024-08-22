import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fin app frontend",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex w-full flex-row px-10 py-4 justify-between items-center z-10 bg-black text-white drop-shadow-2xl">
          <div className="font-bold flex">
            <p>
              <span className="text-green-600">Fin</span> APP
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="font-semibold p-2 rounded-2xl hover:text-black hover:bg-white cursor-pointer">
              Dashboard
            </Link>
            <Link href="/finances" className="font-semibold p-2 rounded-2xl hover:text-black hover:bg-white cursor-pointer">
              Your Finances
            </Link>
          </div>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
