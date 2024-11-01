import {Slider} from "antd";
import {FC, memo, useState} from "react";
import {IPriceRangePropTypes} from "./types";
import styles from './styles..module.scss'

const PriceRange: FC<IPriceRangePropTypes> = ({label,setFilters,filters}) => {

    const [range, setRange] = useState<number[]>([]);

    const handleChange = (val:number[]) =>{
        setRange(val)
        setFilters((prev:any) => ({
            ...prev,
            price: val,
        }));
    }


    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>{label}</p>
            <Slider
                range
                value={filters?.price}
                onChange={handleChange}
                min={1000}
                max={1000000}
            />
        </div>
    );
};

export default memo(PriceRange);
