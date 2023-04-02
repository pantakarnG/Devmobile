module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12345678",
  DB: "restaurants",
  dialect:"mysql",
  pool:{
    max:5,
    min:0,
    acquire:3000,
    idel:1000
  }
};
