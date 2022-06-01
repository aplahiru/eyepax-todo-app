import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import ProtectedRoute from '../components/protectedRoute';
import { IRoute } from '../../types';
import { routeConfig } from './config';

function AppRouter() {
  return (
    <Routes>
        {
          routeConfig.map((route: IRoute) => {
            return (
              <Route 
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={route.fallback}>
                    {  
                      route.redirect ?
                          <Navigate to={route.redirect} /> :
                          route.private ? 
                            <ProtectedRoute>
                              {route.element}
                            </ProtectedRoute>
                            :
                            route.element
                      }
                  </Suspense>
                }
              >
                {route.children ? 
                  route.children.map((child: IRoute) => 
                        <Route 
                          key={child.path}
                          path={child.path}
                          element={
                            <Suspense fallback={child.fallback}>
                              {  
                                child.redirect ?
                                    <Navigate to={child.redirect} /> :
                                  child.private ? 
                                      <ProtectedRoute>
                                        {child.element}
                                      </ProtectedRoute>
                                      :
                                      child.element
                                }
                            </Suspense>
                          }
                        />
                  )
                  :
                  null
                }
              </Route>
            )
          })
        }
    </Routes>
  )
}

export default AppRouter
