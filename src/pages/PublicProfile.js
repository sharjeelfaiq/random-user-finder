import React from "react";
import { useNavigate } from "react-router-dom";

const PublicProfile = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-24 w-full flex flex-col justify-center items-center gap-5 ">
      <h1 onClick={() => navigate("/")} className="my-3 text-sm underline text-blue-500 cursor-default">
        Go back
      </h1>
      {data}
    </div>
  );
};

export default PublicProfile;
