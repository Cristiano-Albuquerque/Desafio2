class Hero {
    constructor(tipo) {
      this.tipo = tipo;
    }
  
    atack() {
      let ataque = '';
  
      if (this.tipo === 'mago') {
        ataque = 'magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'espada';
      } else if (this.tipo === 'monge') {
        ataque = 'artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'shuriken';
      } else {
        ataque = 'ataque desconhecido';
      }
  
      return ataque;
    }
  }
  
  let tipoHero = 'mago';
  let heroFull = new Hero(tipoHero);
  let ataque = heroFull.atack();
  
  console.log(`O ${tipoHero} atacou usando ${ataque}`);