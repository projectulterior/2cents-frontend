export default function Search({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 68 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M27 0C12.114 0 0 12.114 0 27C0 41.886 12.114 54 27 54C33.5781 54 39.6114 51.632 44.3008 47.707C44.8706 48.2768 63.4238 66.832 63.8867 67.2969C64.8267 68.2369 66.353 68.2369 67.293 67.2969C68.233 66.3569 68.233 64.8306 67.293 63.8906C66.8301 63.4258 48.2768 44.8706 47.707 44.3008C51.632 39.6114 54 33.5781 54 27C54 12.114 41.886 0 27 0ZM27 2C40.784 2 52 13.216 52 27C52 40.784 40.784 52 27 52C13.216 52 2 40.784 2 27C2 13.216 13.216 2 27 2Z"
                fill="black"
            />
        </svg>
    );
}
