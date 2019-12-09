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
                <div class="Panel row">
                    <div class="Heading col-12 table-bordered border-dark pt-2 rounded text-center">
                        <h3 class="Title font-weight-bold"> ${user.name} </h3>
                    </div>
                    <div class="panel-body col-12 pt-2">
                        <div class="Body row">
                            <div class="col-md-3">
                                <img class="img-thumbnail w-100 mb-1" src="${user.avatar_url}" />
                                <a target="_blank" class="btn btn-primary w-100" href="${user.html_url}">View Profile</a>
                            </div>
                            <div class="col-md-3">
                                
                            </div>
                        </div>  
                    </div>
                </div>
            `);
        });
    });
});