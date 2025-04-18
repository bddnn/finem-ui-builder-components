import React from "react";
import { useNode } from "@craftjs/core";
import { LinkSettings } from "../../ComponentSettings/LinkSettings.jsx";

export const Link = ({
                         text = "Kliknij mnie",
                         href = "https://example.com",
                         color = "blue",
                         fontSize = 16,
                         target = "_blank"
                     }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div ref={(ref) => connect(drag(ref))} style={{ display: "inline-block" }}>
            <a
                href={href}
                target={target}
                style={{
                    color,
                    fontSize: `${fontSize}px`,
                    textDecoration: "underline",
                    cursor: "pointer"
                }}
            >
                {text}
            </a>
        </div>
    );

};

Link.craft = {
    props: {
        text: "Kliknij mnie",
        href: "https://example.com",
        color: "blue",
        fontSize: 16,
        target: "_blank"
    },
    related: {
        settings: LinkSettings
    }
};
