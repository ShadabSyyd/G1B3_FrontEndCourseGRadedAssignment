import { ShowData } from "./resumePage.js";
class FetchResumeJson{
    async fetched(){
        const responseOB = await fetch("./ResumeData.json");
        const toDo=await responseOB.json();
        // console.log(toDo);
        return toDo;  
    }
        // fetch("ResumeData.json")
        // .then(function(response){
        //     return response.json();
        // })
        // .then(function(jsonData){
        //     var dat=jsonData;
        //     return dat;
        // });
        // // return dat;
    // }



    showHide(input){
        if(input=="0"){
            let test=document.getElementById("btnN")
            test.setAttribute("hidden",true);

        }
    }

    async getIdes(){
        const dReceived= new FetchResumeJson();
        const jsonDataReceived=await dReceived.fetched();

        let appliId=[];
        appliId.push(...jsonDataReceived.resume.map(dataID=> dataID.id));
        // console.log(appliId);
        return appliId
    }

    async setButtonN(){
        const objfe=new FetchResumeJson();
        const idArr=await objfe.getIdes();
        // const idArr=await this.getIdes();
        console.log("my ides:"+idArr);
        // let maxval=idArr.length;
        let maxval=idArr;
        const aw=objfe.nxtBtn(maxval);
    }
    nxtBtn(maxval){
        console.log("my maxwell"+maxval);
        let i=0;
        const aw2=this.increment(maxval);   
    }

    async increment(val){
        const main=val;
        console.log("uibbb valll"+ main.length);
        const runCla=new ShowData();        
        runCla.updateData(main[0]);
        
        const nextD=document.getElementById("btnN");
        const prevD=document.getElementById("btnP");
        prevD.style.visibility="visible";
        nextD.style.visibility="visible";

        if(main.length==1){
            prevD.style.visibility="hidden";
            nextD.style.visibility="hidden";
        }
        var i=0;
        i=0;
        const handleIncrem=()=>{
            prevD.style.visibility="visible";

            if(i<main.length && (main.length>1)){
                i+=1;
                runCla.updateData(main[i-1]);
                // runCla.updateData(i);
                console.log("uibbb MaintableNEXT"+ main);
                console.log("Value of oI "+i)
                console.log("Main length of oI "+main.length)

                if(i==main.length){
                    nextD.style.visibility="hidden";
                }
            }
        }
        const handleDecrement=()=>{
            nextD.style.visibility="visible";
            if(i>1 && (main.length>1)){
                i-=1;

                          runCla.updateData(main[i-1]);
                // runCla.updateData(i);
                console.log("uibbb MaintableNEXT"+ main);
                console.log("Value of oD "+i)
                console.log("Main length of oN "+main.length)
                if(i==1){
                    prevD.style.visibility="hidden";
                }
            }
        }
        nextD.addEventListener("click", handleIncrem);

        prevD.addEventListener("click", handleDecrement);
    }

    searchJob(){
        const barObj=document.getElementById("searchBar");
        barObj.addEventListener("keypress", this.handleOutput)
    }
    async handleOutput(event){
        let searchJobId=[];
        const datOb=new FetchResumeJson();
        const jsonData= await datOb.fetched();
        const idLength= await datOb.getIdes();
        if(event.key=="Enter"){
            const eventTarget=event.target.value;
            document.getElementById("resumeWh").style.visibility="visible";
            document.getElementById("errormsg").style.display="none";


            if(eventTarget==""){
                const att= await datOb.setButtonN();
                console.log("set runn fir empty")
            }
            else{
            for(let i=0;i<idLength.length;i++){
                if(eventTarget==jsonData["resume"][i]["basics"]["AppliedFor"]){
                    searchJobId.push(i+1);
                }
            }
            console.log("My id ARR FOR SEARCH",searchJobId)
            if(searchJobId.length==0){
                document.getElementById("resumeWh").style.visibility="hidden";
                document.getElementById("errormsg").style.display="flex";

            }    

            const art=datOb.nxtBtn(searchJobId);
            }
        }
        
    }
    // async resetBt(){
    //     const resetD=document.getElementById("resetBtn");
    //     const runAgain=new FetchResumeJson;
    //     console.log("RUNNING RESET")
    //     resetD.addEventListener("click", runAgain.setButtonN);
    // }

}
const runFl =new FetchResumeJson();
runFl.searchJob();
runFl.setButtonN();
// runFl.resetBt();
export {FetchResumeJson}