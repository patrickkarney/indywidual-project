function burgerToggle() {
    // find burger element
    const burgerElement = document.querySelector('.btn-sidebar');
    console.log('tutaj', burgerElement);
    //get Id of sidebar nav list element
    const sidebarList = document.getElementById('sidebar-nav');
    //add eventlistener to burger
    burgerElement.addEventListener('click', function(event){
        event.preventDefault();
        if(sidebarList.style.display === 'none'){
            sidebarList.style.display = 'inline-block';
        }
        else{
            sidebarList.style.display = 'none';
        }
    })
}

burgerToggle();
