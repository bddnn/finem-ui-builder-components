import { useNode } from "@craftjs/core";
import { Element } from "@craftjs/core";
import { Text } from "../Basic/Text"; // Dodaj import komponentu Text

export const List = ({ items = [], listStyle = 'ul', spacing = '8px' }) => {
    const { connectors: { connect, drag } } = useNode();

    const ListTag = listStyle === 'ol' ? 'ol' : 'ul';

    return (
        <ListTag
            ref={ref => connect(drag(ref))}
            style={{
                paddingLeft: '20px',
                margin: spacing
            }}
        >
            {items.map((item, index) => (
                <Element
                    is="li"
                    key={index}
                    id={`list_item_${index}`} // Dodaj unikalne ID
                    canvas
                >
                    <Text text={item} />
                </Element>
            ))}
        </ListTag>
    );
};