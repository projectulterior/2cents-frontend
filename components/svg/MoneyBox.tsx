export default function MoneyBox({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return isMarked ? (
        <svg
            width={size}
            height={size}
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="55" height="55" fill="url(#moneybox_marked)" />
            <defs>
                <pattern
                    id="moneybox_marked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_708_2192" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_708_2192"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5ElEQVR4nO2dWaiVVRTHf3WbqSQLoqgomixosGgiiNIXo56CiCYraIIGiMqGF6mXDJIm8iEwIn0wicImzKQo0R4irCjCzEyIiqwsU+uWumLDunGVc8/0rf2dtc+3fvB/ufee/e29/mcP354uBEEQBEEQBEEQBEEQBEEQBEE/nAw8ACwHvgK2AFuB9cC7wEPAaRHa/JwDvAdIl1oGXBjG2LM3MA/Y2YMZotoBPAnsF8bYMBl4vw8jZDelmnVgmFK9ZliYIaoPNc2gT+YZmiGqJ2p241DgeuAF4DPgR+Av4GYK7MD76TOkg1KaZ9eQ/6nAQg1+q3wkg4qil9FUr1qaMd9HAAt0MNEuD0UZMiWjGaI6PkO+rwV+6/L5RRnyYA2GzDLM717AnB6fX5QhyzMYsAP4GHgMuEyH0xYcALzTR36KMmSNkQmjwBvATOCwcekfAkwH7gbmAouBVcBqYB3wPbAB+AL4SN/4FwGPAzfogCO90xysQ2kZdkM2VzTic+AuDXzicB16LtT5LqvR2h8VPl+UIX/2GaC3gIs0jVQj7tBveI7hc1UVZcg3PRbubeBM/ey52gT94yDoQ2PIsi4Lld58L9HPTAM+cBDooTTk/g6F2abrIWle6hTtuAcdYBlmQ6a0afdXqwn7AI8W0DTJMBiSWNKiEM8B+wKna3MlBetFCuMsYLtmPtWC2/Xn1+lyrRSuUX0PKorZGvwZwJ668idDpsX6glkEI8AZOle0wEHwJJPWaDNcBMmM1xwETTIrjRxvxDl7APMdBEtq1Es6YemSRxwESAagT4ETccaMLlbdhlmbgatwwpHAzw6CIg70lIedMq86CIQ4UlpYO25QZlzqIABSUV/qNp8LgCuMRokbNT0z0pDu9w6JjhiuFsqAlJaf9+9jwrQbpQWxY6wMWaGJXt7mb652EFCpOB1yVJvyrTR4xvNWhmzSBCe3eecofcJwRYcY3GPwjLTeb8I2TbBVdU6c7yCgUlGvd9FsV31GehUwYaxvmGgb57MOAioVtU5r+kTMNXqOCc+0aQNTIX5yEFAx0C0TlP/YPjdvZDPkBF3XSFXuyt1+d6qDQIqRUtBvanEEz7J/NOM+TXC7Vt+j9ee3OQikGCudfXxFO/qxhTZ3hiQeHjdHldbNfxg3AgtRvyHoHqqXDdvUpikbIzqRaLW9Uxqi7Gx0UEgpSNn51UEhpSCFITTMkG6PgYWox5AY9uKrhqR1kvj2E4ZIoV+E7FQ5GtZEZScMoWsz0gSt+0OeTdLaMARXSufssxOTjHRlxrfApDoM2eLgmyfO9cm49aPsDMOJKMnYic/RM5W1MbYjJcQuMVipB1xrZ6JLvpqqrXrsOx3jGwhhCLvcSmG2XTQMoe9a8YtegOaCUQfNhAxY9+KIMIT/L89xQanXY4hhczWwDrwV/zoIigxQaUuUK5puyK04w3qrpRSmHFfWVqLJx5834JAmGzIfh3i8pFJq0jU03JBNug+sk+rIy069K94d1gVdr9cE5tgcfqdhPtNFzS6x3pc1LWNeJxnm82mcstSwkEtqyK9VkzZ26bM7phv1I9/pf7TJzSKjxSfXzKpoSjqSfFJNeZ1acQ1nrR5Ucs/FwJs9NAlpyuVrvb/3oJrzep7+E8tu8/q3Xkw2ewB5DYIgCIIgCIIgCIIgCAI88h+Mta0bKVMekAAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    ) : (
        <svg
            width={size}
            height={size}
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="55" height="55" fill="url(#moneybox_unmarked)" />
            <defs>
                <pattern
                    id="moneybox_unmarked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_708_2132" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_708_2132"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
}
