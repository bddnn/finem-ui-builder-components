import { useNode } from "@craftjs/core";
import styles from "../styles/Container.module.css";
import { ContainerSettings } from "../../ComponentSettings/ContainerSettings.jsx";

export const Container = ({
                              background = "transparent",
                              padding = 0,
                              margin = 0,
                              width = "auto",
                              height = "auto",
                              minHeight = "auto",
                              display = "block",
                              flexDirection = "row",
                              justifyContent = "flex-start",
                              alignItems = "flex-start",
                              flexWrap = "nowrap",
                              gridTemplateColumns = "",
                              gridTemplateRows = "",
                              gridGap = 0,
                              position = "static",
                              top = "auto",
                              right = "auto",
                              bottom = "auto",
                              left = "auto",
                              zIndex = "auto",
                              borderWidth = 0,
                              borderStyle = "solid",
                              borderColor = "#000000",
                              borderRadius = 0,
                              boxShadow = "",
                              opacity = 1,
                              canvas, // przyjmujemy prop canvas
                              children
                          }) => {
    const { id, connectors: { connect, drag }, hovered } = useNode((node) => ({
        hovered: node.events.hovered,
    }));

    return (
        <div
            ref={ref => {
                // Jeśli kontener działa jako canvas, podłączamy tylko connect,
                // aby był drop targetem, a nie elementem przeciągania.
                if (canvas) {
                    connect(ref);
                } else {
                    connect(drag(ref));
                }
            }}
            style={{
                background,
                padding: `${padding}px`,
                margin: `${margin}px`,
                width,
                height,
                minHeight,
                display,
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap,
                gridTemplateColumns,
                gridTemplateRows,
                gridGap: `${gridGap}px`,
                position,
                top,
                right,
                bottom,
                left,
                zIndex,
                borderWidth: `${borderWidth}px`,
                borderStyle,
                borderColor,
                borderRadius: `${borderRadius}px`,
                boxShadow,
                opacity,
                // Tylko bezpośrednio podświetlony kontener otrzymuje obrys przerywany.
                outline: hovered ? "2px dashed #007bff" : "none",
            }}
            className={styles.craftjsContainer}
        >
            {children}
        </div>
    );
};

Container.craft = {
    props: {
        background: "rgba(101, 66, 54, 0.2)",
        padding: 0,
        margin: 0,
        width: "auto",
        height: "auto",
        minHeight: "auto",
        display: "block",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        gridTemplateColumns: "",
        gridTemplateRows: "",
        gridGap: 0,
        position: "static",
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
        zIndex: "auto",
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: "#000000",
        borderRadius: 0,
        boxShadow: "",
        opacity: 1,
    },
    related: {
        settings: ContainerSettings
    }
};
