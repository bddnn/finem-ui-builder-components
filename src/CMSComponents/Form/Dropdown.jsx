import { useNode } from "@craftjs/core";
import React from "react";
import { DropdownSettings } from "../../ComponentSettings/DropdownSettings.jsx";

export const Dropdown = ({
                             options = ["Opcja 1"],
                             selected = "",
                             width = "200px",
                             padding = "8px",
                             borderRadius = "4px",
                             border = "1px solid #ccc",
                             backgroundColor = "#ffffff",
                             fontSize = 14,
                             fontColor = "#000000",
                             customClass = ""
                         }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <select
            ref={(ref) => connect(drag(ref))}
            value={selected}
            style={{
                width,
                padding,
                borderRadius,
                border,
                backgroundColor,
                fontSize,
                color: fontColor,
                outline: "none"
            }}
            className={customClass}
            onChange={() => {}}
        >
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

Dropdown.craft = {
    props: {
        options: ["Opcja 1"],
        selected: "",
        width: "200px",
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        backgroundColor: "#ffffff",
        fontSize: 14,
        fontColor: "#000000",
        customClass: ""
    },
    related: {
        settings: DropdownSettings
    }
};
