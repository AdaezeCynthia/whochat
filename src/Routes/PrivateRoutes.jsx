import { Navigate } from "react-router-dom";


export const PrivateRoutes = ({children}) => {

  const currentUser = true;
  if(!currentUser){
    return<Navigate  to= '/' replace={true} />
  }
  return children
}

