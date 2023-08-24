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

enum Role {admmin = 'a', read_only = 'b', author = 'c'}
enum Role_num {admmin = 0, read_only = 10, author = 100}

let Role_dict: {[key: string]: number} = {}

console.log(Role_dict['asdf'] = 13245)

const person = {
    name: 'Todd',
    age: 27,
    hobbies: ['Sports', 'Cooking'],
    role: Role.admmin,
  }
  
//   person.role.push('admin') // !!!

let favoriteActivities: (string | number)[]
favoriteActivities = ['Sports', 1]

console.log(person.name)

if (person.role === Role.admmin) {
    console.log('is admin')
}

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase())
}
