let dia = prompt('Qual dia da semana é? ');

if (dia === "segunda-feira" || dia === "segunda") {
    alert("Boa segunda-feira!");
} else if (dia === "terça-feira" || dia === "terca-feira" || dia === "terça" || dia === "terca") {
    alert("Boa terça-feira!");
} else if (dia === "quarta-feira" || dia === "quarta") {
    alert("Boa quarta-feira!");
} else if (dia === "quinta-feira" || dia === "quinta") {
    alert("Boa quinta-feira!");
} else if (dia === "sexta-feira" || dia === "sexta") {
    alert("Boa sexta-feira!");
} else if (dia === "sábado" || dia === "sabado") {
    alert("Bom final de semana! Aproveite o sábado!");
} else if (dia === "domingo") {
    alert("Bom final de semana! Aproveite o domingo!");
} else {
    alert("Dia da semana não reconhecido.");
}
