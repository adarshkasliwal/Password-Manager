import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
  const ref = useRef()
  const passwordref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordarray, setpasswordarray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordarray(JSON.parse(passwords));
    }
  }, []);

  const showpassword = () => {
    if (ref.current.src.includes("icons/eye-show-svgrepo-com.svg")) {
      ref.current.src = "icons/eye-off-svgrepo-com.svg"
      passwordref.current.type = "text"
    }
    else {
      ref.current.src = "icons/eye-show-svgrepo-com.svg"
      passwordref.current.type = "password"
    }
  }

  const savepassword = () => {
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
    setpasswordarray([...passwordarray, { ...form, id: uuidv4() }])
    localStorage.setItem("passwords", JSON.stringify([...passwordarray, { ...form, id: uuidv4() }]))
    console.log([...passwordarray, { ...form, id: uuidv4() }])
  }
}

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const deletepassword = (id) => {
    setpasswordarray(passwordarray.filter(item => item.id !== id))
    localStorage.setItem("passwords", JSON.stringify((passwordarray.filter(item => item.id !== id))))
    // console.log([...passwordarray, {...form, id:uuidv4()}])
  }

  return (
    <>
      <div class="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,244,210,0.5)] opacity-50 blur-[80px]">

        </div>
      </div>

      <div className=' md:mycontainer '>
        <div className='logo font-bold text-2xl text-center'>
          <span className='text-green-700' >&lt;
          </span>Pass<span className='text-green-700' >OP/&gt;</span>
        </div>
        <p className='text-center text-green-700 text-lg'>Your own password manager</p>


        <div className='text-black flex flex-col p-4  gap-3 items-center'>
          <input value={form.site} onChange={handlechange} className='rounded-full border border-green-500 w-full p-4 py-1 ' placeholder="Enter Website URL" type="text" name="site" id="" />

          <div className="flex w-full justify-between gap-3">

            <input value={form.username} onChange={handlechange} className='rounded-full border border-green-500 w-full p-4 py-1 ' placeholder="Enter Username" type="text" name="username" id="" />

            <div className="relative items-center">
              <input ref={passwordref} value={form.password} onChange={handlechange} className='rounded-full border border-green-500 w-full p-4 py-1 ' placeholder="Enter Password" type="password" name="password" id="" />
              <span className="absolute right-2 top-[7px] cursor-pointer " onClick={showpassword}>
                <img ref={ref} src="icons/eye-show-svgrepo-com.svg" alt="eye" />
              </span>

            </div>
          </div>


          <button onClick={savepassword} className='flex justify-center items-center gap-2 bg-green-400  py-1 rounded-full text-black w-fit hover:bg-green-500 border-2 border-green-800 px-4'>
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121331,secondary:#0a5c15"
            >
            </lord-icon>
            Add Password</button>
        </div>

        <div className="passwordcontainer">
          <h2 className='font-bold text-green-800 text-xl'>Your Passwords</h2>
          {passwordarray.length === 0 && <div> no passwords to show </div>}
          {passwordarray.length != 0 && <table className="table-auto w-full bg-green-100 rounded-md overflow-hidden my-2 mb-2">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {passwordarray.map((item, index) => {
                return <tr key={index}>
                  <td className='text-center w-32 py-2 border border-white'><a href={item.site} target='_blank'>{item.site}</a></td>
                  <td className='text-center w-32 py-2 border border-white'>{item.username}</td>
                  <td className='text-center w-32 py-2 border border-white'>{item.password}</td>
                  <td className='text-center relative left-[16vh] cursor-pointer w-32 py-2 border border-white'> <img onClick={() => {
                    deletepassword(item.id)
                  }} className='flex justify-center' src="/icons/delete-svgrepo-com.svg" alt="delete icon" srcset="" /></td>
                </tr>
              })}
            </tbody>
          </table>
          }
        </div>

      </div >

    </>
  )
}

export default Manager