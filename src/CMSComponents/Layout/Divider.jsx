import { useNode } from "@craftjs/core";

export const Divider = ({
                            thickness = '1px',
                            color = '#ccc',
                            width = '100%',
                            style = 'solid'
                        }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <hr
            ref={ref => connect(drag(ref))}
            style={{
                width,
                border: `${thickness} ${style} ${color}`,
                margin: '20px 0'
            }}
        />
    );
};

/*
Divider.craft = {
    related: {
        settings: DividerSettings
    }
};*/
