const employees=[
    {id:1, firstName:'john', lastName:'Doe', email:'john.doe@example.com', department:'HR', role:'Manager'},
    {id:2, firstName:'jane', lastName:'Smith', email:'jane.smith@example.com', department:'IT', role:'Developer'},
    {id:3, firstName:'Mark', lastName:'Taylor', email:'mark.taylor@example.com', department:'Finance', role:'Analyst'},

];

const container=document.getElementById('employeeContainer');
function renderEmployees(data){
    container.innerHtml ='';
    data.forEach(emp = {
        const card =
        document.createElement('div');
        card.className='employee-card';
        card.innerHTML=`
            <p><strong>${emp.firstName} $ {emp.lastName}</strong></p>
            <p><strong>Email: </strong>$ {emp.email}</p>
            <p><strong>Department: </strong>$ {emp.department}</p>
            <p><strong>Role: </strong>$ {emp.role}</p>
            <button onclick="editEmployess(${emp.id})">Edit</button>
            <button onclick="deleteEmployess(${emp.id})">Delete</button>

            `;
            container.appendChild(card);
    });
}

function deleteEmployess(id){
    const index = employees.findIndex(e => e.id === id);
    if (index !== -1){
        employees.splice(index, 1);
        renderEmployees(employees);
    }
}

function openAddForm(){
    document.getElementById('employeeForm').reset();
    document.getElementById('empId').value='';
    document.getElementById('formTitle').innerText='Add Employee';
    document.getElementById('addForm').style.display='flex';

    function closeForm(){
        document.getElementById('addForm').style.display='none';
    }

    Document.getElementById('employeeForm').addEventListener('submit', e => {
        e.preventDefault();
        const id= document.getElementById('empId').value;
        const newEmp = {
            id: id ? parseInt(id) : Date.now(),
            firstName:
            document.getElementById('firstName').value, 
            lastName:
            document.getElementById('lastName').value,
            email:
            document.getElementById('email').value,
            department:
            document.getElementById('department').value,
            role:
            document.getElementById('role').value,
        };

        if (id) {
            const index=employees.findIndex(e => e.id ==id);
            employees[index]=newEmp;
        } else{
            employees.push(newEmp);
        }

        renderEmployees(employees);
        closeForm();
    });

    function editEmployee(id){
        const emp = employees.find(e => e.id === id);
        if (emp){
            document.getElementById('formTitle').innerText='Edit Employee';
            document.getElementById('empId').value=emp.id;
            document.getElementById('firstName').value=emp.firstName;
            document.getElementById('lastName').value=emp.lastName;
            document.getElementById('email').value=emp.email;
            document.getElementById('department').value=emp.department;
            document.getElementById('role').value=emp.role;
            document.getElementById('addForm').style=emp.display = 'flex';
            
        }

    }

    function toggleFilter(){
        const sidebar = document.getElementById('filterSidebar');
        sidebar.style.display= sidebar.style.display === 'block' ? 'none': 'block';
    }

    function applyFilter(){
        const fname= document.getElementById('filterFirstName').value.toLowerCase();
        const dept = document.getElementById('filterDepartment').value.toLowerCase();
        const role= document.getElementById('filterRole').value.toLowerCase();
        const filtered = employees.filter(emp => emp.firstName.toLowerCase().includes(fname) && 
        emp.department.toLowerCase().includes(role));
        renderEmployees(filtered);
    }

    function resetFilter(){
        document.getElementById('filterFirstName').value='';
        document.getElementById('filterDepartment').value='';
        document.getElementById('filterRole').value='';
        renderEmployees(employees);

    }

    function sortEmployees(){
        const sortKey= document.getElementById('sortBy').value;
        if (sortKey){
            employees.sort((a, b)=> a[sortKey.localCompare(b[sortKey])]);
            renderEmployees(employees);
        }

        function changePageSize(){
            // pagination logic placeholder//
            renderEmployees(employees);
        }

        function searchEmployees(){
            const searchText = document.getElementById('searchInput').value.toLowerCase();
            const filtered = employees.filter(emp => emp.firstName.toLowerCase().includes(searchText) ||
            emp.lastName.toLowerCase().includes(searchText) ||
            emp.email.toLowerCase().includes(searchText));

            renderEmployees(filtered);

        }

        function clearSearch(){
            document.getElementById('searchInput').value='';
            renderEmployees(employees);
        }
        renderEmployees(employees);


    }

}
