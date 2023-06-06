document.getElementById("electric").value = getSavedValue("electric");
document.getElementById("propane").value = getSavedValue("propane");
document.getElementById("input0").value = getSavedValue("input0");
document.getElementById("input1").value = getSavedValue("input1");    // set the value to this input
document.getElementById("input2").value = getSavedValue("input2");
document.getElementById("input3").value = getSavedValue("input3");
document.getElementById("input4").value = getSavedValue("input4");
document.getElementById("input5").value = getSavedValue("input5");
document.getElementById("input6").value = getSavedValue("input6");
document.getElementById("input7").value = getSavedValue("input7");
document.getElementById("input7").value = getSavedValue("input8");
getCcpf();
/* Here you can add more inputs to set value. if it's saved */

//Save the value function - save it to localStorage as (ID, VALUE)
function saveValue(e){
    var id = e.id;  // get the sender's id to save it . 
    var val = e.value; // get the value. 
    localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
}

//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}

electric.addEventListener("input", getCcpf);
propane.addEventListener("input", getCcpf);

function getCcpf() {
  var electric = document.getElementById("electric").value;
  var propane = document.getElementById("propane").value;
  var ccpf = document.getElementById("input0");
  var e = parseInt(electric)
  var p = parseInt(propane)
  console.log("Electric: " + electric)
  console.log("Propane: " + propane)
  if (electric === "" && propane === "") {
    ccpf.value = "0.00"
  } else if (propane === "") {
      var y = e * 0.025;
      var x = Math.round(100*y)/100;
      ccpf.value = x;
    } else if (electric === "") {
      var y = p * 0.025;
      var x = Math.round(100*y)/100;
      ccpf.value = x;
      } else {
        var y = (e += p) * 0.025;
        var x = Math.round(100*y)/100;
        ccpf.value = x;
  }
  saveValue("input0")
}

function copyText(number) {
  var copyText = document.getElementById("input" + number);
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  
  }

