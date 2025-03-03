// Contador de visitas (simples, só funciona enquanto a aba estiver aberta)
document.addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("visitCount") || 0;
    visitCount++;
    localStorage.setItem("visitCount", visitCount);
    document.getElementById("visit-count").innerText = visitCount;
});
