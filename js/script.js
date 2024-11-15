resultado.style.visibility = `hidden`

function compra(){
    lista.innerHTML = null
     res.innerHTML = null

     let q01= (qt1.value)          //c++
     let p01= 155
     let t01= q01 * p01
     // formatacao
     let t001 = t01.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });

     let q02= (qt2.value)         //java
     let p02= 150
     let t02= q02 * p02
         // formatacao
         let t002 = t02.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

     let q03= (qt3.value)        //python
     let p03= 139.10
     let t03= q03 * p03
         // formatacao
         let t003 = t03.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

     let q04= (qt4.value)      //java script
     let p04= 235.55
     let t04= q04 * p04
     // formatacao
     let t004 = t04.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });                     

     let q05= (qt5.value)     //PHP
     let p05= 183.99
     let t05= q05 * p05
     // formatacao
     let t005 = t05.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });

     let q06= (qt6.value)     //c#
     let p06= 90.45
     let t06= q06 * p06
     // formatacao
     let t006 = t06.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
     let q07= (qt7.value)     //perl
     let p07= 150.50
     let t07= q07 * p07
     // formatacao
     let t007 = t07.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
     let q08= (qt8.value)     //ruby
     let p08= 189.99
     let t08= q08 * p08
     // formatacao
     let t008 = t08.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
     let q09= (qt9.value)     //c#
     let p09= 212.20
     let t09= q09 * p09
     // formatacao
     let t009 = t09.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });
     let q010= (qt10.value)     //c#
     let p010= 80.50
     let t010= q010 * p010
     // formatacao
     let t0010 = t010.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
  });

     
     
     let geral = (t01 + t02 + t03 + t04 + t05 + t06 + t07 + t08 +t09 + t010)
     
      // formatacao do valor final
      let vf = geral.toLocaleString('pt-BR', {
         style: 'currency',
         currency: 'BRL'
     });




     if(q01 > 0){
       lista.innerHTML += `<li>${q01}x Curso em C++ = ${t001}</li> `    //c++
     }
     if(q02 > 0){
        lista.innerHTML += `<li>${q02}x Curso em PYTHON = ${t002}</li>`  //python
     }
     if(q03 > 0){
        lista.innerHTML += `<li>${q03}x Curso em JAVA = ${t003}</li>`  //java
     }


     if(q04 > 0){
        lista.innerHTML += `<li>${q04}x Curso em JS = ${t004}</li>`  //js
     }

     if(q05 > 0){
        lista.innerHTML += `<li>${q05}x CUrso em PHP = ${t005}</li>`  //php
     }

     if(q06 > 0){
        lista.innerHTML += `<li>${q06}x Curso em C# = ${t006}</li>`  //c#
     }

     if(q07 > 0){
        lista.innerHTML += `<li>${q07}x Curso em PERL= ${t007}</li>`  //c#
     }

     if(q08 > 0){
        lista.innerHTML += `<li>${q08}x Curso em RUBY = ${t008}</li>`  //c#
     }

     if(q09 > 0){
        lista.innerHTML += `<li>${q09}x Curso em MYSQL = ${t009}</li>`  //c#
     }

     if(q010 > 0){
        lista.innerHTML += `<li>${q010}x Curso em C = ${t0010}</li>`  //c#
     }

     res.innerHTML = `O total a pagar será <strong>${vf}</strong>`
     resultado.style.visibility = `visible`
}