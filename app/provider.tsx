"use client";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Provider } from "react-redux";
import { store } from "@/store/store";

interface User {
  uid: string;
  displayName: string;
  email: string;
  password: string;
}

export const userAuth = createContext<User | null>(null);

function ProviderWrapper({ children }: { children: React.ReactNode }) {
  const [authUser, setAuthUser] = useState<any>(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
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
      <userAuth.Provider value={authUser}>{children}</userAuth.Provider>
    </Provider>
  );
}

export default ProviderWrapper;
