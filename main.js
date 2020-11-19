let animalArray = ['chicken', 'horse', 'monkey', 'fish', 'turtle', 'crab', 'dog', 'cat', 'parrot', 'turkey',];

let verbArray = ['run', 'jump', 'skip', 'hop', 'slide', 'moonwalk', 'shuffle', 'tip-toe'];

let placeArray = ['street', 'moon', 'barn', 'dance-floor', ];

let adjectiveArray = ['angry', 'happy', 'hungry', 'dying to party', 'tired and sleepy', 'excited for the PS5', 'crazy',];



function newJoke()
{
    let animal = animalArray[Math.floor(Math.random() * animalArray.length)];
    let verb = verbArray[Math.floor(Math.random() * verbArray.length)];
    let place = placeArray[Math.floor(Math.random() * placeArray.length)];
    let adjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];



  console.log('Why did the ' + animal + ' ' + verb + ' the ' + place + '?');
  console.log('Because the ' + animal + ' was ' + adjective + '!');
} 

newJoke();