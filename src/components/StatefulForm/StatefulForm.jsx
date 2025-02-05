import { useState } from "react";
const StatefulForm = () => {
  const [email, setEmail] = useState("xyz@example.com");
  const [name, setName] = useState("John Doe");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("+880");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password should be at least 8 characters long");
    } else {
      setError("");
      console.log("Form submitted");
      console.log(email);
      console.log(name);
      console.log(password);
      console.log(phone);
    }
  };
  const handlePasswordChnage = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChnage = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="m-8 ">
      <form onSubmit={handleSubmit}>
        <h1 className="p-4 font-bold text-3xl text-red-600">Stateful Form</h1>
        <label htmlFor="name">Enter Name : </label> <br />
        <input
          value={name}
          onChange={handleNameChnage}
          className="text-gray-400 italic  border-2 mb-2 p-1 rounded w-2/6"
          type="text"
          name="name"
        />{" "}
        <br />
        <label htmlFor="email">Enter Email : </label> <br />
        <input
          value={email}
          onChange={handleEmailChange}
          className="text-gray-400 italic  border-2 mb-2 p-1 rounded w-2/6"
          type="text"
          name="email"
        />{" "}
        <br />
        <label htmlFor="phone">Enter Phone : </label> <br />
        <input
          value={phone}
          onChange={handlePhoneChange}
          className="text-gray-400 italic  border-2 mb-2 p-1 rounded w-2/6"
          type="text"
          name="phone"
        />{" "}
        <br />
        <label htmlFor="password">Enter Password : </label> <br />
        <input
          value={password}
          onChange={handlePasswordChnage}
          className="text-gray-400 italic border-2 mb-2 p-1 rounded w-2/6"
          type="password"
          name="password"
        />{" "}
        <br />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="border-2 py-1 px-4 rounded-md bg-red-600 text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default StatefulForm;
