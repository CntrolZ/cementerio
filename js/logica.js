// Preload mientras dura la carga de la página
window.onload = function () {
    onkeydown = e => {
        let tecla = e.which || e.keyCode;

        // Evaluar si se ha presionado la tecla Tab:
        if (tecla === 9) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    $(".preload").fadeOut();
}

// Funcion para personalizar los elementos que muestran la informacion de interés
function hotspot(hotSpotDiv, args) {

    var detector = new MobileDetect(window.navigator.userAgent);
    hotSpotDiv.classList.add('custom-tooltip');
    hotSpotDiv.setAttribute("id", args.id);

    var div = document.createElement('div');
    //div.setAttribute("id", "contenedorInformacionPc");

    var tituloPc = document.createElement('h3');
    var contenidoPc = document.createElement('p');

    div.appendChild(tituloPc)
    div.appendChild(contenidoPc);

    document.getElementById(args.id).appendChild(div);
    //hotSpotDiv.appendChild(div);

    var puntoCaliente = $("#" + args.id);
    puntoCaliente.mouseover(function () {
        if (detector.phone()) {
            $(".tituloInformacion span").text(args.titulo);
            document.getElementById('contenido').innerHTML = args.contenido;
            $(".contendor-modal").css("visibility", "visible");
        } else {
            tituloPc.innerHTML = args.titulo;
            contenidoPc.innerHTML = args.contenido;
            $(div).css("visibility", "visible");
            div.style.marginLeft = "26px";
            div.style.marginTop = -(div.scrollHeight - hotSpotDiv.offsetWidth) / 2 + 'px';
        }
    }).mouseout(function () {
        $(div).css("visibility", "hidden");
    });
}

$("#contenedorError").hide();
//$("#panorama").fadeOut();
$(".side-bar").hide();

// Funcíon jquery que se ejecuta después de haber cargado todo el contenido
$(document).ready(function () {
    var enlaces = $("#menu li span");
    var escena_actual;
    var enlace_antiguo = "";
    var array = [];
    var elementoClick = "";
    const menu = $("#side-bar");
    var menuActivo = false;
    var cargaFallida = false;
    var contadorErrores = 0;

    // Color por defecto para el primer icono del menu lateral derecho
    $("#i-0").css("color", "rgb(40, 180, 99)");

    // Oculta la pagina de inicio y muestra el recorrido virtual
    $("#botonVisitaVirtual").click(function () {
        $(".contenedor-imagnes").fadeOut(1000);
        //$("#panorama").fadeIn();
        $(".side-bar").show();
    });

    // Capturamos el evento click en el caso de tener controles personalizados
    // Función de acercar mediante zoom
    $("#zoom-in").click(function () {
        viewer.setHfov(viewer.getHfov() - 20);
    });

    // Función de alejar mediante zoom
    $("#zoom-out").click(function () {
        viewer.setHfov(viewer.getHfov() + 20);
    });

    // Función de pantalla completa
    $("#fullscreen").click(function () {
        if ($("#fullscreen").hasClass("fas fa-expand")) {
            $(this).removeClass("fas fa-expand");
            $(this).addClass("fas fa-compress-arrows-alt");
        } else {
            $(this).removeClass("fas fa-compress-arrows-alt");
            $(this).addClass("fas fa-expand");
        }
        viewer.toggleFullscreen();
    });

    // Oculta el modal de información que se muestra en celulares
    $("#cierraInformacion").click(function () {
        $(".contendor-modal").css("visibility", "hidden");
    });

    // Evento click que permite mostrar el menu lateral
    $("#btnMenu").click(function () {

        // Si el menu esta oculto
        if (!menuActivo) {
            /*
            if (menu.hasClass("ocultar-menu-lateral-movil")) {
                menu.removeClass("ocultar-menu-lateral-movil");
            }*/
            menu.addClass("mostrar-menu-lateral").removeClass("ocultar-menu-lateral");
            menuActivo = true;
            $("#iconoMenu").removeClass("bi bi-list").addClass("bi bi-x-circle");
            $("#iconoMenu").css("color", "#ff0000");

            // Si el menu está visible
        } else {
            menu.addClass("ocultar-menu-lateral").removeClass("mostrar-menu-lateral");
            menuActivo = false;
            $("#iconoMenu").removeClass("bi bi-x-circle").addClass("bi bi-list");
            $("#iconoMenu").css("color", "#fff")
        }
    });

    // Asignamos el evento click a cada una de las opciones del menu lateral derecho
    for (var i = 0; i < enlaces.length; i++) {
        $(enlaces[i]).click(function () {
            array[1] = viewer.getScene();
            elementoClick = $(this).attr("id");
            let detector = new MobileDetect(window.navigator.userAgent);

            if (array[0] != array[1] && array[1] != elementoClick) {
                viewer.loadScene($(this).attr("id"));
                escena_actual = viewer.getScene();
                actualizaIconoSeleccionado(elementoClick);
                actualizaElementoSeleccionado(elementoClick);

                if (detector.phone()) {
                    menu.hide();
                    document.getElementById("btnMenu").disabled = true;
                    ocultaMenu();
                }

            } else if (array[1] != elementoClick) {
                viewer.loadScene($(this).attr("id"));
                escena_actual = viewer.getScene();
                actualizaIconoSeleccionado(elementoClick);
                actualizaElementoSeleccionado(elementoClick);

                if (detector.phone()) {
                    menu.hide();
                    document.getElementById("btnMenu").disabled = true;
                    ocultaMenu();
                }
            }
        });
    }

    // Oculta el menu un caso de estar en smartphones
    function ocultaMenu() {
        $("#iconoMenu").css("color", "#fff");
        $("#iconoMenu").removeClass("bi bi-x-circle").addClass("bi bi-list");
        viewer.on('load', function () {
            menu.removeClass("mostrar-menu-lateral").addClass("ocultar-menu-lateral");
            menuActivo = false;
            $("#iconoMenu").css("color", "#fff");
            menu.show();
            document.getElementById("btnMenu").disabled = false;
        });
    }

    // Actualiza el item activo del menu lateral derecho
    function actualizaElementoSeleccionado(elementoActivo) {
        for (var i = 0; i < enlaces.length; i++) {
            if ($(enlaces[i]).hasClass("enlace-activo")) {
                $(enlaces[i]).removeClass("enlace-activo");
                break;
            }
        }

        $("#" + elementoActivo).addClass("enlace-activo").css("cursor", "default");
    }

    // Actualiza el color del icono actual
    function actualizaIconoSeleccionado(elementoActivo) {
        for (let i = 0; i < enlaces.length; i++) {
            if ($(enlaces[i]).hasClass("enlace-activo")) {
                $("#i-" + i).css("color", "#fff");
            }

            if ($(enlaces[i]).attr("id") == elementoActivo) {
                $("#i-" + i).css("color", "rgb(40, 180, 99)");
            }
        }
    }

    for (let i = 0; i < enlaces.length; i++) {
        $(enlaces[i]).hover(
            // Funcion cuando entra el mouse
            function () {
                if (!($(enlaces[i]).hasClass("enlace-activo"))) {
                    $("#i-" + i).css("color", "rgb(40, 180, 99)");
                }
            },
            // Funcion cuando sale el mouse
            function () {
                if (!($(enlaces[i]).hasClass("enlace-activo"))) {
                    $("#i-" + i).css("color", "#fff");
                }
            }
        );
    }

    // Capturamos el evento scenechange para determinar en que escena nos encontramos actualmente
    viewer.on('scenechange', function () {
        actualizaIconoSeleccionado(viewer.getScene());
        actualizaElementoSeleccionado(viewer.getScene());
        let detector = new MobileDetect(window.navigator.userAgent);

        if (detector.phone()) {
            document.getElementById("btnMenu").disabled = true;
            $("#iconoMenu").css("color", "#f00");
        }
    });

    // Capturamos el evento load para realizar varias opciones
    viewer.on('load', function () {
        escena_actual = viewer.getScene();
        if (enlace_antiguo == "") {
            enlace_antiguo = escena_actual;
        }

        // Guarda los nombres de la escena antigua y la escena actual
        if (array.length == 0) {
            array[0] = enlace_antiguo;
            array[1] = escena_actual;
        } else {
            array[0] = array[1];
            array[1] = escena_actual;
        }

        // Obtiene las configuraciones de la escena
        var configuracionEscena = viewer.getConfig();
        var tituloEscena = configuracionEscena.scenes[escena_actual].title;

        // Cambia el texto del titulo de la escena actual
        $("#tituloEscena").text(tituloEscena);

        let detector = new MobileDetect(window.navigator.userAgent);

        // Desabilita el botónn del menú en celulares inteligentes
        if (detector.phone()) {
            document.getElementById("btnMenu").disabled = false;
            $("#iconoMenu").css("color", "#fff");
        }
    });

    // Evento que se dispara cuando ocurre un error
    viewer.on('error', function (e) {
        cargaFallida = true;
        contadorErrores++;

        if (cargaFallida && contadorErrores == 1) {
            var escenaFallida = e;
            var indiceInical = escenaFallida.indexOf("panoramicas");
            var indiceFinal = escenaFallida.indexOf("/cubo");
            var subCadena = escenaFallida.substring(indiceInical, indiceFinal);

            indiceInical = subCadena.indexOf("/");
            indiceFinal = subCadena.length;

            subCadena = subCadena.substring((indiceInical + 1), indiceFinal);
            $(".reintentar").attr("id", subCadena);
            $("#contenedorError").show();
        }
    });

    // Evento click para reintentar cargar la escena
    $(".reintentar").click(function () {
        cargaFallida = false;
        contadorErrores = 0;
        $("#contenedorError").hide();
        viewer.loadScene($(this).attr("id"));
    });

    // Evento click para recargar toda la página
    $("#inicio").click(function () {
        location.reload();
    });
});