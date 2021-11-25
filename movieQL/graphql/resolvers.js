const hanulCha = {
    name: "hanul-cha",
    age: 25,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => hanulCha
    }
};

export default resolvers;