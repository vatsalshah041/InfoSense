import React, { ReactElement } from 'react'
import SideBar from '../components/Sidebar'
import TopBar from '../components/TopBar'

type Props = {
  children:React.ReactNode
}

function AppLayout({children}: Props) {
  return (
    <div className='flex'>
      <SideBar/>
        <main className='flex-1 p-3'>
          <TopBar />
          <div className='min-h-screen  rounded-lg border-2 p-3'>
            {children}
          </div>
        </main>
    </div>
  )
}

export default AppLayout