
//* AWARENESS

//? Awareness : Knowledge that something exists, or understanding of a situation or subject at the present time based on information or experience

//? FIRST : become AWARE!
console.clear()
let awareness = false;
awareness /*FALSE */ ? "" : console.log('AWARENESS ???'); 
awareness = confirm(`Are you aware of the significance of the situation?
                    (yes: OK, no: CANCEL)`);
console.clear()
/* TEARNERY USED HERE */
!(awareness) ? awareness /* AS IT IS*/ : awareness = true; /*TURN INTO OPPOSITE*/
console.log("Awareness: ", awareness);
if (awareness === true) {console.log(`🎯 ${mcc1461()}`) ; /* mcc1461 FUNCTION CALLED */
    console.log("");
    console.log("");

} else {
    /* COLORIZE THE CONSOLE */
    console.log("%c Please reconsider the current circumstances and your next steps !!!", "color:red ; font-size: 19px; font-style: italic; background-color: cyan");
}

function mcc1461() {   /* mcc1461 FUNCTION STARTS HERE */
let studying = ["preClass", "inClass", "postClass"];  /* ARRAY */

let understand = false;
    understand = prompt ("Do you understand the subject? (y/n)");
    understand = understand.toLowerCase(); 
    if (understand === "y" || understand === "n") { 
        !(understand === "y") ?  learnIt() : practice(); /* TWO DIFFERENT FUNCTIONS CALLED HERE */
    } else {mcc1461()};



function practice() {
    console.log("****************");
    console.log("Keep in practice");
    console.log("****************");
    for (let i=0 ; i<studying.length ; i++) {    /* LENGTH PROPERTY */
        console.log(`${studying[i]}: \t👍`);
    }
}

function learnIt() {
    understand = +prompt ("Do you 'REALLY' understand the subject? (0: No || 1: Yes)");
    while (!/^[0-1]$/.test(understand)) {   /* *** INPUTS ARE RESTRICTED *** */
        alert("You did not enter 0 or 1.");
        understand = prompt("Enter only 0 or 1.")*1; /* STRING TO NUMBER WITH "*1" */
    }
    let step = 0;
    let stepS = (studying.length*2)
    while(step < stepS) {
        step ++;            /* INCREMENT */
        stepS --;           /* DECREMENT */
        let xColor = ["color:green; font-size:11px;", "color:blue; font-size:12px;", "color:red; font-size:13px;", "color:blueviolet; font-size:14px;"]  /* ARRAY - STYLE */
        console.log("");
        if (understand == 1) {
            console.log("%c Make your hands as dirty as possible.!", xColor [step-1]); 
            console.log("%c The more you know it the more you like it!", xColor [step-1]); 
            console.log("%c ------------------------------------------", xColor [step-1]); 
        } else {
            if (step <= stepS) { console.log("\t", studying[step-1], "\t😎"); 
            (step === 1) ? console.log("%c Get ready for inClass.", xColor [step]) : "";
            (step === 1) ? console.log("%c Ask someone who knows.", xColor [step]) : "";
            (step === 2) ? console.log("%c Listen to carefully and try out.", xColor [step]) : "";
            (step === 2) ? console.log("%c Be active during inClass", xColor [step]) : "";
            (step === 3) ? console.log("%c Participate in the working groups.", xColor [step]) : "";
            (step === 3) ? console.log("%c Study more...", xColor [step]) : "";
            } else {
                if (step >= studying.length) { 
                    break; 
                } else {continue}
            }
        }
    }
}
console.log("");
return "You are going to be successful in the end!"
}