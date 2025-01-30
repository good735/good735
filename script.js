//глобальная переменная

function check(task)//подпрограмма - функция
{

    let countCorrect;//локальная переменная
    if (task == 'A1') {
        //Получаем элементы и значения веб-страницы
        let elementInput1 = document.getElementById('a11');
        let elementInput2 = document.getElementById('a12');
        let value1 = elementInput1.value;
        let value2 = elementInput2.value;
        let trueValue1 = 'не лежащие на одной прямой';
        let trueValue2 = 'только одна';
        if (value1 == trueValue1) {
            elementInput1.style.color = 'green';
            countCorrect++;//увеличение значения переменной на 1
        }
        else elementInput1.style.color = 'red';
        if (value2 == trueValue2) {
            elementInput2.style.color = 'green';
            countCorrect++;
        } else {
            elementInput2.style.color = 'red';
        }
    }

    if (task == 'A2') {
        //Получаем элементы и значения веб-страницы
        let elementInput1 = document.getElementById('a21');
        let value1 = elementInput1.value;
        let trueValue1 = 'все точки прямой';
        if (value1 == trueValue1) {
            elementInput1.style.color = 'green';
            countCorrect++;//увеличение значения переменной на 1
        }
        else elementInput1.style.color = 'red';
    }
    if (task == 'A3') {
        //Получаем элементы и значения веб-страницы
        let elementInput1 = document.getElementById('a31');
        let elementInput2 = document.getElementById('a32');
        let value1 = elementInput1.value;
        let value2 = elementInput2.value;
        let trueValue1 = 'общую прямую';
        let trueValue2 = 'бесконечно много общих точек';
        if (value1 == trueValue1) {
            elementInput1.style.color = 'green';
            countCorrect++;//увеличение значения переменной на 1
        }
        else elementInput1.style.color = 'red';
        if (value2 == trueValue2) {
            elementInput2.style.color = 'green';
            countCorrect++;
        } else {
            elementInput2.style.color = 'red';
        }
    }
    if (task == 'B1') {
        //Получаем элементы и значения веб-страницы
        let elementInput1 = document.getElementById('b1');
        let elementInput2 = document.getElementById('b2');
        let value1 = elementInput1.value;
        let value2 = elementInput2.value;
        let trueValue1 = 'о пересечении плоскостей';
        let trueValue2 = 'общую прямую';
        if (value1 == trueValue1) {
            elementInput1.style.color = 'green';
            countCorrect++;//увеличение значения переменной на 1
        }
        else elementInput1.style.color = 'red';
        if (value2 == trueValue2) {
            elementInput2.style.color = 'green';
            countCorrect++;
        } else {
            elementInput2.style.color = 'red';
        }
    }
    if (task == 'T1') {
        //Получаем элементы и значения веб-страницы
        let elementInput1 = document.getElementById('t11');
        let elementInput2 = document.getElementById('t12');
        let value1 = elementInput1.value;
        let value2 = elementInput2.value;
        let trueValue1 = 'внешнюю';
        let trueValue2 = 'только одна';
        if (value1 == trueValue1) {
            elementInput1.style.color = 'green';
            countCorrect++;//увеличение значения переменной на 1
        }
        else elementInput1.style.color = 'red';
        if (value2 == trueValue2) {
            elementInput2.style.color = 'green';
            countCorrect++;
        } else {
            elementInput2.style.color = 'red';
        }
    }
}

function htmlToPDF() {
    // Элемент, который будет сохранён в PDF
    let element = document.body; //getPageCopyWithoutClasses(document.getElementById('pdf')); // document.body; // Здесь вы можете указать конкретный элемент
    //const element=document.getElementById('main');
    //console.log(element);
    let element2 = getPageCopyWithoutClasses(element);
    //console.log(element2);
    document.getElementById('clone').innerHTML = element2;

    //Опции для pdf
    const opt = {
        margin: 1,
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



function getPlainPageCopy() {
    // Клонируем body или другой родительский элемент, который хотите скопировать
    const clonedBody = document.body.cloneNode(true);

    // Удаляем все теги стилей и встроенные стили
    const styles = clonedBody.querySelectorAll('style, link[rel="stylesheet"]');
    styles.forEach(style => style.remove());

    // Удаляем встроенные стили
    const elementsWithInlineStyles = clonedBody.querySelectorAll('[style]');
    elementsWithInlineStyles.forEach(element => {
        element.removeAttribute('style');
    });
    console.log(clonedBody);

    // Возвращаем склонированный HTML-код в виде строки
    return clonedBody.innerHTML;
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
