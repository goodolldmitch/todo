// показываем форму по клику
show_form.onclick = function () {
    document.getElementById('form').style.display = 'block';
    return false;
};

// обработка формы
form.onsubmit = function(){
    event.preventDefault(); // блокируем отправку по умолчанию
    
    var task = document.getElementById('task').value; // берем значение из поля
    
    var taskLine = document.createElement('li');

    taskLine.innerHTML = task;

    if(task != ""){
        tdl.append(taskLine);
        document.getElementById('form').style.display = 'none';
    }
    else{
        alert('Введи задачу');
    }
    
};