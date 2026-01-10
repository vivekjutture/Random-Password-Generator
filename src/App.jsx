import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharsAllowed, setSpecialCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setTimeout(() => {
      passwordRef.current?.setSelectionRange(0, 0);
      setCopied(false);
    }, 1000);
  }, [password]);

  const handleCopyEvent = useCallback(() => {
    setCopied(true);
    copyPasswordToClipboard();
  }, [copyPasswordToClipboard]);

  const shufflePasswordString = (passwordString) => {
    const arr = [...passwordString];

    for (let i = arr.length - 1; i > 0; i--) {
      const rand = crypto.getRandomValues(new Uint32Array(1))[0];
      const j = rand % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join("");
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let passwordString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      passwordString += "0123456789";
    }
    if (specialCharsAllowed) {
      passwordString += "!@#$%^&*~?;";
    }

    passwordString = shufflePasswordString(passwordString);
    for (let i = 1; i <= length; i++) {
      pass += passwordString.charAt(
        Math.floor(Math.random() * passwordString.length)
      );
    }
    setPassword(pass);
  }, [length, numberAllowed, specialCharsAllowed, setPassword]);

  useEffect(
    () => generatePassword(),
    [length, numberAllowed, specialCharsAllowed, generatePassword]
  );

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 overflow-clip">
          <h1 className="text-white text-center my-3">
            Random Password generator
          </h1>
          <div className="flex shadow rounded-lg mb-4">
            <input
              type="text"
              className="w-full py-1 px-3 rounded-lg border border-white"
              placeholder="Password"
              readOnly
              value={password}
              ref={passwordRef}
            />
            <button
              className={`outline-none ${
                copied ? "bg-green-400" : "bg-blue-800"
              } text-white px-3 py-0.5 shrink-0 cursor-pointer rounded-md`}
              onClick={handleCopyEvent}
            >
              {copied ? "Copied✔️" : "Copy"}
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                value={length}
                min={8}
                max={50}
                className="cursor-pointer"
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="numberInput"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                id="characterInput"
                checked={specialCharsAllowed}
                onChange={() => setSpecialCharsAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
