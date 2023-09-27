import EmojiPicker from 'emoji-picker-react';
import { CSSProperties, useState } from 'react';

export default function Emoji({
    style,
    onSelect,
}: {
    style?: CSSProperties;
    onSelect: (emoji: string) => void;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className="flex justify-center items-center"
            style={{ position: 'relative' }}
        >
            <p
                style={{ cursor: 'pointer' }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                Emoji
            </p>
            {isExpanded ? (
                <div style={{ position: 'absolute', ...style }}>
                    <EmojiPicker
                        height={500}
                        width={400}
                        onEmojiClick={(emoji, event) => {
                            setIsExpanded(false);
                            onSelect(emoji.emoji);
                        }}
                    />
                </div>
            ) : null}
        </div>
    );
}
