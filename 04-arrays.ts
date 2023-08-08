/**
 * Typing Arrays: There are 2 ways for typing arrays
 * 1. myType[]
 * 2. Array<myType>
 */

type Animal = {
  name: string
  weight: number
}

const zoo: Animal[] = [
  {
    name: "Begala Tiger",
    weight: 79.3,
  },
]

type Fruit = {
  name: string
  sweetness: number
}

const fruitShop: Fruit[] = [
  {
    name: "Green Apple",
    sweetness: 100,
  },
]
