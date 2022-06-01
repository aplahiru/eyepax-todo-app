import { ReactNode } from "react";
import { RouteObject } from "react-router";

export interface IRoute extends RouteObject {
    path: string;
    fallback: NonNullable<ReactNode> | null;
    children?: IRoute[];
    redirect?: string;
    private?: boolean;
}