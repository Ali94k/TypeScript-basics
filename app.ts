// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'Todd',
//   age: 27,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// }

// person.role.push('admin') // !!!


const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
  } = {
    name: 'Todd',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
  }
  
//   person.role.push('admin') // !!!

let favoriteActivities: (string | number)[]
favoriteActivities = ['Sports', 1]

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase())
}
