import React from "react";
import { useNode } from "@craftjs/core";
import { VideoSettings } from "../../ComponentSettings/VideoSettings.jsx";

export const Video = ({
                          src = "https://www.w3schools.com/html/mov_bbb.mp4",
                          width = "100%",
                          height = "auto",
                          controls = true
                      }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <video
            ref={(ref) => connect(drag(ref))}
            src={src}
            width={width}
            height={height}
            controls={controls}
            style={{ display: "block" }}
        >
            Twoja przeglądarka nie wspiera elementu wideo.
        </video>
    );
};

Video.craft = {
    props: {
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        width: "100%",
        height: "auto",
        controls: true
    },
    related: {
        settings: VideoSettings
    }
};
