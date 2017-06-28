$("#addReservationBtn").on("click", function() {
    var userName = $("#addName").val().trim();
    var userPhone = $("#addPhone").val().trim();
    var userEmail = $("#addEmail").val().trim();
    var uniqueID = $("#uniqueID").val().trim();

    userName = userName.replace(/\s+/g, "").toLowerCase();

    $.get("/api/" + userName, function(data) {
        console.log(data);
        if (data) {
            console.log(data);
            console.log(userName);
        }

        else {
            console.log(userName);
    }
    });

    userPhone = userPhone.replace(/\s+/g, "").toLowerCase();

    $.get("/api/" + userPhone, function(data) {
        console.log(data);
        } if (data) {
            console.log(data);
            console.log(userPhone);
        }

        else {
            console.log(userPhone);
        }
    });

    userEmail = userEmail.replace(/\s+/g, "").toLowerCase();

    $.get("/api/" + userEmail, function(data) {
        console.log(data);
        } if (data) {
            console.log(data);
            console.log(userEmail);
        }

        else {
            console.log(userEmail);
        }
    });

    uniqueID = uniqueID.replace(/\s+/g, "").toLowerCase();

    $.get("/api/" + uniqueID, function(data) {
        console.log(data);
        } if (data) {
            console.log(data);
            console.log(uniqueID);
        }

        else {
            console.log(uniqueID);
        }
    });

});