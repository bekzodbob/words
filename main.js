let btnPrev = document.getElementById('prev')
let btnShow = document.getElementById('show')
let btnNext = document.getElementById('next')
let output = document.getElementById('output')
let StartInp = document.getElementById('number')
let EndInp = document.getElementById('numberr')
let btnok = document.getElementById('btnok')
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
    },
    {
        en:'yes',
        uz:'ha'
    },

    {
        en:'work',
        uz:'ish'
    },

    {
        en:'world',
        uz:'dunyo'
    },

    {
        en:'never',
        uz:'hech qachon'
    },

    {
        en:'enchant',
        uz:'sehrlamoq'
    },
    {
        en:'ever',
        uz:'doim'
    },
    {
        en:'know',
        uz:'bilmoq'
    },
    {
        en:'top',
        uz:'tepa'
    },
    {
        en:'star',
        uz:'yulduz'
    },
    {
        en:'dog',
        uz:'kuchuk'
    }
]


btnPrev.onclick = prevBtn
btnShow.onclick = showBtn
btnNext.onclick = nextBtn


let activeArray = array


let startValue;
let endValue;

StartInp.oninput = (object) =>{
        startValue = Number(object.target.value)
}

EndInp.oninput = (object) =>{
    endValue = Number(object.target.value)
}


btnok.onclick = (object) =>{
    let massivlength = array.length
    console.log(massivlength);
    if(startValue < endValue && endValue <= massivlength)
    {
        activeArray = array.slice(startValue, endValue + 1)
    }
    else if(startValue > endValue)
    {
        console.log("no");
    } else {
        console.log('notogri');
    }

}

let number = 0;


let currentObject = {}

function prevBtn(event) {
    if(!number) {
        output.innerHTML = 'Click NEXT'
    } else if (number == 1) {
        output.innerHTML = 'Click NEXT'
        number = number - 1
    } else {
        let object = activeArray[number-2]
        currentObject = object
        output.innerHTML = object.en
        number = number - 1
    }
}

function showBtn(event) {
    if(!number) {
        output.innerHTML = 'Click NEXT'
    } else {
        if(output.innerHTML == currentObject.en) {
            output.innerHTML = currentObject.uz
        }else {
            output.innerHTML = currentObject.en
        }
    }
}

function nextBtn(event) {
    if (activeArray.length <= number) {
        console.log('Massiv tugadi');
        output.innerHTML = 'Click NEXT'
        number = 0

    } else {
        let object = activeArray[number]
        currentObject = object
        output.innerHTML = object.en
        number = number + 1
    }

}


let massiv1 = [1,2,32,4,5,5,65]

let massivYengi = massiv1

console.log(massivYengi);

massivYengi = massiv1.slice(1 ,3)

console.log(massivYengi);