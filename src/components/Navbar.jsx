import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className='mycontainer flex justify-between items-center h-14 py-5'>
        <div className='logo font-bold text-3xl'>
          <span className='text-green-700' >&lt;
            </span>Pass<span className='text-green-700' >OP/&gt;</span>
        </div>
        <div className='flex gap-6 '>
        <ul>
            <li className='flex gap-10'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='#'>About us</a>
            <a className='hover:font-bold' href='#'>Contact us</a>
            </li>
        </ul>

        <button className='flex gap-2 justify-center items-center hover:font-bold'>
          <img className='invert' src="/icons/github-142-svgrepo-com.svg" alt="" />
          <span>Github</span>
        </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar