var counter = 0;
const timespoint = ['09am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
const currentTime = moment().format('ha');

for(var time in timespoint) {
    $( ".container" ).append( `<div class="time_line"><div class="hour"><p>${timespoint[time]}</p></div><div class="hour_content"><textarea class="text_space"></textarea></div><div class="save"><button class="save_button">save</button></div></div>` );
};

const dt = moment().format("dddd, MMMM Do YYYY");
document.getElementById('currentDay').innerHTML=dt;

$(".save").click(function(event){
  const parent = event.target.parentElement.parentElement;
  const hour = parent.children[0].firstChild.innerHTML;
  const message = parent.children[1].firstChild.value;
  const storage = window.localStorage;

  storage.setItem(hour, message);

  console.log(event);
});

var i = 0;
var len = timespoint.length;
const arrayTextArea = $(".text_space");
for(i; i<len; i++){
  const nameTime = timespoint[i];
  const timeInStorage = window.localStorage.getItem(nameTime);
  if (timeInStorage){
    arrayTextArea[i].innerHTML = timeInStorage;
  }
  if(nameTime<currentTime){
    arrayTextArea[i].style.backgroundColor='rgb(211, 197, 197)';
  } else if(nameTime==currentTime){
    arrayTextArea[i].style.backgroundColor='#c0dd58';
  } else {
    arrayTextArea[i].style.backgroundColor='cornflowerblue';
  }
};

