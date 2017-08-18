
  //declare variables for points, multiplier, buy upgrade, b1 2 and 3 cost and count, make point updater
var clickcount = 0;
var pointMulti = 1;
var buyupgrade = 0;
var b1cost = 200;
var b1count = 0;
var b1multi = 1;
var b1pps = (b1count * 1) * b1multi;
var b2cost = 1000;
var b2count = 0;
var b2multi = 1;
var b2pps = (b2count * 4) * b2multi;
var b3cost  = 2000;
var b3count = 0;
var b3multi = 1;
var b3pps = (b3count * 10) * b3multi;
var b4cost = 4500;
var b4count = 0;
var b4multi = 1;
var b4pps = (b4count * 24) * b4multi;
var b5cost = 10000;
var b5count = 0;
var b5multi = 1;
var b5pps = (b5count * 56) * b5multi;
var b6cost = 25000;
var b6count = 0;
var b6multi = 1;
var b6pps = (b6count * 130) * b6multi;
var b7cost = 60000;
var b7count = 0;
var b7multi = 1;
var b7pps = (b7count * 315) * b7multi;
var b1upg = 0;
var b1m1cost = 500;
var b2upg = 0;
var b2m1cost = 2500;
var b3upg = 0;
var b3m1cost = 5000;
var b4upg = 0;
var b4m1cost = 11500;
var b5upg = 0;
var b5m1cost = 25000;
var b6upg = 0;
var b6m1cost = 62500;
var b7upg = 0;
var b7m1cost = 150000;
var ppstotal = 0;
var pointsfromclick = 0;
var totalpoints = 0;
var totalbuild = 0;
var statupdate = setInterval(updatestats, 250);
var currentpoints = setInterval(pointupdate, 250);

//clicking on main button to add points
function addPoints() {
    points += pointMulti;
    clickcount++;
    pointsfromclick += pointMulti;
    totalpoints += pointMulti;
    document.getElementById("clickcount").innerHTML = "You have " + clickcount + " total clicks.";
    document.getElementById("pointsfromclick").innerHTML = "You have made " + pointsfromclick + " bread objects from clicking.";
    document.getElementById("totalpointcount").innerHTML = "You have made " + totalpoints + " total bread objects.";
    var pointsArea = document.getElementById("pointdisplay");
    pointsArea.innerHTML = "You have " + Math.round(points) + " bread objects!";
        if(points >= 1 && buyupgrade === 0) {
        var multiply_button = document.getElementById("btn_multiply");
        multiply_button.style.display = "inline";
    }
}

//make logic for doubling addpoints
function firstx2() {
  if (buyupgrade === 0) {
    pointMulti *= 2;
    buyupgrade++;
    points -= 100;
    var multiplierArea = document.getElementById("multidisplay");
    multiplierArea.innerHTML = "Your multiplier is: " + pointMulti;
    var multiply_button = document.getElementById("btn_multiply");
    multiply_button.style.display = "none";

  //logic for displaying first building upgrade
  if (buyupgrade === 1) {
    var firstbuild = document.getElementById("firstbuild");
    firstbuild.style.display = "inline";
    firstbuild.innerText = "Sliced bread maker. Cost " + Math.round(b1cost);

    var show2ndx2 = document.getElementById("secondx2");
    multiply2.style.display = "inline";
  }

  }
}

//displays total points
function pointupdate() {
  document.getElementById("pointdisplay").innerHTML = "You have " + Math.round(points) + " bread objects!";

  if (points < b1cost) {
  document.getElementById("firstbuild").disabled = true;
}
  if (points < b2cost) {
  document.getElementById("secondbuild").disabled = true;
}
  if (points < b3cost) {
  document.getElementById("thirdbuild").disabled = true;
}
  if (points < b4cost) {
  document.getElementById("fourthbuild").disabled = true;
}
  if (points < b5cost) {
  document.getElementById("fifthbuild").disabled = true;
}
  if (points < b6cost) {
  document.getElementById("sixthbuild").disabled = true;
}
  if (points < b7cost) {
  document.getElementById("seventhbuild").disabled = true;
}

if (points >= b1cost) {
  document.getElementById("firstbuild").disabled = false;
}
  if (points >= b2cost) {
  document.getElementById("secondbuild").disabled = false;
}
  if (points >= b3cost) {
  document.getElementById("thirdbuild").disabled = false;
}
  if (points >= b4cost) {
  document.getElementById("fourthbuild").disabled = false;
}
  if (points >= b5cost) {
  document.getElementById("fifthbuild").disabled = false;
}
  if (points >= b6cost) {
  document.getElementById("sixthbuild").disabled = false;
}
  if (points >= b7cost) {
  document.getElementById("seventhbuild").disabled = false;
}
}

