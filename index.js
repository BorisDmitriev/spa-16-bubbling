//task1
const circles = document.querySelectorAll('.circle')
const container = document.querySelector('.container')
const specialCircle = document.getElementById('special-circle')

//task2
console.log(circles)
console.log(container)
console.log(specialCircle)

//task 3
container.addEventListener('click', e => {
        console.log(e)
        console.log(e.target)
        console.log(e.currentTarget)

        //task6
        if( e.target.classList.contains('circle') ){
            //task 5
            const index = Array.from(e.target.parentElement.children).indexOf(e.target)
            // e.target.parentElement.children.item(index).remove()
        }

        //task8
        console.log('event1');
        // console.log(e.eventPhase);
        
    }, true)


//task7
specialCircle.addEventListener( 'click', e => {
    console.log(e);
    // e.stopPropagation()
    e.target.style.backgroundColor = 'green'

    //task8
    console.log('event2');
    // console.log(e.eventPhase);
} )

