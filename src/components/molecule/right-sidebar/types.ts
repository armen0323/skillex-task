import  {ReactNode} from "react";

export interface RightSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}