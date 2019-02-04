import { HomeAction } from "src/features/home/home.types";
import { NavigationAction } from "react-navigation";
import { DetailAction } from "src/features/detail/detail.types";

// prettier-ignore
export type RootAction = NavigationAction 
                        | DetailAction
                        | HomeAction;
