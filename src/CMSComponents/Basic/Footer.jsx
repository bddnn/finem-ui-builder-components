import React, { useState, useEffect } from "react";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

export const Footer = ({
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

    const { query } = useEditor();

    const [editable, setEditable] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!hasSelectedNode) {
            setEditable(false);
        }
    }, [hasSelectedNode]);

    const moveFooterToBottom = () => {
        if (!node || !node.id) return;

        const rootNode = query.getNodes()["ROOT"];
        if (rootNode && rootNode.data.nodes) {
            const currentNodes = rootNode.data.nodes;
            const footerNodeId = node.id;

            if (currentNodes[currentNodes.length - 1] !== footerNodeId) {
                actions.setProp(rootNode.id, (node) => {
                    node.data.nodes = [
                        ...currentNodes.filter((id) => id !== footerNodeId),
                        footerNodeId
                    ];
                });
            }
        }
    };

    useEffect(() => {
        moveFooterToBottom();
    }, [node]);

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

    const componentName = node ? node.data.displayName : "Footer";

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
                </div>
            )}
        </div>
    );
};

Footer.craft = {
    displayName: "Footer",
    props: {
        text: "Footer Text",
        fontSize: 14,
        fontFamily: "Arial",
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "center",
        color: "#000000",
        backgroundColor: "#f0f0f0",
        lineHeight: 1.5,
        letterSpacing: 0,
        textDecoration: "none",
        padding: 10,
        margin: 0,
        textShadow: "none",
        tagName: "footer"
    },
    rules: {
        canDrag: () => true,
        canMoveIn: () => true,
        canMoveOut: () => true
    },
    onAdd: (node, parentNode) => {
        const { query } = node.related;
    },
};