//what happens when you click first building button
function build1() {
  if (points >= b1cost) {
    points -= b1cost;
    b1count++;
    b1cost *= 1.10;
    totalbuild++;
    var build1add = setInterval(build1points, 1000);
    //var b1multi = 1;
    //var b1pps = (b1count * b1multi);
    updatepps();
    document.getElementById("b1").innerHTML = "You have " + b1count + " bread slicers! Making " + b1pps + " slices of bread per second. Each building is making " + 1 * b1multi + " slices of bread per second!";
    firstbuild.innerText = "Sliced bread maker. Cost " + Math.round(b1cost);
    updatepps();

    //display second building
    var secondbuild = document.getElementById("secondbuild");
    secondbuild.style.display = "inline";
    secondbuild.innerText = "Sandwich bread machine. Cost: " + Math.round(b2cost);

  }
}

//what happens when you click second building button
function build2() {
  if (points >= b2cost) {
    points -= b2cost;
    b2count++;
    b2cost *= 1.10;
    totalbuild++;
    var build2add = setInterval(build2points, 1000);
    //var b2pps = (b2count * 4) * b2multi;
    updatepps();
    document.getElementById("b2").innerHTML = "You have " + b2count + " sandwich bread machines! Making " + b2pps + " sandwich buns per second. Each machine is making " + 4 * b2multi + " sandwich buns per second!";
    secondbuild.innerText = "Sandwich bread machine. Cost " + Math.round(b2cost);
    updatepps();

    //display third building
    var thirdbuild = document.getElementById("thirdbuild");
    thirdbuild.style.display = "inline";
    thirdbuild.innerText = "Crouton maker. Cost " + Math.round(b3cost);
  }
}

//what happens when you click third building button
function build3() {
  if (points >= b3cost) {
    points -= b3cost;
    b3count++;
    b3cost *= 1.10;
    totalbuild++;
    var build3add = setInterval(build3points, 1000);
    //var b3pps = (b3count * 10) * b3multi;
    updatepps();
    document.getElementById("b3").innerHTML = "You have " + b3count + " crouton makers! Making " + b3pps + " croutons per second. Each crouton maker is making " + 10 * b3multi + " points per second!"
    thirdbuild.innerText = "Crouton maker. Cost " + Math.round(b3cost);
    updatepps();

    //display fourth building
    var fourthbuild = document.getElementById("fourthbuild");
    fourthbuild.style.display = "inline";
    fourthbuild.innerText = "Roll factory. Cost " + Math.round(b4cost);
  }
}

//what happens when you click on build4
function build4() {
  if (points >= b4cost) {
    points -= b4cost;
    b4count++;
    b4cost *= 1.10;
    totalbuild++;
    var build4add = setInterval(build4points, 1000);
    updatepps();
    document.getElementById("b4").innerHTML = "You have " + b4count + " roll factories! Making " + b4pps + " rolls per second. Each building is making " + 24 * b4multi + " rolls per second!";
    fourthbuild.innerText = "Roll factory. Cost " + Math.round(b4cost);
    updatepps();

    //display fifth building
    var fifthbuild = document.getElementById("fifthbuild");
    fifthbuild.style.display = "inline";
    fifthbuild.innerText = "Baguette oven. Cost " + Math.round(b5cost);

  }
}

function build5() {
  if (points >= b5cost) {
    points -= b5cost;
    b5count++;
    totalbuild++;
    b5cost *= 1.10;
    var build5add = setInterval(build5points, 1000);
    updatepps();
    document.getElementById("b5").innerHTML = "You have " + b5count + " baguette ovens! Making " + b5pps + " baguettes per second. Each building is making " + 56 * b5multi + " baguettes per second!";
    fifthbuild.innerText = "Baguette oven. Cost " + Math.round(b5cost);
    updatepps();

    var sixthbuild = document.getElementById("sixthbuild");
    sixthbuild.style.display = "inline";
    sixthbuild.innerText = "Bagel production line. Cost " + Math.round(b6cost);
  }
}

function build6() {
  if (points >= b6cost) {
    points -= b6cost;
    b6count++;
    totalbuild++;
    b6cost *= 1.10;
    var build6add = setInterval(build6points, 1000);
    updatepps();
    document.getElementById("b6").innerHTML = "You have " + b6count + " bagel production lines! Making " + b6pps + " bagels per second. Each building is making " + 130 * b6multi + " bagels per second!";
    sixthbuild.innerText = "Bagel production line. Cost " + Math.round(b6cost);
    updatepps();

    var seventhbuild = document.getElementById("seventhbuild")
    seventhbuild.style.display = "inline";
    seventhbuild.innerText = "Soft pretzel manufacturer. Cost " + Math.round(b7cost);
  }
}

