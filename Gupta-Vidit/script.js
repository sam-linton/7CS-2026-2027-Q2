let chores = JSON.parse(localStorage.getItem('chores')) || [];

displayChores();

function displayChores() {
  let choreList = document.getElementById('chore-list');
  let clearContainer = document.getElementById('clear-container');
  
  choreList.innerHTML = '';
  
  if (chores.length === 0) {
    choreList.innerHTML = '<div class="empty-state">🎉 All done! Add an item above to get started.</div>';
    if (clearContainer) {
      clearContainer.style.display = 'none';
    }
    return;
  }

  for (let i = 0; i < chores.length; i++) {
    choreList.innerHTML += '<div class="chore">' + chores[i] +
      '<button onclick="deleteChore(' + i + ')">' +
      '<span class="material-symbols-outlined">delete</span></button></div>';
  }
  
  if (chores.length > 0) {
    clearContainer.style.display = 'flex';
  } else {
    clearContainer.style.display = 'none';
  }
}


function addChore() {
  let choreInput = document.getElementById('chore-input');
  let chore = choreInput.value;

  if (chore.trim() !== '') {
    chores.push(chore);
    saveChores();
    displayChores();
    choreInput.value = '';
  }
}

function deleteChore(i) {
  chores.splice(i, 1);
  saveChores();
  displayChores();
}

function saveChores() {
  localStorage.setItem('chores', JSON.stringify(chores));
}
document.getElementById('chore-input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addChore();
  }
});
function clearAllChores() {
  chores = [];
  saveChores();
  displayChores();
}
