window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
    });

    //Template literals ES6 feature
    const createInnerHtml = () => {
        const headerHtml = `
        <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
        </tr>`;
        let innerHtml = `${headerHtml}`;
        let empPayrollList = createEmpPayrollJson();
        for(const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml} 
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt="profile"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._dept)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" src="../Assets/icons/delete-black-18dp.svg" alt="delete">
                <img name="${empPayrollData._id}" onclick="update(this)" src="../Assets/icons/create-black-18dp.svg" alt="edit">
            </td>
       </tr>
    `;
        }
        
    document.querySelector('#table-display').innerHTML = innerHtml;
    }
    
    const getDeptHtml = (deptList) => {
        let deptHtml = '';
        for(const dept of deptList){
            deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
        }
        return deptHtml;
    }

    //Creating json object for employee data
const createEmpPayrollJson = () => {
    let empPayrollListLocal = [{
            _name: 'Glenn',
            _gender: 'Male',
            _dept: ['Engineer', 'Dev'],
            _salary: '500000',
            _startDate: '23 October 2021',
            _notes: 'Welcome to Json',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'YUvraj Singh',
            _gender: 'Male',
            _dept: ['HR'],
            _salary: '600000',
            _startDate: '28 January 2022',
            _notes: 'Hi',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/profile-images/Ellipse -5.png'
        }, {
            _name: 'Alia Bhatt',
            _gender: 'Female',
            _dept: ['Finance'],
            _salary: '300000',
            _startDate: '01 April 2020',
            _notes: 'Employee',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}