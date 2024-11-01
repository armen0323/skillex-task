import {IPhoneState} from "./types";
import {makeRequestStateProperty} from "../../utils/reducerCreator";

export const phoneState: IPhoneState = {
    phoneData: makeRequestStateProperty<any, string>()
}