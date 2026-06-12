function calcularImpacto() {
    const chkAgua = document.getElementById("chk-agua");
    const chkSolo = document.getElementById("chk-solo");
    const chkEnergia = document.getElementById("chk-energia");

    if (!chkAgua || !chkSolo || !chkEnergia) return;

    const temAguaEficiente = chkAgua.checked;
    const temSoloSaudavel = chkSolo.checked;
    const temEnergiaLimpa = chkEnergia.checked;

    const barraProducao = document.getElementById("barra-producao");
    const barraAmbiente = document.getElementById("barra-ambiente");
    const mensagemConclusao = document.getElementById("mensagem-conclusao");

    let pontosProducao = 50;
    let pontosAmbiente = 20;

    if (temAguaEficiente) {
        pontosProducao += 15;
        pontosAmbiente += 25;
    }

    if (temSoloSaudavel) {
        pontosProducao += 20;
        pontosAmbiente += 30;
    }

    if (temEnergiaLimpa) {
        pontosProducao += 15;
        pontosAmbiente += 25;
    }

    barraProducao.style.width = pontosProducao + "%";
    barraAmbiente.style.width = pontosAmbiente + "%";

    if (pontosAmbiente <= 20) {
        barraAmbiente.style.backgroundColor = "#d32f2f";
        mensagemConclusao.innerText = "⚠️ Alerta! O manejo atual oferece riscos de esgotamento do solo e escassez hídrica. É necessário implementar práticas de manejo sustentável.";
        mensagemConclusao.style.color = "#b71c1c";
        mensagemConclusao.style.borderColor = "#b71c1c";
    } 
    else if (pontosAmbiente > 20 && pontosAmbiente < 100) {
        barraAmbiente.style.backgroundColor = "#f57c00";
        mensagemConclusao.innerText = "🌱 Progresso em andamento. Algumas melhorias já trazem resultados, mas ainda há espaço para ampliar as ações integradas na propriedade.";
        mensagemConclusao.style.color = "#e65100";
        mensagemConclusao.style.borderColor = "#f57c00";
    } 
    else {
        barraAmbiente.style.backgroundColor = "#388e3c";
        barraProducao.style.backgroundColor = "#1b5e20";
        mensagemConclusao.innerText = "🏆 Objetivo atingido! Manejo em perfeito equilíbrio. Produtividade em alto nível técnico associada à conservação total dos recursos ecológicos!";
        mensagemConclusao.style.color = "#1b5e20";
        mensagemConclusao.style.borderColor = "#388e3c";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    calcularImpacto();
});