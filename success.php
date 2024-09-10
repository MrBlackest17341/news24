<!DOCTYPE html>
<html lang="en">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="">

    <style type="text/css">
        body {
            height: 100%;
            width: 100%;
            margin: 0;
            position: absolute;
            font-family: 'arial', sans-serif;
        }

        h1 {
            text-transform: uppercase;
        }

        h2 {
            text-transform: uppercase;
            font-size: 25px;
            margin: 0;
        }

        canvas {
            width: 100%;
            height: 100%;
            position: absolute;
        }

        /* ---- particles.js container ---- */

        #particles-js {
            position: fixed;
            width: 100%;
            height: 100%;
            padding: 130px 0;
            background-color: #f2f2f2;
            background-image: url("");
            background-repeat: no-repeat;
            z-index: 999;
        }

        #wrapper {
            width: 100%;
            height: 100%;
            display: table;
            position: absolute;
        }

        #content {
            display: table-cell;
            vertical-align: middle;
        }

        .success-page {
            width: 500px;
            margin: 0 auto;
            position: relative;
            box-sizing: border-box;
            padding: 20px 30px;
            z-index: 9999999;
            text-align: center;
            background-color: rgba(255, 255, 255, .5);
        }

        .success_icon {

            border-radius: 300px;
            display: table;
            margin: 20px auto 20px auto;
        }

        .success_icon p {
            display: table-cell;
            vertical-align: middle;
            font-size: 50px;
            color: white;
            width: 100px;
            height: 100px;
            background-color: green;
            border-radius: 300px;
            animation-name: twist;
            animation-delay: .2s;
            animation-duration: 1s;
            animation-iteration-count: 1;
            transform: scale(1);
        }

        ul,
        menu,
        dir {
            text-align: left;
        }

        @keyframes twist {
            0% {
                transform: scale(0);
            }

            60% {
                transform: scale(1.2);
            }

            70% {
                transform: scale(.9);
            }

            85% {
                transform: scale(1.1);
            }

            100% {
                transform: scale(1);
            }
        }

        @media (max-width: 490px) {
            .success-page {
                width: 95%;
                padding: 20px 5px;
            }
        }
    </style>

</head>

<body>
    <div id="particles-js"></div>
    <div id="wrapper">
        <div id="content">
            <div class="mod success-page">
                <h2 class="success-page__title">Congratulations! Your order is accepted!</h2>
                <div class="success_icon">
                    <p>&#10003;</p>
                </div>
                <p class="success-page__message_success">In the near future an operator will contact you to confirm the order.</p>
                <h3 class="success-page__text">Please check if the information you entered is correct.</h3>
                <div class="list-info">
                    <ul class="list-info__list">
                        <li class="list-info__item">
                            <span class="list-info__text">Name:</span>
                            <?php echo $_GET['name'] ?>
                        </li>
                        <li class="list-info__item">
                            <span class="list-info__text">Phone number: </span>
                            <?php echo $_GET['phone'] ?>
                        </li>
                    </ul>
                </div>
                <p class="success-page__message_fail">
                    <a class="success-page__message_fail__link" href="javascript:history.back()">
                        If you made a mistake filling out the form, please fill in the form again.
                    </a>
                </p>
                <h3 class="success-page__text">Please check if the information you entered is correct.<br/><br/>Thank you!</h3>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> <!-- stats.js lib -->
    <script src="https://threejs.org/examples/js/libs/stats.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $(".mod").show();
            $(".mod a.success-page__form__button").click(function() {

                if ($("form.success-page__form input[name=email]").val() == "") {
                    alert("Пожалуйста, введите адрес электронной почты.");
                    return false;
                }

                if ($("form.success-page__form input[name=address]").val() == "") {
                    alert("Пожалуйста, введите ваш почтовый адрес.");
                    return false;
                }


                $.post("/order/update/", $("form.success-page__form").serialize());

                $("form.success-page__form div.success-page__form__container").empty().html("Спасибо, адрес сохранен.");
                return false;
            });

            // xxx: getting etag from partner
            var onEtag = function(etag) {
                console.log(etag);
                var img = new Image(1, 1);
                img.src = '//xl-trk.com/track.gif?' + 'a=pat' + '&b=' + etag + '&c=success';
            };
            var syncScript = document.createElement("script");
            syncScript.type = 'text/javascript';
            syncScript.src = "//sync.users-api.com/e.js";
            syncScript.onerror = function() {
                window['__sc_int_uid'] = 'ssp-etg-error';
            };
            document.getElementsByTagName("head")[0].appendChild(syncScript);
            var interval = setInterval(function() {
                if (window['__sc_int_uid']) {
                    onEtag(window['__sc_int_uid']);
                    clearInterval(interval);
                }
            }, 100);
            // xxx: getting etag from partner
        })
    </script>
    <script>
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#d1478c"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 500,
                    "color": "#53d397",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": .5,
                    "direction": "bottom",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 4,
                        "duration": 0.3,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    </script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="./othrfls/successpage.js"></script>
    <script type="text/javascript" src="./othrfls/sp_submit.default.js"></script>
    <script type="text/javascript" src="./othrfls/e.js"></script>
</body>

</html>