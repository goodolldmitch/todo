// показываем форму по клику
show_form.onclick = function () { // по клику на кнопку show_form
    document.getElementById('form').style.display = 'block'; // показываем форму
    return false; // блокируем переход по ссылке
};

// обработка формы
form.onsubmit = function(){
    event.preventDefault(); // блокируем отправку по умолчанию
    
    var task = document.getElementById('task').value; // берем значение из поля
    
    var taskLine = document.createElement('li'); // создаем элемент списка    

    var date = document.getElementById('date').value; // берем значение из поля

    taskLine.innerHTML = '<input type="checkbox" class="check">' + task + '<span class="deadline">' + date + '</span> <span class="delete">&times;</span>' ; // вставляем в элемент списка значение из поля формы

    if(task != ""){ // если поле формы было заполнено
        tdl.append(taskLine); // вставляем элемент в список
        document.getElementById('form').style.display = 'none'; // убираем форму
    }
    else{ // если не заполнено, выводим предупреждение
        alert('Введи задачу');
    }
    
};

// работа с задачей
tdl.onclick = function(){ // нажимаем на строку списка и распределяем события в зависимости от места, куда был клик
    
    var clickedInnerItem = event.target; // получаем элемент по которому сделан клик

    var clickedInnerItemClass = event.target.className; // получаем класс кликнутого элемента

    var clickedInnerItemParent = clickedInnerItem.parentNode; // определяем родительский элемент
    
    if (clickedInnerItemClass == 'delete'){ // если клик по классу delete        

        clickedInnerItemParent.remove(); // удаляем родителя
    }
    else if(clickedInnerItemClass == 'check'){ // если клик по чекбоксу (проверить чекнут ли чекбокс)

        clickedInnerItemParent.classList.add('done'); // добавляем класс о готовности
    }
    else{
        alert('edit'); // реализовать редактирование
    }
};


