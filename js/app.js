$(document).ready(function(){
    //$('.modal').modal();
    $('button.close').click(closeModal());
    //$('a.btn-floating').click(showModal());
    //$('.fixed-action-btn').floatingActionButton();
    $('.fixed-action-btn').floatingActionButton({direction: 'bottom'});
  });

function showModal(element) {
  let section = element.getAttribute("data-modal-header");
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
  return modalName.style.display="block";
}

function closeModal(){
  let modalBase = document.getElementsByClassName("modal-shadow");
  
  return $(modalBase).hide();
}