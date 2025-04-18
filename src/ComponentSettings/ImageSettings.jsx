import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css"

export const ImageSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    return (
        <div className={styles.settingsPanel}>
            {/* General Settings */}
            <CollapsibleSection title="General">
                <div className={styles.inputGroup}>
                    <label htmlFor="src">Image URL:</label>
                    <input
                        id="src"
                        type="text"
                        value={props.src || ""}
                        onChange={e => setProp(p => p.src = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="alt">Alt Text:</label>
                    <input
                        id="alt"
                        type="text"
                        value={props.alt || ""}
                        onChange={e => setProp(p => p.alt = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Dimensions */}
            <CollapsibleSection title="Dimensions">
                <div className={styles.inputGroup}>
                    <label htmlFor="width">Width:</label>
                    <input
                        id="width"
                        type="text"
                        placeholder="e.g., 150px or 100%"
                        value={props.width || ""}
                        onChange={e => setProp(p => p.width = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="height">Height:</label>
                    <input
                        id="height"
                        type="text"
                        placeholder="e.g., 150px"
                        value={props.height || ""}
                        onChange={e => setProp(p => p.height = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Styling */}
            <CollapsibleSection title="Styling">
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
                    <label htmlFor="shadow">Box Shadow:</label>
                    <input
                        id="shadow"
                        type="text"
                        placeholder="e.g., 0 2px 4px rgba(0,0,0,0.1)"
                        value={props.shadow || "none"}
                        onChange={e => setProp(p => p.shadow = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="objectFit">Object Fit:</label>
                    <select
                        id="objectFit"
                        value={props.objectFit || "cover"}
                        onChange={e => setProp(p => p.objectFit = e.target.value)}
                    >
                        <option value="cover">Cover</option>
                        <option value="contain">Contain</option>
                        <option value="fill">Fill</option>
                        <option value="none">None</option>
                        <option value="scale-down">Scale Down</option>
                    </select>
                </div>
            </CollapsibleSection>

            {/* Spacing */}
            <CollapsibleSection title="Spacing">
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
                <div className={styles.inputGroup}>
                    <label htmlFor="padding">Padding:</label>
                    <input
                        id="padding"
                        type="text"
                        placeholder="e.g., 0 or 10px"
                        value={props.padding || ""}
                        onChange={e => setProp(p => p.padding = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Extra */}
            <CollapsibleSection title="Extra">
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
