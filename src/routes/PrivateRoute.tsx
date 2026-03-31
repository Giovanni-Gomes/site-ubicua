import React from 'react'

function PrivateRoute({ children }: any) {
  // Demo mode: bypass auth guard and render route content directly.
  return children
}

export default PrivateRoute

// function PrivateRoute() {
//   const { user } = useAuth();
//   return user ? <Outlet /> : <Navigate to="/login" />;
// }

// import React from 'react';
// import {
//   Route as ReactDOMRoute,
//   RouteProps as ReactDOMRouteProps,
//   Navigate,
// } from 'react-router-dom';

// import { useAuth } from '../components/hooks/provider/auth';

// interface RouteProps extends ReactDOMRouteProps {
//   isPrivate?: boolean;
//   component: React.ComponentType;
// }

// const Route: React.FC<RouteProps> = ({
//   isPrivate = false,
//   component: Component,
//   ...rest
// }) => {
//   const { user } = useAuth();

//   return (

//     <ReactDOMRoute
//       {...rest}
//       render={({ location }) => {
//         return isPrivate === !!user ? (
//           <Component />
//         ) : (
//           <Navigate replace
//             to={{
//               pathname: isPrivate ? '/' : '/dashboard',
//               //state: { from: location },
//             }}
//           />
//         );
//       }}
//     />
//   );
// };

// export default Route;

// import React from 'react';
// import {
//   Route as ReactDOMRoute,
//   RouteProps as ReactDOMRouteProps,
//   Navigate,
// } from 'react-router-dom';
// const PrivateRoute = ({component, isAuthenticated, ...rest}: any) => {
//   const routeComponent = (props: any) => (
//       isAuthenticated
//           ? React.createElement(component, props)
//           : <Navigate replace to={{pathname: '/login'}}/>
//   );
//   return <ReactDOMRoute {...rest} render={routeComponent}/>;
// };

// export default PrivateRoute;
