import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/hooks/provider/auth';
import { useToast } from '../components/hooks/provider/toast';

function PrivateRoute({ children }: any) {
  const { user } = useAuth();
  const { addToast } = useToast();
  try {

    console.log("user authenticated");

    return (
      !!user ? children
        : <Navigate to="/login" replace />

    );

  } catch (error) {

    addToast({
      type: 'error',
      title: 'Erro na autenticação',
      description:
        'Ocorreu um erro ao fazer login, cheque suas credenciais',
    });
  }

}

export default PrivateRoute;




























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
