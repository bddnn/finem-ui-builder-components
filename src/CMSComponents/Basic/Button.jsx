import { useNode } from "@craftjs/core";
import { useState } from 'react';
import { ButtonSettings } from "../../ComponentSettings/ButtonSettings";

export const Button = ({
                           text,
                           fontSize = 16,
                           fontColor = '#ffffff',
                           backgroundColor = '#007bff',
                           hoverBackgroundColor,
                           activeBackgroundColor,
                           padding = '10px 20px',
                           margin = '0',
                           borderRadius = '4px',
                           border = 'none',
                           borderColor = 'transparent',
                           borderWidth = '1px',
                           boxShadow = '0 2px 4px rgba(0,0,0,0.1)',
                           hoverBoxShadow,
                           fontFamily = 'Arial',
                           fontWeight = 'normal',
                           textTransform = 'none',
                           letterSpacing = '0',
                           lineHeight = '1.5',
                           textDecoration = 'none',
                           textAlign = 'center',
                           width = 'auto',
                           minWidth = '100px',
                           transition = 'all 0.3s ease',
                           cursor = 'pointer',
                           disabled = false,
                           disabledStyle = 'opacity: 0.6; cursor: not-allowed',
                           gradient,
                           hoverGradient,
                           icon,
                           iconPosition = 'left',
                           iconSpacing = '8px',
                           preset = 'custom',
                           customClass = '',
                           onClickAction
                       }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { connectors: { connect, drag }, actions: { setProp } } = useNode();

    const handleClick = () => {
        if (onClickAction) {
            eval(onClickAction); // Uwaga: eval może być niebezpieczny, można zastąpić parserem
        }
    };

    const buttonStyles = {
        fontSize: `${fontSize}px`,
        color: fontColor,
        backgroundColor: gradient && !isHovered ? undefined : backgroundColor,
        padding,
        margin,
        borderRadius,
        border: `${borderWidth} solid ${borderColor}`,
        boxShadow: isHovered ? (hoverBoxShadow || boxShadow) : boxShadow,
        fontFamily,
        fontWeight,
        textTransform,
        letterSpacing: `${letterSpacing}px`,
        lineHeight,
        textDecoration,
        textAlign,
        width,
        minWidth,
        transition,
        cursor: disabled ? 'not-allowed' : cursor,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: gradient && !isHovered ?
            `linear-gradient(${gradient.direction}, ${gradient.colors.join(', ')})` :
            (hoverGradient && isHovered ?
                `linear-gradient(${hoverGradient.direction}, ${hoverGradient.colors.join(', ')})` :
                undefined),
        ...(disabled && disabledStyle),
        ...(isActive && activeBackgroundColor ? { backgroundColor: activeBackgroundColor } : {})
    };

    return (
        <button
            ref={ref => connect(drag(ref))}
            style={buttonStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onClick={handleClick}
            disabled={disabled}
            className={`craftjs-button ${customClass}`}
        >
            {icon && iconPosition === 'left' && (
                <img src={icon} style={{ marginRight: iconSpacing }} alt="icon" />
            )}
            {text}
            {icon && iconPosition === 'right' && (
                <img src={icon} style={{ marginLeft: iconSpacing }} alt="icon" />
            )}
        </button>
    );
};



Button.craft = {
    props: {
        text: 'Click Me',
        fontSize: 16,
        fontColor: 'black',
        backgroundColor: '#007bff',
        padding: '10px 20px',
        margin: '0',
        borderRadius: '4px',
        preset: 'primary'
    },
    related: {
        settings: ButtonSettings
    },
    rules: {
        canDrag: (node) => !node.data.props.disabled
    }
};