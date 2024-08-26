//DOM MANİPÜLASYONU : classList.add() ve classList.remove()
// classList.add(), bir HTML elementine bir veya daha fazla CSS sınıfı eklemeyebilme özelliğini sağlarken 
//classList.remove() ise bir HTML elementinden bir veya daha fazla CSS sınıfını kaldırabilmeyi sağlar

const paragraph = document.getElementById('myParagraph');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (paragraph.classList.contains('highlight')) {

        paragraph.classList.remove('highlight');
        toggleButton.textContent = 'Paragrafı Vurgula'; 
    } else {
    
        paragraph.classList.add('highlight');
        toggleButton.textContent = 'Vurgulamayı Kaldır'; 
    }
});













