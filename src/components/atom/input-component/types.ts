import type {InputProps} from "antd";

export interface IInputProps extends InputProps {
    placeholder?: string,
    loading?: boolean
}