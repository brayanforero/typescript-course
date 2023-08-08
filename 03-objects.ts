/**
 * 1. Typing Object
 */

// Type Alias: It is a way to create a custom data type
// Now, exits a datatype HeroBasic
type HeroBasic = {
  name: string
  age: number
}

type HeroProps = {
  readonly id?: HeroID
  isActive?: boolean
  power?: PowerScale
}

// Template Union Type
type HeroID = `${string}-${string}-${string}-${string}-${string}`
// Union Type
type PowerScale = "low" | "medium" | "high"
// Intersection Type
type Hero = HeroBasic & HeroProps // -> {...HeroBasic, HeroProps} like look this

function createHero(hero: HeroBasic): Hero {
  const { name, age } = hero
  return { id: crypto.randomUUID(), name, age, isActive: true }
}

const thor: Hero = createHero({ name: "Thor", age: 1500 })
thor.power = "high"

// Type Indexing
type Platform = {
  name: string
  company: string
  spec: {
    cpu: string
    ram: number
    drive: number
    gpu: string
  }
}

const especs: Platform["spec"] = {
  cpu: "AMD Ryzen 9 U4500",
  ram: 16,
  drive: 1000,
  gpu: "RTX 4080x",
}

// Type from value
const xd = {
  abc: "ac",
  cde: "ab",
}

type XD = typeof xd

// Type from return value of function

const handler = () => {
  return () => 12
}

type Dispatch = ReturnType<typeof handler>

// Type intersection type

type RiceBase = {
  name: "rice"
  color: "white" | "brown"
}
type RiceWhite = RiceBase & {
  kg: number
}

const riceHealth: RiceWhite = {
  color: "brown",
  kg: 0.2,
  name: "rice",
}
