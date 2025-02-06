import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  // const [name, handleNameChange] = useInputState("Rojonoi Hooker");
  const emailState = useInputState("Rojonoi@example.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailState.value)
  };
  return (
    <div className="m-8">
      <form onSubmit={handleSubmit}>
        <h1 className="p-4 font-bold text-3xl text-pink-600">Hook Form</h1>
        {/* <input
          value={name}
          onChange={handleNameChange}
          className="border-2 mb-2 p-1 rounded w-2/6"
          type="text"
          name="name"
          placeholder="name"
        />{" "} */}
        <br />
        <input
          {...emailState}
          className="border-2 mb-2 p-1 rounded w-2/6"
          type="text"
          name="email"
          placeholder="xyz@example.com"
        />{" "}
        <br />
        <input
          className="border-2 mb-2 p-1 rounded w-2/6"
          type="password"
          name="password"
          id=""
          placeholder="password"
        />{" "}
        <br />
        <input
          className="border-2 py-1 px-4 rounded-md bg-pink-600 text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default HookForm;
