const cimkontener = document.createElement("div");
cimkontener.className = "cimkontener";

const cimsor = document.createElement("div");
cimsor.className = "cimsor";

const cimoszlop = document.createElement("div");
cimoszlop.className = "cimoszlop";

const focim = document.createElement("h1");
focim.textContent = "Sigma Mindset";
focim.className = "focim";
focim.id = "focim";

const alcim = document.createElement("h3");
alcim.textContent = "Fegyelem, motiváció és önfejlesztés.";
alcim.id = "alcim";

const alaphelyzetgomb = document.createElement("button");
alaphelyzetgomb.id = "alaphelyzet";
alaphelyzetgomb.textContent = "Alaphelyzet";
alaphelyzetgomb.className = "gomb";

const bevgomb = document.createElement("button");
bevgomb.id = "bevgomb";
bevgomb.textContent = "Sigma Mindset";
bevgomb.className = "gomb";

const gomb2 = document.createElement("button");
gomb2.id = "gomb2";
gomb2.textContent = "Motiváció";
gomb2.className = "gomb";

const gomb3 = document.createElement("button");
gomb3.id = "gomb3";
gomb3.textContent = "Fegyelem";
gomb3.className = "gomb";

const szoveg = document.createElement("p");
szoveg.id = "szoveg";
szoveg.textContent = "Kérem, válasszon egy témakört a fenti menüből!";

const kep = document.createElement("img");
kep.id = "kep";
kep.src = "./images/img1.jpg";
kep.alt = "Sigma Mindset";
kep.style.display = "none";

cimoszlop.appendChild(focim);
cimoszlop.appendChild(alcim);
cimoszlop.appendChild(alaphelyzetgomb);
cimoszlop.appendChild(bevgomb);
cimoszlop.appendChild(gomb2);
cimoszlop.appendChild(gomb3);

cimsor.appendChild(cimoszlop);
cimkontener.appendChild(cimsor);

document.body.appendChild(cimkontener);
document.body.appendChild(szoveg);
document.body.appendChild(kep);
