import { useNode } from "@craftjs/core";
import { InputSettings} from "../../ComponentSettings/InputSettings.jsx";

export const Input = ({
                          type = 'text',
                          placeholder = 'Enter text...',
                          width = '200px',
                          padding = '8px',
                          borderRadius = '4px',
                          border = '1px solid #ccc'
                      }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <input
            ref={ref => connect(drag(ref))}
            type={type}
            placeholder={placeholder}
            style={{
                width,
                padding,
                borderRadius,
                border,
                outline: 'none'
            }}
        />
    );
};

Input.craft = {
    related: {
        settings: InputSettings
    }
};
