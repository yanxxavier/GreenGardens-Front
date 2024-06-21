export default function initEbookModal() {

}


const modalBox = document.querySelector('.modal_box');

//Abrir o modal

const openModalBtn = document.getElementById('buttonOpenModal');
openModalBtn.addEventListener('click', () => {
    modalBox.style.display = 'flex';
})

//Fechar o modal

function closeModal() {
    modalBox.style.display = 'none';
}

const closeModalBtn = document.getElementById('backModalBtn');
closeModalBtn.addEventListener('click', closeModal)
