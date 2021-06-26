
    const sliderBar= document.querySelector(".slider_bar")
    const sliderCircle = document.querySelector(".slider_circle")
    const progressBar = document.querySelector(".progress_bar")
    sliderBar.oninput= function(){
        sliderCircle.style.left =this.value + "%"
        progressBar.style.width =this.value + "%"
    }

