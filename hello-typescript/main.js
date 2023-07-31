// Criação de variavel com js puro
var minhaVar = "minha variavel";
// JavaScript puro
function minhaFunc(x, y) {
    return x + y;
}
// Podemos usar aqui qualquer coisa de javascript puro
// Ecma Script 2015
var num = 2;
var PI = 3.14;
var numero = [1, 2, 3];
numero.map(function (e) { return e * 2; }); //ES 2015
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
