// ===============================================================================
// DATA
// Below data will hold all of the animals.
// ===============================================================================

var animal = [
  {
    routeName: "cat",
    name: "Siamese",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 1,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 2,
    Size: 1,
    Energetic: 2,
    Clean: 1,
    catorDog: 2,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Doberman Pinscher",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 5,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 5,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Black Labrador Retriever",
    role: "pet",
    compatability: 0,
    ChildFriendly: 1,
    Excr: 1,
    Loyalty: 1,
    Emotional: 2,
    Cuddly: 2,
    Backyard: 1,
    Size: 3,
    Energetic: 1,
    Clean: 2,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Shetland Sheepdog Sheltie",
    role: "pet",
    compatability: 0,
    ChildFriendly: 3,
    Excr: 1,
    Loyalty: 2,
    Emotional: 3,
    Cuddly: 1,
    Backyard: 0,
    Size: 1,
    Energetic: 2,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "German Shepherd Dog",
    role: "pet",
    compatability: 0,
    ChildFriendly: 2,
    Excr: 1,
    Loyalty: 2,
    Emotional: 2,
    Cuddly: 1,
    Backyard: 0,
    Size: 1,
    Energetic: 2,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Dalmatian",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 5,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 5,
    Clean: 2,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Collie",
    role: "pet",
    compatability: 0,
    ChildFriendly: 3,
    Excr: 2,
    Loyalty: 2,
    Emotional: 3,
    Cuddly: 4,
    Backyard: 1,
    Size: 2,
    Energetic: 3,
    Clean: 3,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Yellow Labrador Retriever",
    role: "pet",
    compatability: 0,
    ChildFriendly: 2,
    Excr: 1,
    Loyalty: 2,
    Emotional: 4,
    Cuddly: 1,
    Backyard: 1,
    Size: 1,
    Energetic: 1,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Golden Retriever",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 1,
    Loyalty: 2,
    Emotional: 3,
    Cuddly: 1,
    Backyard: 1,
    Size: 1,
    Energetic: 1,
    Clean: 5,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Bernese Mountain Dog",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 2,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 3,
    Backyard: 1,
    Size: 1,
    Energetic: 2,
    Clean: 3,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "cat",
    name: "Persian",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 3,
    Cuddly: 3,
    Backyard: 1,
    Size: 1,
    Energetic: 2,
    Clean: 3,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "cat",
    name: "Himalayan",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 3,
    Cuddly: 1,
    Backyard: 0,
    Size: 1,
    Energetic: 1,
    Clean: 5,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Standard Poodle",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 4,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 3,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Siberian Husky",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 5,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 3,
    Energetic: 5,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Jack Russell Terrier",
    role: "pet",
    compatability: 0,
    ChildFriendly: 2,
    Excr: 3,
    Loyalty: 3,
    Emotional: 2,
    Cuddly: 2,
    Backyard: 1,
    Size: 3,
    Energetic: 3,
    Clean: 2,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Brittany Spaniel",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 3,
    Cuddly: 3,
    Backyard: 1,
    Size: 3,
    Energetic: 2,
    Clean: 3,
    catorDog: 1,
    bio: ""
  },
  {
    routeName: "dog",
    name: "Australian Shepherd",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 1,
    Loyalty: 5,
    Emotional: 5,
    Cuddly: 5,
    Backyard: 1,
    Size: 2,
    Energetic: 2,
    Clean: 1,
    catorDog: 2,
    bio: ""
  },
  {
    routeName: "cat",
    name: "Siberian",
    role: "pet",
    compatability: 0,
    ChildFriendly: 5,
    Excr: 1,
    Loyalty: 1,
    Emotional: 3,
    Cuddly: 3,
    Backyard: 1,
    Size: 2,
    Energetic: 2,
    Clean: 3,
    catorDog: 2,
    bio: ""
  },
  {
    routeName: "cat",
    name: "American Shorthair",
    role: "pet",
    compatability: 0,
    ChildFriendly: 3,
    Excr: 1,
    Loyalty: 3,
    Emotional: 5,
    Cuddly: 4,
    Backyard: 1,
    Size: 1,
    Energetic: 2,
    Clean: 4,
    catorDog: 0,
    bio: ""
  },
  {
    routeName: "cat",
    name: "Tabby",
    role: "pet",
    compatability: 0,
    ChildFriendly: 4,
    Excr: 2,
    Loyalty: 3,
    Emotional: 2,
    Cuddly: 3,
    Backyard: 2,
    Size: 1,
    Energetic: 2,
    Clean: 2,
    catorDog: 0,
    bio: ""
  }
  ];

  //Note how we export the array. This makes it accessible to other files using require.
  module.exports = animal;