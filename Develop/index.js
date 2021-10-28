var counter = 0;
const timespoint = ['09am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];


// for(counter; counter<100; counter++) {
//     $( ".container" ).append( '<div class="time_line"><div class="hour"><p>10am</p></div><div class="hour_content"><textarea>Go to take shower</textarea></div><div class="save"><button class="save_button"></button></div></div>' );
// }

for(var time in timespoint) {
    $( ".container" ).append( `<div class="time_line"><div class="hour"><p>${timespoint[time]}</p></div><div class="hour_content"><textarea></textarea></div><div class="save"><button class="save_button"></button></div></div>` );
};


$.each($(".time_line"), function( index, value ) {
  $(value).onclick = () => console.log("test");
});