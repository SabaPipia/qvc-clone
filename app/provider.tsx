"use client";

import { usePathname } from "next/navigation";

import React, { createContext, useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useRouter } from "next/navigation";

interface User {
  uid: string;
  displayName: string;
  email: string;
  password: string;
  phoneNumber: number;
}

export const userAuth = createContext<User | null>(null);

function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { push } = useRouter();
  const [authUser, setAuthUser] = useState<any>(null);
  const [renderChildren, setRenderChildren] = useState<boolean>(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        const timer = setTimeout(() => {
          setRenderChildren(true);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <Provider store={store}>
      <userAuth.Provider value={authUser}>
        {authUser ? renderChildren && children : children}
      </userAuth.Provider>
    </Provider>
  );
}

export default ProviderWrapper;
