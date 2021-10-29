var counter = 0;
const timespoint = ['09am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];


// for(counter; counter<100; counter++) {
//     $( ".container" ).append( '<div class="time_line"><div class="hour"><p>10am</p></div><div class="hour_content"><textarea>Go to take shower</textarea></div><div class="save"><button class="save_button"></button></div></div>' );
// }

for(var time in timespoint) {
    $( ".container" ).append( `<div class="time_line"><div class="hour"><p>${timespoint[time]}</p></div><div class="hour_content"><textarea class="text_space"></textarea></div><div class="save"><button class="save_button">save</button></div></div>` );
};


// $.each($(".time_line"), function( index, value ) {
//   $(value).onclick = () => console.log("test");
// });

const dt = moment().format("dddd, MMMM Do YYYY");
document.getElementById('currentDay').innerHTML=dt;

$(".save").click(function(event){
  const parent = event.target.parentElement.parentElement;
  const hour = parent.children[0].firstChild.innerHTML;
  const message = parent.children[1].firstChild.value;
  const storage = window.localStorage;

  storage.setItem(hour, message);

  console.log(event)
})