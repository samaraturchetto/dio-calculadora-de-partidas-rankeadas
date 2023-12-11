var vitorias = parseInt(Math.random() * 200) + 1
var derrotas = parseInt(Math.random() * 200) + 1
var saldoRankeadas = calculadoraRankeadas(vitorias, derrotas)
var nivelAtual = ""

function calculadoraRankeadas (vitorias, derrotas){
        return vitorias - derrotas
}

switch (true) {
    case saldoRankeadas <= 10:
        nivelAtual = "Ferro"
        break
    case saldoRankeadas > 10 && saldoRankeadas < 21:
        nivelAtual = "Bronze"
        break
    case saldoRankeadas > 20 && saldoRankeadas < 51:
        nivelAtual = "Prata"
        break
    case saldoRankeadas > 50 && saldoRankeadas < 81:
        nivelAtual = "Ouro"
        break
    case saldoRankeadas > 80 && saldoRankeadas < 91:
        nivelAtual = "Platina"
        break
    case saldoRankeadas > 90 && saldoRankeadas < 101:
        nivelAtual = "Diamante"
        break
    case saldoRankeadas > 100 && saldoRankeadas < 121:
        nivelAtual = "Lendário"
        break
    default: 
        nivelAtual = "Imortal"
}

console.log(`O Herói tem ${vitorias} vitórias e ${derrotas} derrotas, totalizando um saldo de ${saldoRankeadas}, portanto está no nível ${nivelAtual}.`)