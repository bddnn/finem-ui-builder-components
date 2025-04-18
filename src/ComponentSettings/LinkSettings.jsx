import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css"

export const LinkSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    return (
        <div className={styles.settingsPanel}>
            {/* Content Settings */}
            <CollapsibleSection title="Content">
                <div className={styles.inputGroup}>
                    <label htmlFor="text">Link Text:</label>
                    <input
                        id="text"
                        type="text"
                        value={props.text || ""}
                        onChange={e => setProp(p => p.text = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="href">Link URL:</label>
                    <input
                        id="href"
                        type="text"
                        value={props.href || ""}
                        onChange={e => setProp(p => p.href = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Typography Settings */}
            <CollapsibleSection title="Typography">
                <div className={styles.inputGroup}>
                    <label htmlFor="fontSize">Font Size (px):</label>
                    <input
                        id="fontSize"
                        type="range"
                        min="8"
                        max="72"
                        value={props.fontSize || 16}
                        onChange={e => setProp(p => p.fontSize = e.target.value)}
                    />
                    <span>{props.fontSize || 16}px</span>
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
                    <label htmlFor="fontWeight">Font Weight:</label>
                    <select
                        id="fontWeight"
                        value={props.fontWeight || "normal"}
                        onChange={e => setProp(p => p.fontWeight = e.target.value)}
                    >
                        {["normal", "bold", "lighter", "bolder", "100", "200", "300", "400", "500", "600", "700", "800", "900"].map(weight => (
                            <option key={weight} value={weight}>{weight}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="textDecoration">Text Decoration:</label>
                    <select
                        id="textDecoration"
                        value={props.textDecoration || "underline"}
                        onChange={e => setProp(p => p.textDecoration = e.target.value)}
                    >
                        {["none", "underline", "overline", "line-through"].map(dec => (
                            <option key={dec} value={dec}>{dec}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="color">Text Color:</label>
                    <input
                        id="color"
                        type="color"
                        value={props.color || "blue"}
                        onChange={e => setProp(p => p.color = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Spacing Settings */}
            <CollapsibleSection title="Spacing">
                <div className={styles.inputGroup}>
                    <label htmlFor="padding">Padding (px):</label>
                    <input
                        id="padding"
                        type="range"
                        min="0"
                        max="50"
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
                        max="50"
                        value={props.margin || 0}
                        onChange={e => setProp(p => p.margin = e.target.value)}
                    />
                    <span>{props.margin || 0}px</span>
                </div>
            </CollapsibleSection>

            {/* Extra Settings */}
            <CollapsibleSection title="Extra">
                <div className={styles.inputGroup}>
                    <label htmlFor="target">Link Target:</label>
                    <select
                        id="target"
                        value={props.target || "_blank"}
                        onChange={e => setProp(p => p.target = e.target.value)}
                    >
                        <option value="_blank">_blank</option>
                        <option value="_self">_self</option>
                        <option value="_parent">_parent</option>
                        <option value="_top">_top</option>
                    </select>
                </div>
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
