import { HomeAction } from "src/features/home/home.types";
import { NavigationAction } from "react-navigation";

// prettier-ignore
export type RootAction = NavigationAction 
                        | HomeAction;
