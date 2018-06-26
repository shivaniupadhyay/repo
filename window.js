window.onload = function () {

    let addtask = document.getElementById('addtask')
    let newtask = document.getElementById('newtask')
    let list = document.getElementById('list')

    addtask.onclick = function () {
        let start =new date().getTime()
        list.innerHTML += "<li>" + newtask.value + "</li>"

        console.log(new date().gettime()-start)
    }
