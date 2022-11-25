let str = "Welcome to Javascript!";
// emocleW ot!tpircsavaJ
function reverserString(str) {
    let arr = str.split(' ')
    let result = ""
    for (let i = 0; i < arr.length; i++) {
        result = result + reverse(arr[i]) + " ";
    }

    console.log(result)
}

function reverse(st) {
    let result = ""
    for (let i = st.length; i >= 0; i--) {
        result += st.charAt(i);
    }
    return result;
}

reverserString(str)