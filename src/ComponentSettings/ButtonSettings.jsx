import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css"

export const ButtonSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    // Opcje dla pozycji ikony
    const iconPositionOptions = [
        { value: "left", label: "Left" },
        { value: "right", label: "Right" }
    ];

    // Opcje dla presetów (można dodać więcej lub pobierać dynamicznie)
    const presetOptions = [
        { value: "custom", label: "Custom" },
        { value: "primary", label: "Primary" },
        { value: "secondary", label: "Secondary" }
    ];

    return (
        <div className={styles.settingsPanel}>
            {/* Content Settings */}
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
                    <label htmlFor="onClickAction">onClick Action:</label>
                    <input
                        id="onClickAction"
                        type="text"
                        placeholder="e.g., alert('Hello!')"
                        value={props.onClickAction || ""}
                        onChange={e => setProp(p => p.onClickAction = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="icon">Icon URL:</label>
                    <input
                        id="icon"
                        type="text"
                        placeholder="Image URL for icon"
                        value={props.icon || ""}
                        onChange={e => setProp(p => p.icon = e.target.value)}
                    />
                </div>
                {props.icon && (
                    <div className={styles.inputGroup}>
                        <label htmlFor="iconPosition">Icon Position:</label>
                        <select
                            id="iconPosition"
                            value={props.iconPosition || "left"}
                            onChange={e => setProp(p => p.iconPosition = e.target.value)}
                        >
                            {iconPositionOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                )}
                {props.icon && (
                    <div className={styles.inputGroup}>
                        <label htmlFor="iconSpacing">Icon Spacing (px):</label>
                        <input
                            id="iconSpacing"
                            type="number"
                            value={props.iconSpacing || 8}
                            onChange={e => setProp(p => p.iconSpacing = parseInt(e.target.value))}
                        />
                    </div>
                )}
            </CollapsibleSection>

            {/* Typography Settings */}
            <CollapsibleSection title="Typography">
                <div className={styles.inputGroup}>
                    <label htmlFor="fontSize">Font Size (px):</label>
                    <input
                        id="fontSize"
                        type="number"
                        value={props.fontSize || 16}
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
                    <label htmlFor="fontWeight">Font Weight:</label>
                    <input
                        id="fontWeight"
                        type="text"
                        value={props.fontWeight || "normal"}
                        onChange={e => setProp(p => p.fontWeight = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="textTransform">Text Transform:</label>
                    <select
                        id="textTransform"
                        value={props.textTransform || "none"}
                        onChange={e => setProp(p => p.textTransform = e.target.value)}
                    >
                        <option value="none">None</option>
                        <option value="uppercase">Uppercase</option>
                        <option value="lowercase">Lowercase</option>
                        <option value="capitalize">Capitalize</option>
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="letterSpacing">Letter Spacing (px):</label>
                    <input
                        id="letterSpacing"
                        type="number"
                        value={props.letterSpacing || 0}
                        onChange={e => setProp(p => p.letterSpacing = parseInt(e.target.value))}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="lineHeight">Line Height:</label>
                    <input
                        id="lineHeight"
                        type="number"
                        step="0.1"
                        value={props.lineHeight || 1.5}
                        onChange={e => setProp(p => p.lineHeight = parseFloat(e.target.value))}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="fontColor">Font Color:</label>
                    <input
                        id="fontColor"
                        type="color"
                        value={props.fontColor || "#ffffff"}
                        onChange={e => setProp(p => p.fontColor = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Colors & Background */}
            <CollapsibleSection title="Colors & Background">
                <div className={styles.inputGroup}>
                    <label htmlFor="backgroundColor">Background Color:</label>
                    <input
                        id="backgroundColor"
                        type="color"
                        value={props.backgroundColor || "#007bff"}
                        onChange={e => setProp(p => p.backgroundColor = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="hoverBackgroundColor">Hover Background Color:</label>
                    <input
                        id="hoverBackgroundColor"
                        type="color"
                        value={props.hoverBackgroundColor || "#0056b3"}
                        onChange={e => setProp(p => p.hoverBackgroundColor = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="activeBackgroundColor">Active Background Color:</label>
                    <input
                        id="activeBackgroundColor"
                        type="color"
                        value={props.activeBackgroundColor || ""}
                        onChange={e => setProp(p => p.activeBackgroundColor = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="gradient">Gradient (comma separated colors):</label>
                    <input
                        id="gradient"
                        type="text"
                        placeholder="e.g., #ff0000, #00ff00"
                        value={props.gradient ? props.gradient.colors.join(', ') : ""}
                        onChange={e => {
                            const colors = e.target.value.split(',').map(c => c.trim()).filter(Boolean);
                            setProp(p => p.gradient = { ...(p.gradient || {}), colors });
                        }}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="gradientDirection">Gradient Direction:</label>
                    <input
                        id="gradientDirection"
                        type="text"
                        placeholder="e.g., to right"
                        value={props.gradient ? props.gradient.direction : ""}
                        onChange={e => setProp(p => p.gradient = { ...(p.gradient || {}), direction: e.target.value })}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="hoverGradient">Hover Gradient (comma separated colors):</label>
                    <input
                        id="hoverGradient"
                        type="text"
                        placeholder="e.g., #0000ff, #00ffff"
                        value={props.hoverGradient ? props.hoverGradient.colors.join(', ') : ""}
                        onChange={e => {
                            const colors = e.target.value.split(',').map(c => c.trim()).filter(Boolean);
                            setProp(p => p.hoverGradient = { ...(p.hoverGradient || {}), colors });
                        }}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="hoverGradientDirection">Hover Gradient Direction:</label>
                    <input
                        id="hoverGradientDirection"
                        type="text"
                        placeholder="e.g., to left"
                        value={props.hoverGradient ? props.hoverGradient.direction : ""}
                        onChange={e => setProp(p => p.hoverGradient = { ...(p.hoverGradient || {}), direction: e.target.value })}
                    />
                </div>
            </CollapsibleSection>

            {/* Spacing Settings */}
            <CollapsibleSection title="Spacing">
                <div className={styles.inputGroup}>
                    <label htmlFor="padding">Padding:</label>
                    <input
                        id="padding"
                        type="text"
                        placeholder="e.g., 10px 20px"
                        value={props.padding || "10px 20px"}
                        onChange={e => setProp(p => p.padding = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="margin">Margin:</label>
                    <input
                        id="margin"
                        type="text"
                        placeholder="e.g., 0"
                        value={props.margin || "0"}
                        onChange={e => setProp(p => p.margin = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Border & Shadow Settings */}
            <CollapsibleSection title="Border & Shadow">
                <div className={styles.inputGroup}>
                    <label htmlFor="border">Border:</label>
                    <input
                        id="border"
                        type="text"
                        placeholder="e.g., none or 1px solid #000"
                        value={props.border || "none"}
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
                        value={props.borderColor || "#007bff"}
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
                <div className={styles.inputGroup}>
                    <label htmlFor="boxShadow">Box Shadow:</label>
                    <input
                        id="boxShadow"
                        type="text"
                        placeholder="e.g., 0 2px 4px rgba(0,0,0,0.1)"
                        value={props.boxShadow || "0 2px 4px rgba(0,0,0,0.1)"}
                        onChange={e => setProp(p => p.boxShadow = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="hoverBoxShadow">Hover Box Shadow:</label>
                    <input
                        id="hoverBoxShadow"
                        type="text"
                        placeholder="e.g., 0 4px 8px rgba(0,0,0,0.2)"
                        value={props.hoverBoxShadow || ""}
                        onChange={e => setProp(p => p.hoverBoxShadow = e.target.value)}
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
                        value={props.transition || "all 0.3s ease"}
                        onChange={e => setProp(p => p.transition = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="cursor">Cursor:</label>
                    <input
                        id="cursor"
                        type="text"
                        placeholder="e.g., pointer"
                        value={props.cursor || "pointer"}
                        onChange={e => setProp(p => p.cursor = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="disabled">Disabled:</label>
                    <select
                        id="disabled"
                        value={props.disabled ? "true" : "false"}
                        onChange={e => setProp(p => p.disabled = e.target.value === "true")}
                    >
                        <option value="false">False</option>
                        <option value="true">True</option>
                    </select>
                </div>
                {props.disabled && (
                    <div className={styles.inputGroup}>
                        <label htmlFor="disabledStyle">Disabled Style (CSS):</label>
                        <input
                            id="disabledStyle"
                            type="text"
                            placeholder="e.g., opacity: 0.6; cursor: not-allowed"
                            value={props.disabledStyle || "opacity: 0.6; cursor: not-allowed"}
                            onChange={e => setProp(p => p.disabledStyle = e.target.value)}
                        />
                    </div>
                )}
                <div className={styles.inputGroup}>
                    <label htmlFor="preset">Preset:</label>
                    <select
                        id="preset"
                        value={props.preset || "custom"}
                        onChange={e => setProp(p => p.preset = e.target.value)}
                    >
                        {presetOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
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
