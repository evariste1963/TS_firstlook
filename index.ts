import * as _ from 'lodash'

async function hello(){
    return 'world'
}



let lucky = 20  //implicit type

let luckier: any = 23  // opting out ot type

luckier = 'some text'

let luckiest; // inferred as any type

let luckinow: number; //explicit type 
luckinow = 20

// customer types
//give type a name in pascal case
type Style = 'bold' | 'italic' | 23;

let font: Style;

font = 'italic'

//enforcing types

interface Person{
    first:string,
    last: string,
    [key:string]: any  //allows to add any additional property to type --> eg fast:true below
}


const person: Person = {
    first: 'jeff',
    last: 'Delany'
}
const person2: Person = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
}

function pow(x,y){
    return Math.pow(x,y)
}

//pow(23,'foo')

function pow1(x:number,y:number){
    return Math.pow(x,y)
}

pow1(23,3)

// explicitly typing the return value as string
function pow2(x:number,y:number):string{
    return Math.pow(x,y).toString()
}

pow2(23,3)

//for functions that don't return anything ie event listeners etc
function pow3(x:number,y:number): void{
    Math.pow(x,y)
}

pow3(23,3)

//strong typing an array

const arr = []

arr.push(1)
arr.push('23')
arr.push(false)

// const arr1:number[] = []

// arr1.push(1)
// arr1.push('23')
// arr1.push(false)

// tuple
type MyList = [number?, string?, boolean?]
//the ? are just because the array is initial declared as empty -- can also be used elsewhere i.e for optional function args
const arr2:MyList = []

arr2.push(1)
arr2.push('23')
arr2.push(false)

//generics

class Observable<T>{
    constructor(public value: T){

    }

    
}
let x = Observable<number>
let y = Observable<Person>
let z = new Observable(23)