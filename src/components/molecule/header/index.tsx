import styles from './styles.module.scss'
import {Icon, InputComponent} from "components";

const Header = () => {
    return <header className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.info}>
                <p className={styles.text}>Skillex Company</p>
                <Icon icon={'IconPhone'}/>
            </div>
            <InputComponent/>
        </div>
        <div className={styles.block}>
            <a href="tel:033725758" className={styles.phone}>
                <Icon icon={'IconMobile'}/>
                <p className={styles.number}>033725758</p>
            </a>
            <div className={styles.icon}>
                <Icon icon={'IconCart'}/>
            </div>
        </div>
    </header>
}
export default Header