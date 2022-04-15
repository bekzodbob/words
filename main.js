let btnPrev = document.getElementById('prev')
let btnShow = document.getElementById('show')
let btnNext = document.getElementById('next')
let output = document.getElementById('output')
let startInp = document.getElementById('start')
let finishInp = document.getElementById('finish')


let array = [
    {
        en:'hello',
        uz:'salom'
    },

    {
        en:'mistake',
        uz:'hato'
    },

    {
        en:'my',
        uz:'mening'
    },

    {
        en:'sword',
        uz:'qilich'
    },

    {
        en:'apple',
        uz:'olma'
    },
    {
        en:'tea',
        uz:'choy'
    },
    {
        en:'bread',
        uz:'non'
    },
    {
        en:'left',
        uz:'chap'
    },
    {
        en:'TV',
        uz:'televizor'
    },
    {
        en:'cat',
        uz:'mushuk'
    }
]


btnPrev.onclick = prevBtn
btnShow.onclick = showBtn
btnNext.onclick = nextBtn


let number = 0;


let currentObject = {}

function prevBtn(event) {
    if(!number) {
        output.innerHTML = 'Click NEXT'
    } else if (number == 1) {
        output.innerHTML = 'Click NEXT'
        number = number - 1
    } else {
        let object = array[number-2]
        currentObject = object
        output.innerHTML = object.en
        number = number - 1
    }
}

function showBtn(event) {
    if(!number) {
        output.innerHTML = 'Click NEXT'
    } else {
        output.innerHTML = currentObject.uz
    }
}

function nextBtn(event) {
    if (array.length <= number) {
        console.log('Massiv tugadi');
        output.innerHTML = 'Click NEXT'
        number = 0

    } else {
        let object = array[number]
        currentObject = object
        output.innerHTML = object.en
        number = number + 1
    }

}

let yosh = 20
let yoshString = '20'

let yoshNumber = Number(yoshString)

if (yosh === yoshNumber) {
    console.log('true');
} else {
    console.log('false');
}