function lock(){
    let show = ""

    let len = document.getElementById("len").value;
    document.getElementById("lnshow").innerHTML = len
    let get = "";

    let u = document.getElementById("uc");
    let l = document.getElementById("lc");
    let n = document.getElementById("nm");
    let s = document.getElementById("sb");


    if(u.checked){
        get += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(l.checked){
        get += "abcdefghijklmnopqrstuvwxyz"
    }
    if(n.checked){
        get += "0123456789"
    }
    if(s.checked){
        get += "!@#$%^&*()?/|"
    }
    if(get.length == 0){
        alert("Please select at least one character type.")
    }
    

    for(let i = 0;i<len;i++)
    {
        let r = Math.floor(Math.random()*get.length)
        show += get[r]
    }

    document.getElementById("show").innerHTML = show
    console.log(show);


    
}
function copy(show){
    let copy = document.getElementById("show").innerText
            
            navigator.clipboard.writeText(copy)
            .then(() => {

                document.getElementById("result").innerHTML = `<i class="fa-jelly fa-regular fa-circle-check"></i> Password copied!`
                document.getElementById("result").style.display = "flex block";

                setTimeout(() => {
                    document.getElementById("result").style.display = "none";
                },3000
                );
            })
            .catch(err  => {
                document.getElementById("result").innerhtml = "Failed to copy text.";
                console.log("Failed to copy text.",err)
            })

    document.getElementById("result").style = "display: show"
}