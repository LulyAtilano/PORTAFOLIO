$(document).ready(function(){
    //$('.modal').modal();
    $('button.close').click(function(){
      $('div.modal-shadow').hide();
    });

    //$('li.li-sections-mobile').on("click",showModal);
    //$('a.btn-floating').on("click",showModal(this));
    //$('.fixed-action-btn').floatingActionButton();
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
  return modalName.style.display="block";
}