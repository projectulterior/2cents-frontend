export default function More({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return isMarked ? (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#pattern0)" />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_708_2129" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_708_2129"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD70lEQVR4nO2dyWoVQRSGP4KKQ6ImiqBRnIe1PoCoWYmKGEf0XTTBCQVFccSdi5i8iOK8c9Z4jXPUpSYucqTgiBLuvenbd+hT3eeDfxOoIv1Xqrrq1OkTcBzHcRzHcRzHcRzHcRzHcRzHcRynLMuAg0A/MAQ8Bl4DP4Bx1Q/92SNgEOjTNkvLd+nUQhvQA1wDXgBSp55rX1u1bychS4FTwEgDBqGS3gEnfeZUZwVwAfjVxIGYrLDM3QTW+XT5x2zgmJojGem3/jF0FH1gduryIUZUAnZQQKYDp4EJA4MgkzShs2UGBXpp3zdgvEyhu8AScs4GXRYkEr0F1pNTNgGjBkyWGvVVf/dcsRb4YsBcSalRnd25oFunvkSuEQ3fRL+bumPATGmQ7sW++7powERpsM4RKbuMnjOkTk3EeHgM4ZBhA+ZJkxSiC+1ExBkDpkmTFSLSUbBag3WSc40DK4mAGwbMkhbpKhHEqbIMo0uLNabnLLOcMmCStFgnMEqbsbsNaZFKVu/oewyYIxlpCwa5ZsAYyUiXMchLA8ZIRnqKMZYZMEUylqnd1iEDhkjGOoAh+g0YIhnrKIYYMmCIZKwBDPEo5UO816k+X9WrObi13OLtA+aqdgPPamj/WkPpM4FZmif2JOWzPMAQwykHY2GZvroSHjDDYCwo074zYfs3wLw62pfrzwzfUjzA/ir97U3QPsyMSvQmaB8u0CqxL2UihBnSBBTDElWJjgTt59XZPlyiVaIzZaAx6gGpZmh7CwZkTpX2XbEPSJola0+V/vbU2T7JkhU2AJU4HPuSleal/kyXhsl0Jkw3fd6A9uU2BYuAj7G/1B+meADR3UyvLlHt+ldfS1LdiG4AOlR7a9whfdAoQ5fu+I4An1I+S0ggN8NgyofIkwYwRJ8BQyRjmQqdHDRgiGSsaueqltNtwBDJWKbC7zToW3KJVCH+ZY6rBoyRjHQJg2wzYIxkpM0YpKhpQG+tpgGh5SqkYDqO8VTSMQMmSYtkPpU0cN2AUVLkfKzJrCpIwvW4FsyJgtMGDJOiJlkX8ZO20hQXXCbZkeOPPrcTKecNGCgN1lkiLxxw24CJ0sAKQVEXDkBLHOXhffIGWExOWAN8NmCqpNRoHss0bdJSRxKZvgIbySnh0PjKgMmSUMN5nBnl3il3DZgtU+hOnt4ZUzHNi2DaPTyWjN1tbKfg/C2kPGagkHJUFX6azXI15WcGpcbDttypQLfewpWavDQdL0Jd3kbSphUSruh34PUOwlO9UNps+Q48Jpbo94ghZfOWJjeHbwS///cPXb7rz+5rru1RzSj0meA4juM4juM4juM4juM4juM4juM4lOEPb/q1xMie3uIAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    ) : (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#pattern0)" />
            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_708_2011" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_708_2011"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
}
