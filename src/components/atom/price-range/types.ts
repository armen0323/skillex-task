import {useStateType} from "../../../utils/globalTypes";

export interface IPriceRangePropTypes {
  label:string,
  setFilters: useStateType<any>
  filters : any
}