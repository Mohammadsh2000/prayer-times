console.log(4/3)
document.getElementById("btnErase").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    let arr = value.split("")
    let newValue=""
    if(arr[arr.length-1]!=" "){
        arr.splice(arr.length-1,1)
    } 
    if(arr[arr.length-1]==" "){
        arr.splice(arr.length-3,3)
    }
    for (let index = 0; index < arr.length; index++) {
        newValue += arr[index];
        
    }
    document.getElementById("screen").innerHTML = newValue
    if(document.getElementById("screen").innerText ==""){
        document.getElementById("screen").innerHTML = "0"
    }
        
})
document.getElementById("btnC").addEventListener("click",function(){

    document.getElementById("screen").innerHTML = "0"
})
document.getElementById("btn0").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "0"
})
document.getElementById("btn1").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "1"
})
document.getElementById("btn2").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "2"
})
document.getElementById("btn3").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "3"
})
document.getElementById("btn4").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "4"
})
document.getElementById("btn5").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "5"
})
document.getElementById("btn6").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "6"
})
document.getElementById("btn7").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "7"
})
document.getElementById("btn8").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "8"
})
document.getElementById("btn9").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "9"
})
document.getElementById("btnDot").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
    }
    document.getElementById("screen").innerHTML += "."
})


document.getElementById("btnSum").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
        return
    }
    document.getElementById("screen").innerHTML += " + "
})
document.getElementById("btnSub").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
        return
    }
    document.getElementById("screen").innerHTML += " - "
})
document.getElementById("btnMul").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
        return
    }
    document.getElementById("screen").innerHTML += " * "
})
document.getElementById("btnDiv").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value =="0"){
        document.getElementById("screen").innerHTML = ""
        return
    }
    document.getElementById("screen").innerHTML += " / "
})
//btnEqual
document.getElementById("btnEqual").addEventListener("click",function(){
    let value = document.getElementById("screen").innerText
    if(value !="0"){
        if(value[value.length-1] !=" "){
            let arr = value.split(" ")
            for (let index = 0; index < arr.length; index++) {
                if(arr[index] == "*" ){
                    arr[index+1] = Number(arr[index-1]) * Number(arr[index+1])
                    arr[index-1] =" "
                    arr[index]=" "
                }
                if (arr[index] == "/") {
                    arr[index+1] = Number(arr[index-1]) / Number(arr[index+1])
                    arr[index-1] =" "
                    arr[index]=" "
                }
            }
            for (let index = 0; index < arr.length; index++) {
                if(arr[index] == "+" ){
                    arr[index+1] = Number(arr[index-1]) + Number(arr[index+1])
                    arr[index-1] =" "
                    arr[index]=" "
                }
                if (arr[index] == "-") {
                    arr[index+1] = Number(arr[index-1]) - Number(arr[index+1])
                    arr[index-1] =" "
                    arr[index]=" "
                }
            }
            document.getElementById("screen").innerHTML = arr[arr.length-1]
        }
    }
})
