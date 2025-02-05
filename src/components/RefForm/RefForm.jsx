import { useEffect, useRef, useState } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [passowrd, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);


  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passowrd.length < 6) {
      setError("Password minimum length 6 character");
    } else {
      setError("");
      console.log(nameRef.current.value);
      console.log(emailRef.current.value);
      console.log(passwordRef.current.value);
    }
  };

  return (
    <div className="m-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className="p-4 font-bold text-3xl text-sky-600">Ref Form</h1>
        <label htmlFor="name">Name: </label> <br />
        <input
          ref={nameRef}
          className="border-2 mb-2 p-1 rounded w-2/6"
          type="text"
          name="name"
        />{" "}
        <br />
        <label htmlFor="email">Email: </label> <br />
        <input
          ref={emailRef}
          className="border-2 mb-2 p-1 rounded w-2/6"
          type="text"
          name="email"
        />{" "}
        <br />
        <label htmlFor="password">Password: </label> <br />
        <input
          ref={passwordRef}
          onChange={handlePasswordChange}
          className="border-2 mb-2 p-1 rounded w-2/6"
          type="password"
          name="passowrd"
          id=""
        />{" "}
        <br />
        {
          error && <p className="text-sm text-red-500">{error}</p>
        }
        <input
          className="border-2 py-1 px-4 rounded-md bg-sky-600 text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default RefForm;
