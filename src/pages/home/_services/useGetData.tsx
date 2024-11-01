import { useEffect, useState } from "react";
import { useAppDispatch } from "hooks/useRedux";
import { getPhoneData } from "../../../redux/reducers/phone-data/phone.thunk";
import { IPhoneData } from "../types";
import { filterSmartphones } from "../../../helpers/handleFilterData";
import { TFilterData } from "../../../utils/globalTypes";

const useGetData = (filters: TFilterData) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IPhoneData[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLoading(true);
        const handler = setTimeout(async () => {

            try {
                const res = await dispatch(getPhoneData()).unwrap();
                if (res) {
                    const result = filterSmartphones(res, filters);
                    setData(result);
                }
            } catch (e) {
                console.error("Error fetching phone data:", e);
            } finally {
                setLoading(false);
            }
        }, 700);

        return () => clearTimeout(handler);
    }, [dispatch, filters]);

    return {
        data,
        isLoading,
    };
};

export default useGetData;
