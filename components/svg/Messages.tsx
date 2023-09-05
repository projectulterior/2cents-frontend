export default function Messages({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return isMarked ? (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#messages)" />
            <defs>
                <pattern
                    id="messages"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_705_931" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_705_931"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADq0lEQVR4nO2cPWtUURCG36hx/TaJ2CVG/0QKQUmlZSBaWImCaKJCGrFRSPwTCoKtjYWuYCOIFlooYhIQFQsxJoVYKAnqVmbk4AQukujN3vMx9+z7wHTZ7My8e86dmXN2AUIIIYQQQgghhBBCCCGEEEIIIYQQQmLSB2AcQBPAPIAWADFuLfXV+TymMdSeBoApAEsGEiwVbUljcTHVkkEAswYSKZ5tVmOrFc7hBQPJk0C2UCdRGpmuDPnLZuqyfU0ZSJZEskkYpy+TB7iUNBdrLwwzbiBJEtnOwjD3DSRIIttdGGbOQIIksn2EYerQgYtn+wnDSIeaWVInRigIBREYpuondETr+ph2zOOW1c4UOWgfUzWw0QSCjEQWZLXmcjLUGKbTnyFScTa2j4LAjCCiW5lXUVJ/UqXGK6S4UrxtX6kTIxkI4nWKnDoxkokgi76qr9SJkUwE8TZFTp0YyUiQexQEpgTxMkWu6sRJD43emUxWiJcpclUnTnsQ5FQmgogFQepqK1AQpBeDghgQQOoiSCce4f7Q2LdZFOSTgQRJZFspT/stCtI0kCCJbCsN3BGLgowZSJBEtnMBr9BWptOuki4WhoBvLQrSaZetpzTm4UD/3wsNPWSRzG1aY+0C8MyyINBjyHkDSZNA5qrJAY31fMD3gW9RZjJdGQMa46HAvZd33JK+BuC7gUSKhwe4O1rdrLEdBvAt8HsGw1VfFwDcBvAewFcAywaSLP8Zf8/p1w3c6V2PxuKeGRcjTSWSsqeC4w8B7I7g43DAB7g5QXrbdPomgE0B/Nmq45Cjuu2G6DNMC9KzTmeXC32AYwLArwRJy1aQXetwtAXghL7OrY4bBpLn21whlJQdJR39DGCosM09MpC8EPYhsR6lzhNeA9ivf38AwBsDiQtldxLrgS3rqKQOAvhiIGkxpsjJaPzDuVsAuvXvjmuPIBnbkj5Tk9K9imOuarpcaMiu1qChFA92BQbYuMpZtfu6WXEFvTKQLAlsLwvjmaR0rVFJFRnM/McJ3gHYC0M8BvC8UElhDVGmDSTPtz3VyUAtaejkNYfjYhfDJd2ya0+PlodN3crqcC+spVeHmup7jKFoNuwE8KBC8t0Em3jGzcqutymI6R83qzsTbUyTuR0FZlT7o7KCuC2PBGZI+6QygmwP7Qz5Q3/JXsidOhJDFZibYBNDFZiJmVQnMrFGBRbi8gWpUIFtKPtiEqcCIwZwZ/0vADxJ7QghhBBCCCGEEEIIITDCb+UGcewlHw36AAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    ) : (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#messages)" />
            <defs>
                <pattern
                    id="messages"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_742_51" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_742_51"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEoUlEQVR4nO2cy49URRSHP0VodAacaRZulNH4Av4AcKHxsXPhBjbqWgVXrEyIC4Q/AhdEWLBiociY6EIHNboxLsAHLsTxhQ98ADIqM4JKmyK/ipWOPc6drrpdt+75kpvMTNfcnFOnb9WpX526YBiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRh10gV2ANPAaWAe6GV+zcvWadnufGg8HWAv8GsGHdwb8nI+7JFPjeRW4OPAodeBJ4C7gDHyZwzYADwJvBH48QGwngYG4zs5cAq4j+Zzv3xxPn3bpKC4R/ojGf4OMEk5dOWT8+3Dpgxfe2Xwp6VMhH04nz6Tj25Oyd7Y32Sse8RL5YFgos96BHhahrpJsHRm5Ot2MmZaRrpsqnSekq/O52z5WkbeTflskK9fkTELMnKc8hmXr87nbPGLp7bQy93f7A1sm7/ZG9g2f4c18BXgfM3XixH9XYpIudCnIk/mHJCXRhCQIxH9zU5Fzv4RzsDfMS0LalGRLSDVcRLTrPruG+AWImIBWb4G+K767wSwikhYQIYLit9veY5IWECG40H14Vys7MsCEk9FduLl0FhA4qnIL0e4lwUkNxV52CfkUISF3gvUR4oRYU1QFzZyAw9ECMhB6iPVEB3tvjaHxMECskzsCcmMXu5DVpu2cNfK14s5B+R0i4ocNsrXL3MOiC8DctJy6WyPuYBLFZAdLSqUOxZT4kgVkG5wFqTkUtKHAhFwIvdkYU9wDKHUYuvZ2DJ5yoB0VKrvjyN0Cz2OcCLmRlLqdHpKh1r8k+KqxUsYpmZTbbXWsb5Zr417f/MZTYAbG7JOGQc2KZvyE7h/MlIGI6kE1dGcUuXQpysFqnp87vgyS3CqXHOaM+o4NZVcE5zUN+2oKuQXOxb9U4X7bgbOJArAvGw9qic7RTaVtUi7Tkb8vMT2WyVb+HVPnR3WioB0ZcS5JbTdCfyt9m4PZSVlkUVAJmTEL4u0uQ7Yp3ZXmnDosskBWRtMnoO2Nl9VmwXgUcokpYq8rBNJ7hTvf61rTurzM5rMSyWlilyJGwZ8M8JM6qTS3JKJWgY0DKuD4cizLcik3LtSbqR8juWyhbFKhlzS788EmdR+Teh+LimV1CpyJVbKmD8VgJ4C4gLjeRb4HriD8lgXvLJjNxmwom+lfFFDlqcTSCRfALdTDuFxhOMJVeRKXBMEY1AmNRW8nOAs8AjNx1W8fy6fXE3CzWTEW8B76vhBTElx7QXfqF3Aw8CdwE2Zq8njSm1dNvVmzSpyMjpSXut4daDrqNsq2nekwv3Pac7IYpgalgmpyNMaynxdWOzrR+CeCnadHXCfv1R/7DbtDqsopAmvO8yGNYFc8wfw+BL/77z+x2VORmTc+uf5ioLmBbXP+uVmTWdnsFA9+D+S/5zatUFZGClbAylnZpHVtH/NYcmqQjZsAX5Qh59Sqt3P7/rcJuyacGnwJ8EC9d6+z33NwPV1GWRwdTh6LcjAHgs6xaffTsE2MsjALulvRSz2msguBcRvFVzWz6UVXzSKbUEG5q9rR21U29kSZGAjrxox/s3A3gfe1u+GYRiGYRiGYRiGYRiGQdv5B7o905wiYj5/AAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    );
}
