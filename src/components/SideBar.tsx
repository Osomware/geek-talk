import React from 'react'
import Link from 'next/link'

const SideBar: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full py-5 space-y-5">
      <div className="flex flex-col w-full max-w-xl px-3 space-y-1">
        <h1 className="font-bold text-xl text-cyber-white">{`>`} GeekTalk💻</h1>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <div className="flex flex-row items-center justify-between w-full px-3">
          <Link href="/">
            <a className="font-light text-xs text-cyber-white text-opacity-80 hover:underline">{`>`} Discover Servers</a>
          </Link>
          <Link href="/signin">
            <a className="font-light text-xs text-red-500 hover:underline"><span className="text-cyber-white text-opacity-50">{`>`}</span> Signout</a>
          </Link>
        </div>
        <span className="border-b border-cyber-white border-opacity-10" />
      </div>
      <div className="flex flex-col w-full h-full px-3 space-y-2">
        <div className="flex flex-row items-center justify-between w-full">
          <h5 className="font-light text-sm"><span className="text-cyber-white">$</span> Server Name</h5>
          <button className="font-light text-xs text-cyber-white hover:underline">{`> Chat`}</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar