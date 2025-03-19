function generateWebsite() {
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const about = document.getElementById("about").value;
    const skills = document.getElementById("skills").value.split(",").map(s => s.trim());
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const themeColor = document.getElementById("themeColor").value;
    const fileInput = document.getElementById("profilePic");
    const file = fileInput.files[0];

    if (!name || !role || !about || !skills.length || !phone || !email || !file) {
        alert("Olunga ellathayu fillu pannungada!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageBase64 = event.target.result;

        const htmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<style>
        
*{
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-style: normal;
}
html{
    
    scroll-behavior: smooth;
    

}

.float{
    display: flex;
   
   position: fixed;
  z-index: 2;
  top: 90%;
  left: 90%;
    justify-content: center;

    align-items: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: ${themeColor};
}
body{
    top: 0;
    left: 0;
    margin: 0;
}
.menu{
    display: none;
    position: fixed;
    left: -100%;
    top: 0;
    z-index: 4;
    transition: .5s;
    border-radius: 10px;
    border: solid ${themeColor};
    background-color: ${themeColor};
   text-align: right;
}

.menu .menu-elements{
    display: flex;
    height: 300px;
    width: 200px;
    flex-direction: column;

    justify-content: space-around;

    align-items: center;
    
}
#bars{
    
    display: none;
}
a{
    text-decoration: none;
    color: black;
}

a.active{
    color: green;
}
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    position:relative;
    overflow: hidden;
    

    
}
.nav-logo{
    display: flex;
    margin: 0 50px;
}

.nav-logo .h1-1{
    color: white;
}

.nav-elements{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 0 50px;
}


.rotate{
    top: -70px;
    right: -70px;
 position: absolute;
 
 
 z-index: -1;
 width: 240px;
 height: 240px;
 border-radius: 60% 100% 50% 60% ;
 
 
 background: ${themeColor};
 animation: rotate 6s infinite linear;
 }
 
 
 .rotate2{
     top: -50px;
    left: -40px;
 position: absolute;
 
 z-index: -1;
 width: 230px;
 height: 230px;
 
 border-radius: 70% 80% 70% 70% ;
 
 background: ${themeColor};
 
 animation: rotate 6s infinite linear;
 }
 
 @keyframes rotate {
     0%{
         transform: rotate(0deg);
     }
     50%{
         transform: rotate(180deg);
     }
     100%{
         transform: rotate(360deg);
     }
 }
 
.home{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10%;

}

.home .profile-picture{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: solid ${themeColor};


}


.home .welcome{
    height: 250px;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.welcome h1{
    font-size: 25px;
    margin: 5px;
}

.hi{
    margin: 20px;
}
.profile-picture img{

     width: 230px;
    height: 230px;
    border-radius: 50%;
    border: solid ${themeColor};
    background-color: ${themeColor};
    object-fit: contain;
   
}

.home-btn{
    display: flex;
   
    margin: 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.home-btn a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
   font-size: 20px;
    border-radius: 50px;
    border: solid ${themeColor};
    background-color: ${themeColor};
}

 .home-btn a:hover{
  transform: scale(1.05);
 }   


.about{

    display: flex;
    flex-direction: column;
    margin-top: 10%;
    justify-content: center;
    align-items: center;

   
}

.about-section{
    
    border-radius:50px;
    border: solid ${themeColor};
    height: auto;
    margin: 20px;
    
}

.about-section p{
    margin: 60px;
}

.skills{
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    justify-content: center;
    align-items: center;
    
    
}

.skills-section{
    border-radius:50px;
    border: solid ${themeColor};
    height: auto;
    margin: 20px;
    display: flex;
    flex-wrap:wrap;
   
    justify-content: center;
    align-items: center;
}



.skill-box{
width:auto;
height: auto;
display: flex;
border-radius: 5px;
    margin:20px;
   background-color: ${themeColor};
    justify-content: center;
    align-items: center;
    transition: .5s;
}
 .skill-box:hover{
  transform: scale(1.05);
 }   

.skill-box p{
margin: 20px;
}


.contact{
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    justify-content: center;
    align-items: center;
    height: 300px;
    border-radius:50px;
    border: solid ${themeColor};
    height: auto;
    margin: 20px;
    
}

.contact .contact-section{
    display: flex;
  
    width: 100%;
    justify-content: space-around;
    align-items: center;
  
    

}

.contact-section .contact-details{
    display: flex;
    flex-direction: column;
    margin: 50px 0;
   
}
.contact-section .msg-ico{
    display: flex;
    
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 60px;
    border: solid ${themeColor};
    background-color: ${themeColor};
    border-radius: 60px;
    border-bottom-right-radius: 5px;
}

@media (max-width:800px) {
    .nav-elements{
        display: none;
    }
    .menu{
        display: block;
    }

    .home{
        flex-direction: column-reverse;
    }
    #bars{
        display: block;
    }
    .contact .contact-section{
        flex-direction: column;
    }
    .menu{
        display: block;
    }
    .home-btn{
      flex-direction: column;
    }
}

</style>
</head>

<body>
<div class="navbar">
<div class="nav-logo">
    <h1 class="h1-1">Wel</h1>
    <h1 class="h1-2">come</h1>
</div>
<div class="nav-elements">
    <a href="#Home">Home</a>
    <a href="#About">About</a>
    <a href="#Skills">Skills</a>
    <a href="#Contact">Contact</a>
</div>
<i id="bars" class="fa-solid fa-bars" style=" color: White; margin: 50px;"></i>
<div class="menu">
    <i id="cross" class="fa-solid fa-close" style=" color: black; margin: 10px;"></i>
    <div class="menu-elements">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Contact">Contact</a>
    </div>

</div>
<div class='rotate'></div>
                <div class='rotate2'></div>

</div>




<div class="home" id="Home">

<div class="welcome">
    <div class="hi">
    <h1>Hi !</h1>
    <div style="display: flex; gap: 10px;"><h1> I am </h1><h1 style="color: ${themeColor};">${name}</h1></div>
    <div style="display: flex; gap: 10px;"><h1> I am a</h1><h1 style="color: ${themeColor};">${role}</h1></div>
</div>
    <div class="home-btn">
        <a href="#Contact">Contact</a>
        <a href="#Skills">Skills</a>
    </div>
</div>
<div class="profile-picture">
    <img src="${imageBase64}" alt="Profile">
</div>

</div>

<div class="about" id="About">
<h1>About</h1>

<div class="about-section">
<p>${about}</p>
</div>
</div>

<div class="skills" id="Skills">
  
<h1>Skills</h1>
<div class="skills-section">
   
                            ${skills.map(skill => `<div class="skill-box"><p>${skill}</p></div>`).join(" ")}
                       
</div>

</div>

<div class="contact" id="Contact">
<h1>Contact</h1>
<div class="contact-section">
    <div class="msg-ico">Contact me</div>
    <div class="contact-details">
        <a href="#"><i class="fa-solid fa-phone" style=" color: ${themeColor}; margin: 10px;"></i>${phone}</a>
<a href="#"><i class="fa-solid fa-message" style=" color: ${themeColor}; margin: 10px;"></i>${email}</a>
    </div>
</div>

</div>

<a href="#" class="float">^</a>

<script >
const menu=document.querySelector(".menu");
const cross=document.getElementById("cross");
const menu_bar=document.getElementById("bars");

menu_bar.addEventListener("click",()=>{
menu.style.left="0";
});

cross.addEventListener("click",()=>{
menu.style.left="-100%";
});
</script>
</body>

</html>`;

 



        const zip = new JSZip();
        zip.file("index.html", htmlContent);
       
        zip.generateAsync({ type: "blob" }).then(function(content) {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(content);
            link.download = `${name}_portfolio.zip`;
            link.click();
        });
    };
    reader.readAsDataURL(file);
}
