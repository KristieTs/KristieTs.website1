const facts = document.querySelectorAll('.fact')
const speed= 300

facts.forEach(fact => {
    const count = () =>{
        const targetNmb = +fact.getAttribute('data-target')
        const x = +fact.innerText
        const inc = targetNmb/ speed
        if(x<targetNmb){
            fact.innerText = Math.floor(x + inc)
            setTimeout(count, 1)
        }else{
            fact.innerText = targetNmb
        }
    }
    count()
})


// while(x<targetNmb){
    //   x++
    //     if(x == targetNmb){
        //         break;
        //     }
        // }
// window.onload= count();
// count()
// setTimeout(count, 1);
// factOne.innerHTML = x
// console.log(x)