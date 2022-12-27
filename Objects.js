const Obj={
    name:"Aswinee",
    age:"21",
    college:true,
    hobbies:['Sleep','Act','Wonder'],
    beverage:{
        morning:'tea',
        afternoon:'thumsup',
        dinner:'water'
    },
    action:function(name) {
        return `Hi to ${name} from ${Obj.name} it is time for ${this.beverage.morning}`; 
        //this refers to the object we are currently in. Instead of this we can do Obj.beverage.morning
    }
}

console.log(Obj);
//accesing elements of obj
console.log(Obj['hobbies']);
console.log(Obj.beverage);
console.log(Obj.beverage['morning']);
console.log(Obj.beverage.morning);
console.log(Obj.action('SRK'))





const vehicle={
    wheels:4,
    engine:function(){
        return 'wroom!';
    }
}
//constructing a truck obj from the vehicle obj
const truck=Object.create(vehicle)

//adding properties to truck
truck.door=2;
console.log(truck)
console.log(truck.engine())
// here property of vehicle are inherited  by truck

const car=Object.create(vehicle)

car.door=4;
car.engine=function(){return 'woooosh!!'}

// console.log(car)
// console.log(car.engine())

const tesla=Object.create(car)

console.log(tesla.wheels)
tesla.engine=function(){
    return 'shhh!!'
}
console.log(tesla.engine())





const stars={
dance:"Hritik",
acting:"Srk",
body:'salman'
}

stars.singing='Sonu Nigam'

for(let job in stars){
    console.log(` ${stars[job]} is specialised in ${job}`);
} //job refers to the key and stars[job] refer to the value


//deleting a property
delete stars.body

console.log("")
console.log(Object.keys(stars)) //['dance', 'acting', 'body']
console.log(Object.values(stars)) //['Hritik', 'Srk', 'salman']

for(let job in stars){
    console.log(` ${stars[job]} is specialised in ${job}`);
} //job refers to the key and stars[job] refer to the value

//see if a key exist or not
console.log(stars.hasOwnProperty('singing'))//true
console.log(stars.hasOwnProperty('body')) //false

//destructuring objext
const{acting,body,dance,singing}=stars

console.log(acting) //srk
console.log(body) //salman
console.log(dance) //hritik
console.log(singing);

function starring ({acting}){
    console.log(acting)
}

starring(stars)