$(document).ready(function () {
    $("#searchUser").on("keyup", function (e) {
        let username = e.target.value;

        //Make request to Github
        $.ajax({
            url: "https://api.github.com/users/" + username,
            data: {
                client_id: "70a95d802b290379ba34",
                client_secret: "5306be33d0df19dff784f80545c4d82f4af07b0e"
            }
        }).done(function (user) {
            $("#profile").html(`
                ${user.name}
            `);
        });
    });
});