document.addEventListener('DOMContentLoaded', (event) => {
    
    VANTA.BIRDS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        minHeight: 100.00,
        minWidth:100.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0, 
        color1: 0xfffff, 
        color2: 0x111111, 
        wingSpan: 0.8, 
        separation: 15.00, 
        alignment: 15.00, 
        cohesion: 190.00,
        quantity: 5.0 
    });

   
    document.querySelector('.text-overlay').addEventListener('mouseover', function() {
        this.style.color = '#aqua'; 
    });

    document.querySelector('.text-overlay').addEventListener('mouseout', function() {
        this.style.color = '#ffffff'; 
    });
});
