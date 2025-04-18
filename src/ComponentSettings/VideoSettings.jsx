import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css"

export const VideoSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    return (
        <div className={styles.settingsPanel}>
            {/* General Settings */}
            <CollapsibleSection title="General">
                <div className={styles.inputGroup}>
                    <label htmlFor="src">Video URL:</label>
                    <input
                        id="src"
                        type="text"
                        value={props.src || ""}
                        onChange={e => setProp(p => p.src = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="controls">Show Controls:</label>
                    <select
                        id="controls"
                        value={props.controls ? "true" : "false"}
                        onChange={e => setProp(p => p.controls = e.target.value === "true")}
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </CollapsibleSection>

            {/* Dimensions Settings */}
            <CollapsibleSection title="Dimensions">
                <div className={styles.inputGroup}>
                    <label htmlFor="width">Width:</label>
                    <input
                        id="width"
                        type="text"
                        value={props.width || "100%"}
                        onChange={e => setProp(p => p.width = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="height">Height:</label>
                    <input
                        id="height"
                        type="text"
                        value={props.height || "auto"}
                        onChange={e => setProp(p => p.height = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Styling Settings */}
            <CollapsibleSection title="Styling">
                <div className={styles.inputGroup}>
                    <label htmlFor="border">Border:</label>
                    <input
                        id="border"
                        type="text"
                        placeholder="e.g., 1px solid #000"
                        value={props.border || ""}
                        onChange={e => setProp(p => p.border = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="borderRadius">Border Radius (px):</label>
                    <input
                        id="borderRadius"
                        type="number"
                        value={props.borderRadius || 0}
                        onChange={e => setProp(p => p.borderRadius = parseInt(e.target.value))}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="boxShadow">Box Shadow:</label>
                    <input
                        id="boxShadow"
                        type="text"
                        placeholder="e.g., 0 2px 4px rgba(0,0,0,0.1)"
                        value={props.boxShadow || ""}
                        onChange={e => setProp(p => p.boxShadow = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Spacing Settings */}
            <CollapsibleSection title="Spacing">
                <div className={styles.inputGroup}>
                    <label htmlFor="margin">Margin:</label>
                    <input
                        id="margin"
                        type="text"
                        placeholder="e.g., 10px"
                        value={props.margin || ""}
                        onChange={e => setProp(p => p.margin = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="padding">Padding:</label>
                    <input
                        id="padding"
                        type="text"
                        placeholder="e.g., 5px"
                        value={props.padding || ""}
                        onChange={e => setProp(p => p.padding = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Extra Settings */}
            <CollapsibleSection title="Extra">
                <div className={styles.inputGroup}>
                    <label htmlFor="transition">Transition:</label>
                    <input
                        id="transition"
                        type="text"
                        placeholder="e.g., all 0.3s ease"
                        value={props.transition || ""}
                        onChange={e => setProp(p => p.transition = e.target.value)}
                    />
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
