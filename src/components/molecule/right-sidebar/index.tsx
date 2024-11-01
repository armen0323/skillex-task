import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss'
import {RightSidebarProps} from "./types";



const RightSidebar: FC<RightSidebarProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (isOpen && event.target && !(event.target as Element).closest(`.${styles.rightSidebar}`)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.sidebarOverlay} onClick={onClose}>
            <div className={styles.rightSidebar} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>Close</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default RightSidebar;
