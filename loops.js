let arr=[2,4,6,7]
let newarr=arr.map((e)=>{
    return e**2
})
console.log(newarr)
const greaterthantwo =(e)=>{
    if(e>2){
        return true
    }

}
console.log(arr.filter(greaterthantwo))
let v=[2,3,4]
const red=(a,b)=>{
    return a*b
}
console.log(v.reduce(red))
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
    let object={
        a:2,b:5,c:6
    }
   
   for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(key,element)
    
    
   }
  for (const element of arr){

  console.log(element)
    
  }
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
  }
  console.log(newarr)
} 
