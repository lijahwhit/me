document.getElementById("electric").value = getSavedValue("electric");
document.getElementById("propane").value = getSavedValue("propane");
document.getElementById("propaneA").value = getSavedValue("propaneA");
document.getElementById("propaneB").value = getSavedValue("propaneB");
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
document.getElementById("year").value = getSavedValue("year");
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
propaneA.addEventListener("input", getCcpf);
propaneB.addEventListener("input", getCcpf);

function getCcpf() {
  var electric = document.getElementById("electric").value;
  var propane = document.getElementById("propane").value;
  var propaneA = document.getElementById("propaneA").value;
  var propaneB = document.getElementById("propaneB").value;
  var ccpf = document.getElementById("input0");
  var e = parseInt(electric)
  var p = parseInt(propane)
  var pA = parseInt(propaneA)
  var pB = parseInt(propaneB)

  var sum = e + p + pA + pB

  if (sum === 0) {
    ccpf.value = "0.00"
  } else {
      var y = sum * 0.025;
      var x = Math.round(100*y)/100;
      ccpf.value = x;
    }
  saveValue("input0")
}

function copyText(rent) {
  var copyText = document.getElementById("input" + rent);
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  
  }

function clearEP() {  
  var electric = document.getElementById("electric");
  var propane = document.getElementById("propane");
  electric.value = "";
  propane.value = "";
}

function bill(month, electric, rent, cal) {
  var year = document.getElementById("year").value;
  console.log("Preset " + rent)
  var input1 = document.getElementById("input1")
  input1.value = "Rent " + rent + "/" + "1" + "/" + year + " - " + rent + "/" + cal + "/" + year;
  saveValue(input1);
  var input2 = document.getElementById("input2")
  input2.value = "845";
  saveValue(input2);
  var input3 = document.getElementById("input3")
  input3.value = "745";
  saveValue(input3);
  var input4 = document.getElementById("input4")
  input4.value = "645";
  saveValue(input4);
  var input5 = document.getElementById("input5")
  input5.value = "Flat Rate Electric E" + electric;
  saveValue(input5);
  var input6 = document.getElementById("input6")
  input6.value = "100";
  saveValue(input6);
  var input7 = document.getElementById("input7")
  input7.value = "60";
  saveValue(input7);
  var input8 = document.getElementById("input8")
  input8.value = "Storage " + rent + "/" + "1" + "/" + year + " - " + rent + "/" + cal + "/" + year;
  saveValue(input8);
  var input9 = document.getElementById("input9")
  input9.value = "100";
  saveValue(input9);
  var input10 = document.getElementById("input10")
  input10.value = "75";
  saveValue(input10);

}

function charge(month, rent) {
  console.log("Preset " + rent)
  var input1 = document.getElementById("input1")
  input1.value = "CCPF ";
  saveValue(input1);
  var input2 = document.getElementById("input2")
  input2.value = "E" + rent + " + CCPF ";
  saveValue(input2);
  var input3 = document.getElementById("input3")
  input3.value = month + " Rent ";
  saveValue(input3);
  var input4 = document.getElementById("input4")
  input4.value = month + " Rent + E" + rent + " + CCPF ";
  saveValue(input4);
  var input5 = document.getElementById("input5")
  input5.value = month + " Rent + E" + rent + " + P" + rent + " + CCPF  ";
  saveValue(input5);
  var input6 = document.getElementById("input6")
  input6.value = "P" + rent + ",a,b + CCPF ";
  saveValue(input6);
  var input7 = document.getElementById("input7")
  input7.value = "Monthly Auto Billing";
  saveValue(input7);
  var input8 = document.getElementById("input8")
  input8.value = "While processing your credit card for auto billing this month, your card did not go through. On the 6th of each month, late charges are applied. Please contact us with a card with sufficient funds or let us know when the card on your paper credit card authorization form can be charged. ";
  saveValue(input8);
  var input9 = document.getElementById("input9")
  input9.value = month + " Storage";
  saveValue(input9);
  var input10 = document.getElementById("input10")
  input10.value = "";
  saveValue(input10);

}