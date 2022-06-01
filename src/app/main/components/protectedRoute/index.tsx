import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router'
import { JsxElement } from 'typescript';
import { RootState } from '../../../store';

type ProtectedRouteProps = {
    children: JsxElement | ReactNode;
}
const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    // authenticated flag
    const authenticated = useSelector((store: RootState) => store.authRef.authenticated);
  return (
    authenticated ? <>{children}</> : <Navigate to={'/'} />
  )
}

export default ProtectedRoute