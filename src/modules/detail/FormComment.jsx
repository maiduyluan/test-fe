import React from "react";

const FormComment = () => {
  return (
    <div className="bg-gray-200 p-5 rounded-2xl shadow-2xl">
      <form className="flex flex-col gap-2">
        <label>Name:</label>
        <input className="p-2" type="text" name="name"></input>
        <label>Email:</label>
        <input className="p-2" type="text" name="email"></input>
        <label>Content:</label>
        <textarea className="p-2" name="content"></textarea>
        <button className="border bg-blue-600 text-white font-bold">Submit</button>
      </form>
    </div>
  );
};

export default FormComment;
