import React from "react";
import Header from "@/components/Home/Header";
import SelectedProjects from "@/components/Home/ProfessionalProjects";
import MyStack from "@/components/Home/MyStack";

const page = () => {
  return (
    <div className="min-h-screen h-screen w-full px-12 overflow-y-scroll">
      <Header/>
      <div className="border border-dashed border-gray-300"></div>
      <SelectedProjects/>
      <MyStack/>
    </div>
  );
};

export default page;
