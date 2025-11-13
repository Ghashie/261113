// script.js

console.log("Site do casamento carregado.");

// === CONTADOR REGRESSIVO ===

// Ajuste a data/hora do casamento aqui
// Formato: ano, mês-1, dia, hora, minuto (mês em JS começa em 0)
// Ex: 13/11/2026 16:30 em fuso de Brasília
const dataCasamento = new Date(2026, 10, 13, 16, 30, 0); // 10 = novembro

function atualizarContador() {
  const agora = new Date();
  const diffMs = dataCasamento - agora;

  // Se já passou, mostra mensagem e some com os cards
  if (diffMs <= 0) {
    const textoData = document.getElementById("textoData");
    const contadorDiv = document.getElementById("contador");

    if (textoData) {
      textoData.textContent = "Chegou o grande dia! 💍";
    }
    if (contadorDiv) {
      contadorDiv.style.display = "none";
    }
    return;
  }

  const totalSegundos = Math.floor(diffMs / 1000);

  const dias = Math.floor(totalSegundos / (60 * 60 * 24));
  const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
  const segundos = totalSegundos % 60;

  // Atualiza o HTML
  const elDias = document.getElementById("contadorDias");
  const elHoras = document.getElementById("contadorHoras");
  const elMinutos = document.getElementById("contadorMinutos");
  const elSegundos = document.getElementById("contadorSegundos");

  if (elDias) elDias.textContent = dias;
  if (elHoras) elHoras.textContent = horas;
  if (elMinutos) elMinutos.textContent = minutos;
  if (elSegundos) elSegundos.textContent = segundos.toString().padStart(2, "0");
}

// Atualiza imediatamente ao carregar
atualizarContador();
// E depois a cada 1 segundo
setInterval(atualizarContador, 1000);
