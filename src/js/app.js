console.log("App is running!");
document.addEventListener('DOMContentLoaded', () => {
    const brandNameDiv = document.querySelector('.brand-name');
    const svgs = brandNameDiv.querySelectorAll('svg');

    if (svgs.length > 0) {
        svgs.forEach(svg => {
            const textSvg = svg.querySelector('text');
            if (window.innerWidth <= 768) {
                svg.setAttribute('viewBox', '0 0 80 32');
                svg.setAttribute('width', '120');
                if(textSvg) {
                    textSvg.setAttribute('y', '88%');
                }
            }
        });
    } 
});