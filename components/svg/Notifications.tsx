export default function Notifications({
    size,
    isMarked,
}: {
    size: number;
    isMarked: boolean;
}) {
    return isMarked ? (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#notifications_marked)" />
            <defs>
                <pattern
                    id="notifications_marked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_742_52" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_742_52"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADM0lEQVR4nO3dy4uNcRzH8bfLjJRrlCksJNeFxgZJKTtlIZf8A9hoYqUUKxHKYBbIUolYCrkUMaGRy0KasHPJpaFxNxNfPXnOwmTmnOc55znn+/yez6s+NTVnzjzz+TZz5rn9DoiIiIiIiIiIiIiIiIhXo4CtwD3gS5wuoA1obvTGFc3EeBA2SLrix0gdNAGdQwyjlJvxYyVjbRUMo5QtmkY2FgPtwB3gZ4KB/Iy/pj1+DqnCSGAT0J1gAOUSPdfG+LklgfXAsxoOYmCeAms1kfLGAiczHMTAnAUmaDD/txB4XsdhlBJ9z1YN5V8rgE8NGEYpvcByDeWvRcDnBg7D4nwFlhZ9KNOBdw6GYXHeAtMoqBHAbQdDsAHpjLetcLY5KN8GSXQ0oFAmxy+k5jS9wCQKZI+D0q1MdlMQo4GPDgq3MvkQn3MJ3gYHZVuFWUcBnHNQtFWYMwRuGPDeQdGWYL8k2uZgzXdQsiXMXAK2xkHBljCrCdh2BwVbwkTbHKwOBwVbwhwmYKcdFGwJc4qAXXVQsCXMFQL2yEHBljAPCNgrBwVbwrwgYD8cFGwJE21zkMY5KNdSZgwBmumgWEuZGQRoiYNiLWWiCzGCk6fD7laEw/A7HBRrKRPk4ZMTDoq1lDlGgK45KNZS5jIBeuOgWEuZ1wRmqoNSrcq0EJBVDgq1KrOSgOxyUKhVmZ0E5JaDQq3K3CAQ0f3i/Q4KtSrTH8rdVnneQ7cQ99gvOijSapTz5Nxs4JeDIq1G+Z3367SOOyjRapyj5NQCoM9BgZbBi3trHu83f+ygPMsoT4Dx5ERLvDySBZ67wBRy8C9uj4OyrE7piX9mt6doQ9gBtITp83iKN7qN+KGDcqxBue/tVurNDkqxBida9smF4RkvpWQ5SbeXu62WOSjDnMTFqnX7HBRhTrIXB647KMKcJLqQo+FeOijCnMTFlfLfHRRhTvINB0I4PWs1SrR4s4gIcKCKPyX71WDtzUl58DI6+DdLA8nGwRQDiX6zJCNNwKUEw7igt6zIXnO83MVQV7NEnzukd9qp/1JPHfG5+9JbHkUfHwHm1XlbREREREREREREREREhMr8AZdkzCJlvgfVAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    ) : (
        <svg width={size} height={size} viewBox="0 0 70 70" fill="none">
            <rect width="70" height="70" fill="url(#notifications_unmarked)" />
            <defs>
                <pattern
                    id="notifications_unmarked"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlinkHref="#image0_704_148" transform="scale(0.01)" />
                </pattern>
                <image
                    id="image0_704_148"
                    width="100"
                    height="100"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEhUlEQVR4nO3cW4hVVRzH8a+ZWmRWk+JgSojiSEFeHsyhQoJIUQxvKRL0kvZQ5oQPQaBPUog2VooN1FsQiYKBGpWOeGkoNbrAmBemKTXFS9jFEXU81omFv4GFjOOMnrPPWmv/P7Bh4Oxz9v+/9pmz7huMMcYYY4wxxhhjjDHGGGNMqPoBdcB3wAUd+4HXgL6VDi5vHtCNKN7g2K9zTAb6AE0q+BZgJnC/jlnAL3ptj841ZbZIBf4bMLCT1wfpNXfOq3Y3yuNxYDXwLdCuwn6ui/Nn6Jx2vacemGA35/bcCSwEDndSR+wAenXx3l465/r3HQJe0mebHnhe9UNHQbqfoJXAU0BVDz6nSu9ZBRz1Pu8IMNvuyM3dC3zsFVwz8GKJvtF3ANOB773P36DGgOnEWK+FdFF9DFeIpeY+83Vdo6hrumsbz9PAPyog17+oyaB0atRfKerak+yOXDNRvewisA24J8OCuRvYqGu3WUsMhgFnVSCbNByStd7Ap4rhDDCUnHIF8Y0KYmeFe9V9gF2KpUmx5U6dCuCUeteVNkixuJgWkzMDvUrcjT+FYpZXyT9IjrylxBsJzw7FtpyccC2bv5R0LeF5QrH9WaFGRubmKWHXYw7Vj4pxDjmwMYKKs04xridxbhT2DyU7knCN8volXY0qR+8RJXqM8B1XrKNJWEezcjPh26pY3WRXst5Qkm4GL3T1itXFnKz3laSrNENXp1hdzMnqGMSbT/heUKyfkLDtSvIZwvesNyWQrJ+U5BjCN06x/kDCTirJIcQxV1MEfidhl5VkDGtv71Ksl0jUACX4N/FoU8z9SdAIbz1uLH5VzMNJdDFDUUs7Y7FPMU9Iedj9M+KxWTG7lZTJeTOiYZPrRxaSHD75UMm9QjwWK+YGEtSo5CYTj6mK+SsSdFrJudZWLGoUs+vQJuUhrw9SjgXU5eJiPa/Yq0nING+jTWx2K/YpJGSZknIbZ2JTr9iXkpA9Ebfn5yl295+SBLdfvABciXTveJXiL6Sy22puwMtGu2tXSgvnPlcybn95rJYohy1EzrXj/9OcQnXkzfZ24F8tootWQ0JDDx8plw+I1GOqyK8Gvmy0u0Yol0KMu3bvAw7qG7WWdDQopwOaAY1CtbfduDnjXbVZPNig44u2FxhMBJ2ocwrYTX8+THqGe08bOqecg52iLSjQL2L49tzmr8CXyvVKiFO8vb1dR++QH/XebrCgtlK/rMBa87Ivz1u71arcFxDQnEFLRIuoS22+cj8cym6rJxXQ6Zw+47Cvtr4V9eS7iluhYNwj+PLqPZXB2wRgZ8RzHaWeMwliRPtEBLtqy21kSCvlL3XxQOO8HRcJwNcBFEQxkMNNVefG+VvYGjDAe7qPKbGfb6FpWesNcpoSe1eFu6YH71kX4QLvaDyqCaLL3ZwgGq9p16t6pIcpg7X6xp+4yU0Z720wdZ02U8ZhikYVdLtuUK0q+v76e533wP7tOR3OyfymrNFP0Y2anwX9Z9jNyLhOWa0WVJuOZlXgVmcYY4wxxhhjjDHGGGOMMcYQpv8B4ZjOnFDcJPkAAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    );
}
