import { useEffect, useState } from "react";
import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { TextSettings } from "../../ComponentSettings/TextSettings.jsx";

export const Text = ({
                         text,
                         fontSize,
                         fontFamily,
                         fontWeight,
                         fontStyle,
                         textAlign,
                         color,
                         backgroundColor,
                         lineHeight,
                         letterSpacing,
                         textDecoration,
                         padding,
                         margin,
                         textShadow,
                         tagName
                     }) => {
    const { connectors: { connect, drag }, hasSelectedNode, actions, node } = useNode((state) => ({
        hasSelectedNode: state.events.selected,
        node: state.node
    }));

    const [editable, setEditable] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!hasSelectedNode) {
            setEditable(false);
        }
    }, [hasSelectedNode]);

    const handleDelete = () => {
        console.log("Delete action triggered for Text");
    };

    // Use onMouseOver/Out with relatedTarget checks to avoid nested hovers
    const handleMouseOver = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setHovered(true);
        }
    };

    const handleMouseOut = (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setHovered(false);
        }
    };

    // Retrieve the component name from the node (with a fallback)
    console.log(node + " NODE")
    const componentName =  node ? node.data.displayName : "Text";

    return (
        <div
            ref={ref => connect(drag(ref))}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => setEditable(true)}
            style={{
                margin: `${margin}px`,
                cursor: hasSelectedNode ? "move" : "pointer",
                position: "relative",
                // Keep the dashed border if hovered or selected
                outline: (hovered || hasSelectedNode) ? "2px dashed #007bff" : "none"
            }}
        >
            <ContentEditable
                disabled={!editable}
                html={text}
                onChange={e =>
                    actions.setProp(props =>
                        props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
                    )
                }
                tagName={tagName}
                style={{
                    fontSize: `${fontSize}px`,
                    fontFamily,
                    fontWeight,
                    fontStyle,
                    textAlign,
                    color,
                    backgroundColor,
                    lineHeight: `${lineHeight}`,
                    letterSpacing: `${letterSpacing}px`,
                    textDecoration,
                    padding: `${padding}px`,
                    textShadow,
                    minHeight: "20px",
                    outline: "none"
                }}
            />
            {(hovered || hasSelectedNode) && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        background: "white",
                        padding: "2px",
                        border: "1px solid #ccc",
                        borderRadius: "3px",
                        zIndex: 1000,
                        fontSize: "10px"
                    }}
                >
                    <div>{componentName}</div>
                    {/* Add additional toolbox controls as needed */}
                </div>
            )}
        </div>
    );
};

Text.craft = {
    displayName: "Text", // Added displayName for easier identification
    props: {
        text: "Default",
        fontSize: 16,
        fontFamily: "Arial",
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "left",
        color: "#000000",
        backgroundColor: "transparent",
        lineHeight: 1.5,
        letterSpacing: 0,
        textDecoration: "none",
        padding: 0,
        margin: 0,
        textShadow: "none",
        tagName: "p"
    },
    related: {
        settings: TextSettings
    },
    rules: {
        canDrag: (node) => node.data.props.text !== "Drag"
    },
};
