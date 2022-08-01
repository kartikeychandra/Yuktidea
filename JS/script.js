let power = document.querySelector('.power')
let body = document.querySelector('.body')
let body2 = document.querySelector('.body2')
let btn = document.querySelector('.ok')
let img = document.querySelector('.img')
power.addEventListener('click', (e) => {
    body2.style.display = "block"
    body.style.opacity = "0.5";
})
btn.addEventListener('click', (e) => {
    body2.style.display = "none"
    body.style.opacity = "1";
})
let arr = Array.from(document.getElementsByClassName('img'))
let arr2 = Array.from(document.getElementsByClassName('imgbig'))
arr.forEach((Element) => {
    Element.addEventListener('click', (e) => {
        let index = parseInt(e.target.id)
        
        let img2 = document.getElementById(`${index}0`)
        img2.style.display = "block"
        let coll = arr2.slice()
        var i = index-1
        coll.splice(i, 1)
        coll.forEach(myFunc);
        function myFunc(item){
            item.style.display = "none"

        }
    })
})