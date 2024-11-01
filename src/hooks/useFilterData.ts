import useDynamicQuery from "./useUrlSync";

const useFilterData = ()=>{
    const {options,setOptions} = useDynamicQuery()

    return {options}
}

export default useFilterData