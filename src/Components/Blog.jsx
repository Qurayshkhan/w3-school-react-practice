import React, { useState } from "react";

const Blog = () => {
  const [formInput, setFormInput] = useState({
    image: null,
    auther_name: "",
    title: "",
    description: "",
  });

  const onHandleChnage = (event) => {
    const { name, value, files } = event.target;
    if (name === "image" && files && files.lenght) {
      const image = files[0];
      setFormInput({
        ...formInput,
        image: image,
      });
    } else {
      setFormInput({ ...formInput, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInput);
  };
  return (
    <>
      <div className="container">
        <div className="h1">BLOG FORM</div>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="">Select File</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={onHandleChnage}
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="">Auther Name</label>
            <input
              type="text"
              className="form-control"
              name="auther_name"
              value={formInput.auther_name}
              onChange={onHandleChnage}
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="">Select Title</label>
            <select
              name="title"
              value={formInput.title}
              onChange={onHandleChnage}
              className="form-control"
            >
              <option disabled value="DEFAULT">
                Select Title
              </option>
              <option value="react">React</option>
              <option value="vue">VUE</option>
              <option value="angular">Angular</option>
            </select>
          </div>
          <div className="form-group mb-2">
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              className="form-control"
              value={formInput.description}
              onChange={onHandleChnage}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Blog;
