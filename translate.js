// ================================================================
// translate.js - Versione Ottimizzata
// ================================================================

// 1. TESTI (Scritti con i backtick ` per evitare errori di sintassi)
var timelineItaliano = `
<div class="timeline__item">
  <span class="timeline__year">2013</span>
  <div class="timeline__body">
    <h3>Il primo incontro</h3>
    <p>Politecnico di Milano. Un workshop sul design sostenibile li mette fianco a fianco per la prima volta.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2016</span>
  <div class="timeline__body">
    <h3>Il viaggio in Giappone</h3>
    <p>Tre settimane tra Kyoto e Naoshima cambiano per sempre la loro visione dello spazio domestico e del silenzio come elemento di progetto.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2018</span>
  <div class="timeline__body">
    <h3>La fondazione dello studio</h3>
    <p>Aprono il loro primo studio in un loft nel Quartiere Isola a Milano. Il nome arriva quasi subito, naturale: <em>Your Living · Your Life</em>.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2021</span>
  <div class="timeline__body">
    <h3>Il riconoscimento internazionale</h3>
    <p>Lo studio viene selezionato tra i 40 under 40 più influenti del design europeo dalla rivista Wallpaper*.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2024</span>
  <div class="timeline__body">
    <h3>Oggi</h3>
    <p>Dodici collaboratori, tre sedi (Milano, Lisbona, Copenhagen) e oltre sessanta progetti residenziali e commerciali completati in quattro continenti.</p>
  </div>
</div>`;

var timelineInglese = `
<div class="timeline__item">
  <span class="timeline__year">2013</span>
  <div class="timeline__body">
    <h3>The First Meeting</h3>
    <p>Politecnico di Milano. A workshop on sustainable design brings them side by side for the first time.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2016</span>
  <div class="timeline__body">
    <h3>The Trip to Japan</h3>
    <p>Three weeks between Kyoto and Naoshima change their vision of domestic space and silence as a design element forever.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2018</span>
  <div class="timeline__body">
    <h3>The Studio's Foundation</h3>
    <p>They open their first studio in a loft in Milan's Isola district. The name comes almost immediately, naturally: <em>Your Living · Your Life</em>.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2021</span>
  <div class="timeline__body">
    <h3>International Recognition</h3>
    <p>The studio is selected among the 40 most influential under 40 in European design by Wallpaper* magazine.</p>
  </div>
</div>
<div class="timeline__item">
  <span class="timeline__year">2024</span>
  <div class="timeline__body">
    <h3>Today</h3>
    <p>Twelve collaborators, three offices (Milan, Lisbon, Copenhagen) and over sixty residential and commercial projects completed across four continents.</p>
  </div>
</div>`;

// 2. FUNZIONE DI TRADUZIONE
function switchLanguage() {
  var toggle = document.getElementById("lang-toggle");
  var timelineBox = document.getElementById("timeline-box");

  // Controllo di sicurezza per verificare che gli elementi esistano nella pagina
  if (!toggle || !timelineBox) {
    console.error("[translate.js] Errore: Elementi HTML non trovati!");
    return;
  }

  if (toggle.checked) {
    timelineBox.innerHTML = timelineInglese;
  } else {
    timelineBox.innerHTML = timelineItaliano;
  }
}

// 3. AVVIO INIZIALE
// Usiamo un evento sicuro che aspetta il caricamento completo della pagina
document.addEventListener("DOMContentLoaded", function() {
  switchLanguage();
});