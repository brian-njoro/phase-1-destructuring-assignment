const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
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
  nestedPartner: 'Miss Piggy'
};


// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo,neigh, bleat, grunt, cluck] = farmAnimals.split(``)

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let farmAnimals2 = farmAnimals.split(" ")
farmAnimals2.splice(1,1)
const [dolly, babe, little] = farmAnimals2

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, black, pink] = farmAnimals2

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [blood, orange, banana, leaf, toy, crayon , dress] = colors

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const {muppetName, color, song, job, partner} = muppet

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {song2} = nestedMuppet.album.theMuppetMovie.song2
const {song4} = nestedMuppet.album.theMuppetMovie.song4
const {kermitJob} = nestedMuppet.nestedJob
const {nestedPartner} = nestedMuppet.nestedPartner


