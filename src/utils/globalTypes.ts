import * as icons from "../assets";
import {Dispatch, SetStateAction} from "react";

export type IconType = keyof typeof icons;
export type useStateType<T> = Dispatch<SetStateAction<T>>;


export type TFilterData = {
    colors : string[],
    brand : string[],
    price  :[number,number],
    special_offer : string[],
    os : string[],
    rating : string[]
}