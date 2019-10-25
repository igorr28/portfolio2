// import Parallax from 'parallax-js'

// var scene = document.querySelector('#scene');
// var parallaxInstance = new Parallax(scene, {
//     relativeInput: true
    
// });
// alert(2);

function moveLayersDependsOnScroll(wScroll, elem) {
    const parallax = document.querySelector(elem);
    const layers = parallax.children;
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.deep;
        const strafe = wScroll * divider / 100;
        layer.style.transform = `translate3d(0, -${strafe}%, 0)`;
    })
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll, '.parallax-one');
    moveLayersDependsOnScroll(wScroll, '.parallax-two');
})