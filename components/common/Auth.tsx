import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";

export default function AuthComponent({ children }: { children: any }) {
  // Mới vào get API
  const { profile, firstLoading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push("/login");
  }, [router, profile, firstLoading]);
  if (!profile?.username) return <p>Loading</p>;

  return <div>{children}</div>;
}
