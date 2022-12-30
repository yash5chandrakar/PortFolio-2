let arr = []

for (let i = 48; i < 58; i++) {
    arr.push(String.fromCharCode(i))
}
for (let i = 65; i < 91; i++) {
    arr.push(String.fromCharCode(i))
}
for (let i = 97; i < 123; i++) {
    arr.push(String.fromCharCode(i))
}

let num = arr.length;
function getCharacter() {

    return arr[Math.floor(Math.random() * num)]
}

function getPassword(dig) {
    let pwd = '';
    for (let i = 0; i < dig; i++) {
        pwd += getCharacter()
    }
    console.log(pwd)
}


getPassword(15)






// let ch = 'a';
// ch = ch.codePointAt(0) + 1;
// console.log(ch)
// ch = String.fromCodePoint(5)
// console.log(ch)


// let str = "Welcome to Javascript!";
// // emocleW ot!tpircsavaJ
// function reverserString(str) {
//     let arr = str.split(' ')
//     let result = ""
//     for (let i = 0; i < arr.length; i++) {
//         result = result + reverse(arr[i]) + " ";
//     }

//     console.log(result)
// }

// function reverse(st) {
//     let result = ""
//     for (let i = st.length; i >= 0; i--) {
//         result += st.charAt(i);
//     }
//     return result;
// }

// reverserString(str)