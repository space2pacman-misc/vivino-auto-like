window.onload = () => {
    var userName = document.querySelector(".user-header__name");
    var latestRatings = document.querySelector(".user-profile-menu-item");
    var activityLikes = document.querySelector(".activity-show-likes");
    var likesContainer = document.querySelector(".likes-container");
    var followContainer = document.querySelector(".follow-container");
    // var cloneLikesContainer = document.querySelector(".likes-container");


    if (!localStorage.vivino) {
        localStorage.vivino = JSON.stringify({
            "user": "",
            "peopleLike": []
        })
    }

    var vivinoData = JSON.parse(localStorage.vivino);


    if (followContainer.children.length === 0) {
        vivinoData.user = userName.innerHTML;
        localStorage.vivino = JSON.stringify(vivinoData);
        console.log(vivinoData);
    }

    if (!latestRatings.parentElement.classList.contains("active")) {
        latestRatings.click();
    }

    if (activityLikes && userName.innerHTML == vivinoData.user) {
        activityLikes.click();
        activityLikes.dispatchEvent(new Event("click")); // Вызывает нашу функцию, которую повесили на click

        console.log(likesContainer.querySelectorAll(".user-friend-card").length)

        setTimeout(function () {
            console.log(likesContainer.querySelectorAll(".user-friend-card").length)
        }, 2000)
        //        activityLikes.addEventListener("click", () => {

        var timer = setInterval(() => {
            if (!likesContainer.querySelectorAll(".user-friend-card").length == 0) {
                likesContainer.querySelectorAll(".user-friend-card")
                    .forEach(user => {
                        var userName = user.querySelector(".user-name").querySelector("a").innerHTML
                        if (userName !== vivinoData.user) {
                            vivinoData.peopleLike.push({ user: userName, visited: false });
                        }
                    })
                clearInterval(timer);
                localStorage.vivino = JSON.stringify(vivinoData);
            }
        }, 1000)

        // while (true) {
        //     // console.log("click");
        //     if (!likesContainer.querySelectorAll(".user-friend-card").length == 0) {
        //         likesContainer.querySelectorAll(".user-friend-card")
        //             .forEach(user => {
        //                 vivinoData.peopleLike.push(user.querySelector(".user-name").querySelector("a").innerHTML);
        //                 //console.log(user.querySelector(".user-name").innerHTML);
        //             })

        //         break
        //     }

        // }

        //        })

    }
    //    user-friend-card
    //    console.log(likesContainer.querySelectorAll(".user-friend-card"));

    console.log(vivinoData);




    // {
    //     "vivino": {
    //       "user": "Denis Antonov",
    //       "peopleLike": [
    //         {
    //           "user": "Yaroslav Ivanov",
    //           "visited": false
    //         }
    //       ]
    //     }
    //   }

    console.log(latestRatings.parentElement.classList.contains("active"));
    console.log(userName);
}

