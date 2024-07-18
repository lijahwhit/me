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
document.getElementById("monthSelect").value = getSavedValue("monthSelect");
document.getElementById("yearSelect").value = getSavedValue("yearSelect");
getCcpf();
getMonthNumber();

var monthNumber = "";
var monthNumberEnd = "";
const addChargesButton = document.getElementById('addChargesButton');
const billingCardButton = document.getElementById('billingCardButton');

function getMonthNumber() {
  var monthSelect = document.getElementById("monthSelect").value;
  if (monthSelect === "January") {
      monthNumber = "1";
  } else if (monthSelect === "February") {
      monthNumber = "2";
  } else if (monthSelect === "March") {
      monthNumber = "3";
  } else if (monthSelect === "April") {
      monthNumber = "4";
  } else if (monthSelect === "May") {
      monthNumber = "5";
  } else if (monthSelect === "June") {
      monthNumber = "6";
  } else if (monthSelect === "July") {
      monthNumber = "7";
  } else if (monthSelect === "August") {
      monthNumber = "8";
  } else if (monthSelect === "September") {
      monthNumber = "9";
  } else if (monthSelect === "October") {
      monthNumber = "10";
  } else if (monthSelect === "November") {
      monthNumber = "11";
  } else if (monthSelect === "December") {
      monthNumber = "12";
  }
}

function getMonthEndDay(month) {
  switch (month) {
      case "January":
      case "March":
      case "May":
      case "July":
      case "August":
      case "October":
      case "December":
          return "31";
      case "April":
      case "June":
      case "September":
      case "November":
          return "30";
      case "February":
          return "28"; // Consider adding a check for leap year if necessary
      default:
          return "30"; // Default case, should not be needed if all cases are covered
  };
};

function chargeOrBill() {
  if (addChargesButton.value === "On") {
    charge();
  } if (billingCardButton.value === "On") {
      bill();
  };
  console.log(billingCardButton.value)
};

// Function to update the selected month
function updateMonth() {
  const monthSelect = document.getElementById('monthSelect');
  const selectedMonth = monthSelect.value;
  localStorage.setItem('selectedMonth', selectedMonth);
}

// Function to update the selected year
function updateYear() {
  const yearSelect = document.getElementById('yearSelect');
  const selectedYear = yearSelect.value;
  localStorage.setItem('selectedYear', selectedYear);
}

// Function to initialize the dropdowns with saved values (if any)
function initializeDropdowns() {
  const selectedMonth = localStorage.getItem('selectedMonth');
  const selectedYear = localStorage.getItem('selectedYear');
  
  if (selectedMonth) {
      document.getElementById('monthSelect').value = selectedMonth;
  }
  
  if (selectedYear) {
      document.getElementById('yearSelect').value = selectedYear;
  }
}

// Call initializeDropdowns() when the page loads
document.addEventListener('DOMContentLoaded', initializeDropdowns);

function saveValue(e){
    var id = e.id; 
    var val = e.value; 
    localStorage.setItem(id, val);
}

function getSavedValue (v){
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
  
  // Convert input values to integers, defaulting to 0 if conversion fails
  var e = parseInt(electric) || 0;
  var p = parseInt(propane) || 0;
  var pA = parseInt(propaneA) || 0;
  var pB = parseInt(propaneB) || 0;

  // Calculate the sum
  var sum = e + p + pA + pB;

  // Calculate ccpf value based on the sum
  var ccpfValue = (sum === 0) ? 0.00 : Math.round(100 * sum * 0.025) / 100;

  // Update the input field with the calculated value prefixed by a $
  ccpf.value = "$" + ccpfValue.toFixed(2);

  // Call the saveValue function
  saveValue("input0");
}

function copyText(x) {
  var copyText = document.getElementById("input" + x);
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Restore styles for buttons
    const activeButton = localStorage.getItem('activeButton');
    if (activeButton) {
        document.getElementById(activeButton).classList.add('active');
    }
});

