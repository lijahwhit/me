let settingsIcon = document.querySelector('.settingsIcon');
let adjustmentBtnsIcon = document.querySelector('.adjustmentBtnsIcon');
let notesIcon = document.querySelector('.notesIcon');
let resetIcon = document.querySelector('.resetIcon');
let body = document.querySelector('body');
let leftScore = document.querySelector('.leftScore');
let rightScore = document.querySelector('.rightScore');
let leftNumber = document.querySelector('.leftNumber');
let rightNumber = document.querySelector('.rightNumber');
let resetBtn = document.querySelector('#resetBtn');
let settingsView = document.querySelector('.settingsView');
let notesView = document.querySelector('.notesView');
let iconsBtns = document.querySelector('.iconsBtnsToggle');
let SLBtn = document.querySelector('#startLeftBtn');
let SRBtn = document.querySelector('#startRightBtn');
let preset1 = document.querySelector('#preset1');
let preset2 = document.querySelector('#preset2');
let preset3 = document.querySelector('#preset3');
let preset4 = document.querySelector('#preset4');

leftNumber.innerText = 0;
rightNumber.innerText = 0;
preset1.style.backgroundColor = "green"
leftNumber.style.color = "green"

settingsView.classList.add('off');
notesView.classList.add('off');
resetIcon.classList.add('off');

let a = 0;
let b = 0;
let c = 0;
let max = 99;
let min = 0;
let adj = 0;
let set = 0;
let not = 0;
let LIKeyV = 'ArrowUp';
let LDKeyV = 'ArrowDown';
let RIKeyV = 'ArrowRight';
let RDKeyV = 'ArrowLeft';
let L = 'green';
let R = 'white'

console.log("First L = " + L)
console.log("First R = " + R)

function scoreBoard(change) {
    if (change === "lUp") {
        if(a < max){
            a++;
            a = (a < max) ? a : a;
            leftNumber.innerText = a;
            };
        }
        
        else if (change === "lDown") {
            if(a > min){
                a--;
                a = (a < min) ? a : a;
                leftNumber.innerText = a;
            };
            } 
            
            else if (change === "rUp") {
                if(b < max){
                    b++;
                    b = (b < max) ? b : b;
                    rightNumber.innerText = b;
                };
                } 
                
                else if (change === "rDown") {
                    if(b > min){
                        b--;
                        b = (b < min) ? b : b;
                        rightNumber.innerText = b;
                    };
                };
    
    if (change === "lUp" || change === "rUp") {
        if ((a + b) % 2 === 0) {
            if (L === 'green') {
                rightNumber.style.color = L;
                leftNumber.style.color = R;
                L = 'white'
                R = 'green'
            } else if (L === 'white') {
                rightNumber.style.color = L;
                leftNumber.style.color = R;
                L = 'green'
                R = 'white'
            };
        };
    } else if (change === "lDown" || change === "rDown") {
        if ((a + b) % 2 === 0) {
            if (L === 'white') {
                rightNumber.style.color = R;
                leftNumber.style.color = L;
                L = 'white'
                R = 'green'
            } else if (L === 'green') {
                rightNumber.style.color = R;
                leftNumber.style.color = L;
                L = 'green'
                R = 'white'
            };
        };
    };
    console.log("L = " + L)
    console.log("R = " + R)

    //     if (change === "lUp" || change === "rUp") {
//         if(c < max) {
//             c = c + 1
//         }
//     } else if (change === "lDown" || change === "rDown") {
//         if(c > min) {
//             c = c - 1
//         }
//     };
//     console.log(c)
//     if (c % 2 === 0){
//         rightNumber.style.color = "green";
//         leftNumber.style.color = "white";
//         console.log("Even")
//     } else {
//         rightNumber.style.color = "white";
//         leftNumber.style.color = "green";
//         console.log("odd")
//     }
// };
};

window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    }); 

window.addEventListener('keydown', (event) => {
    if (set === 0 && not === 0) {
        if (event.key === LIKeyV || event.key === 'AudioVolumeUp') {
            scoreBoard('lUp');
        }   else if (event.key === LDKeyV || event.key === 'AudioVolumeUp'){
                scoreBoard('lDown');
            }   else if (event.key === RIKeyV) {
                    scoreBoard('rUp');
                }   else if (event.key === RDKeyV) {
                        scoreBoard('rDown');
                    };
    };
});


