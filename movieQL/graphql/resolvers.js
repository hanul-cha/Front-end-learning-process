const people = [
    {
        name: "hanul-cha",    
        age: 25,
        gender: "male"
    },
    {
        name: "sonmin-kim",    
        age: 35,
        gender: "male"
    },
    {
        name: "inju-moon",    
        age: 40,
        gender: "male"
    },
    {
        name: "ganghy-park",    
        age: 20,
        gender: "male"
    },

]

const resolvers = {
    Query: {
        people: () => people
    }
};

export default resolvers;