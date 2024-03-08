import React from "react";

import { TbLogout2 } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <TbLogout2
          className="text-white cursor-pointer w-6 h-6"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;

// import React from "react";
// import { TbLogout2 } from "react-icons/tb";

// const LogoutButton = () => {
//   return (
//     <div className="mt-auto">
//       <TbLogout2 className="text-white cursor-pointer w-6 h-6" />
//     </div>
//   );
// };

// export default LogoutButton;
