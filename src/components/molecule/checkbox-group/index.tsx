import styles from './styles.module.scss';
import { Checkbox } from 'antd';
import type { GetProp } from 'antd';
import {FC, memo} from "react";
import type { TCheckboxGroupProps } from "./types";

const CheckboxGroup: FC<TCheckboxGroupProps> = ({ label, items, query, setFilters, filters = {}, defaultValue }) => {
    const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
        const updatedCheckedValues = Array.from(new Set(checkedValues));

        setFilters((prev: any = {}) => {
            if (updatedCheckedValues.length === 0) {
                const { [query]: _, ...rest } = prev;
                return rest;
            }
            return {
                ...prev,
                [query]: updatedCheckedValues
            };
        });
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>{label}</p>
            <div className={styles.container}>
                <Checkbox.Group
                    style={{ flexWrap: 'wrap', gap: '10px' }}
                    options={items}
                    onChange={onChange}
                    value={filters[query] || defaultValue}
                />
            </div>
        </div>
    );
};

export default memo(CheckboxGroup);
