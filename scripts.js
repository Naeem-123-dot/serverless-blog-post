// Add your API endpoint here
var API_ENDPOINT = "https://w5zbaunhij.execute-api.us-east-1.amazonaws.com/prod";

// Better error handling
console.log("Script loaded, API endpoint:", API_ENDPOINT);

// AJAX POST request to save student data
document.getElementById("savestudent").onclick = function(){
    var inputData = {
        "studentid": $('#studentid').val(),
        "name": $('#name').val(),
        "class": $('#class').val(),
        "age": $('#age').val()
    };
    
    console.log("Saving student:", inputData);
    
    $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            console.log("Save success:", response);
            document.getElementById("studentSaved").innerHTML = "Student Data Saved!";
            // Clear form
            $('#studentid').val('');
            $('#name').val('');
            $('#class').val('');
            $('#age').val('');
        },
        error: function (xhr, status, error) {
            console.error("Save error:", xhr.responseText, status, error);
            alert("Error saving student data. Check console for details.");
        }
    });
}

// AJAX GET request to retrieve all students
document.getElementById("getstudents").onclick = function(){  
    console.log("Fetching students...");
    
    $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            console.log("Get students success:", response);
            
            // Clear existing rows except header
            $('#studentTable tbody').empty();
            
            // Handle different response formats
            var students = [];
            if (Array.isArray(response)) {
                students = response;
            } else if (response && response.body) {
                students = JSON.parse(response.body).students || [];
            } else if (response && response.students) {
                students = response.students;
            } else if (typeof response === 'string') {
                try {
                    var parsed = JSON.parse(response);
                    students = parsed.students || parsed || [];
                } catch (e) {
                    console.error("Parse error:", e);
                }
            }
            
            console.log("Processed students:", students);
            
            if (students.length === 0) {
                $("#studentTable tbody").append("<tr><td colspan='4'>No students found</td></tr>");
                return;
            }
            
            // Add students to table
            jQuery.each(students, function(i, data) {
                $("#studentTable tbody").append("<tr> \
                    <td>" + (data['studentid'] || '') + "</td> \
                    <td>" + (data['name'] || '') + "</td> \
                    <td>" + (data['class'] || '') + "</td> \
                    <td>" + (data['age'] || '') + "</td> \
                    </tr>");
            });
        },
        error: function (xhr, status, error) {
            console.error("Get students error:", xhr.responseText, status, error);
            alert("Error retrieving student data. Check console for details.");
        }
    });
}