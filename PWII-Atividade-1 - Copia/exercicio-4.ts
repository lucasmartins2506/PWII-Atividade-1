let num:number =20;
let parImpar = function(numero:number):boolean
{
    if(numero % 2 == 0)
    {
        return true
    }
    else
    {
       return false
    }
}
console.log(`${parImpar(num)}`);