function build7() {
  if (points >= b7cost) {
    points -= b7cost;
    b7count++;
    totalbuild++;
    b7cost *= 1.10;
    var build7add = setInterval(build7points, 1000);
    updatepps();
    document.getElementById("b7").innerHTML = "You have " + b7count + " soft pretzel manufacturers! Making " + b7pps + " soft pretzels per second. Each building is making " + 315 * b7multi + " soft pretzels per second";
    seventhbuild.innerText = "Soft pretzel manufacturer. Cost " + Math.round(b7cost);
    updatepps();
  }
}

//add points for build1
function build1points() {
  points += (1 * b1multi);
  totalpoints += (1 * b1multi);
}

//add points for build2
function build2points() {
  points += (4 * b2multi);
  totalpoints += (4 * b2multi);
}

//add points for build3
function build3points() {
  points += (10 * b3multi);
  totalpoints += (10 * b3multi);
}

function build4points() {
  points += (24 * b4multi);
  totalpoints += (24 * b4multi);
}

function build5points() {
  points += (56 * b5multi);
  totalpoints += (56 * b5multi);
}

function build6points() {
  points += (130 * b6multi);
  totalpoints += (130 * b6multi);
}

function build7points() {
  points += (315 * b7multi);
  totalpoints += (315 * b7multi);
}

//second x2, display multiplier
function secondx2() {
  if (buyupgrade == 1 && points >= 1000) {
    pointMulti *= 2;
    points -= 1000;
    buyupgrade++;
    document.getElementById("multidisplay").innerHTML = "Your multiplier is: " + pointMulti;
    multiply2.style.display = "none";

    if (buyupgrade == 2 && 5000) {
      multiply3.style.display = "inline";
    }
  }
}

function thirdx2() {
  if (buyupgrade == 2 && points >= 5000) {
    pointMulti *= 2;
    points -= 5000;
    buyupgrade++;
    document.getElementById("multidisplay").innerHTML = "Your multiplier is: " + pointMulti;
    multiply3.style.display = "none";
  }
}

function build1multi1() {
  if (points >= b1m1cost) {
    points -= b1m1cost;
    b1multi *= 2;
    b1m1count++;
    updatepps();
    var build1multi1 = document.getElementById("firstbuildmulti1");
    firstbuildmulti1.style.display = "none";
    document.getElementById("b1").innerHTML = "You have " + b1count + " bread slicers! Making " + b1pps + " slices of bread per second. Each building is making " + 1 * b1multi + " sliced of bread per second!";
  }
}

function build2multi1() {
  if (points >= b2m1cost) {
    points -= b2m1cost;
    b2multi *= 2;
    b2m1count++;
    updatepps();
    var build2multi1 = document.getElementById("secondbuildmulti1");
    secondbuildmulti1.style.display = "none";
    document.getElementById("b2").innerHTML = "You have " + b2count + " of sandwich bread makers! Making " + b2pps + " sandwich buns per second. Each building is making " + 4 * b2multi + " sandwich buns per second!";
  }
}

function build3multi1() {
  if (points >= b3m1cost) {
    points -= b3m1cost;
    b3multi *= 2;
    b3m1count++;
    updatepps();
    var build3multi1 = document.getElementById("thirdbuildmulti1");
    thirdbuildmulti1.style.display = "none";
    document.getElementById("b3").innerHTML = "You have " + b3count + " crouton makers! Making " + b3pps + " croutons per second. Each crouton maker is making " + 10 * b3multi + " croutons per second!";
  }
}

var check1 = setInterval(ucheck1, 100);
var offbutton = setInterval(buttonoff, 100);

function ucheck1() {
  if (b1upg == 0 && b1count >= 1) {
    b1c1.style.display="inline";
  }
  if (b2upg == 0 && b2count >= 1) {
    b2c1.style.display="inline";
  }
  if (b3upg == 0 && b3count >= 1) {
    b3c1.style.display="inline";
  }
  if (b4upg == 0 && b4count >= 1) {
    b4c1.style.display="inline";
  }
  if (b5upg == 0 && b5count >= 1) {
    b5c1.style.display="inline";
  }
  if (b6upg == 0 && b6count >= 1) {
    b6c1.style.display="inline";
  }
  if (b7upg == 0 && b7count >= 1) {
    b7c1.style.display="inline";
  }
}

function b1m1() {
  if (points >= b1m1cost) {
    points -= b1m1cost;
    b1upg++;
    b1multi *= 2;
    updatepps();
    b1c1.style.display = "none";
    document.getElementById("b1").innerHTML = "You have " + b1count + " bread slicers! Making " + b1pps + " slices of bread per second. Each building is making " + 1 * b1multi + " sliced of bread per second!";
  }
}

