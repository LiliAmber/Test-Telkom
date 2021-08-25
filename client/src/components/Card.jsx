import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="bg-white max-w-xl rounded-2xl px-8 py-4 shadow-lg transition duration-500">
        <div className="mt-4">
          <h1 className="text-lg text-gray-700 font-semibold hover:text-red-400">
            {props.item.name}
          </h1>

          <p className="mt-4 text-md text-gray-600">{props.item.description}</p>
          <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-6">
              <div className="">
                <img
                  className="w-12 h-12 rounded-full"
                  src={props.item.owner.avatar_url}
                  alt=""
                />
              </div>
              <div className="text-sm font-semibold">
                {props.item.owner.login}{" "}
                <span className="font-normal"> {props.item.created_at}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
