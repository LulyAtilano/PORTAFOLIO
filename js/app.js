$(document).ready(function(){
    //$('.modal').modal();
    $('button.close').click(function(){
      $('div.modal-shadow').hide();
    });

    $('h2').addClass('animated fadeInDown');
    $('h3').addClass('animated fadeInUp');

    $('#btn-sections-mobile').addClass('animated flipInX');

    //$('li.li-sections-mobile').on("click",showModal);
    $('.fixed-action-btn').floatingActionButton({direction: 'left'});
});

function showModal(element) {
  let section = element.getAttribute("data-modal-header");
  //let section = $('a.btn-floating').data("data-modal-header");
  //console.log(section);
  let modalName = "";

  switch(section) {
    case "About Me":
      let modalAboutMe = document.getElementById('modal-About-Me');
      modalName = modalAboutMe; 
    break;
    case "Projects":
    let modalProject = document.getElementById('modal-Projects');
    modalName = modalProject; 
    break;
    case "Tech Skills":
      let modaldTechSkills = document.getElementById('modal-Tech-Skills');
    modalName = modaldTechSkills;
    break;
    case "Contact":
      let modalContact = document.getElementById('modal-Contact');
      modalName = modalContact; 
    break;
    case "Hobbies":
    let modalHobbies = document.getElementById('modal-Hobbies');
    modalName = modalHobbies; 
    break;
  }
  return modalName.style.display="flex";
  
}


/* Cambios de Idiomas */
function englishView(){
  window.location.href="englishView.html";
}

function spanishView(){
  window.location.href="index.html";
}

/* Animaciones */
$('h4').addClass('animated slideInDown');
$('#text-footer').addClass('animated fadeInUp');