function toggleButtonStyle(buttonType) {
    const addChargesButton = document.getElementById('addChargesButton');
    const billingCardButton = document.getElementById('billingCardButton');
    
    if (buttonType === 'addCharges') {
        addChargesButton.value = 'On';
        billingCardButton.value = 'Off';
        addChargesButton.classList.add('active');
        billingCardButton.classList.remove('active');
        localStorage.setItem('activeButton', 'addChargesButton');
    } else if (buttonType === 'billingCard') {
        addChargesButton.value = 'Off';
        billingCardButton.value = 'On';
        billingCardButton.classList.add('active');
        addChargesButton.classList.remove('active');
        localStorage.setItem('activeButton', 'billingCardButton');
    }
}

document.addEventListener('DOMContentLoaded', function() {
  const yearSelect = document.getElementById("yearSelect");
  const currentYear = new Date().getFullYear();
  for (let i = currentYear + 1; i >= currentYear - 1; i--) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
  }

  // Load the saved year from localStorage
  const savedYear = localStorage.getItem('selectedYear');
  if (savedYear) {
      yearSelect.value = savedYear;
  }
});

// Function to save the selected year
function updateYear() {
  const yearSelect = document.getElementById('yearSelect');
  const selectedYear = yearSelect.value;
  localStorage.setItem('selectedYear', selectedYear);
}


function bill() {
  var monthSelect = document.getElementById("monthSelect").value;
  
  var input1 = document.getElementById("input1")
  input1.value = "CCPF ";
  saveValue(input1);
  var input2 = document.getElementById("input2")
  input2.value = "E" + (monthNumber-1) + " + CCPF ";
  saveValue(input2);
  var input3 = document.getElementById("input3")
  input3.value = monthSelect + " Rent ";
  saveValue(input3);
  var input4 = document.getElementById("input4")
  input4.value = monthSelect + " Rent + E" + (monthNumber-1) + " + CCPF ";
  saveValue(input4);
  var input5 = document.getElementById("input5")
  input5.value = monthSelect + " Rent + E" + (monthNumber-1) + " + P" + (monthNumber-1) + " + CCPF  ";
  saveValue(input5);
  var input6 = document.getElementById("input6")
  input6.value = "P" + (monthNumber-1) + ",a,b + CCPF ";
  saveValue(input6);
  var input7 = document.getElementById("input7")
  input7.value = "Monthly Auto Billing";
  saveValue(input7);
  var input8 = document.getElementById("input8")
  input8.value = "While processing your credit card for auto billing this month, your card did not go through. On the 6th of each month, late charges are applied. Please contact us with a card with sufficient funds or let us know when the card on your paper credit card authorization form can be charged. The card in question is a Visa Mastercard ending in ####. ";
  saveValue(input8);
  var input9 = document.getElementById("input9")
  input9.value = monthSelect + " Storage";
  saveValue(input9);
  var input10 = document.getElementById("input10")
  input10.value = "";
  saveValue(input10);
}

function charge() {
  var yearSelect = document.getElementById("yearSelect").value;
  var monthSelect = document.getElementById("monthSelect").value;
  var monthNumberEnd = getMonthEndDay(monthSelect);
  var input1 = document.getElementById("input1")

  input1.value = "Rent " + monthNumber + "/" + "1" + "/" + yearSelect + " - " + monthNumber + "/" + monthNumberEnd + "/" + yearSelect;
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
  input5.value = "Flat Rate Electric E" + (monthNumber-1);
  saveValue(input5);
  var input6 = document.getElementById("input6")
  input6.value = "100";
  saveValue(input6);
  var input7 = document.getElementById("input7")
  input7.value = "60";
  saveValue(input7);
  var input8 = document.getElementById("input8")
  input8.value = "Storage " + monthNumber + "/" + "1" + "/" + yearSelect + " - " + monthNumber + "/" + monthNumberEnd + "/" + yearSelect;
  saveValue(input8);
  var input9 = document.getElementById("input9")
  input9.value = "100";
  saveValue(input9);
  var input10 = document.getElementById("input10")
  input10.value = "75";
  saveValue(input10);
}