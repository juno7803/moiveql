const junoflo = {
  name: "juno",
  age: "26",
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => junoflo,
  },
};

export default resolvers;
