function subtrair(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  
  
  let resultado = subtrair(200, 100); 
  
    let elo = ("");
  if (resultado <= 10) {
     elo = "Ferro";
  } else if (resultado >= 11 && resultado <= 20) {
      elo = "Bronze";
  } else if (resultado >= 21 && resultado <= 50) {
      elo = "Prata";
  } else if (resultado >= 51 && resultado <= 80) {
      elo = "Ouro";
  } else if (resultado >= 81 && resultado <= 90) {
      elo = "Diamante";
  } else if (resultado >= 91 && resultado <=100) {
      elo = "Lendário";
  } else if (resultado >= 101) {
      elo = "Imortal";
  }
  
  console.log("O Herói tem o saldo de " + resultado + " e está no nível de " + elo);
  