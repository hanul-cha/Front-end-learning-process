export const people = [
    {
        id: "0",
        name: "songhyk-park",    
        age: 25,
        gender: "male"
    },
    {
        id: "1",
        name: "hanul-cha",    
        age: 25,
        gender: "male"
    },
    {
        id: "2",
        name: "sonmin-kim",    
        age: 35,
        gender: "male"
    },
    {
        id: "3",
        name: "inju-moon",    
        age: 40,
        gender: "male"
    },
    {
        id: "4",
        name: "ganghy-park",    
        age: 20,
        gender: "male"
    },

]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}