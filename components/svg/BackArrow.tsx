export default function BackArrow({ size }: { size: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="50" height="50" fill="url(#back)" />
            <defs>
                <pattern
                    id="back"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_704_285" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_704_285"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
}
