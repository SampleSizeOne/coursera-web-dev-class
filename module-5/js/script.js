// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded", 
    function (event) {
        
        document.getElementById("say-name").addEventListener("click", 
            function (event) {
                this.textContent = "Said it!";
                var name = document.getElementById("name").value
                var message = "<h2>Hello " + name + "!<h2>";
                document.getElementById("content").innerHTML = message;
            }
        );
        
        document.querySelector("body").addEventListener("mousemove",
            function (event) {
                if (event.shiftKey === true) {
                    document.querySelector("#mouse-xy").innerHTML = 
                        "<h3>Mouse Coordinate: x = " + 
                        event.clientX + ", y = " +
                        event.clientY + "</h3>";
                }
            }
        );
        
        document.getElementById("load-name").addEventListener("click", 
            function () {
                $ajaxUtils.sendGetRequest("/data/name.txt", 
                    function (request) {
                        document.getElementById("print-name").innerHTML = 
                            "<h3>" + request.responseText + "</h3>";
                    }
                )
            }
        );

        document.getElementById("load-json").addEventListener("click",
            function () {
                $ajaxUtils.sendGetRequest("/data/entity.json",
                    function (request) {
                        var entity = JSON.parse(request.responseText);
                        console.log(entity);
                        var message = entity.firstName + " " +
                            entity.lastName;
                        if (entity.likesChineseFood) {
                            message += " likes Chinese Food and ordered";
                        } else {
                            message += " doesn't like Chinese Food and ordered";
                        }
                        message += " " + entity.numberOfDishes + " dishes.";
                        document.getElementById("json-content").innerHTML = message;
                    }
                );
            }
        );
    }
)