let student = document.getElementsByClassName("student")
let album = document.querySelector(".album")
let flag = true
console.log(album)


for (i=0; i<student.length;i++){
    student[i].addEventListener("mouseover",function(){
        
        this.style.animation = (" embient 2s infinite ease 1s backwards, bg 1s 1 ease") 
        
    })
}

for (i=0; i<student.length;i++){
    student[i].addEventListener("mouseout",function(){
        
        this.style.animation = (" end 1s ease forwards")    
    })
}











for (let i = 0; i < student.length; i++){
    student[i].addEventListener("click",function(){

        if (flag == true){
            this.style.transition = "none"
            this.style.height = ("600px")
            album.style.WebkitJustifyContent = "left"
            for (let j = 0; j < student.length; j++){
                if (student[j] == student[i]) {continue}
                student[j].style.opacity = ("0")
                student[j].style.display = ("none")
                student[j].style.animation = ("none")
                
            }
            flag = false
        }
        else {
            
            this.style.height = ("initial")
            album.style.WebkitJustifyContent = "center"
            this.style.animation = ("disapier2 2s ease forwards")
            for (let j = 0; j < student.length; j++){   
                student[j].style.opacity = ("1")
                setTimeout(function(){student[j].style.display = ("flex")},0)
            }
            flag = true
        }
        
       
    })
}


















  