
const SimpleForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log('Form submitted');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input className="border-2 mb-2 p-1 rounded w-2/6" type="text" name="name" /> <br />
        <input className="border-2 mb-2 p-1 rounded w-2/6" type="text" name="email" /> <br />
        <input className="border-2 py-1 px-4 rounded-md bg-green-600 text-white" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
