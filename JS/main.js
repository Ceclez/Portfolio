document.addEventListener('DOMContentLoaded', function() {

    const image = document.querySelector('.gallery, .marialuisa') ,
        bg = document.querySelector('#cover') ,
        slider = document.querySelector('.slider') ,
        carrousel = document.querySelector('#carrousel') ,
        images = document.querySelectorAll('.images') ,
        btn_left = document.querySelector('.btn-left') ,
        btn_right = document.querySelector('.btn-right') ,
        btn_x = document.querySelector('.btn-x') ,
        desc2 = document.querySelector('.desc2') ;

        //Slider
    image.onclick = () => {
        bg.style.display = 'flex' ;
            slider.style.display = 'block' ;

            btn_left.addEventListener('click', e => toLeft()) ;
            btn_right.addEventListener('click', e => toRight()) ;
            
            let operacion = 0 ;
            let counter = 0 ;
            let lengthImg = 100 / images.length ; //100% entre la longitud total de todas las imágenes (100 / 20)
        
            function toRight() {
                if (counter >= images.length -1) { //Es decir: si está al final de la lista.
                    counter = 0 ;
                    operacion = 0 ;
                    carrousel.style.transform = `translate(-${operacion}%)` ;  
                    return ;
                } ;
                counter++ ; 

                operacion = operacion + lengthImg ; //5 + 5 etc... (Acumulado)
                carrousel.style.transform = `translate(-${operacion}%)` ;
                desc2.style.visibility = 'visible' ; //REVISAR
                carrousel.style.transition = 'all ease .3s' ;
            } ;
            

            function toLeft() {
                counter-- ; 

                if (counter < 0) { //Si el contador está en la primer posición...
                    counter = images.length -1 ;
                    operacion = lengthImg * (images.length -1) ; //100%
                    carrousel.style.transform = `translate(-${operacion}%)` ;
                    return ;
                } ;
                operacion = operacion - lengthImg ;
                carrousel.style.transform = `translate(-${operacion}%)` ;
                carrousel.style.transform = 'all ease .3s' ;                
            } ;
        } ;


    btn_x.onclick = () => {
        bg.style.display = 'none' ;
    } ;    

        //Clic para mostrar tooltip de "shop" en navegación
    tooltip_shop = document.querySelector('.tooltip') ;
    shop = document.querySelector('.navigation .shop') ;

    shop.addEventListener('click', function() {
        tooltip_shop.style.visibility = 'visible' ;
        setTimeout(() => {
            tooltip_shop.style.visibility = 'hidden' ;
        }, 3000) ;
    })

        //Desactivar "slider" en determinadas dimensiones
    if (window.matchMedia("(max-width: 695px").matches) {
        image.onclick = () => {
            bg.style.display = 'none' ;  
        } ;
    } ;


        //Activar menú desplegable en determinadas dimensiones
    const listButton = document.querySelector('#list-button') ,
        li = document.querySelectorAll('.navigation li') ,
        close = document.querySelector('.close') ;
    
    let menuOpened = false ;
    
    if (window.matchMedia("(max-width: 426px").matches) {

        listButton.onclick = () => {
            if (menuOpened) {
                li.forEach((e) => {
                    e.style.display = 'none' ;
                    close.classList.remove('open') ;
                    menuOpened = false;
                }) 
            } else {
                li.forEach((e) => {
                    e.style.display = 'block' ;
                    close.classList.add('open') ;
                    menuOpened = true;
                }) 
            }
        } 
    }  

})


//PEDIENTE HACER QUE EL "SLIDER" INICIE SEGÚN LA IMÁGEN QUE SE SELECCIONE

/*--CONSEGUIR ESTILOS COMPUTADOS--
    let styles = window.getComputedStyle(nav) ;
    res = styles.getPropertyValue('margin-top') ;
    */    