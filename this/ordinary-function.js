// function outer() {
//     const innerArrow = () => {
//         console.log(this); // Object Object 
//     };
//     function innerOrdinary(){
//         console.log(this); // WindoObject
//     };
//     console.log(this); // Object
//     innerArrow();
//     innerOrdinary();
// }
// outer.call('outer');

var obj = {
    name : "Inside", 
    getName: function(){
        return this.name;
    }, 
    getNameArrow:()=>this.name
}

console.log(obj.getNameArrow());