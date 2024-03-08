import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";

import PublicProfile from "./pages/PublicProfile";
import ListingAndPagination from "./components/ListingAndPagination";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedGender, setSelectedGender] = useState("male");
  const [selectNationality, setSelectNationality] = useState("au");
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);
  const [showBio, setShowBio] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(data.length / recordsPerPage);

  const apiURL = `https://randomuser.me/api/?results=20&&selectedGender=${selectedGender}&seed=abcnat=${selectNationality}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(apiURL);

        setData(
          res.data.results.filter((item) => item.gender === selectedGender)
        );
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiURL, selectedGender]);

  let currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);

  let currentListingRecords = currentRecords.map((result, index) => (
    <div key={index} className="flex flex-col items-center gap-2 rounded-full">
      <img src={result.picture.large} alt="Profile" className="rounded-full" />
      <h1 className="text-2xl font-semibold">{`${result.name.first} ${result.name.last}`}</h1>
    </div>
  ));

  let currentPublicRecords = currentRecords.map((result, index) => (
    <div
      key={index}
      className="w-1/2 min-w-fit bg-gray-100 h-auto flex flex-col items-center rounded-2xl"
    >
      <div className="rounded-full py-5">
        <img
          src={result.picture.large}
          alt="Profile"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-5 bg-gray-200 w-full p-10">
        <ul className="flex w-full flex-row justify-center items-center gap-4">
          <li
            className="cursor-pointer w-15 text-xl hover:text-yellow-600 hover:font-semibold"
            onMouseEnter={() => {
              setShowBio(true);
              setShowEmail(false);
              setShowBirthday(false);
              setShowAddress(false);
              setShowPhone(false);
              setShowPassword(false);
            }}
          >
            Bio
          </li>
          <li
            className="cursor-pointer w-15 text-xl hover:text-yellow-600 hover:font-semibold"
            onMouseEnter={() => {
              setShowBio(false);
              setShowEmail(true);
              setShowBirthday(false);
              setShowAddress(false);
              setShowPhone(false);
              setShowPassword(false);
            }}
          >
            Email
          </li>
          <li
            className="cursor-pointer w-15 text-xl hover:text-yellow-600 hover:font-semibold"
            onMouseEnter={() => {
              setShowEmail(false);
              setShowBio(false);
              setShowBirthday(true);
              setShowAddress(false);
              setShowPhone(false);
              setShowPassword(false);
            }}
          >
            Birthday
          </li>
          <li
            className="cursor-pointer w-15 text-xl hover:text-yellow-600 hover:font-semibold"
            onMouseEnter={() => {
              setShowEmail(false);
              setShowBio(false);
              setShowBirthday(false);
              setShowAddress(true);
              setShowPhone(false);
              setShowPassword(false);
            }}
          >
            Address
          </li>
          <li
            className="cursor-pointer w-15 text-xl hover:text-yellow-600 hover:font-semibold"
            onMouseEnter={() => {
              setShowEmail(false);
              setShowBio(false);
              setShowBirthday(false);
              setShowAddress(false);
              setShowPhone(true);
              setShowPassword(false);
            }}
          >
            Phone
          </li>
          <li
            className="cursor-pointer w-15 text-xl hover:text-yellow-600 hover:font-semibold"
            onMouseEnter={() => {
              setShowEmail(false);
              setShowBio(false);
              setShowBirthday(false);
              setShowAddress(false);
              setShowPhone(false);
              setShowPassword(true);
            }}
          >
            Password
          </li>
        </ul>
        {showBio && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-base">Hey! My name is</h2>
            <h1 className="text-2xl font-semibold">
              {result.name.first} {result.name.last}
            </h1>
          </div>
        )}
        {showEmail && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-base">My email address is</h2>
            <h1 className="text-2xl font-semibold">{result.email}</h1>
          </div>
        )}
        {showBirthday && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-base">My birthday is</h2>
            <h1 className="text-2xl font-semibold">
              {result.dob.date.slice(0, 10)}
            </h1>
          </div>
        )}
        {showAddress && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-base">My address is</h2>
            <h1 className="text-2xl font-semibold">
              {result.location.street.name} {result.location.street.number}
            </h1>
          </div>
        )}
        {showPhone && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-base">My phone number is</h2>
            <h1 className="text-2xl font-semibold">{result.phone}</h1>
          </div>
        )}
        {showPassword && (
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-base">My password is</h2>
            <h1 className="text-2xl font-semibold">{result.login.password}</h1>
          </div>
        )}
      </div>
    </div>
  ));

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setSelectNationality(e.target.value);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ListingAndPagination
          data={currentListingRecords}
          handleGenderChange={handleGenderChange}
          handleNationalityChange={(e) => handleNationalityChange(e)}
          selectedGender={selectedGender}
          selectNationality={selectNationality}
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ),
    },
    {
      path: "/profile",
      element: <PublicProfile data={currentPublicRecords} />,
    },
  ]);

  return (
    <div className="flex flex-col justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
