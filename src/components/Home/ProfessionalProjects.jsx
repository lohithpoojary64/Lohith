import React from "react";

const items = [
  { name: "Ecommerce" },
  { name: "Netflix Clone" },
  { name: "Spotify Clone" },
];

const SelectedProjects = () => {
  return (
    <div className="h-[400px] w-[100%] flex flex-col justify-center items-start p-5">
      <h1 className="font-bold text-3xl">Selected Projects</h1>
      <div className="relative flex justify-between items-center h-[300px] w-full border border-dashed border-slate-400 rounded-xl mt-5 px-3">
        {items.map((item) => {
          return (
            <div
              key={item.name}
              className="relative h-[80%] w-[30%]  border border-solid border-slate-400 rounded-2xl p-3"
            >
              <h1>{item.name}</h1>
              <div className="absolute w-[92%] h-8 bottom-3 border border-solid border-slate-500 rounded-xl"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectedProjects;
