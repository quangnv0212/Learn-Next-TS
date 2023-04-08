import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link className="text-3xl font-bold" href={"/blogs"}>
        Blog Page
      </Link>
    </>
  );
}
