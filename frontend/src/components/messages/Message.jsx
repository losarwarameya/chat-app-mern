import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://avatar.iran.liara.run/public" alt="avatar" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi, how are you?</div>
      <div className="chat-footer opacity-50 text-xm flex gap-1 items-center">
        14:30
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
