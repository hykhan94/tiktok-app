"use client";

import { useEffect, useState } from "react";

import ClientOnly from "./ClientOnly";
import { useGeneralStore } from "../stores/general";
import AuthOverlay from "./AuthOverlay";
import EditProfileOverlay from "./profile/EditProfileOverlay";

export default function AllOverlay() {
  let { isLoginOpen, isEditProfileOpen } = useGeneralStore();
  return (
    <>
      <ClientOnly>
        {isLoginOpen ? <AuthOverlay /> : null}
        {isEditProfileOpen ? <EditProfileOverlay /> : null}
      </ClientOnly>
    </>
  );
}
