const projects = document.querySelectorAll('.subrow')

pageOne=()=>{
  for (let i = 0; i < 8; i++) {
    projects[i].style.backgroundImage = `url('images/projects/project${i+1}.jpg')`
  }   
}

pageTwo =()=>{
    projects.forEach(project =>{
        project.style.backgroundImage = 'none'
    })
    for (let i = 0; i < 3; i++) {
        i==1 ? projects[i].style.backgroundImage = 'none' :
        projects[i].style.backgroundImage = `url('images/projects/project${i+1}.jpg')`
        projects[2].style.backgroundImage = `url('images/projects/project2.jpg')`
    }
}

pageThree =()=>{
    projects.forEach(project =>{
        project.style.backgroundImage = 'none'
    })
    for (let i = 0; i < 4; i++) {
        i==1 ? projects[i].style.backgroundImage = 'none' :
        projects[i].style.backgroundImage = `url('images/projects/project${i+3}.jpg')`
    }
    
    // let j=0
    // slideRight=()=>{
    //     j++
    //     j > 8 ? j = 0 :
    //     projects[0].style.backgroundImage = `url('images/projects/project${j+1}.jpg')`
    //     // projects[6].setAttribute('slider')
    // }
    // setInterval(slideRight, 2000)
    // slideRight()

}

pageFour =()=>{
    projects.forEach(project =>{
        project.style.backgroundImage = 'none'
    })
    for (let i = 0; i < 5; i++) {
        i==1 ? projects[i].style.backgroundImage = 'none' :
        projects[i].style.backgroundImage = `url('images/projects/project${i+6}.jpg')`
    }
    
}

pageFive =()=>{
    projects.forEach(project =>{
        project.style.backgroundImage = 'none'
    })
    for (let i = 0; i < 6; i++) {
        i==1 ? projects[i].style.backgroundImage = 'none' :
        projects[i].style.backgroundImage = `url('images/projects/project${i+8}.jpg')`
    }
}

/* სლაიდერებში გასასწორებელკია ის, 
რომ, როცა სხვა გვერდზე გადადის, 
იქაც იმავე დივში არ გააგრძელოს */
let j=0
slideRight=()=>{
    j++
    j > 8 ? j = 0 :
    projects[6].style.backgroundImage = `url('images/projects/project${j+1}.jpg')`
    // projects[6].setAttribute('slider')
}
setInterval(slideRight, 2000)
slideRight()

let k=8
slideLeft=()=>{
    k--
    k == 0 ? k =8 :
    projects[8].style.backgroundImage = `url('images/projects/project${k+1}.jpg')`
    // projects[6].setAttribute('slider')
}
setInterval(slideLeft, 1000)
slideLeft()