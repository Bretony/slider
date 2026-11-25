 function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'flex'
        }
        function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display = 'none'
        }

        // Lucrul cu Containerul.
       
        const toatePozele = document.querySelectorAll(".item1, .item2, .item3, .item4, .item5");

toatePozele.forEach(poza => {
    poza.addEventListener("mouseenter", () => {
        // Oprim toate pozele simultan
        toatePozele.forEach(p => p.style.animationPlayState = "paused");
        
        // Aducem poza pe care e mouse-ul în față, peste toate celelalte!
        poza.style.zIndex = "100"; 
    });

    poza.addEventListener("mouseleave", () => {
        // Repornim toate pozele
        toatePozele.forEach(p => p.style.animationPlayState = "running");
        
        // Ștergem z-index-ul forțat ca să revină la ordinea din animație
        poza.style.zIndex = ""; 
    });
});
  
 // La refresh sa se revina la pozitia initiala dorita a Containerului.
// 1. Oprește browserul din a reține poziția veche de scroll la refresh


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function() {
    // 2. Selectează al doilea container (înlocuiește '.al-doilea-container' cu clasa sau ID-ul tău)
    const container2 = document.querySelector('.container');
    
    // 3. Setează distanța dorită în pixeli (ex: 100px mai sus de container)
    // Folosește valoare pozitivă pentru a te opri DEASUPRA lui, sau negativă pentru a intra ÎN el
    const offsetDorit = 100; 

    if (container2) {
        // Calculează poziția exactă a containerului față de începutul paginii
        const pozitieContainer = container2.getBoundingClientRect().top + window.scrollY;
        
        // Face scroll instant la poziția calculată
        window.scrollTo({
            top: pozitieContainer - offsetDorit,
            behavior: 'instant' // Folosește 'smooth' dacă vrei să se vadă animația de derulare
        });
    }
});
