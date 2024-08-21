import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passRef = useRef(null);
  const passwordGenetor = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*[]-+"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, number, charAllowed, setPassword])

  const copypasswordToClipBoard = useCallback(() => {
    passRef.current?.select();
    //passRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenetor()
  }, [length, number, charAllowed, passwordGenetor])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-one w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copypasswordToClipBoard}>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex text-sm gap-x-1'>
            <input
              type="range" min={6} max={100} value={length}
              className='cursor-pointer'
              onChange={(event) => { setLength(event.target.value) }} />
            <label htmlFor=""> Length: {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={number}
              id='numberInput'
              onChange={() => { setNumber((prev) => !prev) }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor="charInput">Special character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
