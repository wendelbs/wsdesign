const quasearray = {0: 'Ana', 1: 'Pedro', 2:'Lu'}
Object.defineProperty(quasearray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable:false
})
console.log(quasearray[0])
//console.log(quasearray.toString(), meuArray)