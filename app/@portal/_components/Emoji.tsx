import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

export default function Emoji({
    onSelect,
}: {
    onSelect: (emoji: string) => void;
}) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <p
                style={{ cursor: 'pointer' }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                Emoji
            </p>
            {isExpanded ? (
                <div style={{ position: 'absolute' }}>
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
