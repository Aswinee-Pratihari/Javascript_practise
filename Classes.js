class Pizza{
    
    constructor(PizzaType,PizzaSize,PizzaCrust){
        this.type=PizzaType
        this.size=PizzaSize;
        this.crust=PizzaCrust
    }
    get pizzaType(){
        return this.type
    }
    set pizzaType(PizzaType){
        this.type=PizzaType
    }

    getCrust(){
        return this.crust
    }
    setCrust(PizzaCrust){
        this.crust=PizzaCrust
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`)
    }
}

//creating object and passing parameters
const myPizza=new Pizza('chicken','Large','Thin')
// myPizza.bake()
// console.log(myPizza)
// console.log(myPizza.size)

//changing myPizza properties
// myPizza.type='veg'
// myPizza.bake()

//A better method of doing this is by getter and setter
myPizza.pizzaType='VEG'
myPizza.bake()
console.log(myPizza.pizzaType)

//better way of setting and getting
myPizza.setCrust('Thick')
myPizza.bake()
console.log(myPizza.getCrust())


class Pizza2{
    
    // #par='crust';
    constructor(PizzaSize){
        this._size=PizzaSize;
        this._crust='Original' //_ tells that it is a private property thatneeds to be changed within the class using getter and setter
    }

    getCrust(){
        return this._crust
        // return par
    }
    setCrust(PizzaCrust){
        this._crust=PizzaCrust
    }
}


//creating child class
class specialPizza extends Pizza2{
//for child class we have to call super before this
//super helps in calling constructor of parent class
constructor(PizzaSize){
    super(PizzaSize)
    this.type="The all"
}
slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 sizes`)
}
}

const specialized=new specialPizza('medium')

specialized.slice()
