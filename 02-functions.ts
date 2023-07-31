/**
 * 1. Function with data on params
 * (myParam: mytype) => {}
 */

function saludar(name: string) {
  console.log(`Hello ${name}`)
}

/**
 * 2. Function with a object as param
 * (myParam: {myprop: mytype}) => {}
 */

function sayHello(person: { name: string; age: number }) {
  const { name, age } = person
  console.log(`Hi ${name}, you are ${age} years old.`)
}

saludar("Brayan")
sayHello({ name: "Bricher", age: 51 })

/**
 * 3. Function with return
 * (myParam: {myprop: mytype}):mytype => {}
 */

function add(a: number, b: number): number {
  return a + b
}

/**
 * 4. Function with a callback as paramater
 * (callback: mycallbackType}) => {}
 */

function set(callback: (name: string) => string) {
  return callback("Brayan")
}

set((name) => {
  return name.toUpperCase()
})
