import { useAuth } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  const { profile, logout } = useAuth({});
  const router = useRouter();
  const isLoggedIn = Boolean(profile?.username);

  return (
    <header className="flex py-8 text-center">
      <div>Work</div>
      <div>Work 2</div>
      <button>Work 2</button>
      {!isLoggedIn ? (
        <Link href={"/login"}>Log in</Link>
      ) : (
        <button onClick={logout}>Log out</button>
      )}
      <div>Hello: {profile?.username || "no name"}</div>
    </header>
  );
}