function b2m1() {
  if (points >= b2m1cost) {
    points -= b2m1cost;
    b2upg++;
    b2multi *= 2;
    updatepps();
    b2c1.style.display = "none";
    document.getElementById("b2").innerHTML = "You have " + b2count + " sandwich bread machines! Making " + b2pps + " sandwich buns per second. Each machine is making " + 4 * b2multi + " sandwich buns per second!";
  }
}

function b3m1() {
  if (points >= b3m1cost) {
    points -= b3m1cost;
    b3upg++;
    b3multi *= 2;
    updatepps();
    b3c1.style.display = "none";
    document.getElementById("b3").innerHTML = "You have " + b3count + " crouton makers! Making " + b3pps + " croutons per second. Each crouton maker is making " + 10 * b3multi + " points per second!"
  }
}

function b4m1() {
  if (points >= b4m1cost) {
    points -= b4m1cost;
    b4upg++;
    b4multi *= 2;
    updatepps();
    b4c1.style.display = "none";
    document.getElementById("b4").innerHTML = "You have " + b4count + " roll factories! Making " + b4pps + " rolls per second. Each building is making " + 24 * b4multi + " rolls per second!"
  }
}

function b5m1() {
  if (points >= b5m1cost) {
    points -= b5m1cost;
    b5upg++;
    b5multi *= 2;
    updatepps();
    b5c1.style.display = "none";
    document.getElementById("b5").innerHTML = "You have " + b5count + " baguette ovens! Making " + b5pps + " baguettes per second. Each building is making " + 56 * b5multi + " baguettes per second!";
  }
}

function b6m1() {
  if (points >= b6m1cost) {
    points -= b6m1cost;
    b6upg++;
    b6multi *= 2;
    updatepps();
    b6c1.style.display = "none";
    document.getElementById("b6").innerHTML = "You have " + b6count + " bagel production lines! Making " + b6pps + " bagels per second. Each building is making " + 130 * b6multi + " bagels per second!";
  }
}

function b7m1() {
  if (points >= b7m1cost) {
    points -= b7m1cost;
    b7upg++;
    b7multi *= 2;
    updatepps();
    b7c1.style.display = "none";
    document.getElementById("b3").innerHTML = "You have " + b3count + " crouton makers! Making " + b3pps + " croutons per second. Each crouton maker is making " + 10 * b3multi + " points per second!"
  }
}
function updatepps(){
  b1pps = (b1count * 1) * b1multi;
  b2pps = (b2count * 4) * b2multi;
  b3pps = (b3count * 10) * b3multi;
  b4pps = (b4count * 24) * b4multi;
  b5pps = (b5count * 56) * b5multi;
  b6pps = (b6count * 130) * b6multi;
  b7pps = (b7count * 315) * b7multi;
  ppstotal = b1pps + b2pps + b3pps + b4pps + b5pps + b6pps + b7pps;
  document.getElementById("ppstotal").innerHTML = "Your total bread objects per second is " + ppstotal + "!";
}

function updatestats() {
  document.getElementById("totalpointcount").innerHTML = "You have made " + totalpoints + " total points."
  document.getElementById("totalbuild").innerHTML = "You have " + totalbuild + " total buildings."
}

/*function buttonoff() {
  if (points < b1cost) {
  document.getElementById("firstbuild").disabled = true;
}
  if (points < b2cost) {
  document.getElementById("secondbuild").disabled = true;
}
  if (points < b3cost) {
  document.getElementById("thirdbuild").disabled = true;
}
  if (points < b4cost) {
  document.getElementById("fourthbuild").disabled = true;
}
  if (points < b5cost) {
  document.getElementById("fifthbuild").disabled = true;
}
  if (points < b6cost) {
  document.getElementById("sixthbuild").disabled = true;
}
  if (points < b7cost) {
  document.getElementById("seventhbuild").disabled = true;
}

if (points >= b1cost) {
  document.getElementById("firstbuild").disabled = false;
}
  if (points >= b2cost) {
  document.getElementById("secondbuild").disabled = false;
}
  if (points >= b3cost) {
  document.getElementById("thirdbuild").disabled = false;
}
  if (points >= b4cost) {
  document.getElementById("fourthbuild").disabled = false;
}
  if (points >= b5cost) {
  document.getElementById("fifthbuild").disabled = false;
}
  if (points >= b6cost) {
  document.getElementById("sixthbuild").disabled = false;
}
  if (points >= b7cost) {
  document.getElementById("seventhbuild").disabled = false;
}
}*/

function switchtab(evt, pagename) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(pagename).style.display = "block";
  evt.currentTarget.className += "active";
}