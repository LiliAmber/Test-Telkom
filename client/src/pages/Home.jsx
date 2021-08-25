import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchRepositories } from "../store/action/actionCreator";
import hero from "../assets/hero.svg";
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
    console.log(input);
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
      <div className="hero py-11 w-full">
        <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="hero-text col-span-6">
              <h1 className=" font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                Looking for your mate repositories ? We can help you !
              </h1>
              <p className="text-gray-800 text-base leading-relaxed mt-6 font-semibold">
                You dont't need to visit your mate github's to see their
                repositories. Type the username, and voila ! you got the
                repositories.
              </p>
            </div>

            <div className="hero-image col-span-6">
              <img src={hero} alt="tasty food" />
            </div>
          </div>
        </div>

        <div className="container py-16 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <h1 className=" text-gray-500 text-center py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
            Let's Search !
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex w-full lg:mx-auto lg:justify-center lg:w-1/2 mt-5"
          >
            <input
              className="flex mx-4 w-full h-10 pl-3 pr-8 m-2 text-base placeholder-gray-600 border rounded-md focus:outline-none focus:ring"
              type="text"
              name="username"
              value={input.username}
              onChange={handleChange}
              placeholder="Type username"
            />
            <button
              className="h-10 px-5 m-2 text-gray-100 transition-colors duration-150 bg-gray-600 rounded-md hover:bg-red-500"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>

        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
            {repositories.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
