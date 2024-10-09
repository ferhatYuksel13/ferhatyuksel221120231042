// let employees = [];

// // Çalışan ekleme
// document.getElementById('employeeForm').addEventListener('submit', function(event) {
//     event.preventDefault();  

//     let name = document.getElementById('name').value;
//     let age = parseInt(document.getElementById('age').value);
//     let department = document.getElementById('department').value;
//     let salary = parseFloat(document.getElementById('salary').value);

//     if (!name || age < 18 || salary < 0) {
//         alert("Geçersiz bilgi. Lütfen tüm bilgileri doğru girdiğinizden emin olun.");
//         return;
//     }

//     if (employees.some(emp => emp.name === name)) {
//         alert("Bu isimde bir çalışan zaten var.");
//         return;
//     }

//     employees.push({ name, age, department, salary });
//     alert(`${name} isimli çalışan başarıyla eklendi.`);
//     displayEmployees();
//     document.getElementById('employeeForm').reset();
// });

// // Çalışanları listeleme
// function displayEmployees() {
//     let employeeList = document.getElementById('employeeList');
//     employeeList.innerHTML = '';

//     employees.forEach(employee => {
//         let listItem = document.createElement('li');
//         listItem.textContent = `${employee.name} - Yaş: ${employee.age}, Departman: ${employee.department}, Maaş: ${employee.salary}`;
//         employeeList.appendChild(listItem);
//     });
// }

// // Çalışan Silme
// function deleteEmployee() {
//     let deleteName = document.getElementById('deleteName').value;
//     const index = employees.findIndex(emp => emp.name === deleteName);

//     if (index === -1) {
//         alert("Silinecek çalışan bulunamadı.");
//         return;
//     }

//     employees.splice(index, 1);
//     alert(`${deleteName} isimli çalışan silindi.`);
//     displayEmployees();
// }

// // Departmana göre çalışan listeleme
// function listByDepartment() {
//     let department = document.getElementById('filterDepartment').value;
//     let filteredEmployees = employees.filter(emp => emp.department === department);

//     if (filteredEmployees.length === 0) {
//         alert("Bu departmanda çalışan bulunmamaktadır.");
//         return;
//     }

//     displayFilteredEmployees(filteredEmployees);
// }

// // Maaşa göre sıralama
// function listBySalary(order) {
//     let sortedEmployees = [...employees];
//     sortedEmployees.sort((a, b) => order === 'asc' ? a.salary - b.salary : b.salary - a.salary);

//     displayFilteredEmployees(sortedEmployees);
// }

// // Filtrelenmiş çalışanları gösterme
// function displayFilteredEmployees(filteredEmployees) {
//     let employeeList = document.getElementById('employeeList');
//     employeeList.innerHTML = '';

//     filteredEmployees.forEach(employee => {
//         let listItem = document.createElement('li');
//         listItem.textContent = `${employee.name} - Yaş: ${employee.age}, Departman: ${employee.department}, Maaş: ${employee.salary}`;
//         employeeList.appendChild(listItem);
//     });
// }






let employees = [];

// Çalışan ekleme
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value);
    let department = document.getElementById('department').value;
    let salary = parseFloat(document.getElementById('salary').value);

    if (!name || age < 18 || salary < 0) {
        alert("Geçersiz bilgi. Lütfen tüm bilgileri doğru girdiğinizden emin olun.");
        return;
    }

    if (employees.some(emp => emp.name === name)) {
        alert("Bu isimde bir çalışan zaten var.");
        return;
    }

    employees.push({ name, age, department, salary });
    alert(`${name} isimli çalışan başarıyla eklendi.`);
    displayEmployees();
    document.getElementById('employeeForm').reset();
});

// Çalışanları listeleme
function displayEmployees() {
    let employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(employee => {
        let listItem = document.createElement('li');
        listItem.textContent = `${employee.name} - Yaş: ${employee.age}, Departman: ${employee.department}, Maaş: ${employee.salary}`;
        employeeList.appendChild(listItem);
    });
}

// Çalışan Silme
function deleteEmployee() {
    let deleteName = document.getElementById('deleteName').value;
    const index = employees.findIndex(emp => emp.name === deleteName);

    if (index === -1) {
        alert("Silinecek çalışan bulunamadı.");
        return;
    }

    employees.splice(index, 1);
    alert(`${deleteName} isimli çalışan silindi.`);
    displayEmployees();
}

// Departmana göre çalışan listeleme
function listByDepartment() {
    let department = document.getElementById('filterDepartment').value;
    let filteredEmployees = employees.filter(emp => emp.department === department);

    if (filteredEmployees.length === 0) {
        alert("Bu departmanda çalışan bulunmamaktadır.");
        return;
    }

    displayFilteredEmployees(filteredEmployees);
}

// Maaşa göre sıralama
function listBySalary(order) {
    let sortedEmployees = [...employees];
    sortedEmployees.sort((a, b) => order === 'asc' ? a.salary - b.salary : b.salary - a.salary);

    displayFilteredEmployees(sortedEmployees);
}

// Filtrelenmiş çalışanları gösterme
function displayFilteredEmployees(filteredEmployees) {
    let employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    filteredEmployees.forEach(employee => {
        let listItem = document.createElement('li');
        listItem.textContent = `${employee.name} - Yaş: ${employee.age}, Departman: ${employee.department}, Maaş: ${employee.salary}`;
        employeeList.appendChild(listItem);
    });
}

// Tüm çalışanların toplam maaşını hesapla
function calculateTotalSalary() {
    let total = employees.reduce((sum, employee) => sum + employee.salary, 0);
    document.getElementById('totalSalary').textContent = `Toplam Maaş: ${total} TL`;
}

// Belirli bir departmanın toplam maaşını hesapla
function calculateDepartmentSalary() {
    let department = document.getElementById('deptForTotal').value;
    let departmentEmployees = employees.filter(emp => emp.department === department);

    if (departmentEmployees.length === 0) {
        alert("Bu departmanda çalışan bulunmamaktadır.");
        return;
    }

    let total = departmentEmployees.reduce((sum, employee) => sum + employee.salary, 0);
    document.getElementById('departmentSalary').textContent = `${department} Departmanı Toplam Maaş: ${total} TL`;
}














