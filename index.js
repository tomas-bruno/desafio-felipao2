function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel;
    if (vitorias < 80) {
      nivel = "Ferro";
    } else if (vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
    return [saldo, nivel];
  }
  
  let [saldo, nivel] = calcularRank(50, 20);
  console.log(`O Herói tem de saldo de **${saldo}** está no nível de **${nivel}**`);