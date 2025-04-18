import React from "react";
import { useNode } from "@craftjs/core";
import { CollapsibleSection } from "../misc/CollapsibleSection";
import styles from "./styles.module.css"

export const ContainerSettings = () => {
    const { actions: { setProp }, props } = useNode((node) => ({ props: node.data.props }));

    // Define common option arrays
    const floatOptions = ["none", "left", "right"];
    const displayOptions = ["block", "inline", "flex", "grid"];
    const positionOptions = ["static", "relative", "absolute", "fixed", "sticky"];
    const flexDirectionOptions = ["row", "row-reverse", "column", "column-reverse"];
    const justifyContentOptions = ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"];
    const alignItemsOptions = ["flex-start", "center", "flex-end", "stretch", "baseline"];
    const flexWrapOptions = ["nowrap", "wrap", "wrap-reverse"];

    return (
        <div className={styles.settingsPanel}>
            {/* General Settings */}
            <CollapsibleSection title="General">
                <div className={styles.inputGroup}>
                    <label htmlFor="float">Float:</label>
                    <select
                        id="float"
                        value={props.float || "none"}
                        onChange={e => setProp(p => p.float = e.target.value)}
                    >
                        {floatOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="display">Display:</label>
                    <select
                        id="display"
                        value={props.display || "block"}
                        onChange={e => setProp(p => p.display = e.target.value)}
                    >
                        {displayOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="position">Position:</label>
                    <select
                        id="position"
                        value={props.position || "static"}
                        onChange={e => setProp(p => p.position = e.target.value)}
                    >
                        {positionOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                {/* Numeric position offsets with sliders */}
                <div className={styles.inputGroup}>
                    <label htmlFor="top">Top (px):</label>
                    <input
                        id="top"
                        type="range"
                        min="0"
                        max="500"
                        value={props.top || 0}
                        onChange={e => setProp(p => p.top = e.target.value)}
                    />
                    <span>{props.top || 0}px</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="right">Right (px):</label>
                    <input
                        id="right"
                        type="range"
                        min="0"
                        max="500"
                        value={props.right || 0}
                        onChange={e => setProp(p => p.right = e.target.value)}
                    />
                    <span>{props.right || 0}px</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="left">Left (px):</label>
                    <input
                        id="left"
                        type="range"
                        min="0"
                        max="500"
                        value={props.left || 0}
                        onChange={e => setProp(p => p.left = e.target.value)}
                    />
                    <span>{props.left || 0}px</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="bottom">Bottom (px):</label>
                    <input
                        id="bottom"
                        type="range"
                        min="0"
                        max="500"
                        value={props.bottom || 0}
                        onChange={e => setProp(p => p.bottom = e.target.value)}
                    />
                    <span>{props.bottom || 0}px</span>
                </div>
            </CollapsibleSection>

            {/* Dimension Settings */}
            <CollapsibleSection title="Dimension">
                <div className={styles.inputGroup}>
                    <label htmlFor="width">Width:</label>
                    <input
                        id="width"
                        type="text"
                        placeholder="e.g., 100%, 500px, auto"
                        value={props.width || "auto"}
                        onChange={e => setProp(p => p.width = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="height">Height:</label>
                    <input
                        id="height"
                        type="text"
                        placeholder="e.g., auto, 500px"
                        value={props.height || "auto"}
                        onChange={e => setProp(p => p.height = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="minWidth">Min Width:</label>
                    <input
                        id="minWidth"
                        type="text"
                        placeholder="e.g., 200px"
                        value={props.minWidth || "auto"}
                        onChange={e => setProp(p => p.minWidth = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="minHeight">Min Height:</label>
                    <input
                        id="minHeight"
                        type="text"
                        placeholder="e.g., 200px"
                        value={props.minHeight || "auto"}
                        onChange={e => setProp(p => p.minHeight = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="maxWidth">Max Width:</label>
                    <input
                        id="maxWidth"
                        type="text"
                        placeholder="e.g., 1200px, none"
                        value={props.maxWidth || "none"}
                        onChange={e => setProp(p => p.maxWidth = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="maxHeight">Max Height:</label>
                    <input
                        id="maxHeight"
                        type="text"
                        placeholder="e.g., 800px, none"
                        value={props.maxHeight || "none"}
                        onChange={e => setProp(p => p.maxHeight = e.target.value)}
                    />
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
            </CollapsibleSection>

            {/* Typography Settings */}
            <CollapsibleSection title="Typography">
                <div className={styles.inputGroup}>
                    <label htmlFor="fontFamily">Font Family:</label>
                    <select
                        id="fontFamily"
                        value={props.fontFamily || "Arial"}
                        onChange={e => setProp(p => p.fontFamily = e.target.value)}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Courier New">Courier New</option>
                    </select>
                </div>
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
                    <label htmlFor="fontWeight">Font Weight:</label>
                    <select
                        id="fontWeight"
                        value={props.fontWeight || "normal"}
                        onChange={e => setProp(p => p.fontWeight = e.target.value)}
                    >
                        <option value="normal">Normal</option>
                        <option value="bold">Bold</option>
                        <option value="lighter">Lighter</option>
                        <option value="bolder">Bolder</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                    </select>
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
                    <label htmlFor="color">Text Color:</label>
                    <input
                        id="color"
                        type="color"
                        value={props.color || "#000000"}
                        onChange={e => setProp(p => p.color = e.target.value)}
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
                    <label htmlFor="textAlign">Text Align:</label>
                    <select
                        id="textAlign"
                        value={props.textAlign || "left"}
                        onChange={e => setProp(p => p.textAlign = e.target.value)}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                        <option value="justify">Justify</option>
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="textDecoration">Text Decoration:</label>
                    <select
                        id="textDecoration"
                        value={props.textDecoration || "none"}
                        onChange={e => setProp(p => p.textDecoration = e.target.value)}
                    >
                        <option value="none">None</option>
                        <option value="underline">Underline</option>
                        <option value="line-through">Line-through</option>
                        <option value="overline">Overline</option>
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

            {/* Decorations Settings */}
            <CollapsibleSection title="Decorations">
                <div className={styles.inputGroup}>
                    <label htmlFor="opacity">Opacity:</label>
                    <input
                        id="opacity"
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={props.opacity || 1}
                        onChange={e => setProp(p => p.opacity = e.target.value)}
                    />
                    <span>{props.opacity || 1}</span>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="borderRadius">Border Radius (px):</label>
                    <input
                        id="borderRadius"
                        type="range"
                        min="0"
                        max="100"
                        value={props.borderRadius || 0}
                        onChange={e => setProp(p => p.borderRadius = e.target.value)}
                    />
                    <span>{props.borderRadius || 0}px</span>
                </div>
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
                    <label htmlFor="boxShadow">Box Shadow:</label>
                    <input
                        id="boxShadow"
                        type="text"
                        placeholder="e.g., 2px 2px 5px rgba(0,0,0,0.3)"
                        value={props.boxShadow || ""}
                        onChange={e => setProp(p => p.boxShadow = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="background">Background:</label>
                    <input
                        id="background"
                        type="color"
                        value={props.background || "#ffffff"}
                        onChange={e => setProp(p => p.background = e.target.value)}
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
                    <label htmlFor="perspective">Perspective:</label>
                    <input
                        id="perspective"
                        type="text"
                        placeholder="e.g., 500px"
                        value={props.perspective || ""}
                        onChange={e => setProp(p => p.perspective = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="transform">Transform:</label>
                    <input
                        id="transform"
                        type="text"
                        placeholder="e.g., rotate(5deg)"
                        value={props.transform || ""}
                        onChange={e => setProp(p => p.transform = e.target.value)}
                    />
                </div>
            </CollapsibleSection>

            {/* Grid Layout Settings */}
            <CollapsibleSection title="Grid Layout">
                <div className={styles.inputGroup}>
                    <label htmlFor="gridTemplateColumns">Grid Template Columns:</label>
                    <input
                        id="gridTemplateColumns"
                        type="text"
                        placeholder="e.g., repeat(3, 1fr)"
                        value={props.gridTemplateColumns || ""}
                        onChange={e => setProp(p => p.gridTemplateColumns = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="gridTemplateRows">Grid Template Rows:</label>
                    <input
                        id="gridTemplateRows"
                        type="text"
                        placeholder="e.g., auto"
                        value={props.gridTemplateRows || ""}
                        onChange={e => setProp(p => p.gridTemplateRows = e.target.value)}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="gridGap">Grid Gap (px):</label>
                    <input
                        id="gridGap"
                        type="range"
                        min="0"
                        max="50"
                        value={props.gridGap || 0}
                        onChange={e => setProp(p => p.gridGap = e.target.value)}
                    />
                    <span>{props.gridGap || 0}px</span>
                </div>
            </CollapsibleSection>

            {/* Flex Layout Settings */}
            <CollapsibleSection title="Flex Layout">
                <div className={styles.inputGroup}>
                    <label htmlFor="flexDirection">Flex Direction:</label>
                    <select
                        id="flexDirection"
                        value={props.flexDirection || "row"}
                        onChange={e => setProp(p => p.flexDirection = e.target.value)}
                    >
                        {flexDirectionOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="justifyContent">Justify Content:</label>
                    <select
                        id="justifyContent"
                        value={props.justifyContent || "flex-start"}
                        onChange={e => setProp(p => p.justifyContent = e.target.value)}
                    >
                        {justifyContentOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="alignItems">Align Items:</label>
                    <select
                        id="alignItems"
                        value={props.alignItems || "flex-start"}
                        onChange={e => setProp(p => p.alignItems = e.target.value)}
                    >
                        {alignItemsOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="flexWrap">Flex Wrap:</label>
                    <select
                        id="flexWrap"
                        value={props.flexWrap || "nowrap"}
                        onChange={e => setProp(p => p.flexWrap = e.target.value)}
                    >
                        {flexWrapOptions.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
                {/* Here you could include an interactive preview or generator for flex layouts */}
            </CollapsibleSection>
        </div>
    );
};
