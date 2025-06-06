const loadFont = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap';
    document.head.appendChild(link);
}


const createArtPayButton = () => {
    const targetSelector = "[data-artpay-button]";
    const targetElement = document.querySelector(targetSelector);

    if (!targetElement) {
        console.warn("ArtPay: Nessun elemento target trovato per il bottone.");
        return;
    }

    Object.assign(targetElement.style, {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        maxWidth: '375px',
        position: 'relative'
    });

    const button = document.createElement("button");
    button.className = "artpay-button";
    button.innerHTML = "Paga a rate";

    Object.assign(button.style, {
        backgroundColor: '#3E4EEC',
        color: "white",
        border: "none",
        padding: "8px 24px",
        fontSize: "18px",
        fontWeight: "500",
        cursor: "pointer",
        width: "100%",
        borderRadius: "45px",
        fontFamily: "Inter",
        transition: "background-color 0.3s ease",
        maxWidth: "375px",
        minWidth: "150px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
    });

    button.addEventListener('mouseover', () => button.style.backgroundColor = '#313dd1');
    button.addEventListener('mouseout', () => button.style.backgroundColor = '#3E4EEC');

    targetElement.appendChild(button);

}


(function () {
    loadFont();
    createArtPayButton();
})();