function settingsToggle() {
    if (set === 0 && adj === 0) {
        // console.log('1 - set OFF and adj OFF')
        settingsView.classList.remove('off');
        leftScore.classList.add('off');
        rightScore.classList.add('off');
        // resetIcon.classList.add('off');
        // adjustmentBtnsIcon.classList.add('off');
        notesIcon.classList.add('off');
        iconsBtns.classList.add('off');
        set = 1
        adj = 0
        // console.log('2 - set ON and adj OFF')
    } else if (set === 0 && adj === 1) {
            // console.log('1 - set OFF and adj ON')
            settingsView.classList.remove('off');
            leftScore.classList.add('off');
            rightScore.classList.add('off');
            // leftAdjustments.classList.remove('on');
            // rightAdjustments.classList.remove('on');

            // resetIcon.classList.add('off');
            // adjustmentBtnsIcon.classList.add('off');
            notesIcon.classList.add('off');
            iconsBtns.classList.add('off');
            set = 1
            adj = 1
            // console.log('1 - set ON and adj ON')
        }   else if (set === 1 && adj === 0) {
                // console.log('1 - set ON and adj OFF')
                settingsView.classList.add('off');
                leftScore.classList.remove('off');
                rightScore.classList.remove('off');
                // leftAdjustments.classList.remove('off');
                // rightAdjustments.classList.remove('off');

                // resetIcon.classList.remove('off');
                // adjustmentBtnsIcon.classList.remove('off');
                notesIcon.classList.remove('off');
                iconsBtns.classList.remove('off');
                set = 0
                adj = 0
                // console.log('1 - set OFF and adj OFF')
            }  else if (set === 1 && adj === 1) {
                    // console.log('1 - set ON and adj ON')
                    settingsView.classList.add('off');
                    leftScore.classList.remove('off');
                    rightScore.classList.remove('off');
                    // leftAdjustments.classList.add('on');
                    // rightAdjustments.classList.add('on');
                    // resetIcon.classList.remove('off');
                    // adjustmentBtnsIcon.classList.remove('off');
                    notesIcon.classList.remove('off');
                    iconsBtns.classList.remove('off');
                    set = 0
                    adj = 1
                    // console.log('1 - set OFF and adj ON')
                };
    
    deReset()
};

function notesToggle() {
    if (not === 0 && adj === 0) {
        // console.log('1 - set OFF and adj OFF')
        notesView.classList.remove('off');
        leftScore.classList.add('off');
        rightScore.classList.add('off');
        // resetIcon.classList.add('off');
        // adjustmentBtnsIcon.classList.add('off');
        settingsIcon.classList.add('off');
        iconsBtns.classList.add('off');
        not = 1
        adj = 0
        // console.log('2 - set ON and adj OFF')
    } else if (not === 0 && adj === 1) {
            // console.log('1 - set OFF and adj ON')
            notesView.classList.remove('off');
            leftScore.classList.add('off');
            rightScore.classList.add('off');
            // leftAdjustments.classList.remove('on');
            // rightAdjustments.classList.remove('on');

            // resetIcon.classList.add('off');
            
            // adjustmentBtnsIcon.classList.add('off');
            settingsIcon.classList.add('off');
            iconsBtns.classList.add('off');
            not = 1
            adj = 1
            // console.log('1 - set ON and adj ON')
        }   else if (not === 1 && adj === 0) {
                // console.log('1 - set ON and adj OFF')
                notesView.classList.add('off');
                leftScore.classList.remove('off');
                rightScore.classList.remove('off');
                // leftAdjustments.classList.remove('off');
                // rightAdjustments.classList.remove('off');

                // resetIcon.classList.remove('off');
                // adjustmentBtnsIcon.classList.remove('off');
                settingsIcon.classList.remove('off');
                iconsBtns.classList.remove('off');
                not = 0
                adj = 0
                // console.log('1 - set OFF and adj OFF')
            }  else if (not === 1 && adj === 1) {
                    // console.log('1 - set ON and adj ON')
                    notesView.classList.add('off');
                    leftScore.classList.remove('off');
                    rightScore.classList.remove('off');
                    // leftAdjustments.classList.add('on');
                    // rightAdjustments.classList.add('on');
                    // resetIcon.classList.remove('off');
                    // adjustmentBtnsIcon.classList.remove('off');
                    settingsIcon.classList.remove('off');
                    iconsBtns.classList.remove('off');
                    not = 0
                    adj = 1
                    // console.log('1 - set OFF and adj ON')
                };
};
 
