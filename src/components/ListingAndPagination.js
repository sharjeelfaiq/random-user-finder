import Listing from "./Listing";
import Pagination from "./Pagination";

const ListingAndPagination = ({
  data,
  handleGenderChange,
  handleCountryChange,
  handleNationalityChange,
  selectedGender,
  selectCountry,
  nPages,
  currentPage,
  setCurrentPage,
  selectNationality
}) => {
  return (
    <div className="w-3/4 mt-24 flex flex-col justify-center items-center gap-10">
      <Listing
        data={data}
        handleGenderChange={handleGenderChange}
        handleCountryChange={handleCountryChange}
        handleNationalityChange={handleNationalityChange}
        selectNationality={selectNationality}
        selectedGender={selectedGender}
        selectCountry={selectCountry}
      />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ListingAndPagination;
