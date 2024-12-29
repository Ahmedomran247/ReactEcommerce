// import React from 'react';
// import { Navigate } from 'react-router-dom';

// export default function ProtectRoutes({ children }) {
//   if (localStorage.getItem('userToken') !== null) {
//     return children; 
//   } else {
//     return <Navigate to="/login" />; 
//   }
// }

export default function ProtectRoutes({ children }) {
  console.log("ProtectRoutes - Checking user authentication");
  if (localStorage.getItem('userToken') !== null) {
    console.log("User authenticated");
    return children;
  } else {
    console.log("User not authenticated");
    return <Navigate to="/login" />;
  }
}