function reset() {
    leftNumber.innerText = 0;
    rightNumber.innerText = 0;
    a = 0;
    b = 0;
    resetBtn.style.backgroundColor = "green";
    resetBtn.value = "DONE";
    leftNumber.style.color = "white"
    rightNumber.style.color = "white"
    SLBtn.style.backgroundColor = "black";
    SRBtn.style.backgroundColor = "black";
};

function deReset() {
    resetBtn.style.backgroundColor = "#000000";
    resetBtn.value = "Reset";
};

function preset(number) {
    if (number === 1) {
        document.getElementById('LIKey').value = "ArrowUp" ;
        document.getElementById('LDKey').value = "ArrowDown";
        document.getElementById('RIKey').value = "ArrowRight";
        document.getElementById('RDKey').value = "ArrowLeft";
        preset1.style.backgroundColor = "green";
        preset2.style.backgroundColor = "black";
        preset3.style.backgroundColor = "black";
        preset4.style.backgroundColor = "black";
        } else if (number === 2) {
            document.getElementById('LIKey').value = 7;
            document.getElementById('LDKey').value = 4;
            document.getElementById('RIKey').value = 9;
            document.getElementById('RDKey').value = 6;
            preset1.style.backgroundColor = "black";
            preset2.style.backgroundColor = "green";
            preset3.style.backgroundColor = "black";
            preset4.style.backgroundColor = "black";
            } else if (number === 3) {
                document.getElementById('LIKey').value = 'w';
                document.getElementById('LDKey').value = 's';
                document.getElementById('RIKey').value = 'o';
                document.getElementById('RDKey').value = 'l';
                preset1.style.backgroundColor = "black";
                preset2.style.backgroundColor = "black";
                preset3.style.backgroundColor = "green";
                preset4.style.backgroundColor = "black";
                } else if (number === 4) {
                    document.getElementById('LIKey').value = 'AudioVolumeUp';
                    document.getElementById('LDKey').value = 'AudioVolumeDown';
                    document.getElementById('RIKey').value = 'ArrowUp';
                    document.getElementById('RDKey').value = 'ArrowDown';
                    preset1.style.backgroundColor = "black";
                    preset2.style.backgroundColor = "black";
                    preset3.style.backgroundColor = "black";
                    preset4.style.backgroundColor = "green";
                }
    let LIKey = document.getElementById('LIKey').value;
    let LDKey = document.getElementById('LDKey').value;
    let RIKey = document.getElementById('RIKey').value;
    let RDKey = document.getElementById('RDKey').value;
    LIKeyV = LIKey;
    LDKeyV = LDKey;
    RIKeyV = RIKey;
    RDKeyV = RDKey;
};

function blank() {
    if (set == 1) {
        settingsToggle()
    } else if (not === 1) {
        notesToggle()
    };
};

function iconsBtnsToggle() {
    settingsIcon.classList.toggle('off');
    notesIcon.classList.toggle('off');
};

function startServerBtn(button) {
    if (button === 'left') {
        SLBtn.style.backgroundColor = "green";
        SRBtn.style.backgroundColor = "black";
        rightNumber.style.color = "white"
        leftNumber.style.color = "green"
        L = 'green'
        R = 'white'
    } else if (button === 'right') {
        SLBtn.style.backgroundColor = "black";
        SRBtn.style.backgroundColor = "green";
        rightNumber.style.color = "green"
        leftNumber.style.color = "white"
        L = 'white'
        R = 'green'
    } 
};



