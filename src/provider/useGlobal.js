import { useContext } from "react";
import GlobalContext from "./GlobalProvider";


export const useGlobal = () => useContext(GlobalContext);