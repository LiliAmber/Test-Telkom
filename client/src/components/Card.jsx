import React from "react";
import moment from "moment";

export default function Card(props) {
  function dateFormatted(input) {
    return moment(input).format("MMM Do YY");
  }
  return (
    <div>
      <div className="bg-grey-100 shadow-md rounded-3xl p-4">
        <div className="flex-auto ml-3 justify-evenly py-2">
          <div className="flex flex-wrap ">
            <h1 className="repo flex-auto text-lg font-semibold">
              {props.item.name}
            </h1>
            <h3 className="w-full flex-none text-xs text-red-500 font-medium my-2">
              {dateFormatted(props.item.created_at)}
            </h3>
            {/* <p className="repo">{props.item.description}</p> */}
          </div>
          <div className="flex relative space-x-3 text-sm font-medium">
            <button
              className="mb-2 mt-4 md:mb-0 bg-gray-600 py-1 px-2 shadow-sm tracking-wider text-white rounded-xl hover:bg-gray-500 absolute -bottom-3 right-3"
              onClick={() => window.open(props.item.html_url)}
            >
              docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
