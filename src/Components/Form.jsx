import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    car: [],
    gender: "",
    color: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name == "car") {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setInput({
        ...input,
        car: selectedOptions,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(input));
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleInputChange}
        />
        <select
          name="car"
          value={input.car}
          onChange={handleInputChange}
          multiple
        >
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>

        <input type="radio" name="gender" value={(input.gender = "male")} />
        <input type="radio" name="gender" value={(input.gender = "female")} />

        <input type="checkbox" name="color" value={(input.color = "Blue")} />

        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
