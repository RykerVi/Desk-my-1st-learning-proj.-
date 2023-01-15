
 let x = document.querySelector('#wrapLines');
 let y = document.querySelector('.menuWrapPads');
 let z = document.querySelector('.note1');
 let v = document.querySelector('.note2');
 let o = document.querySelector('#vkcom');
 /* Анимация кнопочки меню*/
 x.addEventListener('click', () => {
     document.getElementById('menuClicksnd').play();
     y.classList.toggle('menuWrapPads_after');
     x.classList.toggle('open');
     z.classList.toggle('note1_after');
     v.classList.toggle('note2_after');
    })
    
 /* ссылка Вк*/
    o.addEventListener('click', ()=> {
        
    }) 
    
  


 /* Анимация карандаша */
 let wrp = document.querySelector('.wrapPenc');
 
 let side1a = document.querySelector('.side1');
 let side2a = document.querySelector('.side2');
 let side3a = document.querySelector('.side3');
 let side4a = document.querySelector('.side4');
 let znach = 0;
wrp.addEventListener('click', function(){
    wrp.classList.toggle('wrapPen_after'),
     
    side1a.classList.toggle('side1_after'),
    side2a.classList.toggle('side2_after'),
    side3a.classList.toggle('side3_after'),
    side4a.classList.toggle('side4_after');
   })
   
    


    

 /* Анимация выезда калькулятора */

        let calculator = document.querySelector('.bgrndTr2');

        function openCalc() {
            clsbtn.style.animation ="none";
                calculator.style.animation = "bgrndTr2_after 1s forwards";
                clsbtn.style.animation = "closeBtnWrp_anim 1.5s forwards"; 
                
            }


 //кнопка закрытия кальк + закрытие кальк
        let clsbtn = document.querySelector('.closeBtnWrp_after')
   
        clsbtn.addEventListener('click', function(){
            calculator.style.animation = "bgrndTr2_back  1s";
            
            clsbtn.style.animation ="none";
        })

// Логика калькулятора

    let a = '' ; //первое число 
    let b = ''; //второе число 
    let sign = ''; //знак операции 
    let finish = false;
    
        
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const action = ['+', '-', '/', 'X'];

    //Экран
    const out = document.querySelector('.monitorCalc .monitorWrapper p');
    // Кнопка АС
    document.querySelector('.but.cllearAll_btn').onclick = clearAll;
    function clearAll() {
        a =''; //первое число 
        b =''; //второе число 
        sign =''; //знак операции 
        finish = false;
        out.textContent = 0;
        }
    // Кнопка стирания Del 
     document.querySelector('.but.otric_btn').onclick = (event) => {
    if (a!=='') {
      alert('должно удалять')
     return
    }
    if(a===''){
    out.textContent = "Err";
    }
        };

    // Случайные нажатия мимо кнопок
    document.querySelector('.buttonsWrap').onclick = (event) => {
            // если попал между кнопок
    if (!event.target.classList.contains('but')) return; 
            
            //clearAll кнопка
    if (event.target.classList.contains('but cllearAll_btn')) return;
           
           
            
            //результат нажатия кнопки
            const key = event.target.textContent;
            // первая переменная
            if(digit.includes(key)) {
                if(b==='' && sign==='') {
                a += key;
                out.textContent = a ;
            }
                else if(a!=='' && b=='' && finish){
                    b += key;
                    finish = false;
                    out.textContent = b ;
                } 

            // вторая переменная
                else {    
                    b += key;
                    out.textContent = b ;
                    console.table(a, b, sign);
                }
                return;
            }
                // Клавиши оператора + - Х /
            if(action.includes(key)) {
                sign = key;
                out.textContent = sign ;
                console.table(a, b, sign);
                return;
            }
            if(key === '=') {
                switch (sign){
                    case "+":
                        a = (+a) + (+b);
                        break;
                    case "-":
                        a = a - b;
                        break;
                    case "X":
                        a = a * b;
                        break;
                    case "/":
                         a = a / b;
                        break;  
                }
                finish = true ;
                out.textContent = a ;
                console.table(a, b, sign);
            }

        }


       