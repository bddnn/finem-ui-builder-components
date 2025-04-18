import {useState} from "react";
import styles from "../ComponentSettings/styles.module.css";

export const CollapsibleSection = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className={styles.collapsibleSection}>
            <div
                className={styles.sectionHeader}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <h3 style={{ margin: 0 }}>{title}</h3>
                <span>{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && <div className={styles.sectionContent}>{children}</div>}
        </div>
    );
};