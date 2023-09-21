export default function SecurityKey({
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
            <rect width="55" height="55" fill="url(#securitykey_marked)" />
            <defs>
                <pattern
                    id="securitykey_marked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_708_2423" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_708_2423"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADrklEQVR4nO3cN4hUQRzH8a8ZjCgGPMxiVjwQTKCFYGdAxUIQRRFTJRZWCipiJxgLtREVY2MhKNiZQMXGxpzwOAyY051pZHAO1nS7O7tv3+y83wf+cIgct/8fb2fnv/MeiIiIiIiIiIiIiIiUS39gKbAHOAvcAl7l1F3gAnAEWAdMAVqr/eXVB9gA3AaMR70B9gO1CqY0Q4DjwDfPIMw/6iIwW8EUpxOwG/hSxiDMH3UaGKBg8psM3EswCJNTH4E1CuX/lgNfKxSGySm7vrRRML/blEIQJqfOAV0Uyi8bUw7DuDoPtMt6KMsCCMLk1FGgBRk1PqU1w+Sp9WRQe7fLNgHW1yxuIrcF0HjTTF0GWpIRdkPWEEDTTZ5aQUYcCKDZpoB6CLQicj2ARs8G2atqBzAB6ODK/rwzwSsu+rnXWs/G1AFjm/m9te7/JLFhjNp1zyujuTByQyn3lfID6EukugPfPZpi36YKtSuBq8TO2KI037MhdgNZqIkJBHKYSG31bEjHIr9LMWUuu4GN0okKBNI5gUAaY51vXavStywDdCNCvrMru89Ic1E3wAgidN+zGQ0FDvtqS9h05qvRROhBCQ2pyxNKbUIbw6YaTISulNiURveWNNEt9LYmuX9L6spoqhoidCrhppmEqjHW0487Amiu8agbRGpJAM01HnWMSA0LoLnGo1YRsVI+aaVV/YjY5gAabIqom0SuJuFD1CaB70NWE7mTATTaFBnKSiI23vOLqjTrO7CYiO0NoMmmyLI3Di0kUvakeX2VhrKASM1z78+myuoLMJdIbQigwcYzlFlEqlpOMpp/DB1nEqG27r5yU4X1GZhOhFq4O6mqcU35BEwjUouAdwE02RRZH4CpRKo3cDCAJhuF8rsZwNUAGm2KqLfuRH7U7As8VMJB6m/AJeB9hUJ5DYwjA+yhhjnAdvfMkvr/PAfltQtgn1uT7CFvXJMqNR14mcX7FHH3AfZyXyJ1LeDYaX/3GKdKhPICGJPn7xF+PWerUmvKc2CUut68LRUMxNYzYGSevynT5lQ4EFtPgeFpv/BQ9UshEFtPgEFpv/hQPU8plMfAwLRffIjOpBSIrUfu056kuLD/WXdiPcDta2bKgTSd+WratGZeO/fojLRDsUNUcYa6TeKnFAOxUwPxeD7LjQRDEQ89E5yBSWAzMAnso7IENgOTwGZgEtgMTAKbgUlgC7sENAOzjwORgGZg9qFuEsAMrM6FYQ+ai4iIiIiIiIiIiIiICH/7Cd0sY6G5HrkmAAAAAElFTkSuQmCC"
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
            <rect width="55" height="55" fill="url(#securitykey_unmarked)" />
            <defs>
                <pattern
                    id="securitykey_unmarked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_708_2140" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_708_2140"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFgUlEQVR4nO2caYhWVRjHfzPmO9NipZVE2UwlmC3YBk0RfiiCIkxppQUKjYpwTCvwQwu2qRCVoV/ECFqgojRoIyujvbGSJtoTatQs0hbLmWxmSt849H/hNLw1c9859869531+cBll5p7znPO/Z3vOcw4YhmEYhmEYhmEYhmEYhmEYRigmAzOB5cAa4CvgF+9ZD7wFPAbMB6YCu1n1h+VQ4A7gS6Bcw/Mr8ABwnAkzPI4BngD+9Cr3R2AlcANwJnAUMNZ7jlCruBp4BNgwQJy3gRkmTDL2BZZ6QvQBjwJn1Nj9TALuBbZ5wjwPHGbCDM6p3lftBFkGHByo4vYAZmuscen/DswzUf6bdq9VdKjLSoPx6s52KS83vow2Yf7NXaocV0mLM6qgGUCP8n0F2MdE+YfbVSl/AVdmXClTgE3K/02gqd5FucobL6aPkA2HABtlh+vKGqhT2iSE66ZmjbAtU4DfJMot1CF7alXtKuBu8sFZ6jb7JVBdcZ/E6ARK5IclsutdoJE6coX06ms8lnwxBvhWorjVfl3wsArsfuaR82VfFzCKyDlArhA3mLcmfNdNSa8D1mr90KN/zwk8XW2QF7k8gjO/zLhRBX024XvOffLR/3h0OwO6WJDwLt2XiZwPVdAkHtemQcQoe6KEail7A92akk8g4u5qJ7ADaK7hax3K0x7Q3heUplu8RslFnt8oCe8lEKQjoL3zlaZz/UfJYhVwQcL3uhMIsj2gvScrzS+IlKdUwEsLIkiz0uyN1b+1TgV0PqwidFl4u4xuezg6KnN7t++dhDkjNKjjBVa4aJfo+EaFOzzhe02a0g5l2lsKbHMl36OJkK4aBUGLvs4MF4YVKh7piUTI+yqcm73UQkldUocG+m55ZdtT9Bh/J5sPIkKeUeHOpRg0aW+kL9box6US5GaKwQmy92MiZZYKuJpiMFP2uujJKJnsLd6KsM/wuOy9loipzLRc/G2eadaHs0tRKdFypwRxxwXyzDTZ+TmRM0G7hW7mciD55TS1DvdcQ+Ss1Ne3iHwzW4LszEHcWKq0qZC9Nfi1smaePh5n7+VEzAoV9PUCuLavl60ubOkyImUcsEUFdd7cvHOTbHXj34VEygXqo92Xdzb5Z4FE6S+Q+ycxt3qLxeMpzjmWPk2No6PBi2TcXpCWsih2UUqem6K/IGE3S2TvHzqMGmVLuc3bcHoOaCHf9i6TrS7O7HQi5Qp1XWUdoJmbMKgua1GWy9aeAvjnhuVeWeW1lq2K6WoZRljoJcDFKax53BmSB70x8BQiZpq37VtZmLn/3wOcoz30ajt5Y+WLmquur9dL46EUtnsbvYmJu8bjJCKnTeGcfsWWvcctML8GftZlAAN/74R8xwu4W5PCEehR8mCXFcvldhujZ4wWZPfrzpLvVdkDBdgmAVbI/7S/3j9R75QVHBEa11qfVPo/5fB0WCY0yo3foq5qr0H+vtW7WiONWZy78OBpb+xL6zaKqFidcvTLaC/CZkusQXYhWajKcm6QtChpQuHy+QE4MsW8Cs95qqgXU86n5B362Rxr9GMIWr3L0NJmd+BV5bepxjDaumBrigN7tXu6XlN+G3VO38h4YK92lcgbynNDDUfCo2dhBgN7NRfOWuW7PtYA7lqZror5VNvJWd4nuc6L+dovw7xzH9neleBk1ge6GjAE47xz93m9XmREmKSxZMcQRfkkoCgTlabzGhgJGS8xyvI2h6IitFGjKBUfWKgZkgkyTF5SJbqVfghMkEBTZfczBCZIIB9YqBNgJkjOfGAmSEAfWIiB3QQJ6AMLMbCbIDkb2E2QgD6wz4bph5rqbVwZGfrABnvyfqwvSh9YucqzWWLk6VZvwzAMwzAMwzAMwzAMwzAMwzAM8sTfA6AsyGzVGi0AAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    );
}
