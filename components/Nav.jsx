'use client'
import Link from "next/link";
import Image from "next/image"; //used for image optimazation
import { useState, useEffect } from "react";
import {signIn, signOut, useSession, getproviders} from 'next-auth/react'
const Nav = () => {
  return (
    <div>
      Nav
    </div>
  )
}

export default Nav
