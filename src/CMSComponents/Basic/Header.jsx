import { useEffect, useState } from "react";
import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { HeaderSettings } from "../../ComponentSettings/HeaderSettings.jsx";

export const Header = ({
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

    const { query } = useEditor(); // Hook do zarządzania drzewem komponentów

    const [editable, setEditable] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (!hasSelectedNode) {
            setEditable(false);
        }
    }, [hasSelectedNode]);

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

    const componentName = node ? node.data.displayName : "Header";

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

Header.craft = {
    displayName: "Header",
    props: {
        text: "Header",
        fontSize: 24,
        fontFamily: "Arial",
        fontWeight: "bold",
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
        tagName: "h1"
    },
    related: {
        settings: HeaderSettings
    },
    rules: {
        canDrag: (node) => node.data.props.text !== "Drag",
        canMoveIn: (parentNode) => {
            // Tylko root (główny kontener) może zawierać Header
            return parentNode.data.type === "div" || parentNode.data.type === "ROOT";
        },
        canMoveOut: () => false, // Uniemożliwia przenoszenie Header do innych kontenerów
    },
    onAdd: (node, parentNode) => {
        const { query } = node.related;

        // Sprawdź, czy Header już istnieje
        const nodes = query.getNodes();
        const headerExists = Object.values(nodes).some(
            (n) => n.data.type === Header && n.id !== node.id
        );

        if (headerExists) {
            alert("Only one Header component is allowed!");
            return false; // Uniemożliwia dodanie kolejnego Header
        }

        // Przenieś Header na górę drzewa komponentów
        const rootNode = query.getNodes()["ROOT"];
        if (rootNode && rootNode.data.nodes) {
            node.related.actions.setProp(rootNode.id, (node) => {
                node.data.nodes = [
                    node.id,
                    ...rootNode.data.nodes.filter((id) => id !== node.id),
                ];
            });
        }

        return true;
    },
};