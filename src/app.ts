//Declare global container constant to represent <div> container
var div=document.getElementById("div");
//Define Fruit Object type with required properties
type Fruit={
    name:string;
    price:string;
    image:string;
    unit:string;
}

//Fetch data from server using getFruits() method
function getFruits(){
    fetch( "http://localhost:3000/fruits").then(response=>response.json()).then(res=>{
        transform(res);
    })
}

//Inside transform() method, iterate the json data and transform each fruit to transformedFruit object that mirrors Fruit type 
function transform(fruits:any){
    fruits.forEach((element:any)=>{
        let transformedFruit={
        
            id:element.id,
            name:element.name,
            price:element.price,
            image:element.image,
            unit:element.unit
           
        }
        showFruit(transformedFruit);
    });
}

//Inside showFruit() method, display each transformedFruit as card by creating HTML code and appending it to the div container
function showFruit(transformedFruit:any){
    let div1=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",transformedFruit.image);
    img.setAttribute("width","100px");
    img.setAttribute("height","100px");

    let h5=document.createElement("h5");
    let h3text=document.createTextNode(transformedFruit.name);
    h5.appendChild(h3text);

    let p=document.createElement("p");
    let spanText=document.createTextNode(`Price $ ${transformedFruit.price} per ${transformedFruit.unit}`);
    p.appendChild(spanText);

   div?.appendChild(div1);
   div1.appendChild(img);
   div1.appendChild(h5);
   div1.appendChild(p);

   
   div1.setAttribute("style","background-color:white; border:1px solid black;margin:20px; padding:20px; border-radius: 15px;");
 
   
   
   div?.setAttribute("style","display:flex;flex-wrap: wrap; padding: 20px;");
  
}

//Call getFruits() method globally
getFruits();