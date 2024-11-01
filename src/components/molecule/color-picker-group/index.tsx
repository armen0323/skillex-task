import styles from './styles.module.scss';
import {FC, memo, useState} from "react";
import type { TColorPickerGroupProps } from "./types";

const ColorPickerGroup: FC<TColorPickerGroupProps> = ({ items, label, setFilters, filters }) => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const handleColorSelect = (color: string) => {
        const updatedColors = selectedColors.includes(color)
            ? selectedColors.filter(selected => selected !== color)
            : [...selectedColors, color];

        setSelectedColors(updatedColors);

        setFilters((prev: any) => {
            if (updatedColors.length === 0) {

                const { colors, ...rest } = prev;
                return rest;
            }
            return {
                ...prev,
                colors: updatedColors,
            };
        });
    };

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>{label}</p>
            <div className={styles.container}>
                {items.map((color, index) => (
                    <div
                        key={index}
                        className={`${styles.colorPickerWrapper} ${filters?.colors?.includes(color) ? styles.selected : ''}`}
                        onClick={() => handleColorSelect(color)}
                    >
                        <div style={{ background: color }} className={styles.colorPicker} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo (ColorPickerGroup);
