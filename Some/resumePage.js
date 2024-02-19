import {FetchResumeJson} from "./resumeJson.js";
class ShowData{

   async updateData(val){
    const dReceived= new FetchResumeJson();
    const jsonDataReceived=await dReceived.fetched();
    console.log(jsonDataReceived);

   //  let appliId=[];
   //  appliId.push(...jsonDataReceived.resume.map(dataID=> dataID.id));
   //  console.log(appliId);

    let id=val-1;

    const headft=document.getElementById("headingm");
    headft.innerHTML= `${jsonDataReceived["resume"][id]["basics"]["name"]}`;
   //  console.log(`Entering ${jsonDataReceived["resume"][id]["basics"]["name"]}`);
    const appliedf=document.getElementById("appliedf");
    appliedf.innerHTML=`Applied For: ${jsonDataReceived["resume"][id]["basics"]["AppliedFor"]}`;

    const companyn=document.getElementById("companyn");
    companyn.innerHTML=`<strong>Company Name</strong>: ${jsonDataReceived["resume"][id]["work"]["Company Name"]}<br>`

    const position=document.getElementById("position");
    position.innerHTML=`<strong>Position: </strong>${jsonDataReceived["resume"][id]["work"]["Position"]}<br>`

    const startD=document.getElementById("startD");
    startD.innerHTML=`<strong>Start Date: <strong>${jsonDataReceived["resume"][id]["work"]["Start Date"]}<br>`

    const endD=document.getElementById("endD");
    endD.innerHTML=`<strong>End Date: </strong>${jsonDataReceived["resume"][id]["work"]["End Date"]}<br>`

    const summary=document.getElementById("summary");
    summary.innerHTML=`<strong>Summary: </strong>${jsonDataReceived["resume"][id]["work"]["Summary"]}<br>`

    const projName=document.getElementById("projName");
    projName.innerHTML=`<strong>${jsonDataReceived["resume"][id]["projects"]["name"]}</strong>: ${jsonDataReceived["resume"][id]["projects"]["description"]}<br>`

    const ug=document.getElementById("ug");
    ug.innerHTML=`<strong>UG: </strong> ${jsonDataReceived["resume"][id]["education"]["UG"]["institute"]}, ${jsonDataReceived["resume"][id]["education"]["UG"]["course"]}, ${jsonDataReceived["resume"][id]["education"]["UG"]["Start Date"]}, ${jsonDataReceived["resume"][id]["education"]["UG"]["End Date"]}, ${jsonDataReceived["resume"][id]["education"]["UG"]["cgpa"]}<br>`;
    
    const pu=document.getElementById("pu");
    pu.innerHTML=`<strong>PU: </strong> ${jsonDataReceived["resume"][id]["education"]["Senior Secondary"]["institute"]}, ${jsonDataReceived["resume"][id]["education"]["Senior Secondary"]["cgpa"]}<br>`;

    const hs=document.getElementById("hs");
    hs.innerHTML=`<strong>High School: </strong> ${jsonDataReceived["resume"][id]["education"]["High School"]["institute"]}, ${jsonDataReceived["resume"][id]["education"]["High School"]["cgpa"]}<br>`;
    
    const inName=document.getElementById("inName");
    inName.innerHTML=`<strong>Company Name: </strong> ${jsonDataReceived["resume"][id]["Internship"]["Company Name"]}<br>`;
    
    const inPos=document.getElementById("inPos");
    inPos.innerHTML=`<strong>Position: </strong> ${jsonDataReceived["resume"][id]["Internship"]["Position"]}<br>`;

    const inSd=document.getElementById("inSd");
    inSd.innerHTML=`<strong>Start Date: </strong> ${jsonDataReceived["resume"][id]["Internship"]["Start Date"]}<br>`;
    
    const inEd=document.getElementById("inEd");
    inEd.innerHTML=`<strong>End Date: </strong> ${jsonDataReceived["resume"][id]["Internship"]["End Date"]}<br>`;

    const inSum=document.getElementById("inSum");
    inSum.innerHTML=`<strong>Summary: </strong> ${jsonDataReceived["resume"][id]["Internship"]["Summary"]}<br>`;

    const achieSum=document.getElementById("achieSum");
    achieSum.innerHTML=`<strong>Achievements: </strong> ${jsonDataReceived["resume"][id]["achievements"]["Summary"]}<br>`;
    
    const perIn=document.getElementById("perIn");
    perIn.innerHTML=(function(){
      var a=`${jsonDataReceived["resume"][id]["basics"]["phone"]}<br>`
      return a;
   })();

   const linkedin=document.getElementById("linkedin");
   linkedin.href= `${jsonDataReceived["resume"][id]["basics"]["profiles"]["url"]}`;
   linkedin.textContent=`${jsonDataReceived["resume"][id]["basics"]["profiles"]["network"]}`;

   const emailPi=document.getElementById("emailPi");
   emailPi.innerHTML=`${jsonDataReceived["resume"][id]["basics"]["email"]}`;

   const courseapp=document.getElementById("courseapp");
   let keywo= jsonDataReceived["resume"][id]["skills"]["keywords"];
   keywo= keywo.toString()
   courseapp.innerHTML=`${keywo}`;

   const hob=document.getElementById("hob");
   hob.innerHTML=`${jsonDataReceived["resume"][id]["interests"]["hobbies"].toString()}`;

   }
}

export {ShowData}