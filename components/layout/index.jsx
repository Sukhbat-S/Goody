import React from 'react'
import Header from "./Header.jsx"
// import Foot from "./foot.jsx";

export const MainLayout = ({children}) => {
  return (
    <>
    <Header />
    <div className="flex flex-col w-full h-screen items-center bg-[#FAFAFB] font-[family-name:var(--font-geist-sans)]">
    {children}
    </div>
    {/* <Foot /> */}
    </>
  )
};

export default MainLayout;
