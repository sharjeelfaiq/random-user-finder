import { useNavigate } from "react-router-dom";

const Listing = ({ data, handleGenderChange, selectedGender, selectNationality, handleNationalityChange }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className={`flex flex-row items-center justify-center gap-2`}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          value={selectNationality}
          placeholder="Search By Nationality"
          onChange={handleNationalityChange}
          id="search"
          className="p-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 outline-none border-b-2 border-b-gray-200 focus:border-b-gray-400 text-black placeholder:text-black"
        />
      </div>
      <select
        value={selectedGender}
        onChange={handleGenderChange}
        className="p-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 outline-none cursor-pointer text-black"
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {data}
      <h1
        className="font-bold text-blue-700 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        See Profile
      </h1>
    </div>
  );
};

export default Listing;
