export default function Profile({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return isMarked ? (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#profile_marked)" />
            <defs>
                <pattern
                    id="profile_marked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_708_1881" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_708_1881"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEqklEQVR4nO2cSagcRRzGf8/43CPEfcWDxCjkRdG4oGDcDypocAGNGqMIHlQQl+dBD3oQXBAxUUFEDYJiYrwkEMziLoKak5i4exBNkKhJTNSYxJKCf0MTpnu6p5eqfvP94DvMTHV1d33TtfyrqkEIIYQQQgghhBBCCCGEEEIIIbrGHsAFwJPAh8AGYLtpg333BHC+pRUNMQLcAPwAuIL6Hphjx4oaOQX4pIQRu+tj4GQ5Ug+XAFsqmJFoK3C5TKnGLcDOGsxItAOYJ1MG4zwrwLrMSJsyS6aU4wjglwbMSOR7Y0fJlOIsatCMRK/LkGJMB3a1YIg/xwyZ0p8lLZiRaLEMyedAG3G3ZYg/12SZks3VLZqRaLYMyebFAIa8IEOyWRPAkE9lSDYbAxjyqwzJ5t8AhviGXciQbrBRVVZcrFGjHhevBDDkpdA3HTO3BjBkbuibjplDG5oDydIOO6fIYUmLhii4WIDpCr/HxxstPB2vhb7JLnE48HODZmgKdwDObiiU4hvyc+v/Dw0H82rudfm8bg59U13nYmBzTQvlLgt9MxOFGcBHFczwC7DHQt/ERGMEuB74roQR3wLXabF188bMAh4H3rce0z+m9cB7wGPWcGvVuxBCCCGE6Ch7AkcDZwAXAVcC1wBX2OdzgGMtnaiZvSzIOA68CawrEdvaaTt2/YTXg7aVem85VJ79bCvzopo2e+4ez1oG3AQcIHPyOQl4HtjU4DxIWtuAlxXj6j1l+1ZL07a99B+wHDh12J+Yg+yJqHPbs6sg/4dYCBzJEDLbAoEuQv1mUeWh6TU9G0Ghuxz9ZS+v2ZcJzsH2zhEXsRbbGCdhmnW5V1mXe6tpnX03bmk6hx+orY2gwF2GfDv2QGr+5HTgnRLHrwZm0hEOA76KoNBdTmN+rV3rKPCc9bzK5uOPWWB5RD3I+zyCQnc58tVO0ut7t4b8/JM1hUh5NYICdzny0QDsX12HGWlTRmNcU+Ui1jZr27Bqqu785xMR/k07f0RQ6C5Hj6Qa8EHajH7yeZ5GJCyMoMBdn4Y8eT1Tmd5UL/mwy+0ZA92VRMBYwLiUKyhvgufEivn48P7+ltdTGWlOYAj3CbqSutOudbxileSXuWKm/JiR7r6AXnAI8HcEBe766EK73lU1bRZ9OifdCgIyJ4LCdgWU9K6+GfD49amxxpl9ItZ+UByMhyMobFdA+9j15s1Ibs7pfV1lx/sp4S/7nMufIxh3R1DYroB8oDPPED/NOwm4tMemIT+3X+YPuCX0tgHXAR1n1/t1xu++254wN/Wk/J6awBor+Pa7oFVWW28UdRXlV7Jg44Rev3sDbkzd00P2ffIS5kn2nq0i53qbwEyuuLnGtaC77Frvz0mzPdUb89yWCs/fU+Jc9xIBfpHaHcBnFjNykWm5Xee0Puk29dh5dXzJe5oaoPw7zeo+BfoTcIylHSmQPrrQSdeYWSC4+AVwFvBoCTN8+GjolxYNyoIGqsVnBr4awWjJqqifPrAVNqICU2oIxTszNtop3C4+KfMHnLDaZdWUtkE0tN54acnelBrwFphq8xkrbHHcn6a1NgL3v2mcIYQQQgghhBBCMBH5H1glfz8AFd+hAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    ) : (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#profile_unmarked)" />
            <defs>
                <pattern
                    id="profile_unmarked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_705_1097" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_705_1097"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEl0lEQVR4nO2cW4xeUxTHf9MSYsYQEdoKIuHBuFRVBBFFIi3jRfDgrsStLx6kGh4adalbhVBtDMqTRilPLm1dUyJxe0PEXatKmkFoZzptjez4n2Rn4pvv0nPOnH38f8lOvnzfPnt9e61z9tlr7bU3GGOMMcYYY4wxxhhjjDHGGGNMSkwCzgaWAOuBzcB2lc367kHgLNU1BdEFXA58C4y2WL4BLtO1JkdOAD6IFL0JeAw4F+gD9lXp03dLVSer/z4w3RbJh/OBv6TYjbrjWxmKJumJ+knXhjb6bZTd4xpgpxT6JNDTQRvhmqfVxg5gro3SGWdKgX8Dd+SgxAVqK7Q5y0Zpj2nAz7qrF+WovLuid9AUG6V1Vklxa3Keuk4G3lDbK22Q1jge2AVsBaYW9PRtk4xjbZTmrNYdHBy/onhYMl6wQcanFxhRObhAZU2RjO3yX0wDLtKd+1YJGnpXsi6wNRrzlJQ0vwQlLZCsARukMZ9ISaeXoKQzJOsjG6QxW6SkI0tQ0lGS9asN0pgRKam7BCV1S1Z4sZsmBukpQUNhdmWDNGGLh6xq8fEEvNQ/LEFWsjw7AdPeFSXISpZrpaS3S3QMrypBVrIcpPWKMkInmZwDC5RTq+DiQwXKeMTBxdY5TqHxbQqV580hwJBkHFNA+7Xked3B6wpYoHpTbT+XY7u1Z2q0hHtnju3e7SXczjkt8tzvyznJIfggpgPmSoGjCs33dBgieSZKA7raltg9+qNEuZD0doXeBc0Ida6MMhj/VFajySnx4b0oNTS8Xx4HzotSSXv1ORhwmRKvs/rrNXszOdIFXAp83Uay9VfAJU62Lt4ws4AHFP4IT8KwSnhy3gHu14vbWe/GGGOMMSZh9pcTGHbazgEuVpmj7/pUxxTA4doruFze+mAbjuGgvPRlauMwW6gzTgTuBT5voOjf9VtYe39VG3xW6XNwDL9Q7Oq/rv0MWKydvWYc9gZuBD4do8BftI/jZnno7ayBhxXHc4DbZKyxRgq5xNdLtokMMX9MMPBH4B7g5JxXDPdSQHJFFEHOgpW32DD/7gf5LlLMGmB2SUdihOjwPJ32kMkPp0RcyP+QkIbz0hhDzJig/7KHFq02Rv9ndcFpSJXbf54NT99rCKkC3ZpI7IiGsdov9c6LOjxQUpZ7u5wEfBkt+d5ATVmkTg5pabXK9AIvR0PYQmrGQnXst4SGgS5tzc6Mcjs14Tp16A9gJumxODJKOAwnaU6JTntL+cCXpTLIsHyjJAnj8A/qyE2kzWRNzUflN1VxMtKU5erAi9SDAyJfJTwxSTFD2eWDNTsGabbSUXcpVywZXteddCv1Y6X69gqJMD2K0u5DPddnhtTHJLIhB3LMWM+D/jFxqmZlQws5wFkfnyABsn0dR1MNNrRhjDj8Px59Ubyr0uwXxYCqwmiHpRlbVa/S523tKScw/NFDqa9Bpmm2NazwfaVZqw6FY/TqapBHVec1EtmKtlN30BLNSupgkC7giMgYoY+nklBAMVv3qGMZSTHQOFNOVHwofuplk7ZTT9RyszHGGGOMMcYYY4wxxhhjjDGGOvMPhjQaepI6s1gAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    );
}
