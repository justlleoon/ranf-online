function go(ab){
    const banana = ab
}
let superman = {
"users":[
  {"name":"Vivi", "ccn":"098", "bp":"311", "one":"527488231143", "isGod":false},
  {"name":"GLORIOUS LEADER POCO", "ccn":"999", "bp":"99999999999", "one":"527499999999", "isGod":true},
]
}
function onstart(){
    $("div.chc").hide();
};
function checkMate(){
    let bubba = document.forms["fui"]["cnid"].value;
    let ccv = document.forms["fui"]["ccv"].value;
    let usr = superman.find(superman => superman.one === `${bubba}`)
    console.log(usr);
    return false;
    if(usr === undefined){
        alert("Wrong ID and/or CCV.")
        return false
    }
    if(usr.ccn = "potato"){
        return false
    }
}