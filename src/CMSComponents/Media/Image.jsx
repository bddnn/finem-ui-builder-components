import { useNode } from "@craftjs/core";
import { ImageSettings} from "../../ComponentSettings/ImageSettings.jsx";

export const Image = ({ src, alt, width, height, borderRadius, shadow }) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <img
            ref={ref => connect(drag(ref))}
            src={src}
            alt={alt}
            style={{
                width,
                height,
                borderRadius: `${borderRadius}px`,
                boxShadow: shadow,
                objectFit: 'cover'
            }}
        />
    );
};
Image.craft = {
    props: {
        src: 'https://gratisography.com/wp-content/uploads/2025/02/gratisography-when-pigs-fly-1170x780.jpg',
        alt: 'Sample image',
        width: '150px',
        height: '150px',
        borderRadius: 0,
        shadow: 'none'
    },
    related: {
        settings: ImageSettings
    }
};
