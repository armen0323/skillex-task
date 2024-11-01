import styles from './styles.module.scss'
import {Icon} from "components";
import {useWindowSize} from "react-use";


const Header = () => {
    const {width} = useWindowSize()


    return <header className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.info}>
                <p className={styles.text}>{width > 820 ? "Skillex Company" : 'Skillex'} </p>
                <Icon icon={'IconPhone'}/>
            </div>
        </div>
        <div className={styles.block}>
            {width > 680 && <a href="tel:033725758" className={styles.phone}>
                <Icon icon={'IconMobile'}/>
                <p className={styles.number}>033725758</p>
            </a>}
        </div>
    </header>
}
export default Header