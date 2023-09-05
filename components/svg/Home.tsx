export default function Home({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return isMarked ? (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#home)" />
            <defs>
                <pattern
                    id="home"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_704_160" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_704_160"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2cy4sdRRSHv3GiMYoLjW9RFFSIj6j4+AtEjQ8URdy4UwRBzUIhK0V3LnQjgvgYHxhRdKELV6JEBx+MAePOKErUxGAWxkliQHTikYLTUFy6b+bO9O17+tbvg7Op7lucU7/uOlWn7r0ghBBCCCGEEEIIIYToghOBZ4F9wO/AM94mJsDZwHbABuxb4Dwp0i3XAXtdgO+Ba4BrgR+8ba/fIzrgbuCwD/w8cFp27WTgY7/2N3CvFBkfM8BTwH8+4C8Aa/za7W6JY/2a+b1P+mdFixwPbPVBXgK2ZNc2A0eywa94APjHP/MecIIUaS95f+0DexC41dvXAq/VJPW3gXV+zw3An96+Q8l+9VwJ/OID+iNwibevBz6tEaOyL4Ez/N6LgJ3e/psnf7HK5L3NRUhcDuwaIkZlu/zeSsBt3n7Y+x6VW4A9Wf+7gU0lKDsDPJEl75c8UePT1cFliGE1U1zq4+Us2T8+YrLfXdP/r0w5a4E3hyTvpRHEqKwu2f/r194dIdk39T+1nAUsZE/2bd5+HDC3AiEGbc77StwILHr7N8C5y/CvKEE2Zsn7J+DSmrm/DfsCON37vth3+VWyT7v9YRQjyF3AXx7c5w0D1qY1CZ58uLN0QapN3bApxcZghwamxFcH8s1MaYKk5P3GMpKujdGGLRreyTaXUy/IqcBn2ZNa1aDWAM93IMSgvZK9mTdlb+ZXwJnTLkjaqP3sgaR1/VXefgrwyQTEsCx3VVXjy7KNZ9oIXj2tgtwMHDhKacMmaE2lmfQW3zFtgmzJkvfrnkO6SN42oi26T4N57si0CJJXZIeVxyPZUkN5v/eC1L32VfJ+LsDA21Esr6Hl020vBWlKjPkRax9sPkv2G7MFSa8EaVo6Xgh8F2CQbQXJfkO2ZJ/vkyCPZfPtVj96TVwP7A8wuLZC2+8x4DG9lV17lIAMKz9ETd62gmT/yDLKPhOnqUA3CzwdYCCtZXsxS/ZNhdGJ0VTCPgn4MMDg2ZjsI1+gJK5oODronE3ZUnDBD5gi7bxtzLbTYx08XDvgC5vOWaz52k3ijwCDZR1ZirVinVeJzb961Dn3Aw/WnB1YYZYz44uY+whEyYKEZNIDZBJEgoRm0k+s6Q2RIKGZ9BNrekMkSGjG8YTO+Xl3qo+Nyqx/tu63JG1YeMbxNZ22GIco4Wk74A0tn2RKkFUOwmyLgqS+JEiwKcE0ZUmQiRL9CbTg/hUXsAX3r7iALbh/xQVswf0rLmAL7l9xAVtw/4oL2IL7V1zAFty/4gK24P4VF7AF96+4gC24f8UFbMH9Ky5gC+5fcQFbcP+KC9ha/hFPeEoSZA894FBBgrxPD1goSJB76AEPFyLIduAYevJ3GjumXJB9wPn0iHNaFsUCWXozLqCHpN9tP+T/5tB2orcObcl/YfyB54xeTFNCCCGEEEIIIYQQQgghhBBCCCGEEIKC+B+3g24iZ2BOnQAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    ) : (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#home)" />
            <defs>
                <pattern
                    id="home"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_704_282" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_704_282"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADl0lEQVR4nO2c3YuMURzHP+RdVhrv4o4LL5u8/QneZSOuXAgpRS4oV+TSBTcuCWFl419Q2EJLGSVCZL3GlZddJWaNnvpNnaaZXY95duac53w/dW5m5jnnd85nz/7O85yZA0IIIYQQQgghhBBCiGYwETgFfAY+ASftNdECZgMPgHJVeQTMk5Hmsgr4aAKeAyuAlcALe+2jfUY0gW3ADxv4bmCa894U4Ia99xPYISPDxwjgCDBgA34GGF3jc6OA0/aZP8AJYKTEZMs4oNMGuWRihmIv8MuuuQ5MkJTskvd9G9jvwMYU164Gvti1RSX7xlkKvLEBfQks/I865gPPrI4PlvxFg8n7JlBoYBQLVkfZ6kzqTssG4L2zvH4HrCOS5H3MEvJgyTstSR1nnWR/1Nr6V97VuOd5S84ZC1xOmbzTkiT739bGtRTJvlyn5JZZQI+TvDcNY1trgK/W1kNg7j9cE5WQdid5vwIWNaHNBXaXX0n2yd3+YEQjZCvQb527A0xvYttusk9i2BK7kIPOnfc5YEwLYkjaPO8k++N1kn2uhSTJ+2LVIPjwx1GymLqA8bEImQrcts70AZvxh7VOsr8HzMy7kCVAr3NjtQw/Y3xtMSY3gsvzKmQ98M06cReYgb8UgFvOLO7ImxD3sflFyyG+Mxa4ZDEP5EVI0qkLniXvRlaCQQtxp32/Tfs8/LsthyhkcZ3EGPrThN4QhQy2dMzDkr07JCGHnf+3nbb1mjfGAVccIYfwEPfxQ6Wk2WsIjRFVfW3VY58hp3F/KFM5A8pVfb5tY9FSaj3Cjk1Iewu2DmqyzlkK9tgGkxto3ik7/XQ3177ZwqbpVFZSV6uejMYoBBuDLnst+epR09kD7KuRvGMVgo1Fsme/G4+IWYiXBBNoLP0MJtBY+hlMoLH0M5hAY+lnMIHG0s9gAo2ln8MR6C7gifM1nTSlZNfuzDimaIXs/g8J9UqWUqIV8jRDIY8zjCtaIaUMhSR1ZUW0QsoZl6zj8h4J8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8QwJ8Yw+kzIpxzuGk52D1ryn8sOVjhwL2e78yth7Dliwz+zo77wJKTgHYu4nkOM0is6pncmRrG05ENJmM6Mio+jTL2+HYo4jJY+laH0MijE2pe85iT7k0mfHSu0PaWYIIYQQQgghhBBCCCGEEEIIIYQQQggi4C+6+Q6x1fnZ3AAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    );
}
