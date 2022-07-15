export const HeaderScroll = (headerRef) => {
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('shrink')
        } else {
            headerRef.current.classList.remove('shrink')
        }
    })
}