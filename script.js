// Function to load student records from JSON file
async function loadStudentRecords() {
    try {
      const response = await fetch('student_records.json');
      const data = await response.json();
      const tbody = $('#studentTable tbody');
      tbody.empty();
      $.each(data, function (index, student) {
        const row = `
          <tr data-studentid="${student.id}">
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.grade}</td>
          </tr>
        `;
        tbody.append(row);
      });
    } catch (error) {
      console.error('Error loading student records:', error);
    }
  }
  
  // Function to show record details in popup
  function showRecordDetails(row) {
    const studentID = $(row).data('studentid');
    const name = $(row).find('td:nth-child(2)').text();
    const grade = $(row).find('td:nth-child(3)').text();
  
    $('#popupStudentID').text(studentID);
    $('#popupName').text(name);
    $('#popupGrade').text(grade);
    $('#recordPopup').show();
  }
  
  // Function to close popup
  $('#closePopup').click(function () {
    $('#recordPopup').hide();
  });
  
  // Load student records when the page loads
  $(document).ready(function () {
    loadStudentRecords();
  });
  
  // Event listener for clicking on table row
  $(document).on('click', '#studentTable tbody tr', function () {
    showRecordDetails(this);
  });
  