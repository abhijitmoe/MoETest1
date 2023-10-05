window.addEventListener("MOE_LIFECYCLE",function(e){
    if(e.detail.name === "SDK_INITIALIZED"){
    console.log("This is MoE script");
    setTimeout(Moengage.call_web_push({
       "soft_ask":true,
    "main_class":"moe-main-class",
    "allow_class":"moe-allow-class",
    "block_class":"moe-block-class" 
    }), 3000);
    }
})

console.log("This is my script");

let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "abhijit1",
    "email": "abhijit1@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked,,,,,!")

    resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`

    let key = "ema_live_qmYNKpRf4K0OjKt6JlV0uLIATDUmY00pPPs5iDvh";
    let email = document.getElementById("useremail").value;
    //setting email value
    Moengage.add_email(email);
    //setting ID
    Moengage.add_unique_user_id(email);
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ''
    for (key of Object.keys(result)) {
        if (result[key] !== "" && result[key] !== " ") {
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    resultCont.innerHTML = str;
})

setTimeout(Moengage.destroy_session(),8000);





