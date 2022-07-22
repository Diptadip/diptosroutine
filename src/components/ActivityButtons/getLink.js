const data = require('../Table1/Data.json');
const link=require('../Table1/ClassLinks.json');

const curr=()=>{
    let d=new Date();
    let arr=[d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()];
    return arr;
}

function getSlot(){
    let arr=curr();
    let slot="";
    let id=arr[0];
    let currHrs=arr[1];
    if(currHrs<9){
        slot="";
    }else if(currHrs<10){
        slot="slot1";
    }else if(currHrs<11){
        slot="slot2";
    }else if(currHrs<12){
        slot="slot3";
    }else if(currHrs<13){
        slot="slot4";
    }else if(currHrs<14){
        slot="slot5";
    }else if(currHrs<15){
        slot="slot6";
    }else if(currHrs<16){
        slot="slot7";
    }else if(currHrs<17){
        slot="slot8";
    }else{
        slot="";
    }
    arr=[id,slot];
    return arr;
}
function getClass(){
    let arr=getSlot();
    let day=arr[0];
    if(day>5){
        return "-1";
    }
    let res = data.map(function(elem){ 
        return elem;
    });
    let dayData=res[day-1];
    let slot=arr[1];
    switch(slot){
        case "slot1":
            return dayData.slot1;
        case "slot2":
            return dayData.slot2;
        case "slot3":
            return dayData.slot3;
        case "slot4":
            return dayData.slot4;
        case "slot5":
            return dayData.slot5;
        case "slot6":
            return dayData.slot6;
        case "slot7":
            return dayData.slot7;
        case "slot8":
            return dayData.slot8;
        default:
            return "-1";
    }
}

function getLink(){
    let sub=getClass();
    let classLink="#"
    let res = link.map(function(elem){ 
        return elem;
    });
    res.forEach(element => {
        if(element.sub===sub){
            classLink= element.link;
        }
    });
    return classLink;
}
export const classLink=getLink();
