import styles from './styles.module.scss'
import img from '../../../assets/images/iphone16.jpeg'
import {Icon} from "components";
import {Rate} from "antd";
import {FC} from "react";
import type {TPhoneProps} from "./types";
import {
    GiftOutlined,
} from '@ant-design/icons';

const Phone: FC<TPhoneProps> = ({name, rating, price, color,hasDiscount,hasGift}) => {
    return <div className={styles.wrapper}>
        <div className={styles.img}>
            <img src={img} alt={'kkk'} width={'100%'} height={'100%'}/>
        </div>
        <p className={styles.name}>{name} ({color})</p>
        <div className={styles.price}>
            <Icon icon={'IconWarning'}/>
            <p className={styles.info}>{price} դր</p>
        </div>
        <div className={styles.rate}>
            <div className={styles.star}>
                <Rate value={price}/>
            </div>
    <div className={styles.special_offer}>
        {
            hasDiscount && <p>Զեղչ</p>

        }
        {
            hasGift && <GiftOutlined />

        }
    </div>
        </div>

    </div>
}
export default Phone