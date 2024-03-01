import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;



// import React from "react";
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         className="input input-bordered rounded-full"
//         placeholder="Search"
//       />
//       <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//         <FaSearch className="w-6 h-6 outline-none" />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;