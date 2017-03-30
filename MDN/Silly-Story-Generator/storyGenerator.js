//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

//2. RAW TEXT STRINGS

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.",

    insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
    ],

    insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
    ],

    insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
    ];

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);


  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
    
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
    
  } else {
    var weight = Math.round(300) + ' pounds';
    var temperature =  Math.round(94) + ' farenheit';
    newStory = newStory.replace('94 farenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}