let people =[
    {
        name:"Mercy Kalu",
        qualification:"Fullstack Developer",
        image:"https://res.cloudinary.com/belrah/image/upload/v1606158853/my_pics_leqpqa.jpg"
        
    },
    {
        name:"IROH JENNIFER",
        qualification:"Fullstack Developer",
        image:"./jennifer iroh.jpg"
    },
    {
        name:"Agbaje Inioluwa Temitope",
        qualification:"Fullstack Developer",
        image:"./tope.jpg"
    },
    {
        name:"Sonia Otiono",
        qualification:"Frontend Dev",
        image:"./soniaotiono.jpg",
    },
    {
        name:"Desola Oluseye",
        qualification:"Fontend Developer",
        image:"./desolaoluseye.jpg",
    },
    {
        name:"Oluwadunsin  Motunrayo Olajide",
        qualification:"Frontend Developer",
        image:"./oluwadunsinolajide.jpg",
    },
    {
        name:"Damilola Olatunji",
        qualification:"Backend Developer",
        image:"./damilolaOlatunji.png",
    },
    {
        name:"Awomolo Adekemi",
        qualification:"Backend Developer",
        image:"./adekemi.png",
    },
    {
        name:"Obalana Omobolanle Rukayat",
        qualification:"Backend Developer",
        image:"./omobolanle.jpg",
    }
];

const peopleDiv = document.querySelector('.users');

people.forEach((user)=>{
    //console.log(user)
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");

    let userName = document.createElement("h5");
    userName.classList.add("name");
    userName.innerHTML = user.name;

    let userQualification = document.createElement("h5");
    userQualification.classList.add("name");
    userQualification.innerHTML = user.qualification;

    let userImg =document.createElement("img");
    userImg.classList.add("user-image");
    userImg.setAttribute("src",user.image);

    userDiv.appendChild(userImg);
    userDiv.appendChild(userName);
    userDiv.appendChild(userQualification);
    

    peopleDiv.appendChild(userDiv);


})
