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
  }
]; 


for (let member of members){  

  for (let key in member){
    console.log(key, ':' ,member[key]);
  }
console.log('---------------');

}