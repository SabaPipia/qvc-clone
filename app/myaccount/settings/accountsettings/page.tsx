"use client";

import { userAuth } from "@/app/provider";
import React, { useContext } from "react";

export default function AccountSettings() {
  const context = useContext(userAuth);
  return <div className="container">AccountSettings</div>;
}
