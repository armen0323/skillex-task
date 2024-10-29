import type {FC} from "react";
import type {TMainLayout} from "./types";
import styles from './styles.module.scss'
import {Header} from "components";

const MainLayout: FC<TMainLayout> = ({children}) => {
    return <section className={styles.wrapper}>
        <Header/>
        <div className={styles.container}>
            {children}
        </div>
    </section>
}
export default MainLayout