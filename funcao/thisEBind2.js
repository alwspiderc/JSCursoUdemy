function Pessoa() {
  this.idade = 0;

  /* 
  a constante self irá armazenar para onde o "this" estará apontando, 
  como é uma contante não erá variação, assim podendo ser usada no lugar do "this" logo abaixo
  */
 
  const self = this;
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /* .bind(this) */,
    1000
  );
}

new Pessoa();
