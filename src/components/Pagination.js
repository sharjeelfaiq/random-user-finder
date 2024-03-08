import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const [active, setActive] = useState(currentPage);
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index);
      setCurrentPage(index);
    },
    className:
      active === index
        ? "rounded-full text-black bg-yellow-500"
        : "rounded-full text-black",
  });

  const next = () => {
    if (active === 10) return;
    if (currentPage !== nPages) {
      setActive(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (active === 1) return;
    if (currentPage !== 1) {
      setActive(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-3/4 flex flex-row items-center justify-center">
      <Button
        variant="text"
        className="flex items-center justify-center gap-1"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex flex-row justify-center items-center">
        {pageNumbers.map((pgNumber) => (
          <IconButton {...getItemProps(pgNumber)} key={pgNumber}>
            {pgNumber}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center justify-center gap-1"
        onClick={next}
        disabled={active === 10}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
