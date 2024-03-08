import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = authUser._id === message.senderId;

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const formattedTime = extractTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} `}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xm flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img src="https://avatar.iran.liara.run/public" alt="avatar" />
//         </div>
//       </div>
//       <div className="chat-bubble text-white bg-blue-500">Hi, how are you?</div>
//       <div className="chat-footer opacity-50 text-xm flex gap-1 items-center">
//         14:30
//       </div>
//     </div>
//   );
// };

// export default Message;
