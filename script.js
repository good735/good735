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
    const element = document.body; // Здесь вы можете указать конкретный элемент
    //const element=document.getElementById('main');

    // Опции для pdf
    const opt = {
        margin: 1,
        filename: 'my-document.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Генерация PDF
    html2pdf()
        .from(element)
        .set(opt)
        .save();
}