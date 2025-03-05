//глобальная переменная

function checkTask(elementsId, trueValues) {
    elementsId.forEach((id, index) => {
        let element = document.getElementById(id);
        if (element.value != '') {
            if (element.value == trueValues[index]) {
                element.style.color = 'green'
            }
            else {
                element.style.color = 'red';
            }
        }
    }
    );
}

let array=[1,2,3,4,5,3.3,'text',[123,3]]//ассоциативный массив
//alert(array[2])
let answers=//объект (словарь)
{
    'a11':'не лежащие на одной прямой',
    'a12':'только одна',
    'a21':'все точки прямой',
    "a31":'общую прямую',
    "a32":'бесконечно много общих точек',
    'b2':'общую прямую',
    'b1':'о пересечении плоскостей',
't11':'внешнюю',
't12':'только одна',
'k12':'m,p,q',
'k13':'аксиоме a1',
'k14':'по аксиоме a2',
'k15':'m',
'k16':'прямую а',
'L15':'m,p,q',
'L16':'в плоскости b',
'L17':'аксиоме а1',
'L18':'совпадают',
'L19':'m',
'L20':'прямую а',
'L21':'только одна',
'V1':'пересекающиеся',
'V2':'только одна',
'M1':'различные',
'M2':'теореме 1',
'M3':'m',
'M4':'n',
'M5':'аксиоме а2',
'M5_':'лежит в плоскости a',
'M6':'плоскость a',
'M7':'плоскость',
'M8':'n',
'M9':'прямая a',
'M10':'теореме 1',
'M11':'совпадают',
'M12':'a',
'M13':'b',
'M141':'только одна',
'M14_':'bcc1',
'M15':'aa1d',
'M16':'abc',
'M17':'n',
'M18':'c',
'M19':'m',
'M20':'bc',
'M21':'c1d1',
'M22':'d',
'M23':'c1',
'M24':'a1',
'M25':'a2',
'M26':'bo',
'M27':'co',
'M28':'a и d лежат в плоскости α',
'M281':'лежат',
'M29':'не могут',
'M301':'теореме 2',
'M30':'одной',
'M31':'m1n1p1q',
'M32':'условию',
'M33':'да',
'M34':'точку m',
'M35':'аксиоме a3',
'M36':'общую прямую',
'M37':'пересекаются',


}
//alert(answers['a11'])


function check(task)//подпрограмма - функция
{

    let countCorrect;//локальная переменная
    if (task == 'A1') {
        checkTask(['a11', 'a12'], ['не лежащие на одной прямой', 'только одна']);
    }

    if (task == 'A2') {
        checkTask(['a21'],['все точки прямой']);
    }
    if (task == 'A3') {
        checkTask(["a31", "a32" ],['общую прямую', 'бесконечно много общих точек'])
      
    }
    if (task == 'B1') {
        checkTask(['b1', 'b2'],['о пересечении плоскостей', 'общую прямую'])
    }
   
    if (task == 'T1') {
        checkTask(['t11','t12'],['внешнюю','только одна'])
    }
    //6
    
}

function showAnswers()
{
  for (const key in answers)
  {
    //console.log(`${key}:${answers[key]}`)
    document.getElementById(key).placeholder=answers[key];
  }

}

function clearAnswers()
{
  for (const key in answers)
  {
    //console.log(`${key}:${answers[key]}`)
    document.getElementById(key).placeholder='';
  }

}


showAnswers();

function htmlToPDF() {
    // Элемент, который будет сохранён в PDF
    let element = document.body; //getPageCopyWithoutClasses(document.getElementById('pdf')); // document.body; // Здесь вы можете указать конкретный элемент
    //const element=document.getElementById('main');
    //console.log(element);
    let element2 = getPageCopyWithoutClasses(element);
    //console.log(element2);
    //document.getElementById('clone').innerHTML = element2;

    //Опции для pdf
    const opt = {
        margin: 0,
        filename: 'my-document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Генерация PDF
    html2pdf()
        .from(element2)
        .set(opt)
        .save();



}






function getPageCopyWithoutClasses(element) {
    // Клон всей страницы без классов
    const clonedBody = element.cloneNode(true); //document.body.cloneNode(true);

    // Удаляем все изображения
    const images = clonedBody.querySelectorAll('img');
    images.forEach(img => img.parentNode.removeChild(img));
    // Удаляем все изображения
    const buttons = clonedBody.querySelectorAll('button');
    buttons.forEach(button => button.parentNode.removeChild(button));

    const inputs = clonedBody.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.textContent = input.value;
        input.parentNode.replaceChild(span, input);
    });

    // Возвращаем склонированный HTML-код в виде строки
    return clonedBody.innerHTML;
}
