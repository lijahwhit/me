document.getElementById("electric").value = getSavedValue("electric");
document.getElementById("propane").value = getSavedValue("propane");
document.getElementById("input0").value = getSavedValue("input0");
document.getElementById("input1").value = getSavedValue("input1");
document.getElementById("input2").value = getSavedValue("input2");
document.getElementById("input3").value = getSavedValue("input3");
document.getElementById("input4").value = getSavedValue("input4");
document.getElementById("input5").value = getSavedValue("input5");
document.getElementById("input6").value = getSavedValue("input6");
document.getElementById("input7").value = getSavedValue("input7");
document.getElementById("input8").value = getSavedValue("input8");
document.getElementById("input9").value = getSavedValue("input9");
document.getElementById("input10").value = getSavedValue("input10");
getCcpf();

function saveValue(e){
    var id = e.id; 
    var val = e.value; 
    localStorage.setItem(id, val);
}

function getSavedValue  (v){
    if (!localStorage.getItem(v)) {
        return "";
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

function clearEP() {  
  var electric = document.getElementById("electric");
  var propane = document.getElementById("propane");
  electric.value = "";
  propane.value = "";
}

function preset(number) {
  if (number === 1) {
    console.log("Preset " + number)
    var input1 = document.getElementById("input1")
    input1.value = "CCPF ";
    var input2 = document.getElementById("input2")
    input2.value = "E5 + CCPF ";
    var input3 = document.getElementById("input3")
    input3.value = "June Rent ";
    var input4 = document.getElementById("input4")
    input4.value = "June Rent + E5 + CCPF ";
    var input5 = document.getElementById("input5")
    input5.value = "June Rent + E5 + P5a + CCPF  ";
    var input6 = document.getElementById("input6")
    input6.value = "P5,a,b + CCPF ";
    var input7 = document.getElementById("input7")
    input7.value = "Monthly Auto Billing";
    var input8 = document.getElementById("input8")
    input8.value = "While processing your credit card for auto billing this month, your card did not go through. On the 6th of each month, late charges are applied. Please contact us with a card with sufficient funds or let us know when the card on your paper credit card authorization form can be charged. ";
    var input9 = document.getElementById("input9")
    input9.value = "June Storage";
    var input10 = document.getElementById("input10")
    input10.value = "";
  }
}