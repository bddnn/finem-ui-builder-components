import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css"

export const DropdownSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    return (
        <div className={styles.settingsPanel}>
            {/* Content Settings */}
            <CollapsibleSection title="Content">
                <div className={styles.inputGroup}>
                    <label htmlFor="options">Options (oddzielone przecinkiem):</label>
                    <input
                        id="options"
                        type="text"
                        value={props.options ? props.options.join(", ") : ""}
                        onChange={e => {
                            const options = e.target.value.split(",").map(o => o.trim()).filter(Boolean);
                            setProp(p => p.options = options);
                        }}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="selected">Wybrana opcja:</label>
                    <input
                        id="selected"
                        type="text"
                        value={props.selected || ""}
                        onChange={e => setProp(p => p.selected = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Styling Settings */}
            <CollapsibleSection title="Styling">
                <div className={styles.inputGroup}>
                    <label htmlFor="width">Szerokość:</label>
                    <input
                        id="width"
                        type="text"
                        value={props.width || "200px"}
                        onChange={e => setProp(p => p.width = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="padding">Padding:</label>
                    <input
                        id="padding"
                        type="text"
                        value={props.padding || "8px"}
                        onChange={e => setProp(p => p.padding = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="borderRadius">Border Radius (px):</label>
                    <input
                        id="borderRadius"
                        type="number"
                        value={props.borderRadius || 4}
                        onChange={e => setProp(p => p.borderRadius = parseInt(e.target.value))}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="border">Border:</label>
                    <input
                        id="border"
                        type="text"
                        value={props.border || "1px solid #ccc"}
                        onChange={e => setProp(p => p.border = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="backgroundColor">Background Color:</label>
                    <input
                        id="backgroundColor"
                        type="color"
                        value={props.backgroundColor || "#ffffff"}
                        onChange={e => setProp(p => p.backgroundColor = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="fontSize">Font Size (px):</label>
                    <input
                        id="fontSize"
                        type="number"
                        value={props.fontSize || 14}
                        onChange={e => setProp(p => p.fontSize = parseInt(e.target.value))}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="fontColor">Font Color:</label>
                    <input
                        id="fontColor"
                        type="color"
                        value={props.fontColor || "#000000"}
                        onChange={e => setProp(p => p.fontColor = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Extra Settings */}
            <CollapsibleSection title="Extra">
                <div className={styles.inputGroup}>
                    <label htmlFor="customClass">Custom Class:</label>
                    <input
                        id="customClass"
                        type="text"
                        value={props.customClass || ""}
                        onChange={e => setProp(p => p.customClass = e.target.value)}
                    />
                </div>
            </CollapsibleSection>
        </div>
    );
};
