function toggleMode() {
    const html = document.documentElement 

    // if(html.classList.contains('light')) { /*html na class liista contém light?*/
    //     html.classList.remove('light') /* se contém, remove */
     
    // } else {
    //     html.classList.add('light') /* se ñ contem, adiciona */
    // } 

    /* pode ser suv=bstituido pela funçção abaixo */


    html.classList.toggle("light")

    /* agora adiconar o outro avatar */

    //p pegar a tag img
    const img = document.querySelector("#profile img")

    
    // substituir a imagem
    if (html.classList.contains('light')) {
     // se tiver light mode, adiciona a imagem light
        img.setAttribute("src", "./assets/avatar-lucas-light.png")

    } else {
      //se ñ tiver lighr mode, permanece a imagem existente
        img.setAttribute("src", "./assets/avatar-lucas.png")        
    }







}

