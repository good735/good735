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
