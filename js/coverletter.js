window.onload = function(){
    var btnRegister = document.getElementById('btnRegister');
    var btnCancel = document.getElementById('btnCancel')
    var guestName = document.getElementById('guestName');
    
    btnRegister.addEventListener('click', function(){
        var checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked')
        alert(guestName.value + '님, 저와 ' + checkedBoxes.length + '개의 취향이 같으시네요!');
    })

    btnCancel.addEventListener('click', function() {
        document.getElementById("guestName").value = null;
        const checkboxes  = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false
          })
    })
}