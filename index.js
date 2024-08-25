
function addRowToTable(table, data) {
    const row = table.insertRow(-1);
    data.forEach((text, index) => {
        const cell = row.insertCell(index);
        cell.textContent = text;
    });
}


document.getElementById('animalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('animalName').value;
    const breed = document.getElementById('animalBreed').value;
    const age = document.getElementById('animalAge').value;
    const health = document.getElementById('animalHealth').value;
    addRowToTable(document.getElementById('animalTable'), [name, breed, age, health]);
    this.reset();
});

// Control de Inventario
document.getElementById('inventoryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('itemName').value;
    const quantity = document.getElementById('itemQuantity').value;
    const type = document.getElementById('itemType').value;
    addRowToTable(document.getElementById('inventoryTable'), [name, quantity, type]);
    this.reset();
});

// Gestión de Adopciones
document.getElementById('adoptionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const adopter = document.getElementById('adopterName').value;
    const animal = document.getElementById('adoptedAnimal').value;
    const date = document.getElementById('adoptionDate').value;
    addRowToTable(document.getElementById('adoptionTable'), [adopter, animal, date]);
    this.reset();
});

// Administración de Donaciones
document.getElementById('donationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const donor = document.getElementById('donorName').value;
    const amount = document.getElementById('donationAmount').value;
    const date = document.getElementById('donationDate').value;
    addRowToTable(document.getElementById('donationTable'), [donor, amount, date]);
    this.reset();
});
