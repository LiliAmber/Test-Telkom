import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRepositories } from "../store/action/actionCreator";
import hero from "../assets/github.png";
import Card from "../components/Card";

export default function Home() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    username: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    const _username = { ...input, [name]: value };
    setInput(_username);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRepositories(input));
  };

  const { repositories, loading, error } = useSelector(
    (state) => state.searchReducer
  );
  console.log(repositories, "<<<fetch");
  if (loading) {
    return (
      <h1 className="text-gray-500 text-center py-24 font-extrabold -mt-3 text-4xl md:text-5xl">
        LOADING ...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-center py-24 font-extrabold -mt-3 text-4xl md:text-5xl">
        ERROR ...
      </h1>
    );
  }

  return (
    <div>
      <div className="container py-24 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto flex flex-col justify-center items-center">
        {/* <h1 className="flex justify-center text-center text-gray-500 py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
          Welcome to Gitthub
        </h1> */}
        <img
          src={hero}
          alt="hero"
          width="300"
          height="250"
          className="flex flex-col justify-center items-center rounded-md mt-5"
        />
        <div className="container py-8 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex w-full lg:mx-auto lg:justify-center lg:w-1/2 mt-5"
          >
            <input
              className="flex mx-4 w-full h-10 pl-3 pr-8 m-2 text-base placeholder-gray-600 border rounded-full focus:outline-none focus:ring"
              type="text"
              name="username"
              value={input.username}
              onChange={handleChange}
              placeholder="Type username ..."
            />
            <button
              className="flex h-10 px-5 py-2 m-2 text-gray-100 transition-colors duration-150 bg-gray-600 rounded-full hover:bg-red-500 "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="container py-8 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-6">
            {repositories.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
