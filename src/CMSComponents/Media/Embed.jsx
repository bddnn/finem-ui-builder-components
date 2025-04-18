import React from "react";
import { useNode } from "@craftjs/core";
import { EmbedSettings } from "../../ComponentSettings/EmbedSettings.jsx";

export const Embed = ({
                          src = "https://www.youtube.com/embed/dQw4w9WgXcQ",
                          width = "100%",
                          height = "400px",
                          allowFullScreen = true,
                          title = "Embedded Content"
                      }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <iframe
            ref={(ref) => connect(drag(ref))}
            src={src}
            width={width}
            height={height}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={allowFullScreen}
            style={{ display: "block" }}
        />
    );
};

Embed.craft = {
    props: {
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        width: "100%",
        height: "400px",
        allowFullScreen: true,
        title: "Embedded Content"
    },
    related: {
        settings: EmbedSettings
    }
};
