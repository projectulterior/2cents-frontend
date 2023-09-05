export default function Endorsed({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return isMarked ? (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#endorsed)" />
            <defs>
                <pattern
                    id="endorsed"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_705_1151" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_705_1151"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    ) : (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#endorsed)" />
            <defs>
                <pattern
                    id="endorsed"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_705_1150" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_705_1150"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
}
