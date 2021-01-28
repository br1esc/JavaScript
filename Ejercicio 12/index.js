const words = ['“Environmental”', '“Systems”', '“Research”', '“Institute”'];
const long= words.reduce((acc, item)=> {
    if (acc.length> item.length){
        return acc
    } else {
        return item
    }
});

console.log ( 'La palabra más larga del la lista es '+ long);