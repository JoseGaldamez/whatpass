/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img className="w-36 h-36 mb-4" src="/whatpass.png" alt="Logo WhatPass" />
      <h1 className="text-3xl font-bold mb-2">WhatPass</h1>
      <p>Manage your passwords</p>
    </div>
  );
}
