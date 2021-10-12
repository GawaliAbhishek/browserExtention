
let myLeads = []
const inputEl=document.getElementById("input-el");
const inputBtn=document.getElementById("input-btn");
const ulEl=document.getElementById('Ul-el');
const deleteBtn = document.getElementById("delete-btn");
const savetabBtn =document.getElementById("Savetab-btn")

const leadsfromLs = JSON.parse(localStorage.getItem("myLeads"));


if(leadsfromLs){
  myLeads = leadsfromLs;
  render(myLeads);
}

const tabs=[
  {url:"www.facebook.com"}
]
savetabBtn.addEventListener("click",function () {
     myLeads.push(tabs[0].url);
     localStorage.setItem("myLeads",JSON.stringify(myLeads));
     render(myLeads);
});


function render(leads){
  let listItem='';
  for(let i=0;i<leads.length;i++){
   //using Templet Strings
     listItem+=`<li>
              <a target='_blank' href="${leads[i]}"> ${leads[i]}</a>
               </li>`;
  } 
  ulEl.innerHTML = listItem;
  }
  

deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear();
  myLeads=[];
  render(myLeads);
});


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
   
   render(myLeads);
 
});
