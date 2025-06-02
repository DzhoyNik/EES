import React from "react";
import "../css/modal.css";
import { motion } from "framer-motion";
import viewModal from "../animation/modal";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null
    }

    return(
        <div className="modal">
            <motion.div variants={viewModal} initial="initial" animate="in" exit="out" className="modal-body">
                {children}
                <button type="button" onClick={onClose} className="modal-close"><span className="material-symbols-outlined">close</span></button>
            </motion.div>
        </div>
    )
}

export default Modal