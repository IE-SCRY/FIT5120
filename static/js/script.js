$(document).ready(function () {
    var universities = ["La Trobe University, Bundoora", "La Trobe University, Collins Street", "La Trobe University, Franklin Street", "Monash University, Clayton", "Monash University, Caulfield", "Monash University, Berwick", "Monash University, Parkville", "Monash University, Peninsula", "RMIT university, CBD", "RMIT University, Bundoora", "RMIT University, Brunswick", "Swinburne University of Technology, Hawthorn", "Swinburne University of Technology, Croydon", "Swinburne University of Technology, Wantirna", "University of Divinity, Kew", "University of Melbourne, Parkville", "University of Melbourne, Burnley", "University of Melbourne, Werribee"]
    var suburbs = ["Albert Park-Middle Park-West St Kilda",
        "Armadale",
        "Carlton North",
        "Carlton-Parkville",
        "CBD-St Kilda Rd",
        "Collingwood-Abbotsford",
        "Docklands",
        "East Melbourne",
        "East St Kilda",
        "Elwood",
        "Fitzroy",
        "Fitzroy North-Clifton Hill",
        "Flemington-Kensington",
        "North Melbourne-West Melbourne",
        "Port Melbourne",
        "Prahran-Windsor",
        "Richmond-Burnley",
        "South Melbourne",
        "South Yarra",
        "Southbank",
        "St Kilda",
        "Toorak",
        "Balwyn",
        "Blackburn",
        "Box Hill",
        "Bulleen-Templestowe-Doncaster",
        "Burwood-Ashburton",
        "Camberwell-Glen Iris",
        "Canterbury-Surrey Hills-Mont Albert",
        "Chadstone-Oakleigh",
        "Clayton",
        "Doncaster East-Donvale",
        "East Hawthorn",
        "Glen Waverley-Mulgrave",
        "Hawthorn",
        "Kew",
        "Mount Waverley",
        "Nunawading-Mitcham",
        "Vermont-Forest Hill-Burwood East",
        "Aspendale-Chelsea-Carrum",
        "Bentleigh",
        "Brighton",
        "Brighton East",
        "Carnegie",
        "Caulfield",
        "Cheltenham",
        "Elsternwick",
        "Hampton-Beaumaris",
        "Malvern",
        "Malvern East",
        "Mentone-Parkdale-Mordialloc",
        "Murrumbeena-Hughesdale",
        "Altona",
        "Footscray",
        "Keilor East-Avondale Heights",
        "Melton",
        "Newport-Spotswood",
        "St Albans-Deer Park",
        "Sunshine",
        "Sydenham",
        "Werribee-Hoppers Crossing",
        "West Footscray",
        "Williamstown",
        "Yarraville-Seddon",
        "Broadmeadows-Roxburgh Park",
        "Brunswick",
        "Coburg-Pascoe Vale South",
        "Craigieburn",
        "East Brunswick",
        "Essendon",
        "Gladstone Park-Tullamarine",
        "Keilor",
        "Moonee Ponds-Ascot Vale",
        "Oak Park-Glenroy-Fawkner",
        "Pascoe Vale-Coburg North",
        "Sunbury",
        "West Brunswick",
        "Bundoora-Greensborough-Hurstbridge",
        "Eltham-Research-Montmorency",
        "Fairfield-Alphington",
        "Heidelberg-Heidelberg West",
        "Ivanhoe-Ivanhoe East",
        "Mill Park-Epping",
        "Northcote",
        "Preston",
        "Reservoir",
        "Thomastown-Lalor",
        "Thornbury",
        "Whittlesea",
        "Bayswater",
        "Boronia",
        "Croydon-Lilydale",
        "Ferntree Gully",
        "Ringwood",
        "Rowville",
        "Wantirna-Scoresby",
        "Yarra Ranges",
        "Berwick",
        "Cranbourne",
        "Dandenong",
        "Dandenong North-Endeavour Hills",
        "Narre Warren-Hampton Park",
        "Noble Park",
        "Pakenham",
        "Springvale",
        "Dromana-Portsea",
        "Frankston",
        "Hastings-Flinders",
        "Mt Eliza-Mornington-Mt Martha",
        "Seaford-Carrum Downs",
        "Belmont-Grovedale",
        "Corio",
        "Geelong-Newcomb",
        "Herne Hill-Geelong West",
        "Lara",
        "Newtown",
        "North Geelong",
        "Ballarat",
        "Mount Clear-Buninyong",
        "Sebastopol-Delacombe",
        "Wendouree-Alfredton",
        "Bendigo",
        "Flora Hill-Bendigo East",
        "Golden Square-Kangaroo Flat",
        "North Bendigo",
        "Bairnsdale",
        "Benalla",
        "Castlemaine",
        "Echuca",
        "Hamilton",
        "Horsham",
        "Mildura",
        "Moe-Newborough",
        "Morwell",
        "Ocean Grove-Barwon Heads",
        "Portland",
        "Sale-Maffra",
        "Seymour", "Shepparton",
        "Swan Hill",
        "Torquay", "Traralgon", "Wangaratta", "Warragul", "Warrnambool", "Wodonga", "Bundoora", "Huntingdale", "Oakleigh"]
    var postcodes = [
        "3143",
        "3054",
        "3053",
        "3000",
        "3066",
        "3008",
        "3002",
        "3183",
        "3184",
        "3065",
        "3068",
        "3031",
        "3051",
        "3207",
        "3181",
        "3121",
        "3205",
        "3141",
        "3006",
        "3182",
        "3142",
        "3103",
        "3130",
        "3128",
        "3105",
        "3147",
        "3146",
        "3127",
        "3148",
        "3168",
        "3109",
        "3123",
        "3150",
        "3122",
        "3101",
        "3149",
        "3131",
        "3133",
        "3197",
        "3204",
        "3186",
        "3187",
        "3163",
        "3162",
        "3192",
        "3185",
        "3188",
        "3144",
        "3145",
        "3195",
        "3018",
        "3034",
        "3337",
        "3015",
        "3023",
        "3020",
        "3037",
        "3029",
        "3012",
        "3016",
        "3011",
        "3056",
        "3044",
        "3064",
        "3057",
        "3040",
        "3043",
        "3036",
        "3039",
        "3046",
        "3058",
        "3429",
        "3055",
        "3099",
        "3094",
        "3078",
        "3084",
        "3079",
        "3082",
        "3070",
        "3072",
        "3073",
        "3075",
        "3071",
        "3757",
        "3153",
        "3155",
        "3136",
        "3156",
        "3134",
        "3178",
        "3152",
        "3775",
        "3806",
        "3977",
        "3175",
        "3976",
        "3174",
        "3810",
        "3171",
        "3936",
        "3199",
        "3915",
        "3931",
        "3201",
        "3216",
        "3214",
        "3219",
        "3218",
        "3212",
        "3220",
        "3215",
        "3350",
        "3356",
        "3550",
        "3555",
        "3875",
        "3672",
        "3450",
        "3564",
        "3300",
        "3400",
        "3500",
        "3825",
        "3840",
        "3227",
        "3305",
        "3850",
        "3660",
        "3630",
        "3585",
        "3228",
        "3844",
        "3677",
        "3820",
        "3280",
        "3690",
        "3166",
        "3083",
    ]
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50) + "%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'position': 'absolute'
                });
                next_fs.css({ 'left': left, 'opacity': opacity });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function () {
        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1 - now) * 50) + "%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({ 'left': left });
                previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);

            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function (e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        /*close the list of autocompleted values,
                        (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });
        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
                currentFocus++;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 38) { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } else if (e.keyCode == 13) {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) {
                    /*and simulate a click on the "active" item:*/
                    if (x) x[currentFocus].click();
                }
            }
        });
        function addActive(x) {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
        function removeActive(x) {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }
        function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    autocomplete(document.getElementById("PostcodeTextbox"), universities)

    let location_key = 'uni_content';
    $(".form-check-input").on("change", function (event) {
        let input_val = event.target.value

        switch (input_val) {
            case "postcode":
                $(".radio_input").attr("placeholder", "Enter the postcode");
                autocomplete(document.getElementById("PostcodeTextbox"), postcodes)
                location_key = 'post_code_content'
                break

            case "suburb":
                $(".radio_input").attr("placeholder", "Enter the suburb");
                autocomplete(document.getElementById("PostcodeTextbox"), suburbs)
                location_key = 'sub_urb_content'
                break

            case "university":
                $(".radio_input").attr("placeholder", "Enter the university");
                autocomplete(document.getElementById("PostcodeTextbox"), universities)
                location_key = 'uni_content'
                break
        }
    })

    $(".submit").on('click', function () {
        if((($("input:radio.form-check-input:checked")[0].value == "university" || $("input:radio.form-check-input:checked")[0].value == "suburb") && $("#PostcodeTextbox").val() && isNaN($("#PostcodeTextbox").val())) || ($("input:radio.form-check-input:checked")[0].value == "postcode" && $("#PostcodeTextbox").val() && !isNaN($("#PostcodeTextbox").val()))){
            $(".input_display span").css({display: 'none'})
            $.ajax({
                type: "POST",
                // url: 'https://rent-api.herokuapp.com/locate_places',
                url: '/locate_places',
                data: {
                    "number_of_beds": $("#bedrooms").val(),
                    "type_of_property": $("#property_type").val(),
                    [location_key]: $("#PostcodeTextbox").val()
                },
                success: function (data) {
    
                    $('#map').html('<iframe id="serviceFrameSend" src="about:blank" width="1000" height="400">')
                    var doc = document.getElementById('serviceFrameSend').contentWindow.document;
                    doc.open();
                    doc.write(data);
                    doc.close();
    
                }
            });
        }else{
            $(".input_display span").css({display: 'block'})
        }
        
    })

    /**
     * click action for rent calculation
    */
    $(".rent_submit").on('click', function () {
    if($("#rent_value").val() && !isNaN($("#rent_value").val())){
        $.ajax({
            type: "POST",
            // url: 'https://rent-api.herokuapp.com/weekly_rent',
            url: '/weekly_rent',
            data: {
                "weekly_rent_content": $("#rent_value").val()
            },
            success: function (data) {
                $("#rent_val_span").css({display: 'none'})

                $('#rent_info').html('<iframe id="rent_info_frame" src="about:blank" width="1000" height="200">')
                var doc = document.getElementById('rent_info_frame').contentWindow.document;
                doc.open();
                doc.write(data);
                doc.close();

            }
        });


    }else {
        $("#rent_val_span").css({display: 'block'})
    }

})
})