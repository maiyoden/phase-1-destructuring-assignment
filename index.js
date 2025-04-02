// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Use destructuring to assign appropriate variables based on sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Bolt the horse wandered off, so let's assign four animals.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Little the chicken had to go back to the coop; assign three with color variables.
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Use destructuring to assign variables using color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Leave out indigo, using the first letter of each color.
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo using a separate variable.
const [, , , , , indg] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit',
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy',
};

// 7. Use destructuring to assign variables using the keys.
const { muppetName, color, song, job, partner } = muppet;

// 8. Assign songs 2 and 4, and Kermit's job and partner.
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;

console.log({ moo, neigh, baa, oink, cluck });
console.log({ bessie, dolly, babe, little });
console.log({ blackAndWhite, black, pink });
console.log({ red, orange, yellow, green, blue, indigo, violet });
console.log({ r, o, y, g, b, v });
console.log({ indg });
console.log({ muppetName, color, song, job, partner });
console.log({ song2, song4, nestedJob, nestedPartner });
