import React from "react";
import { IRoute } from "../../types";
import Loading from "../components/loading";
const Login = React.lazy(() => import("../pages/login"));
const TodoList = React.lazy(() => import("../pages/TodoList"));

export const routeConfig: IRoute[] = [
    {
        path: '/',
        redirect: '/login',
        fallback: <div style={{textAlign: 'center'}}>Loading...</div>
    },
    {
        path: '/login',
        element: <Login/>,
        private: false,
        fallback:  <Loading />,
        children: [],
    },
    {
        path: '/todos',
        element:  <TodoList/>,
        private: true,
        fallback:  <Loading />,
        children: [],
    }
];

// export const routeConfig = [
//     {
//         path: '/home',
//         element: <Home />,
//         children: [
//             {
//                 path: 'signin',
//                 element: <SignIn />,
//             },
//             {
//                 path: 'signup',
//                 element: <SignUp />,
//             }
//         ],
//     }
// ];

// ,
    // {
    //     path: '/Auth',
    //     element: '',
    //     children: [
    //         {
    //             path: 'protected',
    //             element: '',
    //             children: [],
    //         },
    //         {
    //             path: 'user',
    //             element: '',
    //             children: [],
    //         }
    //     ],
    // },
    // {
    //     path: '/protected',
    //     element: '',
    //     children: [
    //         {
    //             path: '/',
    //             element: '',
    //             children: [],
    //         },
    //         {
    //             path: '/',
    //             element: '',
    //             children: [],
    //         }
    //     ],
    // }

    // export const PrivateRoute = (props) => {
    //     const { isUserLoggedIn } = useAuth();
      
    //     if(isUserLoggedIn) {
    //      return <Route {...props} />
    //     }
      
    //     return <Navigate to="/login" />
    //   }

    // <Routes>
    //     <Route path="/" element={ <Home /> } />
    //     <Route path="/login" element={ <Login /> } />
    //     <PrivateRoute path="/feed" element={ <Feed /> />
    //     <PrivateRoute path="/profile" element={ <Profile /> />
    // </Routes>