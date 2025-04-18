import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css";

export const HeaderSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    const tagOptions = [
        { value: "h1", label: "Heading 1 (h1)" },
        { value: "h2", label: "Heading 2 (h2)" },
        { value: "h3", label: "Heading 3 (h3)" },
        { value: "h4", label: "Heading 4 (h4)" },
        { value: "h5", label: "Heading 5 (h5)" },
        { value: "h6", label: "Heading 6 (h6)" }
    ];

    const fontFamilyOptions = ["Arial", "Helvetica", "Times New Roman", "Georgia", "Courier New"];
    const fontWeightOptions = ["normal", "bold", "lighter", "bolder", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
    const fontStyleOptions = ["normal", "italic", "oblique"];
    const textAlignOptions = ["left", "center", "right", "justify"];
    const textDecorationOptions = ["none", "underline", "overline", "line-through"];

    return (
        <div className={styles.settingsPanel}>
            <CollapsibleSection title="Content">
                <div className={styles.inputGroup}>
                    <label htmlFor="text">Text:</label>
                    <input
                        id="text"
                        type="text"
                        value={props.text || ""}
                        onChange={e => setProp(p => p.text = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="tagName">HTML Tag:</label>
                    <select
                        id="tagName"
                        value={props.tagName || "h1"}
                        onChange={e => setProp(p => p.tagName = e.target.value)}
                    >
                        {tagOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Typography">
                <div className={styles.inputGroup}>
                    <label htmlFor="fontSize">Font Size (px):</label>
                    <input
                        id="fontSize"
                        type="range"
                        min="8"
                        max="72"
                        value={props.fontSize || 24}
                        onChange={e => setProp(p => p.fontSize = e.target.value)}
                    />
                    <span>{props.fontSize || 24}px</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="fontFamily">Font Family:</label>
                    <select
                        id="fontFamily"
                        value={props.fontFamily || "Arial"}
                        onChange={e => setProp(p => p.fontFamily = e.target.value)}
                    >
                        {fontFamilyOptions.map(font => (
                            <option key={font} value={font}>{font}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="fontWeight">Font Weight:</label>
                    <select
                        id="fontWeight"
                        value={props.fontWeight || "bold"}
                        onChange={e => setProp(p => p.fontWeight = e.target.value)}
                    >
                        {fontWeightOptions.map(weight => (
                            <option key={weight} value={weight}>{weight}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="fontStyle">Font Style:</label>
                    <select
                        id="fontStyle"
                        value={props.fontStyle || "normal"}
                        onChange={e => setProp(p => p.fontStyle = e.target.value)}
                    >
                        {fontStyleOptions.map(style => (
                            <option key={style} value={style}>{style}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="textAlign">Text Align:</label>
                    <select
                        id="textAlign"
                        value={props.textAlign || "left"}
                        onChange={e => setProp(p => p.textAlign = e.target.value)}
                    >
                        {textAlignOptions.map(align => (
                            <option key={align} value={align}>{align}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="color">Text Color:</label>
                    <input
                        id="color"
                        type="color"
                        value={props.color || "#000000"}
                        onChange={e => setProp(p => p.color = e.target.value)}
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
                    <label htmlFor="lineHeight">Line Height:</label>
                    <input
                        id="lineHeight"
                        type="range"
                        min="1"
                        max="3"
                        step="0.1"
                        value={props.lineHeight || 1.5}
                        onChange={e => setProp(p => p.lineHeight = e.target.value)}
                    />
                    <span>{props.lineHeight || 1.5}</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="letterSpacing">Letter Spacing (px):</label>
                    <input
                        id="letterSpacing"
                        type="range"
                        min="0"
                        max="20"
                        value={props.letterSpacing || 0}
                        onChange={e => setProp(p => p.letterSpacing = e.target.value)}
                    />
                    <span>{props.letterSpacing || 0}px</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="textDecoration">Text Decoration:</label>
                    <select
                        id="textDecoration"
                        value={props.textDecoration || "none"}
                        onChange={e => setProp(p => p.textDecoration = e.target.value)}
                    >
                        {textDecorationOptions.map(dec => (
                            <option key={dec} value={dec}>{dec}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="textShadow">Text Shadow:</label>
                    <input
                        id="textShadow"
                        type="text"
                        placeholder="e.g., 2px 2px 5px rgba(0,0,0,0.3)"
                        value={props.textShadow || ""}
                        onChange={e => setProp(p => p.textShadow = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="Spacing">
                <div className={styles.inputGroup}>
                    <label htmlFor="padding">Padding (px):</label>
                    <input
                        id="padding"
                        type="range"
                        min="0"
                        max="100"
                        value={props.padding || 0}
                        onChange={e => setProp(p => p.padding = e.target.value)}
                    />
                    <span>{props.padding || 0}px</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="margin">Margin (px):</label>
                    <input
                        id="margin"
                        type="range"
                        min="0"
                        max="100"
                        value={props.margin || 0}
                        onChange={e => setProp(p => p.margin = e.target.value)}
                    />
                    <span>{props.margin || 0}px</span>
                </div>
            </CollapsibleSection>
        </div>
    );
};