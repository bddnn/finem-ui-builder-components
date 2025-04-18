import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css"

export const InputSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    // Opcje dla typów input
    const typeOptions = [
        { value: "text", label: "Text" },
        { value: "password", label: "Password" },
        { value: "email", label: "Email" },
        { value: "number", label: "Number" },
        { value: "search", label: "Search" }
    ];

    return (
        <div className={styles.settingsPanel}>
            {/* Content Settings */}
            <CollapsibleSection title="Content">
                <div className={styles.inputGroup}>
                    <label htmlFor="type">Type:</label>
                    <select
                        id="type"
                        value={props.type || "text"}
                        onChange={e => setProp(p => p.type = e.target.value)}
                    >
                        {typeOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="placeholder">Placeholder:</label>
                    <input
                        id="placeholder"
                        type="text"
                        placeholder="Enter placeholder..."
                        value={props.placeholder || ""}
                        onChange={e => setProp(p => p.placeholder = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Typography Settings */}
            <CollapsibleSection title="Typography">
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
                    <label htmlFor="fontFamily">Font Family:</label>
                    <input
                        id="fontFamily"
                        type="text"
                        value={props.fontFamily || "Arial"}
                        onChange={e => setProp(p => p.fontFamily = e.target.value)}
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
                <div className={styles.inputGroup}>
                    <label htmlFor="textAlign">Text Align:</label>
                    <select
                        id="textAlign"
                        value={props.textAlign || "left"}
                        onChange={e => setProp(p => p.textAlign = e.target.value)}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
            </CollapsibleSection>

            {/* Colors & Background */}
            <CollapsibleSection title="Colors & Background">
                <div className={styles.inputGroup}>
                    <label htmlFor="backgroundColor">Background Color:</label>
                    <input
                        id="backgroundColor"
                        type="color"
                        value={props.backgroundColor || "#ffffff"}
                        onChange={e => setProp(p => p.backgroundColor = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Spacing Settings */}
            <CollapsibleSection title="Spacing">
                <div className={styles.inputGroup}>
                    <label htmlFor="width">Width:</label>
                    <input
                        id="width"
                        type="text"
                        placeholder="e.g., 200px or 100%"
                        value={props.width || "200px"}
                        onChange={e => setProp(p => p.width = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="padding">Padding:</label>
                    <input
                        id="padding"
                        type="text"
                        placeholder="e.g., 8px"
                        value={props.padding || "8px"}
                        onChange={e => setProp(p => p.padding = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="margin">Margin:</label>
                    <input
                        id="margin"
                        type="text"
                        placeholder="e.g., 0 or 10px 0"
                        value={props.margin || ""}
                        onChange={e => setProp(p => p.margin = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Border Settings */}
            <CollapsibleSection title="Border">
                <div className={styles.inputGroup}>
                    <label htmlFor="border">Border:</label>
                    <input
                        id="border"
                        type="text"
                        placeholder="e.g., 1px solid #ccc"
                        value={props.border || "1px solid #ccc"}
                        onChange={e => setProp(p => p.border = e.target.value)}
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
                    <label htmlFor="borderColor">Border Color:</label>
                    <input
                        id="borderColor"
                        type="color"
                        value={props.borderColor || "#cccccc"}
                        onChange={e => setProp(p => p.borderColor = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="borderWidth">Border Width (px):</label>
                    <input
                        id="borderWidth"
                        type="number"
                        value={props.borderWidth || 1}
                        onChange={e => setProp(p => p.borderWidth = parseInt(e.target.value))}
                    />
                </div>
            </CollapsibleSection>

            {/* Extra Settings */}
            <CollapsibleSection title="Extra">
                <div className={styles.inputGroup}>
                    <label htmlFor="outline">Outline:</label>
                    <input
                        id="outline"
                        type="text"
                        placeholder="e.g., none or 2px solid #000"
                        value={props.outline || "none"}
                        onChange={e => setProp(p => p.outline = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="customClass">Custom Class:</label>
                    <input
                        id="customClass"
                        type="text"
                        placeholder="Additional CSS classes"
                        value={props.customClass || ""}
                        onChange={e => setProp(p => p.customClass = e.target.value)}
                    />
                </div>
            </CollapsibleSection>
        </div>
    );
};
