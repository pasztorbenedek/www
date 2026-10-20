async function txtBeolvasas(fajl, elem) {
    const response = await fetch(fajl);
    const szoveg = await response.text();

    elem.textContent = szoveg;
    elem.style.whiteSpace = "pre-line";
}

bevgomb.addEventListener("click", function() {
    txtBeolvasas("./forrasok/forras1.txt", szoveg);
    kep.src = "./images/img1.jpg";
    kep.alt = "Sigma Mindset";
    kep.style.display = "block";
});

gomb2.addEventListener("click", function() {
    txtBeolvasas("./forrasok/forras2.txt", szoveg);
    kep.src = "./images/img2.jpg";
    kep.alt = "Motiváció";
    kep.style.display = "block";
});

gomb3.addEventListener("click", function() {
    txtBeolvasas("./forrasok/forras3.txt", szoveg);
    kep.src = "./images/img3.jpg";
    kep.alt = "Fegyelem";
    kep.style.display = "block";
});

alaphelyzetgomb.addEventListener("click", function() {
    szoveg.textContent = "Kérem, válasszon egy témakört a fenti menüből!";
    kep.style.display = "none";
});
