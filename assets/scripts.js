const members = [
  {
    name : "Wayne Barnett",
    role : "Founder & CEO",
    img  : "wayne-barnett-founder-ceo-jpg",
  },
  {
    name : "Angela Caroll",
    role : "Chief Editor",
    img  : "angela-caroll-chief-editor.jpg",
  },
  {
    name : "Angela Lopez",
    role : "Social Media Manager",
    img  : "angela-lopez-manager-manager.jpg",
  },
  {
    name : "Scott Estrada",
    role : "Developer",
    img  : "scott-estrada-developer.jpg",
  },
  {
    name : "Barbara Ramos",
    role : "Graphic Designer",
    img  : "barbara-ramos-graphic-designer.jpg",
  },
  {
    name : "Walter Gordon",
    role : "Office Menager",
    img  : "walter-gordon-office-menager.jpg",
  }
]; 


for (let member of members){  

  for (let key in member){
    console.log(key, ':' ,member[key]);
  }

   document.querySelector('.pm-members-container').innerHTML += `
   <div class="col-4 border"> 
    <strong>img </strong>: ${member.img}    <br>
    <strong>name</strong> : ${member.name}  <br>
    <strong>role</strong> : ${member.role}  <br>
    </div>
   
    `
}