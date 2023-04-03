const members = [
  {
    name : "Wayne Barnett",
    role : "Founder & CEO",
    img  : "wayne-barnett-founder-ceo.jpg",
  },
  {
    name : "Angela Caroll",
    role : "Chief Editor",
    img  : "angela-caroll-chief-editor.jpg",
  },
  {
    name : "Angela Lopez",
    role : "Social Media Manager",
    img  : "angela-lopez-social-media-manager.jpg",
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
    img  : "walter-gordon-office-manager.jpg",
  }
]; 


for (let member of members){  

  for (let key in member){
    console.log(key, ':' ,member[key]);
  }

   document.querySelector('.pm-members-container').innerHTML += `
   <div class="col-4 "> 
    <div class="pm-card pb-4">
      <img src="assets/img/${member.img}"> </img>   
      <p class="mt-4 pm-member-name"> ${member.name}</p>
      <p class="pm-member-role"> ${member.role}</p>  
    </div>
    </div>
   
    `
}