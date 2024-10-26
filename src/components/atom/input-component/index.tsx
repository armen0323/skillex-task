import {Input} from 'antd';
import {FC} from "react";
import {IInputProps} from "./types";
import styles from './styles.module.scss'

const {Search} = Input;

const InputComponent: FC<IInputProps> = ({loading = false, placeholder = '', ...rest}) => {
    return <div className={styles.wrapper}>
        <Search placeholder={placeholder} loading={loading} enterButton {...rest}/>
    </div>

}

export default InputComponent