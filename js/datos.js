// carpeta en donde se encuentran cada una de las caras de las imágenes 360°
var rutaBase = "images/panoramicas-360/";

var objetoConEscenas = {
    // Escena por defecto al cargar la página
    "default": {
        "firstScene": "0-entrada",
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        //"hotSpotDebug": true,
        "autoRotate": 2,
        "autoRotateInactivityDelay": 30000,
    },
    // Escenas de la visita virtual
    "scenes": {
        "0-entrada": {
            "title": "Entrada",
            "hfov": 120,
            "pitch": 8.887789466548064,
            "yaw": 53.036530500036434,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "0-entrada/cubo/f.jpg",
                rutaBase + "0-entrada/cubo/r.jpg",
                rutaBase + "0-entrada/cubo/b.jpg",
                rutaBase + "0-entrada/cubo/l.jpg",
                rutaBase + "0-entrada/cubo/u.jpg",
                rutaBase + "0-entrada/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.377769046359592,
                    "yaw": 31.50776344303576,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "1-avenida-principal-incasica"
                },
                {
                    "pitch": 8.512987330218436,
                    "yaw": 49.00780473101811,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'Cementerio Municipal "José María Azael Franco Guerrero"',
                        "contenido": 'Esta localizado en la parte noreste de la ciudad, frente a la avenida Cotopaxi y Bulevar del Cementerio. Por su singular belleza artística realizada en ciprés, constituye un principal atractivo turístico de la ciudad de Tulcán, de la Provincia del Carchi y del país, reconocido a nivel nacional e internacional, por ser el único en le mundo en este género. <br>Patrimonio Cultural del Estado y sitio natural de interés turísico. <br> Un orgullo para todos...',
                        "id": "figura-01"
                    }
                }
            ]
        },
        "1-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -3.972339930622474,
            "yaw": 181.80536908941502,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "1-avenida-principal-incasica/cubo/f.jpg", // cara frontal 
                rutaBase + "1-avenida-principal-incasica/cubo/r.jpg", // cara derecha
                rutaBase + "1-avenida-principal-incasica/cubo/b.jpg", // cara posterior
                rutaBase + "1-avenida-principal-incasica/cubo/l.jpg", // cara izquierda
                rutaBase + "1-avenida-principal-incasica/cubo/u.jpg", // cara de arriba
                rutaBase + "1-avenida-principal-incasica/cubo/d.jpg"  // cara de abajo 
            ],
            "hotSpots": [
                // Hotspots tipo scene
                {
                    "pitch": -4.9650415835753785,
                    "yaw": 1.424806077155207,
                    "type": "scene",
                    "text": "Entrada",
                    "sceneId": "0-entrada"
                },
                {
                    "pitch": -8.572361292927162,
                    "yaw": 182.99267740964507,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "2-avenida-principal-incasica"
                },
                {
                    "pitch": 0.6353689493630084,
                    "yaw": 277.3649351815592,
                    "type": "scene",
                    "text": "Oficina de información turística",
                    "sceneId": "18-informacion-turistica"
                },
                {
                    "pitch": 2.392479089998461,
                    "yaw": 213.35799246683564,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "19-parque-derecho"
                },
                {
                    "pitch": -0.7890590656503064,
                    "yaw": 111.10661051881372,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "80-parque-izquierdo"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 8.099768453142472,
                    "yaw": 256.6311641554075,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CORTA HISTORIA DEL CEMENTERIO',
                        "contenido": 'El 28 de mayo de 1984, el Instituto Nacional de Patrimonio Cultural declara a las “Esculturas en Verde del Cementerio de Tulcán” como Bien Perteneciente al Patrimonio Cultural del Estado. <br>El 23 de agosto del mismo año, la Dirección Nacional de Turismo declara a sus jardines interiores como Sitio Natural de Interés Turístico Nacional. <br> Mientras que, en el 2005 por Resolución del Consejo Municipal, se aprueba el nombre de cementerio “JOSÉ MARÍA AZAEL FRANCO GUERRERO”.',
                        "id": "historia-c"
                    }
                },
                {
                    "pitch": 6.299838566470486,
                    "yaw": 229.078141474323,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'JOSÉ MARÍA AZAEL FRANCO GUERRERO',
                        "contenido": 'Escultor en verde. <br>Es el autor de la maravillosa obra de arte arquitectónico en ciprés. Nació en El Ángel, Provincia del Carchi, el 5 de mayo de 1899. <br> Su vocación se enrumba por el cultivo e investigación en búsqueda de la belleza artística en las plantas, perfeccionando su técnica bajo la orientación científica del Sr. Félix Tamayo Galárraga, Ingeniero Agrónomo y Astrónomo especializado en Estados Unidos.',
                        "id": "jmafg"
                    }
                }
            ]
        },
        "2-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": 0.5920092151568035,
            "yaw": 98.97451230056981,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "2-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "2-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "2-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "2-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "2-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "2-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -11.282724439063832,
                    "yaw": -0.7090821219034623,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "1-avenida-principal-incasica"
                },
                {
                    "pitch": -3.842074588300732,
                    "yaw": 179.58149466443598,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "3-avenida-principal-incasica"
                },
                {
                    "pitch": -0.4178332451624919,
                    "yaw": -54.950802755058795,
                    "type": "scene",
                    "text": "Oficina de información turística",
                    "sceneId": "18-informacion-turistica"
                },
                {
                    "pitch": -9.807992310722103,
                    "yaw": 250.5745107746909,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "19-parque-derecho"
                },
                {
                    "pitch": -4.7413241181765295,
                    "yaw": 24.04117286372086,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "80-parque-izquierdo"
                },

                // Hotspots tipo info 
                // lado derecho
                {
                    "pitch": 11.935092769492757,
                    "yaw": -130.60659705164025,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CHILGUACÁN O PAPAYA DE TIERRA FRÍA',
                        "contenido": 'Representa a la fruta conocida con el nombre de chamburo, o papaya de tierra fría. Primera Escultura en Verde de la Avenida Principal del Cementerio Municipal de la ciudad de Tulcán, José María Azael Franco Guerrero, conformada por bordes ondulados artísticamente realizados en serie.',
                        "id": "pagina-76"
                    }
                },

                // lado izquierdo
                {
                    "pitch": 12.664015787306369,
                    "yaw": 131.1255211894779,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ESCULTURA SIMILAR AL ARTE DE SAN AGUSTÍN',
                        "contenido": 'Estatua esculpida en verde de frontal ovalado; ojos redondeados; orejas en los lados laterales, adornados por aretes; en la parte superior del frontal va borde en alto relieve de forma de herradura, en la parte inferior se encuentra una espiral que hace base en el frontal; la escultura se encuentra adornada por una semiesfera en la parte superior.',
                        "id": "pagina-44"
                    }
                },
                {
                    "pitch": 10.505344002841515,
                    "yaw": 116.14135767378241,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'INDÍGENA DEL TAHUANTINSUYO (Quillasinga)',
                        "contenido": 'Representa al Indígena Quillacinga que habitó en el Ecuador; frontal de ojos con bordes circulares; labio redondeado; la parte posterior de la estatua le adorna franjas rectangulares onduladas; la figura artística nos demuestra el descanso de nuestros antepasados después de una larga tarea diaria de lucha entre comunidades.',
                        "id": "pagina-42"
                    }
                },
                {
                    "pitch": 15.42018363480705,
                    "yaw": 90.97451230056981,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MONUMENTO A LA IRA (2)',
                        "contenido": 'La escultura tiene la cara en forma de ovoide aproximadamente alargada en la parte inferior, de ojos triangulares pronunciados hacia adentro; labios redondeados fingiendo rebeldía. En sus manos porta un collar del que pende un grabado en alto relieve en forma de calavera, que simboliza la bravura de los antepasados; sobre el frontal va una semiesfera.',
                        "id": "pagina-38"
                    }
                },
                {
                    "pitch": 13.553514933635174,
                    "yaw": 62.44117693273127,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MONUMENTO A LA IRA (1)',
                        "contenido": 'La Escultura Monolítica tiene en la parte posterior del frontal un grabado en forma prismática dentro de un cuadrado conformado por bordes rectangulares (medallón). Por la forma de sus labios a manera de expresión en rebeldía que tuvieron nuestros antepasados, representando a los caciques de Colombia. Los laterales del frontal son orejones adornados con aretes.',
                        "id": "pagina-36"
                    }
                }
            ]
        },
        "3-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -2.607987733085384,
            "yaw": 176.37451382644872,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "3-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "3-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "3-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "3-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "3-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "3-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [

                {
                    "pitch": -8.215162656902727,
                    "yaw": 354.91721697998435,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "2-avenida-principal-incasica"
                },
                {
                    "pitch": -2.9862852750268614,
                    "yaw": 176.67921492362007,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "4-avenida-principal-incasica"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 12.325341531237532,
                    "yaw": 308.7405659033364,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ÍDOLO QUE APLICARON LOS INCAS PARA RENDIR CULTO A DIOS',
                        "contenido": 'Ídolo que aplicaron los Incas para rendir culto a Dios en forma Pirámide, de dos frentes similares le adorna una semiesfera de base circular y borde invertido; el frontal está compuesto de un alto relieve artísticamente realizado en forma de medialuna; del gravado central de forma cónica, pende un borde similar a un collar en "U" que entrelaza a los anillos de sus extremos.',
                        "id": "pagina-80"
                    }
                },
                {
                    "pitch": 16.592004128893784,
                    "yaw": 269.80722646648746,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'COFRE INCÁSICO DE ESTILO PANZALÉO',
                        "contenido": 'De cuerpo aproximadamente cilíndrico, frontal adornado con cavado rectangular; borde circular en la parte posterior de la escultura; tapa de base anillada resaltada por un asa semiesférica.',
                        "id": "pagina-82"
                    }
                },
                {
                    "pitch": 20.592004128893784,
                    "yaw": 237.5405638688312,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'COLUMNA CÓNICA DE ESTILO PANZALÉO',
                        "contenido": 'Columna cónica de estilo panzaleo compuesta, después de la base por cuatro anillos separa dos en serie de diferente diámetro; la parte superior adornada por una semiesfera; la base de la columna es circular de labio redondeado invertido, va adornada artísticamente por una franja anillada.',
                        "id": "pagina-84"
                    }
                },
                {
                    "pitch": 10.992008197904202,
                    "yaw": 212.47389313315412,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MONO DE LA CULTURA CHORRERA ',
                        "contenido": 'La escultura representa al Mono de la Cultura Chorrera, pertenece a los primeros indígenas de la costa ecuatoriana, tiene: cabeza semicircular, adornada por orejones laterales; collar que pende tiene un anillo con bola resaltada en el centro, indudable relación del desarrollo de la civilización andina.',
                        "id": "pagina-86"
                    }
                },

                // lado izquierdo
                {
                    "pitch": 15.737352973006084,
                    "yaw": 130.23435202897213,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ESCULTURA SIMILAR AL ARTE DE SAN AGUSTÍN (Colombia)',
                        "contenido": 'Representa la costumbre que tuvieron nuestros antepasados; en el frontal resalta los ojos de bordes cuadrados, en los laterales de la nariz rectangular, labios redondeados, la mejilla y la quijada de la figura artísticamente da una expresión de alegría en la parte superior de la cara lleva como adorno un cintillo del que penden bordes rectangulares esculpidos en forma ondulada.',
                        "id": "pagina-56"
                    }
                },
                {
                    "pitch": 8.823708564806633,
                    "yaw": 115.07755990656791,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MONOLÍTICA INCÁSICA',
                        "contenido": 'Escultura en verde monolítica artísticamente realizada de frontal conformado por: nariz cónica; ojos circulares; orejones laterales ovalados; bordes que forman un cavado rectangular que penden a manera de aretes; frontal con borde triangular en el centro; en la parte posterior de la obra de arte lleva cuatro bordes ondulados en serie de diferente tamaño.',
                        "id": "pagina-54"
                    }
                },
                {
                    "pitch": 14.407788805311895,
                    "yaw": 95.8908946366291,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ARTE DE CIVILIZACIÓN ANDINA "SAN AGUSTÍN"',
                        "contenido": 'Esculpida artísticamente en ciprés de cara frontal ovalada; ojos de bordes horizontales; adornada por orejones laterales; labios redondeados sonrientes dando imagen de alegría; en la parte superior del frontal va una palma con grabados en alto relieve angulares sobre un prisma; en las manos lleva un collar de la civilización andina, del que pende una calavera.',
                        "id": "pagina-52"
                    }
                },
                {
                    "pitch": 16.80095156036442,
                    "yaw": 69.56594203321436,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MONOLÍTICA SIMILAR AL ARTE DE SAN AGUSTÍN (Colombia)',
                        "contenido": 'Realizada artísticamente, está conformada por un frontal ovalado con ojos de bordes horizontales; nariz triangular; labios redondeados; en la parte posterior lleva orejones verticales; cinco franjas abanicadas; en la parte superior de la escultura lleva un borde en forma de medialuna.',
                        "id": "pagina-50"
                    }
                },
                {
                    "pitch": 14.93955766814663,
                    "yaw": 47.22960078396369,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": '"LA FAMILIA", CONFORMADA POR EL HOMBRE (posterior) Y LA MUJER (inferior)',
                        "contenido": 'Representa a la Estatua Monolítica de San Agustín – Colombia, tiene dos caras en forma de ovoide representando la "LA FAMILIA" de nuestros antepasados conformada por el hombre y la mujer, armónicamente ubicadas en el centro de bordes en forma de herradura; las caras de la escultura tienen ojos horizontales; labios redondeados.',
                        "id": "pagina-48"
                    }
                },
                {
                    "pitch": 5.366835642632854,
                    "yaw": 25.956898696530597,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CACIQUE QUILLASINGA',
                        "contenido": 'Monolito de ciprés, labio redondeado; ojos horizontales alargados; nariz aproximadamente cónica; pómulos pronunciados; Una sola oreja derecha, ya que, históricamente se conoce que la otra fue mutilada como castigo que realizaban en la época de los antiguos aborígenes, al haber perdido la batalla por dominios ancestrales.',
                        "id": "pagina-46"
                    }
                }
            ]
        },
        "4-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": 5.532332562128238,
            "yaw": 270.05621728480355,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "4-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "4-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "4-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "4-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "4-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "4-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [

                {
                    "pitch": -5.064960960172144,
                    "yaw": 354.8681716992415,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "3-avenida-principal-incasica"
                },
                {
                    "pitch": -1.7319628699730512,
                    "yaw": 175.98535545613905,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "5-avenida-principal-incasica"
                },
                {
                    "pitch": -1.0437146562755748,
                    "yaw": 276.7223310168033,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "20-parque-derecho"
                },
                {
                    "pitch": 1.5275317447399797,
                    "yaw": 257.6958693556538,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "26-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -1.460766126743338,
                    "yaw": 81.28907441459636,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "85-tunel"
                },

                // Hotspots tipo info 
                // lado derecho
                {
                    "pitch": -0.595403417869317,
                    "yaw": 324.85473144209203,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ÍDOLO "CABEZA DE ELEFANTE"',
                        "contenido": 'Escultura que representa al ídolo que aplicaron los Incas para adorar a Dios. Misma, que descansa en una base similar a siete piedras redondas, de trompa ondulada y orejas laterales ovoideas.',
                        "id": "pagina-88"
                    }
                },
                {
                    "pitch": 0.20459454762547458,
                    "yaw": 317.92138183271703,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'VASO INCÁSICO',
                        "contenido": 'Decorado con tres anillos separados por cuello corto cilíndrico, cuerpo de silueta compuesta; anillo de la parte inferior de cincuenta centímetros de ancho adornado por grabados de forma triangular invertidos y en serie; anillo de la parte media de treinta centímetros de ancho artísticamente adornado por cenefa de grabados con bordes en forma de "U".',
                        "id": "pagina-90"
                    }
                },
                {
                    "pitch": 4.737950260516099,
                    "yaw": 292.4244992386577,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PIRÁMIDE INCÁSICA DE ESTILO PANZALEO',
                        "contenido": 'De forma cónica, con cuatro bordes laterales entrelazados por un aplique en la parte superior semiesférico con cuatro terminales alargados; escultura con cuatro cavados rectangulares separando los bordes de la curva elíptica.',
                        "id": "pagina-92"
                    }
                },
                {
                    "pitch": 7.137933984474433,
                    "yaw": 231.7880505338889,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'AVENIDA DE ESTILO IMPERIO EGIPCIO',
                        "contenido": 'Representa la tumba o "AMULETO DEL CACIQUE DE LA CIUDA DE TERRACOTA QUE DOMINÓ EGIPTO". Arco de medio punto, adornado artísticamente en la parte superior con un medallón de seis puntas y palmetas laterales de estilo egipcio; a la derecha de la portada inferior del arco se encuentra la "ESFINGE PRIMERA MARAVILLA DEL MUNDO".',
                        "id": "pagina-94"
                    }
                },
                {
                    "pitch": 7.137933984474433,
                    "yaw": 216.05473347659725,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PIRÁMIDE TRUNCADA',
                        "contenido": 'De lados trapezoidales artísticamente realizada, con cavados rectangulares. La escultura en verde lleva en la parte posterior una semiesfera; base de la pirámide cuadrada, adornada por franjas rectangulares.',
                        "id": "pagina-96"
                    }
                },
                {
                    "pitch": 6.604608789161933,
                    "yaw": 201.13278911317985,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'HACHA INCÁSICA',
                        "contenido": 'Escultura en verde, que tiene en la parte superior cuerpo semicircular, con grabados en la parte lateral en forma de medialuna, adornados por borde semiesférico en el centro; el mango de la obra escultórica está adornado artísticamente por dos bordes en forma de "U" invertidos y en serie determinando una hermosa cenefa.',
                        "id": "pagina-98"
                    }
                },

                // lado izquierdo
                {
                    "pitch": 2.7731015061751885,
                    "yaw": 26.487848882893903,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ANTROPOMORFA (2) PRECOLOMBINA SIMILAR AL ARTE DE SAN AGUSTÍN (Colombia)',
                        "contenido": 'La cara de la escultura tiene los ojos horizontales que le resaltan sus cejas; labios redondeados con hendiduras en la parte superior, el frontal lleva un cintillo con adornos triangulares en serie, sobre el cintillo va un borde anillado y sobre él va un segundo anillo que termina en una semiesfera.',
                        "id": "pagina-60"
                    }
                },
                {
                    "pitch": 2.2397559658106054,
                    "yaw": 20.08786515893557,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ANTROPOMORFA (1) SIMILAR AL ARTE DE SAN AGUSTÍN (Colombia)',
                        "contenido": 'La escultura en verde tiene en el frontal ojos de bordes horizontales resaltados con una ceja en forma de medialuna; nariz cónica; labios de bordes redondeados; mejillas sobresalidas triangulares; laterales de borde ondulados verticales; en la parte inferior manos entrelazadas, en la parte posterior del frontal tiene una cenefa rectangular.',
                        "id": "pagina-58"
                    }
                }
            ]
        },
        "5-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -1.1084547037715602,
            "yaw": 269.0141845927982,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "5-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "5-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "5-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "5-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "5-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "5-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.869927835157797,
                    "yaw": 357.51788941393266,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "4-avenida-principal-incasica"
                },
                {
                    "pitch": -3.7583109734408664,
                    "yaw": 177.8798332135351,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "6-avenida-principal-incasica"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 6.0066734536628665,
                    "yaw": 320.0323673891398,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'JUEGO DE OLLAS SIMILAR A LAS DE LA ÉPOCA PRECOLOMBINA',
                        "contenido": 'Conformado por una vasija de cuerpo cilíndrico adornada con orejones en serie, labio redondeado y anillo en la parte superior, olla de labio redondeado, borde invertido con grabados angulares, cuerpo cilíndrico con grabados triangulares invertidos; cazuela con orejones en serie que adornan el borde circular.',
                        "id": "pagina-100"
                    }
                },
                {
                    "pitch": 12.406677522673283,
                    "yaw": 307.76568444643146,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'JUEGO DE UTENSILIOS DE LA ÉPOCA PRECOLOMBINA',
                        "contenido": 'Está conformada por una vasija circular con cavado rectangular adornado por un borde semiesférico, de labio invertido; cazuelas con cuerpo de orejones invertidos en serie.',
                        "id": "pagina-102"
                    }
                },
                {
                    "pitch": 15.073344189339949,
                    "yaw": 284.0323470440877,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PIRÁMIDE DE ESTILO INCÁSICO',
                        "contenido": 'De caras laterales trapezoidales con grabados en alto relieve de forma cónica en el centro, con cavados laterales diagonales; la parte superior de la escultura tiene forma prismática de lados triangulares y base cuadrada; la figura artísticamente realizada tiene una base total aproximadamente cuadrada.',
                        "id": "pagina-104"
                    }
                },
                {
                    "pitch": 9.473348258350367,
                    "yaw": 251.2323389060669,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MESA INCÁSICA ADORNADA POR UN COFRE',
                        "contenido": 'Está compuesta por una silueta artísticamente realizada; pedestal tronco cónico; base ovalada, con adornos circulares en serie; cofre de cuerpo esférico de bordes invertidos; tapa con asa anillada; base de la escultura ovoidal.',
                        "id": "pagina-106"
                    }
                },
                {
                    "pitch": 11.115275670457946,
                    "yaw": 229.36568037742109,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ÍDOLO QUE APLICARON PARA RENDIR CULTO A DIOS',
                        "contenido": 'Constituido por una base piramidal de lados cuadrados con borde en el centro de forma romboidal separados por una cavidad angular; en la parte superior se observa un borde anular, con adorno artísticamente realizado de forma cónica. Base del ídolo cuadrada.',
                        "id": "pagina-108"
                    }
                },
                {
                    "pitch": 5.781942337124613,
                    "yaw": 212.8323348370565,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'COFRE',
                        "contenido": 'De base pirámide truncada de lados laterales rectangulares, adornado en el centro por un borde rectangular; en la parte posterior va una ollita de cuerpo semiesférico, de base tronco cónico; labio redondeado con tapa asa anillada; base de la escultura cuadrada.',
                        "id": "pagina-110"
                    }
                },

                // lado izquierdo
                {
                    "pitch": 10.190188451496386,
                    "yaw": 145.6449499148638,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PIRÁMIDE COMPUESTA',
                        "contenido": 'De base pirámide truncada de lados rectangulares; cavado rectangular horizontal en cada lado; pirámide truncada de lados trapezoidales oblicuos con ca vado rectangular vertical en el centro; bordes rectangulares en parte posterior.',
                        "id": "pagina-66"
                    }
                },
                {
                    "pitch": 2.190188451496386,
                    "yaw": 125.37830766225963,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MASCARONES',
                        "contenido": 'Representan al Cuzco donde nació la cultura incásica. El mascaron de la izquierda por la conformación de los ojos horizontalmente y llevar en la parte superior del frontal un solo anillo adornado por tres bordes hiperbólicos representa "La Alegría". El mascarón de la derecha de ojos inclinados, en forma de elipse y tener en la parte superior del frontal dos anillos adornados por tres bordes hiperbólicos representa "La Tristeza".',
                        "id": "pagina-64"
                    }
                },
                {
                    "pitch": 3.5235217848297182,
                    "yaw": 31.434545177091024,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'VENUS DE VALDIVIA',
                        "contenido": 'Similar a la mujer con peinado alto o bucle cónico que utilizaban nuestras indígenas de la costa ecuatoriana (Provincia del Guayas); la base rectangular de la escultura en verde, pedestal corto o una franja circular conformada por tres anillos de borde invertido, sin grabados.',
                        "id": "pagina-62"
                    }
                }
            ]
        },
        "6-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -1.2079862072064778,
            "yaw": -56.107807032945196,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "6-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "6-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "6-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "6-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "6-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "6-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.657975193233652,
                    "yaw": -4.550084814038716,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "5-avenida-principal-incasica"
                },
                {
                    "pitch": -2.3178071704768275,
                    "yaw": -185.57743058737904,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "7-avenida-principal-incasica"
                },
                {
                    "pitch": -3.7890876078459015,
                    "yaw": -100.51855435972983,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "36-avenida-transversal-derecha"
                },
                {
                    "pitch": -3.4867316086698983,
                    "yaw": 80.82060976083714,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "97-avenida-transversal-izquierda"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 11.250453284697507,
                    "yaw": -30.241128159247285,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PIRÁMIDE COMPUESTA',
                        "contenido": 'De base pirámide truncada de lados rectangulares; cavado rectangular horizontal en cada lado, pirámide truncada de lados trapezoidales oblicuos con cavado rectangular vertical en el centro; bordes rectangulares en la parte posterior.',
                        "id": "pagina-112"
                    }
                },
                {
                    "pitch": 11.250453284697507,
                    "yaw": -37.17447776862228,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CONJUNTO DE IMPLEMENTOS INCÁSICOS',
                        "contenido": 'Está conformado por una vasija, adornada por orejones en serie; olla compuesta por tres anillos, separados por una cavidad circular, corona incásica semiesférica con bordes laterales invertidos en el centro de la parte superior. La base de la escultura tiene forma circular.',
                        "id": "pagina-114"
                    }
                },

                // lado izquierdo
                {
                    "pitch": 0.12534712612685794,
                    "yaw": 46.986916786998506,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'COFRE INCÁSICO',
                        "contenido": 'Está compuesta de base pirámide truncada de lados laterales rectangulares; cuerpo cilíndrico; asa aproximadamente semiesférica, base de la escultura cuadrada.',
                        "id": "pagina-70"
                    }
                },
                {
                    "pitch": 9.19201786180394,
                    "yaw": 22.986916786998506,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'COFRE INCÁSICO DONDE SE GUARDO JOYAS DE VALOR DEL TAHUANTINSUYO',
                        "contenido": 'Constituye una réplica del arte de nuestros incas que utilizaron para guardar reliquias, que está conformado por una caja de importantes esculturas: una franja base de forma rectangular; franja rectangular con aplique, adorno romboidal; tapa constituida por una franja de bordes triangulares invertidos en serie artísticamente realizada.',
                        "id": "pagina-68"
                    }
                }
            ]
        },
        "7-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -4.6080029918744465,
            "yaw": -186.55802085097253,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "7-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "7-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "7-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "7-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "7-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "7-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.257070651190949,
                    "yaw": -5.552471437836303,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "6-avenida-principal-incasica"
                },
                {
                    "pitch": -6.833244870297696,
                    "yaw": 174.30706844569468,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "8-avenida-principal-incasica"
                }
            ]
        },
        "8-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -4.6080029918744465,
            "yaw": -186.55802085097253,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "8-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "8-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "8-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "8-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "8-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "8-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.955933943757117,
                    "yaw": -3.045003717946262,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "7-avenida-principal-incasica"
                },
                {
                    "pitch": -2.349129233565879,
                    "yaw": -184.3013260879382,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "9-avenida-principal-incasica"
                },
                {
                    "pitch": -5.080911464811885,
                    "yaw": -95.06206144801372,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "37-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -4.918588724129374,
                    "yaw": 87.16913316303594,
                    "type": "scene",
                    "text": "Esculturas en verde y pasadizo",
                    "sceneId": "106-escuturas-verde-y-pasadizo"
                }
            ]
        },
        "9-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -1.0804778705019407,
            "yaw": 353.50917846953234,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "9-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "9-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "9-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "9-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "9-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "9-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.659394038817446,
                    "yaw": -6.549819930468918,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "8-avenida-principal-incasica"
                },
                {
                    "pitch": -2.4915038943600787,
                    "yaw": -185.61860098938766,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "10-avenida-principal-incasica"
                }
            ]
        },
        "10-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -6.408006043632259,
            "yaw": -246.95802237685143,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "10-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "10-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "10-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "10-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "10-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "10-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.9928534621069494,
                    "yaw": -6.017326545630004,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "9-avenida-principal-incasica"
                },
                {
                    "pitch": -1.740772604112161,
                    "yaw": -185.53728517416357,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "11-avenida-principal-incasica"
                },
                {
                    "pitch": -2.2523120734907547,
                    "yaw": -57.24455769108741,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "51-mausoleos"
                },
                {
                    "pitch": -2.780346929854394,
                    "yaw": -292.32301918529,
                    "type": "scene",
                    "text": "Osario y nichos",
                    "sceneId": "108-osario-y-nichos"
                },
                {
                    "pitch": -3.4759113026774946,
                    "yaw": 123.8179498375182,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "116-pasadizo-y-mausoleos"
                },

                // Hotspots tipo info
                // Centro
                {
                    "pitch": -1.8080075695111653,
                    "yaw": -249.95802237685143,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": "OSARIO",
                        "contenido": "Escultura arquitectónica de estilo neoclásico, soportada por tres columnas monolíticas de piedra con una cúpula formando una esfera y con una profundidad de 15m. Su diseño original responde a la necesidad del depósito de osamentas en una fosa común.",
                        "id": "osario-10"
                    }
                }
            ]
        },
        "11-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": 4.47376740100253,
            "yaw": -251.94282099808424,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "11-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "11-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "11-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "11-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "11-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "11-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.5284114559426003,
                    "yaw": -5.441498970857561,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "10-avenida-principal-incasica"
                },
                {
                    "pitch": -2.1733608556879545,
                    "yaw": -185.23205405758694,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "12-avenida-principal-incasica"
                }
            ]
        },
        "12-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": 0.7872791234916554,
            "yaw": -258.58176889716253,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "12-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "12-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "12-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "12-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "12-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "12-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.8409960153601665,
                    "yaw": -6.917356314389923,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "11-avenida-principal-incasica"
                },
                {
                    "pitch": -2.805255735082355,
                    "yaw": -186.18193651901936,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "13-avenida-principal-incasica"
                }
            ]
        },
        "13-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": 0.6936119947207859,
            "yaw": -7.304042829172722,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "13-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "13-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "13-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "13-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "13-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "13-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.3580897223179913,
                    "yaw": -6.846839627017918,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "12-avenida-principal-incasica"
                },
                {
                    "pitch": -1.9833599215217017,
                    "yaw": -186.24741875894935,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "14-avenida-principal-incasica"
                },
                {
                    "pitch": -2.0163118282410624,
                    "yaw": 263.11688256236715,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "68-mausoleos-y-nichos"
                },
                {
                    "pitch": -3.289960770891874,
                    "yaw": 84.61866863722018,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "125-mausoleos-y-nichos"
                }
            ]
        },
        "14-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": 0.8147209001097762,
            "yaw": -8.433230187466481,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "14-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "14-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "14-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "14-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "14-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "14-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.8989261802566482,
                    "yaw": -7.29528950187667,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "13-avenida-principal-incasica"
                },
                {
                    "pitch": -4.143416573559851,
                    "yaw": -186.2146434111353,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "15-avenida-principal-incasica"
                }
            ]
        },
        "15-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": -1.460457628627866,
            "yaw": -4.877188318382878,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "15-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "15-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "15-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "15-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "15-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "15-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.8386879419450621,
                    "yaw": -5.004194815774463,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "14-avenida-principal-incasica"
                },
                {
                    "pitch": -4.747488769718871,
                    "yaw": -184.02044590829797,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "16-avenida-principal-incasica"
                }
            ]
        },
        "16-avenida-principal-incasica": {
            "title": "Avenida Real",
            "hfov": 120,
            "pitch": 6.693498477066132,
            "yaw": -313.72284511609564,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "16-avenida-principal-incasica/cubo/f.jpg",
                rutaBase + "16-avenida-principal-incasica/cubo/r.jpg",
                rutaBase + "16-avenida-principal-incasica/cubo/b.jpg",
                rutaBase + "16-avenida-principal-incasica/cubo/l.jpg",
                rutaBase + "16-avenida-principal-incasica/cubo/u.jpg",
                rutaBase + "16-avenida-principal-incasica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.06082226095828158,
                    "yaw": -313.53037796234753,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "15-avenida-principal-incasica"
                },
                {
                    "pitch": -7.238256116217103,
                    "yaw": 320.8702730456197,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "79-nichos"
                },
                {
                    "pitch": -2.8075172929027077,
                    "yaw": 142.27581730859225,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "140-nichos"
                }
            ]
        },
        /*
        "17-informacion-turistica": {
            "title": "Información turística",
            "hfov": 120,
            "pitch": -14.184164177050086,
            "yaw": -328.5160562680431,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "17-informacion-turistica/cubo/f.jpg",
                rutaBase + "17-informacion-turistica/cubo/r.jpg",
                rutaBase + "17-informacion-turistica/cubo/b.jpg",
                rutaBase + "17-informacion-turistica/cubo/l.jpg",
                rutaBase + "17-informacion-turistica/cubo/u.jpg",
                rutaBase + "17-informacion-turistica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -38.22701072982321,
                    "yaw": 53.02643546060057,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "1-avenida-principal-incasica"
                },
                {
                    "pitch": -2.427007678065401,
                    "yaw": 80.42643698647947,
                    "type": "scene",
                    "text": "Información turística",
                    "sceneId": "18-informacion-turistica"
                }
            ]
        },*/
        "18-informacion-turistica": {
            "title": "Información turística",
            "hfov": 120,
            "pitch": -4.727416518284474,
            "yaw": -81.21487950078057,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "18-informacion-turistica/cubo/f.jpg",
                rutaBase + "18-informacion-turistica/cubo/r.jpg",
                rutaBase + "18-informacion-turistica/cubo/b.jpg",
                rutaBase + "18-informacion-turistica/cubo/l.jpg",
                rutaBase + "18-informacion-turistica/cubo/u.jpg",
                rutaBase + "18-informacion-turistica/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -30.527419570042284,
                    "yaw": 36.549767073270516,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "1-avenida-principal-incasica"
                }
            ]
        },
        "19-parque-derecho": {
            "title": "Jardín ornamental",
            "hfov": 120,
            "pitch": 0.3919970081255535,
            "yaw": -94.60632016272993,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "19-parque-derecho/cubo/f.jpg",
                rutaBase + "19-parque-derecho/cubo/r.jpg",
                rutaBase + "19-parque-derecho/cubo/b.jpg",
                rutaBase + "19-parque-derecho/cubo/l.jpg",
                rutaBase + "19-parque-derecho/cubo/u.jpg",
                rutaBase + "19-parque-derecho/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.842100558376803,
                    "yaw": 40.854946422208876,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "2-avenida-principal-incasica"
                },
                {
                    "pitch": -2.8420852995877404,
                    "yaw": 139.57658381789003,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "4-avenida-principal-incasica"
                },
                {
                    "pitch": -7.042089877224459,
                    "yaw": 262.2337336100977,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "20-parque-derecho"
                }
            ]
        },
        "20-parque-derecho": {
            "title": "Jardín ornamental",
            "hfov": 120,
            "pitch": -1.633770606867454,
            "yaw": 269.0699141757785,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "20-parque-derecho/cubo/f.jpg",
                rutaBase + "20-parque-derecho/cubo/r.jpg",
                rutaBase + "20-parque-derecho/cubo/b.jpg",
                rutaBase + "20-parque-derecho/cubo/l.jpg",
                rutaBase + "20-parque-derecho/cubo/u.jpg",
                rutaBase + "20-parque-derecho/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.033795020929954,
                    "yaw": 106.00038756792577,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "19-parque-derecho"
                },
                {
                    "pitch": -2.8337828138987042,
                    "yaw": 279.46990807226285,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "21-parque-derecho"
                },
                {
                    "pitch": -1.233799598566673,
                    "yaw": 168.80040587847265,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "26-avenida-estilo-imperio-egipcio"
                }
            ]
        },
        "21-parque-derecho": {
            "title": "Jardín ornamental",
            "hfov": 120,
            "pitch": 0.39609823185521087,
            "yaw": 138.48329570756732,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "21-parque-derecho/cubo/f.jpg",
                rutaBase + "21-parque-derecho/cubo/r.jpg",
                rutaBase + "21-parque-derecho/cubo/b.jpg",
                rutaBase + "21-parque-derecho/cubo/l.jpg",
                rutaBase + "21-parque-derecho/cubo/u.jpg",
                rutaBase + "21-parque-derecho/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.0687227738143426,
                    "yaw": 98.81851837265665,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "20-parque-derecho"
                },
                {
                    "pitch": 0.19610128361302337,
                    "yaw": 249.88330486284076,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "22-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -3.6038712505666624,
                    "yaw": 181.5375209553567,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "24-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -2.0038651470510374,
                    "yaw": 135.73751027420437,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "25-avenida-estilo-imperio-egipcio"
                }
            ]
        },
        "22-avenida-estilo-imperio-egipcio": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -3.807999940116634,
            "yaw": -344.3580162733358,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "22-avenida-estilo-imperio-egipcio/cubo/f.jpg",
                rutaBase + "22-avenida-estilo-imperio-egipcio/cubo/r.jpg",
                rutaBase + "22-avenida-estilo-imperio-egipcio/cubo/b.jpg",
                rutaBase + "22-avenida-estilo-imperio-egipcio/cubo/l.jpg",
                rutaBase + "22-avenida-estilo-imperio-egipcio/cubo/u.jpg",
                rutaBase + "22-avenida-estilo-imperio-egipcio/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -16.80797705193304,
                    "yaw": -115.75802542860924,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "21-parque-derecho"
                },
                {
                    "pitch": -5.8079846813275715,
                    "yaw": -17.9580147474569,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "23-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -3.6079801036908528,
                    "yaw": 77.72594494637787,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "30-nichos"
                }

            ]
        },
        "23-avenida-estilo-imperio-egipcio": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -0.6080068065717121,
            "yaw": 2.7906217050843054,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "23-avenida-estilo-imperio-egipcio/cubo/f.jpg",
                rutaBase + "23-avenida-estilo-imperio-egipcio/cubo/r.jpg",
                rutaBase + "23-avenida-estilo-imperio-egipcio/cubo/b.jpg",
                rutaBase + "23-avenida-estilo-imperio-egipcio/cubo/l.jpg",
                rutaBase + "23-avenida-estilo-imperio-egipcio/cubo/u.jpg",
                rutaBase + "23-avenida-estilo-imperio-egipcio/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.608029694755306,
                    "yaw": 182.31189238927576,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "22-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -7.408032746513118,
                    "yaw": 2.8791948545515424,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "24-avenida-estilo-imperio-egipcio"
                }
            ]
        },
        "24-avenida-estilo-imperio-egipcio": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -3.7581060896806626,
            "yaw": 346.18321749580736,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "24-avenida-estilo-imperio-egipcio/cubo/f.jpg",
                rutaBase + "24-avenida-estilo-imperio-egipcio/cubo/r.jpg",
                rutaBase + "24-avenida-estilo-imperio-egipcio/cubo/b.jpg",
                rutaBase + "24-avenida-estilo-imperio-egipcio/cubo/l.jpg",
                rutaBase + "24-avenida-estilo-imperio-egipcio/cubo/u.jpg",
                rutaBase + "24-avenida-estilo-imperio-egipcio/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.958110667317381,
                    "yaw": 254.78321596992845,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "21-parque-derecho"
                },
                {
                    "pitch": -6.464224193333839,
                    "yaw": 165.5714547729845,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "23-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -4.864233348607277,
                    "yaw": 346.2954017691218,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "25-avenida-estilo-imperio-egipcio"
                }
            ]
        },
        "25-avenida-estilo-imperio-egipcio": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -5.905069784719359,
            "yaw": -191.50686564626915,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "25-avenida-estilo-imperio-egipcio/cubo/f.jpg",
                rutaBase + "25-avenida-estilo-imperio-egipcio/cubo/r.jpg",
                rutaBase + "25-avenida-estilo-imperio-egipcio/cubo/b.jpg",
                rutaBase + "25-avenida-estilo-imperio-egipcio/cubo/l.jpg",
                rutaBase + "25-avenida-estilo-imperio-egipcio/cubo/u.jpg",
                rutaBase + "25-avenida-estilo-imperio-egipcio/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.919874998567742,
                    "yaw": -95.3803499679475,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "21-parque-derecho"
                },
                {
                    "pitch": -4.719870420931024,
                    "yaw": -115.58035454558421,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "24-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -2.9581396786936898,
                    "yaw": 60.1236616832263,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "26-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -5.319868895052117,
                    "yaw": -241.58034691618968,
                    "type": "scene",
                    "text": "Parque",
                    "sceneId": "27-parque"
                },
                {
                    "pitch": -2.3198688950521174,
                    "yaw": -186.3803499679475,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "28-kiosko-estilo-frances-lado-norte-entrada"
                }
            ]
        },
        "26-avenida-estilo-imperio-egipcio": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -4.607789969663607,
            "yaw": 25.129280422587875,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "26-avenida-estilo-imperio-egipcio/cubo/f.jpg",
                rutaBase + "26-avenida-estilo-imperio-egipcio/cubo/r.jpg",
                rutaBase + "26-avenida-estilo-imperio-egipcio/cubo/b.jpg",
                rutaBase + "26-avenida-estilo-imperio-egipcio/cubo/l.jpg",
                rutaBase + "26-avenida-estilo-imperio-egipcio/cubo/u.jpg",
                rutaBase + "26-avenida-estilo-imperio-egipcio/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.2077884437847004,
                    "yaw": 64.92928347434568,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "4-avenida-principal-incasica"
                },
                {
                    "pitch": -4.407770133237825,
                    "yaw": -24.070708896259788,
                    "type": "scene",
                    "text": "Jardín ornamental",
                    "sceneId": "20-parque-derecho"
                },
                {
                    "pitch": -4.407770133237825,
                    "yaw": -113.87070431862307,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "25-avenida-estilo-imperio-egipcio"
                }
            ]
        },
        "27-parque": {
            "title": "Parque",
            "hfov": 120,
            "pitch": 1.5919863269732097,
            "yaw": -29.011042014224643,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "27-parque/cubo/f.jpg",
                rutaBase + "27-parque/cubo/r.jpg",
                rutaBase + "27-parque/cubo/b.jpg",
                rutaBase + "27-parque/cubo/l.jpg",
                rutaBase + "27-parque/cubo/u.jpg",
                rutaBase + "27-parque/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -7.807999940116634,
                    "yaw": -296.75802542860924,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "25-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -5.0079968883588215,
                    "yaw": -13.158034583882682,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "28-kiosko-estilo-frances-lado-norte-entrada"
                },
                {
                    "pitch": -0.40801367302679026,
                    "yaw": -81.40334938901185,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "35-avenida-transversal-derecha"
                },

                // Hotspot tipo info
                // lado derecho desde la entrada
                {
                    "pitch": 4.023114113600147,
                    "yaw": -271.78512753483216,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MURO DE LA AVENIDA DE ESTILO EGIPCIO',
                        "contenido": 'Representando a las catacumbas de estilo egipcio donde sepultaban a los muertos; en el frontal de la pirámide cónica de la portada del muro se aprecia un pedestal rectangular adornado escultóricamente por cavado en el centro y una semiesfera dando especial efigie humana.',
                        "id": "pagina-182"
                    }
                }
            ]
        },
        "28-kiosko-estilo-frances-lado-norte-entrada": {
            "title": "Kiosko estilo francés lado norte",
            "hfov": 120,
            "pitch": -5.03151297305417,
            "yaw": -319.81455308270534,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "28-kiosko-estilo-frances-lado-norte-entrada/cubo/f.jpg",
                rutaBase + "28-kiosko-estilo-frances-lado-norte-entrada/cubo/r.jpg",
                rutaBase + "28-kiosko-estilo-frances-lado-norte-entrada/cubo/b.jpg",
                rutaBase + "28-kiosko-estilo-frances-lado-norte-entrada/cubo/l.jpg",
                rutaBase + "28-kiosko-estilo-frances-lado-norte-entrada/cubo/u.jpg",
                rutaBase + "28-kiosko-estilo-frances-lado-norte-entrada/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.231509921296357,
                    "yaw": -242.21454697918972,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "25-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -3.831508395417451,
                    "yaw": -197.41455918622097,
                    "type": "scene",
                    "text": "Parque",
                    "sceneId": "27-parque"
                },
                {
                    "pitch": -4.868836518880129,
                    "yaw": -355.85518780624176,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "29-kiosko-estilo-frances-lado-norte-por-dentro"
                },
                {
                    "pitch": -0.8315083954174511,
                    "yaw": -75.62564352151847,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "34-avenida-transversal-derecha"
                },

                // Hotspot tipo info
                // lado derecho desde la entrada
                {
                    "pitch": 0.5744550419965808,
                    "yaw": -322.03975858548904,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'KIOSKOS O CERRADOS DE ESTILO FRANCES, LADO NORTE',
                        "contenido": 'Conformado por muros adornados en la parte superior con semiesferas; columnas de lados planos rectangulares adornadas en la parte superior por semiesferas; columnas de lados planos rectangulares con terminado en la parte superior prismático de lados triangulares; arcos de medio punto que entrelazan los muros.',
                        "id": "pagina-184ln"
                    }
                }
            ]
        },
        "29-kiosko-estilo-frances-lado-norte-por-dentro": {
            "title": "Kiosko estilo francés lado norte",
            "hfov": 120,
            "pitch": -6.066208951034311,
            "yaw": -205.99886713681553,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "29-kiosko-estilo-frances-lado-norte-por-dentro/cubo/f.jpg",
                rutaBase + "29-kiosko-estilo-frances-lado-norte-por-dentro/cubo/r.jpg",
                rutaBase + "29-kiosko-estilo-frances-lado-norte-por-dentro/cubo/b.jpg",
                rutaBase + "29-kiosko-estilo-frances-lado-norte-por-dentro/cubo/l.jpg",
                rutaBase + "29-kiosko-estilo-frances-lado-norte-por-dentro/cubo/u.jpg",
                rutaBase + "29-kiosko-estilo-frances-lado-norte-por-dentro/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.4004288748370675,
                    "yaw": -149.81262879935167,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "28-kiosko-estilo-frances-lado-norte-entrada"
                },
                {
                    "pitch": -5.10204452889321,
                    "yaw": -332.3120909892358,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "30-nichos"
                },
                {
                    "pitch": -7.837907668725202,
                    "yaw": -41.06426553946901,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "31-kiosko-estilo-frances-lado-norte-entrada"
                }
            ]
        },
        "30-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -3.758257713645529,
            "yaw": -9.534738095711752,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "30-nichos/cubo/f.jpg",
                rutaBase + "30-nichos/cubo/r.jpg",
                rutaBase + "30-nichos/cubo/b.jpg",
                rutaBase + "30-nichos/cubo/l.jpg",
                rutaBase + "30-nichos/cubo/u.jpg",
                rutaBase + "30-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.8590660558890035,
                    "yaw": 263.99569530756486,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "22-avenida-estilo-imperio-egipcio"
                },
                {
                    "pitch": -5.259424969830618,
                    "yaw": -36.42205634376412,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "29-kiosko-estilo-frances-lado-norte-por-dentro"
                },
                {
                    "pitch": -4.220628096033479,
                    "yaw": 80.18094285520316,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "32-avenida-transversal-derecha"
                },

                // Hotspot tipo info
                // lado derecho desde la entrada
                {
                    "pitch": 6.642640292807013,
                    "yaw": -2.454983150497839,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PERSONAJES ILUSTRES',
                        "contenido": 'Dentro del Campo Santo José María Azael Franco Guerrero, se encuentran los restos de importantes personalidades que contribuyeron al desarrollo del cantón, provincia y país con obras literarias, culturales y de conocimiento.',
                        "id": "monumento-pi"
                    }
                }
            ]
        },
        "31-kiosko-estilo-frances-lado-norte-entrada": {
            "title": "Kiosko estilo francés lado norte",
            "hfov": 120,
            "pitch": 0.006008187670706988,
            "yaw": 195.92560344149814,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "31-kiosko-estilo-frances-lado-norte-entrada/cubo/f.jpg",
                rutaBase + "31-kiosko-estilo-frances-lado-norte-entrada/cubo/r.jpg",
                rutaBase + "31-kiosko-estilo-frances-lado-norte-entrada/cubo/b.jpg",
                rutaBase + "31-kiosko-estilo-frances-lado-norte-entrada/cubo/l.jpg",
                rutaBase + "31-kiosko-estilo-frances-lado-norte-entrada/cubo/u.jpg",
                rutaBase + "31-kiosko-estilo-frances-lado-norte-entrada/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.4386475954996882,
                    "yaw": -111.20023481571974,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "28-kiosko-estilo-frances-lado-norte-entrada"
                },
                {
                    "pitch": -5.653561481382164,
                    "yaw": -193.07828870031162,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "29-kiosko-estilo-frances-lado-norte-por-dentro"
                },
                {
                    "pitch": -3.510462609924292,
                    "yaw": 78.84597400231769,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "30-nichos"
                }
            ]
        },
        "32-avenida-transversal-derecha": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": -5.78535771783881,
            "yaw": -180.3953410826664,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "32-avenida-transversal-derecha/cubo/f.jpg",
                rutaBase + "32-avenida-transversal-derecha/cubo/r.jpg",
                rutaBase + "32-avenida-transversal-derecha/cubo/b.jpg",
                rutaBase + "32-avenida-transversal-derecha/cubo/l.jpg",
                rutaBase + "32-avenida-transversal-derecha/cubo/u.jpg",
                rutaBase + "32-avenida-transversal-derecha/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.6628295653659606,
                    "yaw": -227.36766198340706,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "30-nichos"
                },
                {
                    "pitch": -2.523913592662537,
                    "yaw": -143.34831086080305,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "33-avenida-transversal-derecha"
                },
                {
                    "pitch": -3.486993789744746,
                    "yaw": -46.737218612034525,
                    "type": "scene",
                    "text": "Gremio de maestros",
                    "sceneId": "43-gremio-maestros"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 4.347983753515356,
                    "yaw": -203.06200774933305,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ARMADILLO',
                        "contenido": 'Nativo del territorio andino, conformado por una cubierta o caparazón óseo, que sirve para construir el charango o la guitarra pequeña en pueblo valle, como instrumento musical; la cabeza tiene orejas alargadas, se encuentra sobre un pedestal de forma pirámide truncada de caras laterales trapezoidales planas.',
                        "id": "pagina-154"
                    }
                }
            ]
        },
        "33-avenida-transversal-derecha": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": -4.053794858248605,
            "yaw": 265.83924944479037,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "33-avenida-transversal-derecha/cubo/f.jpg",
                rutaBase + "33-avenida-transversal-derecha/cubo/r.jpg",
                rutaBase + "33-avenida-transversal-derecha/cubo/b.jpg",
                rutaBase + "33-avenida-transversal-derecha/cubo/l.jpg",
                rutaBase + "33-avenida-transversal-derecha/cubo/u.jpg",
                rutaBase + "33-avenida-transversal-derecha/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -7.853529473826519,
                    "yaw": 208.98251664206134,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "31-kiosko-estilo-frances-lado-norte-entrada"
                },
                {
                    "pitch": -4.738312877260176,
                    "yaw": 120.24094678327653,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "32-avenida-transversal-derecha"
                },
                {
                    "pitch": -3.7899675416476755,
                    "yaw": 297.92959441678585,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "34-avenida-transversal-derecha"
                },
                {
                    "pitch": -4.8019182243170375,
                    "yaw": 25.913757623251083,
                    "type": "scene",
                    "text": "Esculturas en verde",
                    "sceneId": "41-esculturas-verde"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 6.07953644057952,
                    "yaw": 245.92800079525347,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CORONA INCÁSICA',
                        "contenido": 'Corona que lucieron nuestros antepasados Huáscar y Atahualpa como Caciques del Tahuantinsuyo, se encuentra sobre un pedestal de forma, pirámide truncada; los lados laterales de la corona están conformados por bordes triangulares; en el centro de cada triángulo de bordes en alto relieve se encuentra incrustado un rombo artísticamente realizado.',
                        "id": "pagina-158"
                    }
                },
                {
                    "pitch": 5.279538475084728,
                    "yaw": 158.99467153093056,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'OLLITA DE ESTILO INCÁSICO',
                        "contenido": 'La utilizaron nuestros antepasados; cuerpo cónico conformado por dos partes; parte superior adornada artísticamente por triángulos invertidos que penden de la parte superior de la escultura; parte inferior estructurada de adornos romboidales con apliques prismáticos en la parte del centro; La escultura se encuentra sobre pedestal.',
                        "id": "pagina-156"
                    }
                }
            ]
        },
        "34-avenida-transversal-derecha": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": -2.267503466348236,
            "yaw": 163.04302598696495,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "34-avenida-transversal-derecha/cubo/f.jpg",
                rutaBase + "34-avenida-transversal-derecha/cubo/r.jpg",
                rutaBase + "34-avenida-transversal-derecha/cubo/b.jpg",
                rutaBase + "34-avenida-transversal-derecha/cubo/l.jpg",
                rutaBase + "34-avenida-transversal-derecha/cubo/u.jpg",
                rutaBase + "34-avenida-transversal-derecha/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.116878912529989,
                    "yaw": 152.7483534440611,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado norte",
                    "sceneId": "28-kiosko-estilo-frances-lado-norte-entrada"
                },
                {
                    "pitch": -6.682357134200451,
                    "yaw": 71.48072366111683,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "33-avenida-transversal-derecha"
                },
                {
                    "pitch": -4.474244510960476,
                    "yaw": 249.53271311155166,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "35-avenida-transversal-derecha"
                },
                {
                    "pitch": -4.010230686025399,
                    "yaw": 345.362350665767,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "40-esculturas-verde-y-nichos"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 6.179953891540992,
                    "yaw": 204.41331544938618,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'IGUANA',
                        "contenido": 'Riqueza natural de las Islas Galápagos; la figura similar lomo estriado; la figura artísticamente realizada va sobre pedestal pirámide truncado, de caras laterales trapezoidales planas; base de la escultura cuadrada.',
                        "id": "pagina-164"
                    }
                },
                {
                    "pitch": -1.020037970438174,
                    "yaw": 183.07998211605283,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CACIQUE RUMIÑAHUI',
                        "contenido": 'El busto del indígena tiene ojos rasgados que da una mirada imponente hacia el sol; nariz aguileña; quijada alargada; el cintillo de la frente porta una estrella de cinco puntas en el centro; el busto va sobre un pedestal, pirámide truncada de lados trapezoidales planos; base rectangular.',
                        "id": "pagina-162"
                    }
                },
                {
                    "pitch": 6.532494499146555,
                    "yaw": 127.84304429751182,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'VASIJA INCÁSICA',
                        "contenido": 'La vasija que utilizaron los antepasados se encuentra sobre un pedestal de forma, pirámide truncada; la vasija tiene dos cuerpos cilíndricos separados por un anillo ornamental; el inferior tiene grabados de forma triangular con apliques esféricos en el centro; el cuerpo superior tiene bordes rectangulares artísticamente entrelazados en serie.',
                        "id": "pagina-160"
                    }
                }
            ]
        },
        "35-avenida-transversal-derecha": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": -3.0778819729555797,
            "yaw": 35.58565219401263,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "35-avenida-transversal-derecha/cubo/f.jpg",
                rutaBase + "35-avenida-transversal-derecha/cubo/r.jpg",
                rutaBase + "35-avenida-transversal-derecha/cubo/b.jpg",
                rutaBase + "35-avenida-transversal-derecha/cubo/l.jpg",
                rutaBase + "35-avenida-transversal-derecha/cubo/u.jpg",
                rutaBase + "35-avenida-transversal-derecha/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.2022202334872603,
                    "yaw": 49.333384445273964,
                    "type": "scene",
                    "text": "Parque",
                    "sceneId": "27-parque"
                },
                {
                    "pitch": -4.720790542740321,
                    "yaw": -64.14697159520128,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "34-avenida-transversal-derecha"
                },
                {
                    "pitch": -4.491770513213849,
                    "yaw": 114.92208177797461,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "36-avenida-transversal-derecha"
                },
                {
                    "pitch": -5.711600039723129,
                    "yaw": 204.96644935272133,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "38-esculturas-verde-y-nichos"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 4.65545542938817,
                    "yaw": -26.76894247264659,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'GEORGE DE LAS GALÁPAGOS',
                        "contenido": 'Las tortugas gigantes de las Islas Galápagos son las más longevas de todos los vertebrados. <br> La tortuga más vieja que se conoce llegó a vivir 152 años llamada GEORGE, fue el último ejemplar conocido de la especie Chelonoidis Abingdoni o Tortuga Gigante de Pinta. Murió en el año 2012.',
                        "id": "george-dlg"
                    }
                },
                {
                    "pitch": 0.12210988902358677,
                    "yaw": 75.85231479166887,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CISNE EN POSICIÓN DE REPOSO',
                        "contenido": 'Se encuentra sobre un pedestal tipo pirámide truncada de lados laterales de forma trapezoidal; trapecio frontal adornado por una compotera en alto relieve; base de la escultura cuadrada.',
                        "id": "pagina-166"
                    }
                }
            ]
        },
        "36-avenida-transversal-derecha": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": 2.1182884900399372,
            "yaw": 29.092466551607338,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "36-avenida-transversal-derecha/cubo/f.jpg",
                rutaBase + "36-avenida-transversal-derecha/cubo/r.jpg",
                rutaBase + "36-avenida-transversal-derecha/cubo/b.jpg",
                rutaBase + "36-avenida-transversal-derecha/cubo/l.jpg",
                rutaBase + "36-avenida-transversal-derecha/cubo/u.jpg",
                rutaBase + "36-avenida-transversal-derecha/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.4012854856702095,
                    "yaw": 110.22783896243472,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "6-avenida-principal-incasica"
                },
                {
                    "pitch": -4.317391797331996,
                    "yaw": -69.36954151785625,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "35-avenida-transversal-derecha"
                },
                {
                    "pitch": -4.512242087817667,
                    "yaw": 205.57597691427793,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "37-esculturas-verde-y-nichos"
                },

                // Hotspots tipo info
                // lado derecho
                {
                    "pitch": 12.25160961634202,
                    "yaw": -5.574200115059327,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PATO SALVAJE',
                        "contenido": 'Ave de la Región Oriental (Amazonía) del Ecuador; cresta y ala artísticamente esculpida con bordes ondulados. La escultura en verde va sobre un pedestal de forma pirámide truncada de caras laterales trapezoidales planas; base de la obra de arte cuadrada.',
                        "id": "pagina-168"
                    }
                }
            ]
        },
        "37-esculturas-verde-y-nichos": {
            "title": "Esculturas en verde y nichos",
            "hfov": 120,
            "pitch": -10.529987247331078,
            "yaw": -353.2051185193939,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "37-esculturas-verde-y-nichos/cubo/f.jpg",
                rutaBase + "37-esculturas-verde-y-nichos/cubo/r.jpg",
                rutaBase + "37-esculturas-verde-y-nichos/cubo/b.jpg",
                rutaBase + "37-esculturas-verde-y-nichos/cubo/l.jpg",
                rutaBase + "37-esculturas-verde-y-nichos/cubo/u.jpg",
                rutaBase + "37-esculturas-verde-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.208494364682867,
                    "yaw": -88.70807904918782,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "8-avenida-principal-incasica"
                },
                {
                    "pitch": -3.179939429659063,
                    "yaw": -214.37563344628626,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "36-avenida-transversal-derecha"
                },
                {
                    "pitch": -7.132842997012443,
                    "yaw": -324.4322725673623,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "38-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -7.122897306997894,
                    "yaw": -82.10259127726754,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "44-nichos"
                }
            ]
        },
        "38-esculturas-verde-y-nichos": {
            "title": "Escultura en verde y nichos",
            "hfov": 120,
            "pitch": 2.263738425877642,
            "yaw": -85.02610955756985,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "38-esculturas-verde-y-nichos/cubo/f.jpg",
                rutaBase + "38-esculturas-verde-y-nichos/cubo/r.jpg",
                rutaBase + "38-esculturas-verde-y-nichos/cubo/b.jpg",
                rutaBase + "38-esculturas-verde-y-nichos/cubo/l.jpg",
                rutaBase + "38-esculturas-verde-y-nichos/cubo/u.jpg",
                rutaBase + "38-esculturas-verde-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.819411165768943,
                    "yaw": 59.486070375818585,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "35-avenida-transversal-derecha"
                },
                {
                    "pitch": -6.690274347765525,
                    "yaw": 145.93892586537208,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "37-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -5.634930087845062,
                    "yaw": -102.50059098859941,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "39-tumbas"
                },
                {
                    "pitch": -3.760479667494735,
                    "yaw": 330.4650422524682,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "40-esculturas-verde-y-nichos"
                }
            ]
        },
        "39-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -18.377152423139904,
            "yaw": 25.173139821137767,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "39-tumbas/cubo/f.jpg",
                rutaBase + "39-tumbas/cubo/r.jpg",
                rutaBase + "39-tumbas/cubo/b.jpg",
                rutaBase + "39-tumbas/cubo/l.jpg",
                rutaBase + "39-tumbas/cubo/u.jpg",
                rutaBase + "39-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.6319541032150937,
                    "yaw": 56.75104178679459,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "34-avenida-transversal-derecha"
                },
                {
                    "pitch": -3.248079177373632,
                    "yaw": 118.77398526246034,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "38-esculturas-verde-y-nichos"
                }
            ]
        },
        "40-esculturas-verde-y-nichos": {
            "title": "Esculturas en verde y nichos",
            "hfov": 120,
            "pitch": -1.9768759219028333,
            "yaw": -184.5741458171411,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "40-esculturas-verde-y-nichos/cubo/f.jpg",
                rutaBase + "40-esculturas-verde-y-nichos/cubo/r.jpg",
                rutaBase + "40-esculturas-verde-y-nichos/cubo/b.jpg",
                rutaBase + "40-esculturas-verde-y-nichos/cubo/l.jpg",
                rutaBase + "40-esculturas-verde-y-nichos/cubo/u.jpg",
                rutaBase + "40-esculturas-verde-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.1235270845556835,
                    "yaw": -27.453422751621307,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "33-avenida-transversal-derecha"
                },
                {
                    "pitch": -2.9827082829536984,
                    "yaw": 94.03059423043806,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "34-avenida-transversal-derecha"
                },
                {
                    "pitch": -3.110618297275284,
                    "yaw": 127.62452940630783,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "38-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -4.794454620708365,
                    "yaw": 190.73117964355612,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "39-tumbas"
                },
                {
                    "pitch": -5.104597253275168,
                    "yaw": 279.7565835405836,
                    "type": "scene",
                    "text": "Esculturas en verde",
                    "sceneId": "41-esculturas-verde"
                },
                {
                    "pitch": -2.421075678068335,
                    "yaw": -54.05365723503396,
                    "type": "scene",
                    "text": "Gremio de maestros",
                    "sceneId": "43-gremio-maestros"
                }
            ]
        },
        "41-esculturas-verde": {
            "title": "Esculturas en verde",
            "hfov": 120,
            "pitch": -3.9311592485060256,
            "yaw": 212.03366987960007,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "41-esculturas-verde/cubo/f.jpg",
                rutaBase + "41-esculturas-verde/cubo/r.jpg",
                rutaBase + "41-esculturas-verde/cubo/b.jpg",
                rutaBase + "41-esculturas-verde/cubo/l.jpg",
                rutaBase + "41-esculturas-verde/cubo/u.jpg",
                rutaBase + "41-esculturas-verde/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.9090171687979858,
                    "yaw": 105.10216067999895,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "33-avenida-transversal-derecha"
                },
                {
                    "pitch": -2.4479599752535663,
                    "yaw": 131.1315675395892,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "40-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -6.280068731255858,
                    "yaw": 311.9641937491857,
                    "type": "scene",
                    "text": "Esculturas en verde",
                    "sceneId": "42-esculturas-verde"
                }
            ]
        },
        "42-esculturas-verde": {
            "title": "Esculturas en verde",
            "hfov": 120,
            "pitch": -6.084406379303568,
            "yaw": -188.23135395114815,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "42-esculturas-verde/cubo/f.jpg",
                rutaBase + "42-esculturas-verde/cubo/r.jpg",
                rutaBase + "42-esculturas-verde/cubo/b.jpg",
                rutaBase + "42-esculturas-verde/cubo/l.jpg",
                rutaBase + "42-esculturas-verde/cubo/u.jpg",
                rutaBase + "42-esculturas-verde/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -8.569489176276583,
                    "yaw": 104.41560324469928,
                    "type": "scene",
                    "text": "Esculturas en verde",
                    "sceneId": "41-esculturas-verde"
                },
                {
                    "pitch": -4.006017232914275,
                    "yaw": -67.81749445638005,
                    "type": "scene",
                    "text": "Gremio de maestros",
                    "sceneId": "43-gremio-maestros"
                }
            ]
        },
        "43-gremio-maestros": {
            "title": "Gremio de maestros",
            "hfov": 120,
            "pitch": 3.459839158328448,
            "yaw": 159.38805406233058,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "43-gremio-maestros/cubo/f.jpg",
                rutaBase + "43-gremio-maestros/cubo/r.jpg",
                rutaBase + "43-gremio-maestros/cubo/b.jpg",
                rutaBase + "43-gremio-maestros/cubo/l.jpg",
                rutaBase + "43-gremio-maestros/cubo/u.jpg",
                rutaBase + "43-gremio-maestros/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.927954328112293,
                    "yaw": 84.29348275189244,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "32-avenida-transversal-derecha"
                },
                {
                    "pitch": -2.516427839198233,
                    "yaw": 127.34270706964212,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "40-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -1.8942209226753752,
                    "yaw": 210.27773306958292,
                    "type": "scene",
                    "text": "Esculturas en verde",
                    "sceneId": "42-esculturas-verde"
                },
                {
                    "pitch": -1.8560459698250913,
                    "yaw": 265.04505004336266,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "46-nichos"
                }
            ]
        },
        "44-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -0.020864466032088025,
            "yaw": 201.53238695784194,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "44-nichos/cubo/f.jpg",
                rutaBase + "44-nichos/cubo/r.jpg",
                rutaBase + "44-nichos/cubo/b.jpg",
                rutaBase + "44-nichos/cubo/l.jpg",
                rutaBase + "44-nichos/cubo/u.jpg",
                rutaBase + "44-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.2936042426193994,
                    "yaw": 310.581878810503,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "8-avenida-principal-incasica"
                },
                {
                    "pitch": -2.9817723313752413,
                    "yaw": -74.28063005538365,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "37-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -6.354312252147741,
                    "yaw": 116.25063078650972,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "45-nichos"
                }
            ]
        },
        "45-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -0.6700920275829931,
            "yaw": 88.26077594845015,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "45-nichos/cubo/f.jpg",
                rutaBase + "45-nichos/cubo/r.jpg",
                rutaBase + "45-nichos/cubo/b.jpg",
                rutaBase + "45-nichos/cubo/l.jpg",
                rutaBase + "45-nichos/cubo/u.jpg",
                rutaBase + "45-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.90655771501854,
                    "yaw": 26.03568638576281,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "10-avenida-principal-incasica"
                },
                {
                    "pitch": -8.12701865040977,
                    "yaw": 223.7910677736034,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "44-nichos"
                },
                {
                    "pitch": -4.4417626604323,
                    "yaw": 44.140767393424596,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "51-mausoleos"
                }
            ]
        },
        "46-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -0.5859834973724478,
            "yaw": 22.165333582031998,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "46-nichos/cubo/f.jpg",
                rutaBase + "46-nichos/cubo/r.jpg",
                rutaBase + "46-nichos/cubo/b.jpg",
                rutaBase + "46-nichos/cubo/l.jpg",
                rutaBase + "46-nichos/cubo/u.jpg",
                rutaBase + "46-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.5486407655322445,
                    "yaw": -27.072647342455944,
                    "type": "scene",
                    "text": "Gremio de maestros",
                    "sceneId": "43-gremio-maestros"
                },
                {
                    "pitch": -3.968932093044732,
                    "yaw": 151.5820736066462,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "47-nichos"
                }
            ]
        },
        "47-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -4.182158613471603,
            "yaw": -232.54473668372404,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "47-nichos/cubo/f.jpg",
                rutaBase + "47-nichos/cubo/r.jpg",
                rutaBase + "47-nichos/cubo/b.jpg",
                rutaBase + "47-nichos/cubo/l.jpg",
                rutaBase + "47-nichos/cubo/u.jpg",
                rutaBase + "47-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.769996954199261,
                    "yaw": -270.36499107778394,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "46-nichos"
                },
                {
                    "pitch": -3.3709615652612026,
                    "yaw": -182.57833544118054,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "48-pasadizo"
                },
                {
                    "pitch": -1.333068575328539,
                    "yaw": -92.19852224769046,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "55-nichos"
                }
            ]
        },
        "48-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": -2.170707303530215,
            "yaw": 157.3519616118417,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "48-pasadizo/cubo/f.jpg",
                rutaBase + "48-pasadizo/cubo/r.jpg",
                rutaBase + "48-pasadizo/cubo/b.jpg",
                rutaBase + "48-pasadizo/cubo/l.jpg",
                rutaBase + "48-pasadizo/cubo/u.jpg",
                rutaBase + "48-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.53281317931656,
                    "yaw": -24.642761439206268,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "47-nichos"
                },
                {
                    "pitch": -4.81866835800698,
                    "yaw": 156.7509229625752,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "49-interseccion"
                },
                {
                    "pitch": -6.337304199950308,
                    "yaw": 246.2503621857139,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "54-tumbas"
                }
            ]
        },
        "49-interseccion": {
            "title": "Intersección",
            "hfov": 112.17375000268221,
            "pitch": 0.3013761952119616,
            "yaw": 202.4316448281396,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "49-interseccion/cubo/f.jpg",
                rutaBase + "49-interseccion/cubo/r.jpg",
                rutaBase + "49-interseccion/cubo/b.jpg",
                rutaBase + "49-interseccion/cubo/l.jpg",
                rutaBase + "49-interseccion/cubo/u.jpg",
                rutaBase + "49-interseccion/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.600414404274603,
                    "yaw": 294.1958269030927,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "48-pasadizo"
                },
                {
                    "pitch": -4.739861051900287,
                    "yaw": 111.18854353361937,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "50-pasadizo"
                },
                {
                    "pitch": -3.4106458559215884,
                    "yaw": -157.12505531634807,
                    "type": "scene",
                    "text": "Escultura en piedra de la Virgen De Legarda",
                    "sceneId": "57-escultura-piedra-virgen-de-legarda"
                }
            ]
        },
        "50-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 0.6812415782643422,
            "yaw": -234.12921781428707,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "50-pasadizo/cubo/f.jpg",
                rutaBase + "50-pasadizo/cubo/r.jpg",
                rutaBase + "50-pasadizo/cubo/b.jpg",
                rutaBase + "50-pasadizo/cubo/l.jpg",
                rutaBase + "50-pasadizo/cubo/u.jpg",
                rutaBase + "50-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.355219971199694,
                    "yaw": 125.49909172031722,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "49-interseccion"
                },
                {
                    "pitch": -4.085501449366761,
                    "yaw": 305.1740500003328,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "51-mausoleos"
                },
                {
                    "pitch": -5.831456560243595,
                    "yaw": 36.835010120214555,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "53-tumbas"
                }
            ]
        },
        "51-mausoleos": {
            "title": "Mausoleos",
            "hfov": 120,
            "pitch": 1.6417209240497836,
            "yaw": -146.86431565371703,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "51-mausoleos/cubo/f.jpg",
                rutaBase + "51-mausoleos/cubo/r.jpg",
                rutaBase + "51-mausoleos/cubo/b.jpg",
                rutaBase + "51-mausoleos/cubo/l.jpg",
                rutaBase + "51-mausoleos/cubo/u.jpg",
                rutaBase + "51-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.131973495265427,
                    "yaw": 9.592748806473782,
                    "type": "scene",
                    "text": "Avenida pricipal Incásica",
                    "sceneId": "10-avenida-principal-incasica"
                },
                {
                    "pitch": -4.518457927398995,
                    "yaw": -20.631240187206874,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "45-nichos"
                },
                {
                    "pitch": -4.392530540260128,
                    "yaw": -114.51263235667012,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "50-pasadizo"
                },
                {
                    "pitch": -4.098256869113167,
                    "yaw": -205.0715676958401,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "52-pazadizo-y-mausoleo"
                }
            ]
        },
        "52-pazadizo-y-mausoleo": {
            "title": "Pasadizo y mausoleos",
            "hfov": 120,
            "pitch": 4.854646074296075,
            "yaw": 70.91849164067746,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "52-pazadizo-y-mausoleo/cubo/f.jpg",
                rutaBase + "52-pazadizo-y-mausoleo/cubo/r.jpg",
                rutaBase + "52-pazadizo-y-mausoleo/cubo/b.jpg",
                rutaBase + "52-pazadizo-y-mausoleo/cubo/l.jpg",
                rutaBase + "52-pazadizo-y-mausoleo/cubo/u.jpg",
                rutaBase + "52-pazadizo-y-mausoleo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.0421368506293645,
                    "yaw": 113.68479492814137,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "51-mausoleos"
                },
                {
                    "pitch": -6.299504158145403,
                    "yaw": 21.1498698981789,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "53-tumbas"
                },
                {
                    "pitch": -5.727977963816805,
                    "yaw": -63.985080919820405,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "59-mausoleos"
                }
            ]
        },
        "53-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -3.8727841976793926,
            "yaw": 235.21962503616083,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "53-tumbas/cubo/f.jpg",
                rutaBase + "53-tumbas/cubo/r.jpg",
                rutaBase + "53-tumbas/cubo/b.jpg",
                rutaBase + "53-tumbas/cubo/l.jpg",
                rutaBase + "53-tumbas/cubo/u.jpg",
                rutaBase + "53-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.945572605094172,
                    "yaw": 1.0946420540717554,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "50-pasadizo"
                },
                {
                    "pitch": -5.04850005703475,
                    "yaw": 87.25916497676866,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "52-pazadizo-y-mausoleo"
                },
                {
                    "pitch": -6.222407607685599,
                    "yaw": 181.0689814122096,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "58-pasadizo"
                }
            ]
        },
        "54-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -5.157713448074024,
            "yaw": -268.15309481723864,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "54-tumbas/cubo/f.jpg",
                rutaBase + "54-tumbas/cubo/r.jpg",
                rutaBase + "54-tumbas/cubo/b.jpg",
                rutaBase + "54-tumbas/cubo/l.jpg",
                rutaBase + "54-tumbas/cubo/u.jpg",
                rutaBase + "54-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -11.19741730938848,
                    "yaw": 33.45402024062967,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "48-pasadizo"
                },
                {
                    "pitch": -3.9376028595195747,
                    "yaw": 206.95307992831255,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "56-pasadizo"
                }
            ]
        },
        "55-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": 0.3246367993914372,
            "yaw": -79.14969416375719,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "55-nichos/cubo/f.jpg",
                rutaBase + "55-nichos/cubo/r.jpg",
                rutaBase + "55-nichos/cubo/b.jpg",
                rutaBase + "55-nichos/cubo/l.jpg",
                rutaBase + "55-nichos/cubo/u.jpg",
                rutaBase + "55-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.2960297756736967,
                    "yaw": -150.57048556963113,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "47-nichos"
                },
                {
                    "pitch": -3.8742376065946154,
                    "yaw": -62.90755223498606,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "56-pasadizo"
                },
                {
                    "pitch": -7.615477397560877,
                    "yaw": 29.133327230641736,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "63-pasadizo-y-nichos"
                }
            ]
        },
        "56-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 4.996669384639391,
            "yaw": 181.53819382015686,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "56-pasadizo/cubo/f.jpg",
                rutaBase + "56-pasadizo/cubo/r.jpg",
                rutaBase + "56-pasadizo/cubo/b.jpg",
                rutaBase + "56-pasadizo/cubo/l.jpg",
                rutaBase + "56-pasadizo/cubo/u.jpg",
                rutaBase + "56-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.884154193712248,
                    "yaw": 127.58081056441094,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "54-tumbas"
                },
                {
                    "pitch": -4.393734961685732,
                    "yaw": 34.715822688758756,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "55-nichos"
                },
                {
                    "pitch": -5.229418796635147,
                    "yaw": 216.05742169350665,
                    "type": "scene",
                    "text": "Escultura en piedra de la Virgen De Legarda",
                    "sceneId": "57-escultura-piedra-virgen-de-legarda"
                },
                {
                    "pitch": -6.957202136332021,
                    "yaw": -51.339806931633106,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "62-tumbas"
                }
            ]
        },
        "57-escultura-piedra-virgen-de-legarda": {
            "title": "Escultura en piedra de la Virgen De Legarda",
            "hfov": 120,
            "pitch": -4.9770859543771495,
            "yaw": 14.492244615688453,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "57-escultura-piedra-virgen-de-legarda/cubo/f.jpg",
                rutaBase + "57-escultura-piedra-virgen-de-legarda/cubo/r.jpg",
                rutaBase + "57-escultura-piedra-virgen-de-legarda/cubo/b.jpg",
                rutaBase + "57-escultura-piedra-virgen-de-legarda/cubo/l.jpg",
                rutaBase + "57-escultura-piedra-virgen-de-legarda/cubo/u.jpg",
                rutaBase + "57-escultura-piedra-virgen-de-legarda/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.9888240500275116,
                    "yaw": -158.50228534097468,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "49-interseccion"
                },
                {
                    "pitch": -6.100600680069347,
                    "yaw": -273.5167981280852,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "56-pasadizo"
                },
                {
                    "pitch": -4.320460101845148,
                    "yaw": -47.1220354103936,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "58-pasadizo"
                },
                {
                    "pitch": -0.8152634937849825,
                    "yaw": 19.608143087189568,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "66-interseccion"
                },

                // Hotspot tipo info
                // lado derecho desde la entrada
                {
                    "pitch": 5.969349928608104,
                    "yaw": 8.05890554241647,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ESCULTURA EN PIEDRA DE LA VIRGEN DE LEGARDA',
                        "contenido": 'Representa la escultura de madera original del capitalino Bernardo de Legarda de la antigua Escuela Quiteña de arte. Concebida como devoción a la inmaculada concepción, pisando la serpiente como triunfo divino sobre satanás. <br>Elaborada en piedra andesita por el escultor José Antonio Chuquín.',
                        "id": "monumento-eepdlvdl"
                    }
                }
            ]
        },
        "58-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": -2.8283470484832316,
            "yaw": -253.8566449390243,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "58-pasadizo/cubo/f.jpg",
                rutaBase + "58-pasadizo/cubo/r.jpg",
                rutaBase + "58-pasadizo/cubo/b.jpg",
                rutaBase + "58-pasadizo/cubo/l.jpg",
                rutaBase + "58-pasadizo/cubo/u.jpg",
                rutaBase + "58-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.623984705591619,
                    "yaw": -162.84003791565286,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "53-tumbas"
                },
                {
                    "pitch": -7.281734136984404,
                    "yaw": -252.99480356735057,
                    "type": "scene",
                    "text": "Escultura en piedra de la Virgen De Legarda",
                    "sceneId": "57-escultura-piedra-virgen-de-legarda"
                },
                {
                    "pitch": -3.7754876449397887,
                    "yaw": -73.75984796865329,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "59-mausoleos"
                },
                {
                    "pitch": -7.543451810711334,
                    "yaw": 17.034834101728688,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "61-tumbas"
                },

                // Hotspots tipo info
                // parte derecha
                {
                    "pitch": 9.183521575319574,
                    "yaw": 128.27941318509133,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ARCOS PARABÓLICOS PERALTADOS',
                        "contenido": 'Diseñados con una base cuadrada, donde se erige el arco en forma de parábola, formando la arquería por sus formas sucesivas y llamativas.',
                        "id": "arco-pp"
                    }
                }
            ]
        },
        "59-mausoleos": {
            "title": "Mausoleos",
            "hfov": 120,
            "pitch": -12.64729283405265,
            "yaw": -74.2451248512304,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "59-mausoleos/cubo/f.jpg",
                rutaBase + "59-mausoleos/cubo/r.jpg",
                rutaBase + "59-mausoleos/cubo/b.jpg",
                rutaBase + "59-mausoleos/cubo/l.jpg",
                rutaBase + "59-mausoleos/cubo/u.jpg",
                rutaBase + "59-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -7.09776878525389,
                    "yaw": 39.21236965049557,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "52-pazadizo-y-mausoleo"
                },
                {
                    "pitch": -5.347334461077679,
                    "yaw": -51.1700217467975,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "58-pasadizo"
                },
                {
                    "pitch": -5.980853155642862,
                    "yaw": -141.1499403668762,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "60-pasadizo-y-mausoleos"
                }
            ]
        },
        "60-pasadizo-y-mausoleos": {
            "title": "Pasadizo y mausoleos",
            "hfov": 120,
            "pitch": 2.995968468163276,
            "yaw": 212.46179177718065,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "60-pasadizo-y-mausoleos/cubo/f.jpg",
                rutaBase + "60-pasadizo-y-mausoleos/cubo/r.jpg",
                rutaBase + "60-pasadizo-y-mausoleos/cubo/b.jpg",
                rutaBase + "60-pasadizo-y-mausoleos/cubo/l.jpg",
                rutaBase + "60-pasadizo-y-mausoleos/cubo/u.jpg",
                rutaBase + "60-pasadizo-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.127892151294441,
                    "yaw": 329.48479887505044,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "59-mausoleos"
                },
                {
                    "pitch": -5.13314625531453,
                    "yaw": 238.56742582725118,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "61-tumbas"
                },
                {
                    "pitch": -6.4444604335985485,
                    "yaw": 150.60379964451238,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "68-mausoleos-y-nichos"
                }
            ]
        },
        "61-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -6.835037446997049,
            "yaw": 98.8193027962682,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "61-tumbas/cubo/f.jpg",
                rutaBase + "61-tumbas/cubo/r.jpg",
                rutaBase + "61-tumbas/cubo/b.jpg",
                rutaBase + "61-tumbas/cubo/l.jpg",
                rutaBase + "61-tumbas/cubo/u.jpg",
                rutaBase + "61-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.6514572582741796,
                    "yaw": 105.76924035030041,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "58-pasadizo"
                },
                {
                    "pitch": -5.65014129213838,
                    "yaw": 238.33904244468047,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "60-pasadizo-y-mausoleos"
                },
                {
                    "pitch": -5.959880372904562,
                    "yaw": 342.81529591553954,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "67-pasadizo"
                }
            ]
        },
        "62-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -2.6641900553805016,
            "yaw": 130.83036461369187,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "62-tumbas/cubo/f.jpg",
                rutaBase + "62-tumbas/cubo/r.jpg",
                rutaBase + "62-tumbas/cubo/b.jpg",
                rutaBase + "62-tumbas/cubo/l.jpg",
                rutaBase + "62-tumbas/cubo/u.jpg",
                rutaBase + "62-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -7.200408260649469,
                    "yaw": 80.4751398397995,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "56-pasadizo"
                },
                {
                    "pitch": -4.264498645605952,
                    "yaw": -20.750835017878615,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "63-pasadizo-y-nichos"
                },
                {
                    "pitch": -5.405110225856227,
                    "yaw": -111.34043101969317,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "65-pasadizo"
                }
            ]
        },
        "63-pasadizo-y-nichos": {
            "title": "Pasadizo y nichos",
            "hfov": 120,
            "pitch": 2.9840944401770204,
            "yaw": 163.27937752079595,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "63-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "63-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "63-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "63-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "63-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "63-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -7.483908084069755,
                    "yaw": 101.10309288575247,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "55-nichos"
                },
                {
                    "pitch": -3.8991494434136564,
                    "yaw": 189.00444846985238,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "62-tumbas"
                },
                {
                    "pitch": -6.648906918531534,
                    "yaw": 281.35210412065544,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "64-nichos"
                }
            ]
        },
        "64-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -0.3064959133896945,
            "yaw": 3.8278302708346477,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "64-nichos/cubo/f.jpg",
                rutaBase + "64-nichos/cubo/r.jpg",
                rutaBase + "64-nichos/cubo/b.jpg",
                rutaBase + "64-nichos/cubo/l.jpg",
                rutaBase + "64-nichos/cubo/u.jpg",
                rutaBase + "64-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.7693715177443154,
                    "yaw": -116.8431726594363,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "63-pasadizo-y-nichos"
                },
                {
                    "pitch": -5.041872532768344,
                    "yaw": -25.54782575935726,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "65-pasadizo"
                },
                {
                    "pitch": -6.021076183362714,
                    "yaw": 65.02687193800361,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "73-pasadizo-y-nichos"
                }
            ]
        },
        "65-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 1.9572718269311085,
            "yaw": -112.36148791869466,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "65-pasadizo/cubo/f.jpg",
                rutaBase + "65-pasadizo/cubo/r.jpg",
                rutaBase + "65-pasadizo/cubo/b.jpg",
                rutaBase + "65-pasadizo/cubo/l.jpg",
                rutaBase + "65-pasadizo/cubo/u.jpg",
                rutaBase + "65-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.257917968595381,
                    "yaw": -4.800756762138853,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "62-tumbas"
                },
                {
                    "pitch": -3.9689826232823133,
                    "yaw": -96.7245071784526,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "64-nichos"
                },
                {
                    "pitch": -4.080461516567638,
                    "yaw": 84.58417624805045,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "66-interseccion"
                },
                {
                    "pitch": -5.265049681395265,
                    "yaw": 176.18330063994188,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "72-tumbas"
                }
            ]
        },
        "66-interseccion": {
            "title": "Intersección",
            "hfov": 120,
            "pitch": -5.675390946620944,
            "yaw": 105.62922778178476,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "66-interseccion/cubo/f.jpg",
                rutaBase + "66-interseccion/cubo/r.jpg",
                rutaBase + "66-interseccion/cubo/b.jpg",
                rutaBase + "66-interseccion/cubo/l.jpg",
                rutaBase + "66-interseccion/cubo/u.jpg",
                rutaBase + "66-interseccion/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.3408615144982585,
                    "yaw": 89.12493393979776,
                    "type": "scene",
                    "text": "Escultura en piedra de la Virgen De Legarda",
                    "sceneId": "57-escultura-piedra-virgen-de-legarda"
                },
                {
                    "pitch": -4.481925366731985,
                    "yaw": 64.16271327130906,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "65-pasadizo"
                },
                {
                    "pitch": -4.871161629511939,
                    "yaw": 243.6654329801138,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "67-pasadizo"
                },
                {
                    "pitch": -5.271058008025393,
                    "yaw": 340.48294994432405,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "71-pasadizo"
                }
            ]
        },
        "67-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 6.8280711346517275,
            "yaw": 223.10680694022432,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "67-pasadizo/cubo/f.jpg",
                rutaBase + "67-pasadizo/cubo/r.jpg",
                rutaBase + "67-pasadizo/cubo/b.jpg",
                rutaBase + "67-pasadizo/cubo/l.jpg",
                rutaBase + "67-pasadizo/cubo/u.jpg",
                rutaBase + "67-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.0079466657781815,
                    "yaw": 181.2451734480369,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "61-tumbas"
                },
                {
                    "pitch": -6.315310073409353,
                    "yaw": 92.1208695680633,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "66-interseccion"
                },
                {
                    "pitch": -3.9925811401562754,
                    "yaw": 271.2964639676179,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "68-mausoleos-y-nichos"
                },
                {
                    "pitch": -5.6458939921106825,
                    "yaw": 0.8474248045628769,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "70-tumbas"
                }
            ]
        },
        "68-mausoleos-y-nichos": {
            "title": "Mausoleos y tumbas",
            "hfov": 120,
            "pitch": -2.266883618949895,
            "yaw": 187.02346765845226,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "68-mausoleos-y-nichos/cubo/f.jpg",
                rutaBase + "68-mausoleos-y-nichos/cubo/r.jpg",
                rutaBase + "68-mausoleos-y-nichos/cubo/b.jpg",
                rutaBase + "68-mausoleos-y-nichos/cubo/l.jpg",
                rutaBase + "68-mausoleos-y-nichos/cubo/u.jpg",
                rutaBase + "68-mausoleos-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -8.893227128808636,
                    "yaw": 355.29590283867384,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "13-avenida-principal-incasica"
                },
                {
                    "pitch": -4.377815892116169,
                    "yaw": 264.0398239358334,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "60-pasadizo-y-mausoleos"
                },
                {
                    "pitch": -3.9948596792125035,
                    "yaw": 175.18584010766196,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "67-pasadizo"
                },
                {
                    "pitch": -4.099194084531685,
                    "yaw": 86.032492867606,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "69-pasadizo-y-nichos"
                }
            ]
        },
        "69-pasadizo-y-nichos": {
            "title": "Pasasdizo y nichos",
            "hfov": 120,
            "pitch": -0.530216644525364,
            "yaw": 87.70740724733572,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "69-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "69-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "69-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "69-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "69-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "69-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.8040008931039282,
                    "yaw": 126.56814055787848,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "68-mausoleos-y-nichos"
                },
                {
                    "pitch": -7.051521801481395,
                    "yaw": 35.31518401924979,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "70-tumbas"
                },
                {
                    "pitch": -5.538829028233372,
                    "yaw": -54.091381541720466,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "78-nichos"
                }
            ]
        },
        "70-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -4.370311331425829,
            "yaw": 219.8424056790201,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "70-tumbas/cubo/f.jpg",
                rutaBase + "70-tumbas/cubo/r.jpg",
                rutaBase + "70-tumbas/cubo/b.jpg",
                rutaBase + "70-tumbas/cubo/l.jpg",
                rutaBase + "70-tumbas/cubo/u.jpg",
                rutaBase + "70-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": 0.26599114796268,
                    "yaw": 261.0877202759722,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "67-pasadizo"
                },
                {
                    "pitch": -3.0193072871868654,
                    "yaw": 348.2756361778965,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "69-pasadizo-y-nichos"
                },
                {
                    "pitch": -4.61501065574349,
                    "yaw": 179.29175862358616,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "71-pasadizo"
                },
                {
                    "pitch": -5.982004183608886,
                    "yaw": 84.6384581196057,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "77-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "71-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 5.056574519808887,
            "yaw": 46.57233532229274,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "71-pasadizo/cubo/f.jpg",
                rutaBase + "71-pasadizo/cubo/r.jpg",
                rutaBase + "71-pasadizo/cubo/b.jpg",
                rutaBase + "71-pasadizo/cubo/l.jpg",
                rutaBase + "71-pasadizo/cubo/u.jpg",
                rutaBase + "71-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.4350823171531024,
                    "yaw": 18.189622753779553,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "66-interseccion"
                },
                {
                    "pitch": -4.859301824898704,
                    "yaw": 103.20647131032803,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "70-tumbas"
                },
                {
                    "pitch": -4.356047786573732,
                    "yaw": -73.9749101277408,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "72-tumbas"
                },
                {
                    "pitch": -6.218886071803501,
                    "yaw": -160.34392914607344,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "76-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "72-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": 0.9800537158733749,
            "yaw": 276.07660111000433,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "72-tumbas/cubo/f.jpg",
                rutaBase + "72-tumbas/cubo/r.jpg",
                rutaBase + "72-tumbas/cubo/b.jpg",
                rutaBase + "72-tumbas/cubo/l.jpg",
                rutaBase + "72-tumbas/cubo/u.jpg",
                rutaBase + "72-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.7027533052715205,
                    "yaw": 276.88613596429354,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "65-pasadizo"
                },
                {
                    "pitch": -3.9545594805288475,
                    "yaw": 8.133084695587513,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "71-pasadizo"
                },
                {
                    "pitch": -4.935124249251777,
                    "yaw": -178.42381821158042,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "73-pasadizo-y-nichos"
                },
                {
                    "pitch": -7.40940605728815,
                    "yaw": -275.98045937457783,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "75-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "73-pasadizo-y-nichos": {
            "title": "Pasadizo y nichos",
            "hfov": 120,
            "pitch": -5.592430896453202,
            "yaw": 77.32643631407346,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "73-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "73-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "73-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "73-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "73-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "73-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.2376506645863319,
                    "yaw": -91.41946947401614,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "64-nichos"
                },
                {
                    "pitch": -3.6734308347350266,
                    "yaw": -0.8557571595524447,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "72-tumbas"
                },
                {
                    "pitch": -7.338948267949377,
                    "yaw": 88.92096597547875,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "74-mausoleos-y-nichos"
                }
            ]
        },
        "74-mausoleos-y-nichos": {
            "title": "Mausoleos y nichos",
            "hfov": 120,
            "pitch": 2.397445394802893,
            "yaw": -28.68594143289184,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "74-mausoleos-y-nichos/cubo/f.jpg",
                rutaBase + "74-mausoleos-y-nichos/cubo/r.jpg",
                rutaBase + "74-mausoleos-y-nichos/cubo/b.jpg",
                rutaBase + "74-mausoleos-y-nichos/cubo/l.jpg",
                rutaBase + "74-mausoleos-y-nichos/cubo/u.jpg",
                rutaBase + "74-mausoleos-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": 1.1711883663112987,
                    "yaw": -97.8781594312996,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "73-pasadizo-y-nichos"
                },
                {
                    "pitch": -2.638641870662386,
                    "yaw": -14.718369252216696,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "75-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "75-esculturas-verde-y-mausoleos": {
            "title": "Esculturas en verde y mausoleos",
            "hfov": 120,
            "pitch": -6.343904154495391,
            "yaw": 348.3256036387285,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "75-esculturas-verde-y-mausoleos/cubo/f.jpg",
                rutaBase + "75-esculturas-verde-y-mausoleos/cubo/r.jpg",
                rutaBase + "75-esculturas-verde-y-mausoleos/cubo/b.jpg",
                rutaBase + "75-esculturas-verde-y-mausoleos/cubo/l.jpg",
                rutaBase + "75-esculturas-verde-y-mausoleos/cubo/u.jpg",
                rutaBase + "75-esculturas-verde-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.1345663330615876,
                    "yaw": 331.3737391442838,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "72-tumbas"
                },
                {
                    "pitch": -3.056540849879614,
                    "yaw": 254.95016910875006,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "74-mausoleos-y-nichos"
                },
                {
                    "pitch": -4.632264003692102,
                    "yaw": 72.10297008356216,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "76-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "76-esculturas-verde-y-mausoleos": {
            "title": "Esculturas en verde y mausoleos",
            "hfov": 120,
            "pitch": 10.696273225896592,
            "yaw": -29.687937719943154,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "76-esculturas-verde-y-mausoleos/cubo/f.jpg",
                rutaBase + "76-esculturas-verde-y-mausoleos/cubo/r.jpg",
                rutaBase + "76-esculturas-verde-y-mausoleos/cubo/b.jpg",
                rutaBase + "76-esculturas-verde-y-mausoleos/cubo/l.jpg",
                rutaBase + "76-esculturas-verde-y-mausoleos/cubo/u.jpg",
                rutaBase + "76-esculturas-verde-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": 0.5955648651299761,
                    "yaw": -27.838662030563256,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "71-pasadizo"
                },
                {
                    "pitch": -3.4598874532701975,
                    "yaw": -111.38276532297442,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "75-esculturas-verde-y-mausoleos"
                },
                {
                    "pitch": -4.199973316843367,
                    "yaw": 57.7364729193536,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "77-esculturas-verde-y-mausoleos"
                },

                // Hotspot tipo info
                // lado derecho desde la entrada
                {
                    "pitch": 14.163273679951004,
                    "yaw": 11.146009856570547,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'SOL DE ORO DE LA CULTURA TOLITA',
                        "contenido": 'Pieza de magnífica admiración arqueológica insignia del Banco Central del Ecuador, La Cultura la Tolita floreció en Esmeraldas entre los años 300 antes de Cristo. <br>El sol de la Tolita es un rostro antropomorfo, rodeado por 44 hilos zigzagueantes que termina en forma de una serpiente.',
                        "id": "sol-dodlct"
                    }
                }
            ]
        },
        "77-esculturas-verde-y-mausoleos": {
            "title": "Esculturas en verde y mausoleos",
            "hfov": 120,
            "pitch": -5.522468696186632,
            "yaw": -13.55700123972143,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "77-esculturas-verde-y-mausoleos/cubo/f.jpg",
                rutaBase + "77-esculturas-verde-y-mausoleos/cubo/r.jpg",
                rutaBase + "77-esculturas-verde-y-mausoleos/cubo/b.jpg",
                rutaBase + "77-esculturas-verde-y-mausoleos/cubo/l.jpg",
                rutaBase + "77-esculturas-verde-y-mausoleos/cubo/u.jpg",
                rutaBase + "77-esculturas-verde-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.2707438424357376,
                    "yaw": -33.293344006176554,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "70-tumbas"
                },
                {
                    "pitch": -3.2939854646721303,
                    "yaw": -104.38132380641595,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "76-esculturas-verde-y-mausoleos"
                },
                {
                    "pitch": -4.392220047476819,
                    "yaw": 72.40318514948703,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "78-nichos"
                }
            ]
        },
        "78-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -0.2942855536465102,
            "yaw": 10.175966171760251,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "78-nichos/cubo/f.jpg",
                rutaBase + "78-nichos/cubo/r.jpg",
                rutaBase + "78-nichos/cubo/b.jpg",
                rutaBase + "78-nichos/cubo/l.jpg",
                rutaBase + "78-nichos/cubo/u.jpg",
                rutaBase + "78-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.5883882148873991,
                    "yaw": 51.59033798232876,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "69-pasadizo-y-nichos"
                },
                {
                    "pitch": -4.266688444309159,
                    "yaw": -33.82977558757159,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "77-esculturas-verde-y-mausoleos"
                },
                {
                    "pitch": -8.65862059924053,
                    "yaw": 234.1063793920707,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "79-nichos"
                }
            ]
        },
        "79-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": 4.322896198993921,
            "yaw": 117.58495968817043,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "79-nichos/cubo/f.jpg",
                rutaBase + "79-nichos/cubo/r.jpg",
                rutaBase + "79-nichos/cubo/b.jpg",
                rutaBase + "79-nichos/cubo/l.jpg",
                rutaBase + "79-nichos/cubo/u.jpg",
                rutaBase + "79-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.5200687738616914,
                    "yaw": 184.22965175449855,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "16-avenida-principal-incasica"
                },
                {
                    "pitch": -1.8524554288273603,
                    "yaw": 86.42000651649346,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "78-nichos"
                }
            ]
        },
        "80-parque-izquierdo": {
            "title": "Jardín Altar de Dios",
            "hfov": 120,
            "pitch": -3.758257713645529,
            "yaw": -9.534738095711752,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "80-parque-izquierdo/cubo/f.jpg",
                rutaBase + "80-parque-izquierdo/cubo/r.jpg",
                rutaBase + "80-parque-izquierdo/cubo/b.jpg",
                rutaBase + "80-parque-izquierdo/cubo/l.jpg",
                rutaBase + "80-parque-izquierdo/cubo/u.jpg",
                rutaBase + "80-parque-izquierdo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.126815197008501,
                    "yaw": -184.64986967354784,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "1-avenida-principal-incasica"
                },
                {
                    "pitch": -0.8208557995618238,
                    "yaw": -48.76245730041622,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "81-parque-izquierdo"
                }
            ]
        },
        "81-parque-izquierdo": {
            "title": "Jardín Altar de Dios",
            "hfov": 120,
            "pitch": -9.470848523928066,
            "yaw": 94.64046943898063,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "81-parque-izquierdo/cubo/f.jpg",
                rutaBase + "81-parque-izquierdo/cubo/r.jpg",
                rutaBase + "81-parque-izquierdo/cubo/b.jpg",
                rutaBase + "81-parque-izquierdo/cubo/l.jpg",
                rutaBase + "81-parque-izquierdo/cubo/u.jpg",
                rutaBase + "81-parque-izquierdo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.610312749356382,
                    "yaw": 297.94682348709756,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "80-parque-izquierdo"
                },
                {
                    "pitch": -3.553075808057283,
                    "yaw": 98.34900349902894,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "82-altar-de-dios"
                },
                {
                    "pitch": -0.6115280077973946,
                    "yaw": 176.31501957581517,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "84-tunel"
                },
                {
                    "pitch": -0.14329613504231659,
                    "yaw": 223.91564439594862,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "85-tunel"
                }
            ]
        },
        "82-altar-de-dios": {
            "title": "Jardín Altar de Dios",
            "hfov": 120,
            "pitch": 4.0970832227132385,
            "yaw": 30.98428074470957,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "82-altar-de-dios/cubo/f.jpg",
                rutaBase + "82-altar-de-dios/cubo/r.jpg",
                rutaBase + "82-altar-de-dios/cubo/b.jpg",
                rutaBase + "82-altar-de-dios/cubo/l.jpg",
                rutaBase + "82-altar-de-dios/cubo/u.jpg",
                rutaBase + "82-altar-de-dios/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.728297753404945,
                    "yaw": 172.91516982037132,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "81-parque-izquierdo"
                },
                {
                    "pitch": -1.2393265013131516,
                    "yaw": -290.4252316993738,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "83-tunel"
                },
                {
                    "pitch": -0.6433224582700585,
                    "yaw": -228.501414935312,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "84-tunel"
                },

                // Hotspots tipo info
                // lado izquierdo
                {
                    "pitch": 6.4970872917236555,
                    "yaw": 47.784268537678315,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'HELICOIDAL O CARACOL "CAMINO AL INFINITO"',
                        "contenido": 'Conformada por: frontal de forma piramidal truncada de caras laterales rectangulares planas que representa la entrada al pasamano con grabados (trencilla), con espirales de franja ancha al inicio y terminal delgada, adornadas con espirales en serie en alto relieve de estilo jónico; en la parte superior de la escultura helicoidal porta un grabado de forma de tornillo sin fin.',
                        "id": "pagina-174"
                    }
                }
            ]
        },
        "83-tunel": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -0.44715706717315395,
            "yaw": 52.3260112757117,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "83-tunel/cubo/f.jpg",
                rutaBase + "83-tunel/cubo/r.jpg",
                rutaBase + "83-tunel/cubo/b.jpg",
                rutaBase + "83-tunel/cubo/l.jpg",
                rutaBase + "83-tunel/cubo/u.jpg",
                rutaBase + "83-tunel/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.493559431837525,
                    "yaw": 93.64343205166206,
                    "type": "scene",
                    "text": "Altar de Dios",
                    "sceneId": "82-altar-de-dios"
                },
                {
                    "pitch": -3.496092498172125,
                    "yaw": 10.313147004542664,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "84-tunel"
                }
            ]
        },
        "84-tunel": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -0.047157189895245644,
            "yaw": 161.60325249781786,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "84-tunel/cubo/f.jpg",
                rutaBase + "84-tunel/cubo/r.jpg",
                rutaBase + "84-tunel/cubo/b.jpg",
                rutaBase + "84-tunel/cubo/l.jpg",
                rutaBase + "84-tunel/cubo/u.jpg",
                rutaBase + "84-tunel/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.405624759124059,
                    "yaw": 244.00378885064822,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "81-parque-izquierdo"
                },
                {
                    "pitch": -1.7653781102754809,
                    "yaw": -19.774105868514688,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "83-tunel"
                },
                {
                    "pitch": -3.147850311595276,
                    "yaw": 162.10963370444992,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "85-tunel"
                },
                {
                    "pitch": -4.220050226002539,
                    "yaw": 81.57535932703895,
                    "type": "scene",
                    "text": "Miembros segunda misión geodésica francesa",
                    "sceneId": "89-miembros-segunda-mision-geodesica-francesa"
                }
            ]
        },
        "85-tunel": {
            "title": "Tunel",
            "hfov": 120,
            "pitch": -9.241934013433363,
            "yaw": 106.68141303173871,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "85-tunel/cubo/f.jpg",
                rutaBase + "85-tunel/cubo/r.jpg",
                rutaBase + "85-tunel/cubo/b.jpg",
                rutaBase + "85-tunel/cubo/l.jpg",
                rutaBase + "85-tunel/cubo/u.jpg",
                rutaBase + "85-tunel/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.048308454669322,
                    "yaw": 183.63290263324,
                    "type": "scene",
                    "text": "Jardín Altar de Dios",
                    "sceneId": "81-parque-izquierdo"
                },
                {
                    "pitch": -2.5756044735776435,
                    "yaw": 268.5268064525716,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "84-tunel"
                },
                {
                    "pitch": -3.3484052922962304,
                    "yaw": 88.9112409538101,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "4-avenida-principal-incasica"
                }
            ]
        },
        "86-cristo": {
            "title": "Cristo",
            "hfov": 120,
            "pitch": 3.7694321087031994,
            "yaw": -184.14373320598963,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "86-cristo/cubo/f.jpg",
                rutaBase + "86-cristo/cubo/r.jpg",
                rutaBase + "86-cristo/cubo/b.jpg",
                rutaBase + "86-cristo/cubo/l.jpg",
                rutaBase + "86-cristo/cubo/u.jpg",
                rutaBase + "86-cristo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": 6.826282676538156,
                    "yaw": -188.24349151547068,
                    "type": "scene",
                    "text": "Mausoleo del sindicato de choferes",
                    "sceneId": "87-mausoleo-sindicato-choferes"
                },
                {
                    "pitch": -1.5313755731689787,
                    "yaw": 128.2936831830119,
                    "type": "scene",
                    "text": "Mausoleo del sindicato de choferes",
                    "sceneId": "88-mausoleo-sindicato-choferes"
                },
                {
                    "pitch": -3.759349777166376,
                    "yaw": -94.23303293618218,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "97-avenida-transversal-izquierda"
                },

                // Hotspot tipo info
                // lado izquierdo desde la entrada
                {
                    "pitch": -4.208253865318602,
                    "yaw": 7.409007227410455,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'RESTOS DE JOSÉ MARÍA AZAEL FRANCO GURRERO.',
                        "contenido": 'La losa lleva el nombre del Escultor, de su esposa Esther Marina Carranco García y el de su hijo Benigno Franco Carranco, quien fallece súbitamente, después de cumplir su labor en calidad de Director Técnico de la Escultura en Verde, el 5 de septiembre del 2014.',
                        "id": "pagina-188"
                    }
                }
            ]
        },
        "87-mausoleo-sindicato-choferes": {
            "title": "Mausoleo del sindicato de choferes",
            "hfov": 120,
            "pitch": -5.281731128559633,
            "yaw": 5.363153314418888,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "87-mausoleo-sindicato-choferes/cubo/f.jpg",
                rutaBase + "87-mausoleo-sindicato-choferes/cubo/r.jpg",
                rutaBase + "87-mausoleo-sindicato-choferes/cubo/b.jpg",
                rutaBase + "87-mausoleo-sindicato-choferes/cubo/l.jpg",
                rutaBase + "87-mausoleo-sindicato-choferes/cubo/u.jpg",
                rutaBase + "87-mausoleo-sindicato-choferes/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -18.605467609628466,
                    "yaw": 7.985703195529023,
                    "type": "scene",
                    "text": "Cristo",
                    "sceneId": "86-cristo"
                },

                // Hotspot tipo info
                // lado izquierdo desde la entrada
                {
                    "pitch": -21.901301214041283,
                    "yaw": 83.94169905488052,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MAUSOLEO DEL SINDICATO DE CHOFERES',
                        "contenido": 'Espacio arquitectónico de estilo neoclásico, se encuentra en varios niveles y da cabida a un sin número de nichos para sus asociados. <br> Se construyó en 1954. <br> En la parte alta se aprecia una pequeña capilla.',
                        "id": "monumento-mdsdc"
                    }
                }
            ]
        },
        "88-mausoleo-sindicato-choferes": {
            "title": "Mausoleo del sindicato de choferes",
            "hfov": 120,
            "pitch": 5.7611845321320825,
            "yaw": 110.01211599351569,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "88-mausoleo-sindicato-choferes/cubo/f.jpg",
                rutaBase + "88-mausoleo-sindicato-choferes/cubo/r.jpg",
                rutaBase + "88-mausoleo-sindicato-choferes/cubo/b.jpg",
                rutaBase + "88-mausoleo-sindicato-choferes/cubo/l.jpg",
                rutaBase + "88-mausoleo-sindicato-choferes/cubo/u.jpg",
                rutaBase + "88-mausoleo-sindicato-choferes/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.2738678795903535,
                    "yaw": 267.2080630318518,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "84-tunel"
                },
                {
                    "pitch": -10.442729775046956,
                    "yaw": 51.128236923867405,
                    "type": "scene",
                    "text": "Miembros segunda misión geodésica francesa",
                    "sceneId": "89-miembros-segunda-mision-geodesica-francesa"
                },
                {
                    "pitch": -1.6752598059876507,
                    "yaw": 314.0278299063239,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "90-kiosko-estilo-frances-lado-sur-entrada"
                },
                {
                    "pitch": -3.0305435990547114,
                    "yaw": 160.92387533907362,
                    "type": "scene",
                    "text": "Cristo",
                    "sceneId": "86-cristo"
                }
            ]
        },
        "89-miembros-segunda-mision-geodesica-francesa": {
            "title": "Miembros segunda misión geodésica francesa",
            "hfov": 120,
            "pitch": -3.839157294020691,
            "yaw": 0.5638799283478377,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "89-miembros-segunda-mision-geodesica-francesa/cubo/f.jpg",
                rutaBase + "89-miembros-segunda-mision-geodesica-francesa/cubo/r.jpg",
                rutaBase + "89-miembros-segunda-mision-geodesica-francesa/cubo/b.jpg",
                rutaBase + "89-miembros-segunda-mision-geodesica-francesa/cubo/l.jpg",
                rutaBase + "89-miembros-segunda-mision-geodesica-francesa/cubo/u.jpg",
                rutaBase + "89-miembros-segunda-mision-geodesica-francesa/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.0313083782968233,
                    "yaw": -76.09907932490941,
                    "type": "scene",
                    "text": "Tunel",
                    "sceneId": "84-tunel"
                },
                {
                    "pitch": -9.246886807502632,
                    "yaw": -97.10387061126679,
                    "type": "scene",
                    "text": "Mausoleo del sindicato de choferes",
                    "sceneId": "88-mausoleo-sindicato-choferes"
                },
                {
                    "pitch": -0.911099176760465,
                    "yaw": -13.056567284332058,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "91-kiosko-estilo-frances-lado-sur-dentro"
                },
                {
                    "pitch": -1.4984357225471499,
                    "yaw": -42.387618956487586,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "90-kiosko-estilo-frances-lado-sur-entrada"
                },
                {
                    "pitch": -5.392016330660855,
                    "yaw": 102.01117632394605,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "96-avenida-transversal-izquierda"
                },

                // Hotspot tipo info
                // lado derecho desde la entrada
                {
                    "pitch": 3.270291847202312,
                    "yaw": 7.454984794254502,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MIEMBROS SEGUNDA MISIÓN GEODÉSICA FRANCESA',
                        "contenido": 'El científico Charles Roussell y el Sargento Segundo Polidori Espinosi, perteneciente a la segunda misión geodésica que midió la línea Ecuatorial, están enterrados en el Campo Santo JOSÉ MARÍA AZAEL FRANCO GUERRERO. <br>En 1900, los dos expedicionarios realizaron junto a 26 compañeros las mediciones de la línea Ecuatorial. <br> Durante este lapso, los investigadores ubicaron un observatorio astronómico en Tulcán. Además, dos pirámides geodésicas (topográficas) de cemento, en la ciudad de San Gabriel (Montúfar) y varios puntos de referencia en Tulcán y las comunidades de Angasmayo, la Rinconada, Troya, Machines, Mirador y el Pelado, esto permitió delimitar la provincia con exactitud.',
                        "id": "monumento-msmgf"
                    }
                }
            ]
        },
        "90-kiosko-estilo-frances-lado-sur-entrada": {
            "title": "Kiosko estilo francés lado sur",
            "hfov": 120,
            "pitch": -4.004790708190705,
            "yaw": 15.080955720922194,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "90-kiosko-estilo-frances-lado-sur-entrada/cubo/f.jpg",
                rutaBase + "90-kiosko-estilo-frances-lado-sur-entrada/cubo/r.jpg",
                rutaBase + "90-kiosko-estilo-frances-lado-sur-entrada/cubo/b.jpg",
                rutaBase + "90-kiosko-estilo-frances-lado-sur-entrada/cubo/l.jpg",
                rutaBase + "90-kiosko-estilo-frances-lado-sur-entrada/cubo/u.jpg",
                rutaBase + "90-kiosko-estilo-frances-lado-sur-entrada/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.9345277287179314,
                    "yaw": 79.59909288597716,
                    "type": "scene",
                    "text": "Mausoleo del sindicato de choferes",
                    "sceneId": "88-mausoleo-sindicato-choferes"
                },
                {
                    "pitch": -5.759837746398615,
                    "yaw": -10.826352745419172,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "92-kiosko-estilo-frances-lado-sur-dentro"
                },

                // Hotspot tipo info
                // lado izquierdo desde la entrada
                {
                    "pitch": 3.053180636708931,
                    "yaw": 19.623708796615905,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'KIOSKOS O CERRADOS DE ESTILO FRANCES, LADO SUR',
                        "contenido": 'Conformado por muros adornados en la parte superior con semiesferas; columnas de lados planos rectangulares adornadas en la parte superior por semiesferas; columnas de lados planos rectangulares con terminado en la parte superior prismático de lados triangulares; arcos de medio punto que entrelazan los muros. En el centro del kiosco le adorna un hermoso pino de variedad araucaria.',
                        "id": "pagina-184ls"
                    }
                }
            ]
        },
        "91-kiosko-estilo-frances-lado-sur-dentro": {
            "title": "Kiosko estilo francés lado sur",
            "hfov": 120,
            "pitch": -3.243798569196033,
            "yaw": -313.75259917864463,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "91-kiosko-estilo-frances-lado-sur-dentro/cubo/f.jpg",
                rutaBase + "91-kiosko-estilo-frances-lado-sur-dentro/cubo/r.jpg",
                rutaBase + "91-kiosko-estilo-frances-lado-sur-dentro/cubo/b.jpg",
                rutaBase + "91-kiosko-estilo-frances-lado-sur-dentro/cubo/l.jpg",
                rutaBase + "91-kiosko-estilo-frances-lado-sur-dentro/cubo/u.jpg",
                rutaBase + "91-kiosko-estilo-frances-lado-sur-dentro/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.4381906641027449,
                    "yaw": -99.47084994365247,
                    "type": "scene",
                    "text": "Miembros segunda misión geodésica francesa",
                    "sceneId": "89-miembros-segunda-mision-geodesica-francesa"
                },
                {
                    "pitch": -3.387381929188026,
                    "yaw": -330.06894548238586,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "90-kiosko-estilo-frances-lado-sur-entrada"
                },
                {
                    "pitch": -10.673798947449324,
                    "yaw": -285.7525788171807,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "92-kiosko-estilo-frances-lado-sur-dentro"
                }
            ]
        },
        "92-kiosko-estilo-frances-lado-sur-dentro": {
            "title": "Kiosko estilo francés lado sur",
            "hfov": 120,
            "pitch": -5.85844168043166,
            "yaw": 218.05924924180187,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "92-kiosko-estilo-frances-lado-sur-dentro/cubo/f.jpg",
                rutaBase + "92-kiosko-estilo-frances-lado-sur-dentro/cubo/r.jpg",
                rutaBase + "92-kiosko-estilo-frances-lado-sur-dentro/cubo/b.jpg",
                rutaBase + "92-kiosko-estilo-frances-lado-sur-dentro/cubo/l.jpg",
                rutaBase + "92-kiosko-estilo-frances-lado-sur-dentro/cubo/u.jpg",
                rutaBase + "92-kiosko-estilo-frances-lado-sur-dentro/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.8238927708238517,
                    "yaw": -41.67128680906838,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "90-kiosko-estilo-frances-lado-sur-entrada"
                },
                {
                    "pitch": -9.681028193220547,
                    "yaw": -95.31333715059795,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "91-kiosko-estilo-frances-lado-sur-dentro"
                },
                {
                    "pitch": -7.585188231717416,
                    "yaw": 78.40721997294101,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "93-kiosko-estilo-frances-lado-sur-entrada"
                }
            ]
        },
        "93-kiosko-estilo-frances-lado-sur-entrada": {
            "title": "Kiosko estilo francés lado sur",
            "hfov": 120,
            "pitch": -1.3779963627172862,
            "yaw": -330.0936806212981,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "93-kiosko-estilo-frances-lado-sur-entrada/cubo/f.jpg",
                rutaBase + "93-kiosko-estilo-frances-lado-sur-entrada/cubo/r.jpg",
                rutaBase + "93-kiosko-estilo-frances-lado-sur-entrada/cubo/b.jpg",
                rutaBase + "93-kiosko-estilo-frances-lado-sur-entrada/cubo/l.jpg",
                rutaBase + "93-kiosko-estilo-frances-lado-sur-entrada/cubo/u.jpg",
                rutaBase + "93-kiosko-estilo-frances-lado-sur-entrada/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.90915889711886,
                    "yaw": 6.7937915062223055,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "92-kiosko-estilo-frances-lado-sur-dentro"
                },
                {
                    "pitch": -4.525837237285844,
                    "yaw": -85.3473890017321,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "94-avenida-transversal-izquierda"
                }
            ]
        },
        "94-avenida-transversal-izquierda": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": -5.893997181971018,
            "yaw": -155.62476572923197,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "94-avenida-transversal-izquierda/cubo/f.jpg",
                rutaBase + "94-avenida-transversal-izquierda/cubo/r.jpg",
                rutaBase + "94-avenida-transversal-izquierda/cubo/b.jpg",
                rutaBase + "94-avenida-transversal-izquierda/cubo/l.jpg",
                rutaBase + "94-avenida-transversal-izquierda/cubo/u.jpg",
                rutaBase + "94-avenida-transversal-izquierda/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.6309642613526014,
                    "yaw": -95.91314668910331,
                    "type": "scene",
                    "text": "Kiosko estilo francés lado sur",
                    "sceneId": "93-kiosko-estilo-frances-lado-sur-entrada"
                },
                {
                    "pitch": -4.038071768539526,
                    "yaw": -188.1533798324584,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "95-avenida-transversal-izquierda"
                },
                {
                    "pitch": -6.885815410842741,
                    "yaw": -273.49846550816784,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "101-nichos"
                },

                // Hotspots tipo info
                // lado izquierdo
                {
                    "pitch": -3.4103779421239757,
                    "yaw": -139.62478607428406,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'TUCÁN',
                        "contenido": 'Tucán que habitó en la Provincia del Carchi, históricamente se cree dio origen según algunos tratadistas el nombre de la ciudad de Tulcán. La escultura artísticamente elaborada tiene alas y cola de bordes ondulados; cresta de borde redondeado; el pico del ave es largo; la obra de arte va sobre un pedestal pirámide truncada de caras laterales planas.',
                        "id": "pagina-148"
                    }
                },
                {
                    "pitch": -2.877042574285434,
                    "yaw": -159.8914486719403,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CUENCO DE ESTILO PANZALEO',
                        "contenido": 'De cuerpo cilíndrico con adornos en forma ovalada (orejones) en serie; terminado posterior anillado de alto relieve; labio redondeado; pedestal de forma de pirámide truncada de caras laterales trapezoidales planas; base de la escultura en verde cuadrada.',
                        "id": "pagina-146"
                    }
                },
                {
                    "pitch": 2.456290759047899,
                    "yaw": -169.75810720058612,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'UTENCILIO PORTA LÍQUIDOS INCÁSICO',
                        "contenido": 'Representa utensilio portador de líquidos (puro) que utilizaban los antepasados; en la parte posterior lleva un borde (tapón); se encuentra sobre pirámide truncada de lados trapezoidales oblicuos; base de la escultura cuadrada.',
                        "id": "pagina-144"
                    }
                }
            ]
        },
        "95-avenida-transversal-izquierda": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": -8.875103506602823,
            "yaw": 85.74950332198395,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "95-avenida-transversal-izquierda/cubo/f.jpg",
                rutaBase + "95-avenida-transversal-izquierda/cubo/r.jpg",
                rutaBase + "95-avenida-transversal-izquierda/cubo/b.jpg",
                rutaBase + "95-avenida-transversal-izquierda/cubo/l.jpg",
                rutaBase + "95-avenida-transversal-izquierda/cubo/u.jpg",
                rutaBase + "95-avenida-transversal-izquierda/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.706368157817528,
                    "yaw": 153.75340680697119,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "94-avenida-transversal-izquierda"
                },
                {
                    "pitch": -3.482963352547177,
                    "yaw": -23.982971030436318,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "96-avenida-transversal-izquierda"
                },

                // Hotspots tipo info
                // lado izquierdo
                {
                    "pitch": 3.6582216887096757,
                    "yaw": 123.34951959802561,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CAZUELA DE ESTILO PANZALEO',
                        "contenido": 'De cuerpo cilíndrico con adornos en alto relieve en forma de "U" invertidos y entrelazados, formando artísticamente una cenefa; labio redondeado; borde invertido; la escultura en verde va sobre pedestal en forma de pirámide truncada, de caras laterales planas trapezoidales.',
                        "id": "pagina-142"
                    }
                },
                {
                    "pitch": 6.591550953032592,
                    "yaw": 105.21617812667145,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'OLLA DE ESTILO PANZALEO',
                        "contenido": 'De cuerpo esférico carenado con adornos de bordes triangulares en serie; labio redondeado; borde invertido, cuello corto anular; base circular: pedestal, pirámide truncada de caras laterales trapezoidales planas; base de la escultura cuadrada',
                        "id": "pagina-140"
                    }
                },
                {
                    "pitch": 3.9248842863659257,
                    "yaw": 8.949515529015207,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'TORTUGA',
                        "contenido": 'Representa la TORTUGA ícono de las Islas Galápagos, Patrimonio de la Humanidad. Se encuentra sobre una pirámide truncada de lados trapezoidales inclinados; base de la Obra de Arte cuadrada.',
                        "id": "pagina-138"
                    }
                }
            ]
        },
        "96-avenida-transversal-izquierda": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": 7.3458757958075305,
            "yaw": 20.306678846032028,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "96-avenida-transversal-izquierda/cubo/f.jpg",
                rutaBase + "96-avenida-transversal-izquierda/cubo/r.jpg",
                rutaBase + "96-avenida-transversal-izquierda/cubo/b.jpg",
                rutaBase + "96-avenida-transversal-izquierda/cubo/l.jpg",
                rutaBase + "96-avenida-transversal-izquierda/cubo/u.jpg",
                rutaBase + "96-avenida-transversal-izquierda/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.4090348143073905,
                    "yaw": 62.61483653062143,
                    "type": "scene",
                    "text": "Miembros segunda misión geodésica francesa",
                    "sceneId": "89-miembros-segunda-mision-geodesica-francesa"
                },
                {
                    "pitch": -2.4082046594466924,
                    "yaw": 132.6959133617678,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "95-avenida-transversal-izquierda"
                },
                {
                    "pitch": -3.9695364471857695,
                    "yaw": 313.6664313148839,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "97-avenida-transversal-izquierda"
                },
                {
                    "pitch": -0.08470752116659908,
                    "yaw": 217.82132425791823,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "100-esculturas-verde-nichos"
                },

                // Hotspots tipo info
                // lado izquierdo
                {
                    "pitch": 4.412546531484614,
                    "yaw": 108.75931538284624,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CÁNTARO DE ESTILO PANZALEO',
                        "contenido": 'De forma cilíndrica, adornado con cinco bordes anillados; en la parte superior de la escultura artísticamente realizada se encuentra una cabeza de indígena puesto un sombrero; la escultura va sobre un pedestal pirámide truncada de lados laterales trapezoidales planos; la base del Bien Cultural del Estado tiene forma cuadrada.',
                        "id": "pagina-136"
                    }
                },
                {
                    "pitch": 2.545877830312739,
                    "yaw": 41.37334958170911,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MURANO O FLORERO PERUANO',
                        "contenido": 'Compuesto de cuatro hojas de forma ovalada de borde evertido; cuello corto anular, de base circular plana; pedestal pirámide truncada, con caras laterales planas trapezoidales; base de escultura aproximadamente cuadrada.',
                        "id": "pagina-134"
                    }
                },
                {
                    "pitch": 1.7458798648179474,
                    "yaw": -0.22664634928047178,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'OLLA INCÁSICA',
                        "contenido": 'De base convexa; cuerpo cilíndrico, adornado artísticamente por bordes rectangulares en forma de "U" entrelazados, invertidos y en serie; pedestal pirámide truncada de caras laterales planas trapezoidales; base de la escultura en verde aproximadamente cuadrada.',
                        "id": "pagina-132"
                    }
                }
            ]
        },
        "97-avenida-transversal-izquierda": {
            "title": "Calle de la Veracruz",
            "hfov": 120,
            "pitch": 1.2877978642662713,
            "yaw": -139.4658813001878,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "97-avenida-transversal-izquierda/cubo/f.jpg",
                rutaBase + "97-avenida-transversal-izquierda/cubo/r.jpg",
                rutaBase + "97-avenida-transversal-izquierda/cubo/b.jpg",
                rutaBase + "97-avenida-transversal-izquierda/cubo/l.jpg",
                rutaBase + "97-avenida-transversal-izquierda/cubo/u.jpg",
                rutaBase + "97-avenida-transversal-izquierda/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.808414097099573,
                    "yaw": -267.2938991267689,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "6-avenida-principal-incasica"
                },
                {
                    "pitch": 6.140473149107058,
                    "yaw": -146.31837865643146,
                    "type": "scene",
                    "text": "Mausoleo del sindicato de choferes",
                    "sceneId": "87-mausoleo-sindicato-choferes"
                },
                {
                    "pitch": -4.479708636293681,
                    "yaw": -85.49526486246134,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "96-avenida-transversal-izquierda"
                },
                {
                    "pitch": -2.4944050606710646,
                    "yaw": 12.159099901574514,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "99-esculturas-verde-y-nichos"
                },

                // Hotspots tipo info
                // lado izquierdo
                {
                    "pitch": 0.6916321764181874,
                    "yaw": -126.32509392772927,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'CISNE DE PIE',
                        "contenido": 'Representa el ave doméstica, se encuentra sobre pedestal, pirámide truncada de lados laterales trapezoidales planos; trapezoide frontal con grabado en alto relieve de forma de compotera de base circular, soporte cónico, cuerpo semiesférico con orejones en la parte superior, labio redondeado; el cuerpo del cisne tiene bordes ondulados.',
                        "id": "pagina-130"
                    }
                },
                {
                    "pitch": 1.893380873822816,
                    "yaw": -155.62871794054993,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'VASIJA INCÁSICA (2)',
                        "contenido": 'Representa el Imperio de los Incas o Tahuantinsuyo tiene: base anular con adornos de bordes rectangulares y rombos artísticamente distribuidos en serie; cuello anillado, cuerpo cónico con grabados trapezoidales dentro de bordes en forma de "U" invertida en serie; labio redondeado; pedestal, pirámide truncada con caras laterales trapezoidales planas.',
                        "id": "pagina-128"
                    }
                },
                {
                    "pitch": 1.1054726992337842,
                    "yaw": -232.31767883595512,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'VASIJA INCÁSICA (1)',
                        "contenido": 'De cuerpo semiesférico; labio redondeado; borde invertido; pedestal tronco cónico; se encuentra sobre una pirámide truncada de lados trapezoidales, adornados por bordes rectangulares formando una "U" invertida; base de la pirámide rectangular.',
                        "id": "pagina-126"
                    }
                },
                {
                    "pitch": 4.676721814998175,
                    "yaw": -245.8176098646989,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'MONUMENTO AL HOMBRE POR SU TRABAJO',
                        "contenido": 'De traje largo a estilo greco-romano adornado artísticamente con franjas rectangulares onduladas, está esculpido con la mano derecha hecho puño colocada en el pecho (corazón) y la izquierda levantada hacia arriba con unción cívica portando la antorcha del triunfo.',
                        "id": "pagina-124"
                    }
                }
            ]
        },
        "98-mirador": {
            "title": "Mirador",
            "hfov": 120,
            "pitch": -24.135284337463048,
            "yaw": 167.582096739705,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "98-mirador/cubo/f.jpg",
                rutaBase + "98-mirador/cubo/r.jpg",
                rutaBase + "98-mirador/cubo/b.jpg",
                rutaBase + "98-mirador/cubo/l.jpg",
                rutaBase + "98-mirador/cubo/u.jpg",
                rutaBase + "98-mirador/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -28.970848162921758,
                    "yaw": -6.101363712794526,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "99-esculturas-verde-y-nichos"
                }
            ]
        },
        "99-esculturas-verde-y-nichos": {
            "title": "Esculturas en verde y nichos",
            "hfov": 120,
            "pitch": -1.7342880376581808,
            "yaw": -126.28966368176711,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "99-esculturas-verde-y-nichos/cubo/f.jpg",
                rutaBase + "99-esculturas-verde-y-nichos/cubo/r.jpg",
                rutaBase + "99-esculturas-verde-y-nichos/cubo/b.jpg",
                rutaBase + "99-esculturas-verde-y-nichos/cubo/l.jpg",
                rutaBase + "99-esculturas-verde-y-nichos/cubo/u.jpg",
                rutaBase + "99-esculturas-verde-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -8.483052006427046,
                    "yaw": -259.29775416877493,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "97-avenida-transversal-izquierda"
                },
                {
                    "pitch": -1.4448519232735135,
                    "yaw": -323.34830319432035,
                    "type": "scene",
                    "text": "Mirador",
                    "sceneId": "98-mirador"
                },
                {
                    "pitch": -3.3411025912217083,
                    "yaw": -185.4740286424284,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "100-esculturas-verde-nichos"
                },
                {
                    "pitch": -2.955040578642574,
                    "yaw": -135.13885017304875,
                    "type": "scene",
                    "text": "Parque de los recuerdos",
                    "sceneId": "105-parque"
                },
                {
                    "pitch": -6.437449783071442,
                    "yaw": -83.74042024278064,
                    "type": "scene",
                    "text": "Esculturas en verde y pasadizo",
                    "sceneId": "106-escuturas-verde-y-pasadizo"
                }
            ]
        },
        "100-esculturas-verde-nichos": {
            "title": "Esculturas en verde y nichos",
            "hfov": 120,
            "pitch": 2.643397428934392,
            "yaw": 170.95612559989223,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "100-esculturas-verde-nichos/cubo/f.jpg",
                rutaBase + "100-esculturas-verde-nichos/cubo/r.jpg",
                rutaBase + "100-esculturas-verde-nichos/cubo/b.jpg",
                rutaBase + "100-esculturas-verde-nichos/cubo/l.jpg",
                rutaBase + "100-esculturas-verde-nichos/cubo/u.jpg",
                rutaBase + "100-esculturas-verde-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.3083338526423827,
                    "yaw": 277.81056127328634,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "96-avenida-transversal-izquierda"
                },
                {
                    "pitch": -1.986540558779918,
                    "yaw": 258.73414269413473,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "99-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -3.0901236676548924,
                    "yaw": 75.5025604045105,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "101-nichos"
                },
                {
                    "pitch": -2.950439497999722,
                    "yaw": 171.76383313622787,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "104-pasadizo"
                }
            ]
        },
        "101-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": 2.3884561598513336,
            "yaw": -156.30202613089398,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "101-nichos/cubo/f.jpg",
                rutaBase + "101-nichos/cubo/r.jpg",
                rutaBase + "101-nichos/cubo/b.jpg",
                rutaBase + "101-nichos/cubo/l.jpg",
                rutaBase + "101-nichos/cubo/u.jpg",
                rutaBase + "101-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.924880041583821,
                    "yaw": -21.887820363157978,
                    "type": "scene",
                    "text": "Calle de la Veracruz",
                    "sceneId": "94-avenida-transversal-izquierda"
                },
                {
                    "pitch": -1.742439684785852,
                    "yaw": -115.81210410624813,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "100-esculturas-verde-nichos"
                },
                {
                    "pitch": -2.7250345940971954,
                    "yaw": -201.9436626011436,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "102-pasadizo-y-nichos"
                }
            ]
        },
        "102-pasadizo-y-nichos": {
            "title": "Pasadizo y nichos",
            "hfov": 120,
            "pitch": -0.06545853939715762,
            "yaw": 136.8380043742096,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "102-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "102-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "102-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "102-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "102-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "102-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.1879615268670225,
                    "yaw": 260.05320342871215,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "101-nichos"
                },
                {
                    "pitch": -2.3317289857600434,
                    "yaw": 174.45584983063827,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "103-tumbas"
                },
                {
                    "pitch": -3.8850006520773044,
                    "yaw": 81.17527977858606,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "112-nichos"
                }
            ]
        },
        "103-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -24.63878334834203,
            "yaw": -44.079926538024715,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "103-tumbas/cubo/f.jpg",
                rutaBase + "103-tumbas/cubo/r.jpg",
                rutaBase + "103-tumbas/cubo/b.jpg",
                rutaBase + "103-tumbas/cubo/l.jpg",
                rutaBase + "103-tumbas/cubo/u.jpg",
                rutaBase + "103-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.6037853113973055,
                    "yaw": 30.93641814500851,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "102-pasadizo-y-nichos"
                },
                {
                    "pitch": -4.756496262061881,
                    "yaw": -119.2004550264301,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "104-pasadizo"
                },
                {
                    "pitch": -5.281032606901069,
                    "yaw": -217.9115721662613,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "111-pasadizo"
                }
            ]
        },
        "104-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": -0.43686962946788555,
            "yaw": -5.142745825701396,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "104-pasadizo/cubo/f.jpg",
                rutaBase + "104-pasadizo/cubo/r.jpg",
                rutaBase + "104-pasadizo/cubo/b.jpg",
                rutaBase + "104-pasadizo/cubo/l.jpg",
                rutaBase + "104-pasadizo/cubo/u.jpg",
                rutaBase + "104-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.231316379913287,
                    "yaw": 175.9439196090646,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "100-esculturas-verde-nichos"
                },
                {
                    "pitch": -3.141466300481638,
                    "yaw": 263.65834027245154,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "103-tumbas"
                },
                {
                    "pitch": -5.635587729681749,
                    "yaw": 81.6197672155969,
                    "type": "scene",
                    "text": "Parque de los recuerdos",
                    "sceneId": "105-parque"
                },
                {
                    "pitch": -4.410217388702854,
                    "yaw": -5.285784326389049,
                    "type": "scene",
                    "text": "Interseccion",
                    "sceneId": "110-interseccion"
                }
            ]
        },
        "105-parque": {
            "title": "Parque de los recuerdos",
            "hfov": 120,
            "pitch": -4.63593062065807,
            "yaw": 171.2548954514592,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "105-parque/cubo/f.jpg",
                rutaBase + "105-parque/cubo/r.jpg",
                rutaBase + "105-parque/cubo/b.jpg",
                rutaBase + "105-parque/cubo/l.jpg",
                rutaBase + "105-parque/cubo/u.jpg",
                rutaBase + "105-parque/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.146741921112363,
                    "yaw": -22.545686766247133,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "99-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -5.374115314305335,
                    "yaw": 141.3131217260241,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "104-pasadizo"
                },
                {
                    "pitch": -4.068759558069182,
                    "yaw": -58.49247353645665,
                    "type": "scene",
                    "text": "Esculturas en verde y pasadizo",
                    "sceneId": "106-escuturas-verde-y-pasadizo"
                },
                {
                    "pitch": -3.2100708066546666,
                    "yaw": -89.16356915075723,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "107-escuturas-verde-y-nichos"
                },
                {
                    "pitch": -2.297381526057071,
                    "yaw": -150.37172167365554,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "109-pasadizo"
                }
            ]
        },
        "106-escuturas-verde-y-pasadizo": {
            "title": "Esculturas en verde y pasadizo",
            "hfov": 120,
            "pitch": 0.3207330701313893,
            "yaw": 217.88620282749685,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "106-escuturas-verde-y-pasadizo/cubo/f.jpg",
                rutaBase + "106-escuturas-verde-y-pasadizo/cubo/r.jpg",
                rutaBase + "106-escuturas-verde-y-pasadizo/cubo/b.jpg",
                rutaBase + "106-escuturas-verde-y-pasadizo/cubo/l.jpg",
                rutaBase + "106-escuturas-verde-y-pasadizo/cubo/u.jpg",
                rutaBase + "106-escuturas-verde-y-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -8.269319717291506,
                    "yaw": 0.4412503355512704,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "8-avenida-principal-incasica"
                },
                {
                    "pitch": -6.008947042042433,
                    "yaw": 94.86881782867485,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "99-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -4.175038413574063,
                    "yaw": 205.00347582556861,
                    "type": "scene",
                    "text": "Parque de los recuerdos",
                    "sceneId": "105-parque"
                },
                {
                    "pitch": -3.5061978844104114,
                    "yaw": 269.7926319195305,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "107-escuturas-verde-y-nichos"
                }
            ]
        },
        "107-escuturas-verde-y-nichos": {
            "title": "Esculturas en verde y nichos",
            "hfov": 120,
            "pitch": 6.091357241716917,
            "yaw": 87.98796190365515,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "107-escuturas-verde-y-nichos/cubo/f.jpg",
                rutaBase + "107-escuturas-verde-y-nichos/cubo/r.jpg",
                rutaBase + "107-escuturas-verde-y-nichos/cubo/b.jpg",
                rutaBase + "107-escuturas-verde-y-nichos/cubo/l.jpg",
                rutaBase + "107-escuturas-verde-y-nichos/cubo/u.jpg",
                rutaBase + "107-escuturas-verde-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.375307390444541,
                    "yaw": 268.7879496966239,
                    "type": "scene",
                    "text": "Parque de los recuerdos",
                    "sceneId": "105-parque"
                },
                {
                    "pitch": -8.308646827293499,
                    "yaw": 177.42435244360288,
                    "type": "scene",
                    "text": "Esculturas en verde y pasadizo",
                    "sceneId": "106-escuturas-verde-y-pasadizo"
                },
                {
                    "pitch": -3.775321631980999,
                    "yaw": 358.75769594946223,
                    "type": "scene",
                    "text": "Osario y nichos",
                    "sceneId": "108-osario-y-nichos"
                }
            ]
        },
        "108-osario-y-nichos": {
            "title": "Osario y nichos",
            "hfov": 120,
            "pitch": 2.6417463553648872,
            "yaw": -56.734750302743,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "108-osario-y-nichos/cubo/f.jpg",
                rutaBase + "108-osario-y-nichos/cubo/r.jpg",
                rutaBase + "108-osario-y-nichos/cubo/b.jpg",
                rutaBase + "108-osario-y-nichos/cubo/l.jpg",
                rutaBase + "108-osario-y-nichos/cubo/u.jpg",
                rutaBase + "108-osario-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -7.758227196067404,
                    "yaw": -22.068042945972167,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "10-avenida-principal-incasica"
                },
                {
                    "pitch": -2.9582597481507378,
                    "yaw": 83.96410944672719,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "107-escuturas-verde-y-nichos"
                },
                {
                    "pitch": -4.024899966249697,
                    "yaw": 170.46526190428824,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "109-pasadizo"
                },
                {
                    "pitch": -4.024899966249697,
                    "yaw": 264.0652578352778,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "116-pasadizo-y-mausoleos"
                },

                // Hotspots tipo info
                // Centro
                {
                    "pitch": -4.860105203106711,
                    "yaw": -57.35995488727097,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": "OSARIO",
                        "contenido": "Escultura arquitectónica de estilo neoclásico, soportada por tres columnas monolíticas de piedra con una cúpula formando una esfera y con una profundidad de 15m. Su diseño original responde a la necesidad del depósito de osamentas en una fosa común.",
                        "id": "osario-108"
                    }
                }
            ]
        },
        "109-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 2.1579112804211618,
            "yaw": -107.49286190063407,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "109-pasadizo/cubo/f.jpg",
                rutaBase + "109-pasadizo/cubo/r.jpg",
                rutaBase + "109-pasadizo/cubo/b.jpg",
                rutaBase + "109-pasadizo/cubo/l.jpg",
                rutaBase + "109-pasadizo/cubo/u.jpg",
                rutaBase + "109-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.508755386245504,
                    "yaw": -193.89284562459238,
                    "type": "scene",
                    "text": "Parque de los recuerdos",
                    "sceneId": "105-parque"
                },
                {
                    "pitch": -5.842068374526754,
                    "yaw": -286.9595061877434,
                    "type": "scene",
                    "text": "Osario y nichos",
                    "sceneId": "108-osario-y-nichos"
                },
                {
                    "pitch": -4.508704523615295,
                    "yaw": -107.63779955207198,
                    "type": "scene",
                    "text": "intersección",
                    "sceneId": "110-interseccion"
                },
                {
                    "pitch": -5.470163392262821,
                    "yaw": -14.037823966134482,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "115-tumbas"
                }
            ]
        },
        "110-interseccion": {
            "title": "Interseccion",
            "hfov": 120,
            "pitch": -1.2529694964595828,
            "yaw": -195.13478488933154,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "110-interseccion/cubo/f.jpg",
                rutaBase + "110-interseccion/cubo/r.jpg",
                rutaBase + "110-interseccion/cubo/b.jpg",
                rutaBase + "110-interseccion/cubo/l.jpg",
                rutaBase + "110-interseccion/cubo/u.jpg",
                rutaBase + "110-interseccion/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.186293674519478,
                    "yaw": -15.34746754333985,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "104-pasadizo"
                },
                {
                    "pitch": -4.8248714269657045,
                    "yaw": -111.88077239360025,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "109-pasadizo"
                },
                {
                    "pitch": -5.891542162642788,
                    "yaw": 75.56288821087244,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "111-pasadizo"
                },
                {
                    "pitch": -2.9582027257938304,
                    "yaw": 165.34226434403777,
                    "type": "scene",
                    "text": "Escultura en piedra Virgen De La Piedad",
                    "sceneId": "119-escultura-piedra-virgen-de-la-piedad"
                }
            ]
        },
        "111-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 0.49871095343321037,
            "yaw": 84.96932999039313,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "111-pasadizo/cubo/f.jpg",
                rutaBase + "111-pasadizo/cubo/r.jpg",
                rutaBase + "111-pasadizo/cubo/b.jpg",
                rutaBase + "111-pasadizo/cubo/l.jpg",
                rutaBase + "111-pasadizo/cubo/u.jpg",
                rutaBase + "111-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.7012809085459564,
                    "yaw": 179.36933405940354,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "103-tumbas"
                },
                {
                    "pitch": -5.901282943051165,
                    "yaw": 86.03599055354418,
                    "type": "scene",
                    "text": "Intersección",
                    "sceneId": "110-interseccion"
                },
                {
                    "pitch": -3.767941471696999,
                    "yaw": 265.5627855865944,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "112-nichos"
                },
                {
                    "pitch": -5.903824644013487,
                    "yaw": 356.22945225326106,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "114-tumbas"
                }
            ]
        },
        "112-nichos": {
            "title": "Nichos",
            "hfov": 119.8,
            "pitch": -0.5724214465686686,
            "yaw": -1.112550645587195,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "112-nichos/cubo/f.jpg",
                rutaBase + "112-nichos/cubo/r.jpg",
                rutaBase + "112-nichos/cubo/b.jpg",
                rutaBase + "112-nichos/cubo/l.jpg",
                rutaBase + "112-nichos/cubo/u.jpg",
                rutaBase + "112-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.256140580912094,
                    "yaw": 91.67379396408677,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "102-pasadizo-y-nichos"
                },
                {
                    "pitch": -4.650010976146622,
                    "yaw": -1.029846219384453,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "111-pasadizo"
                },
                {
                    "pitch": -4.2250162103618205,
                    "yaw": -85.79558631189576,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "113-pasadizo-y-nichos"
                }
            ]
        },
        "113-pasadizo-y-nichos": {
            "title": "Pasadizo y nichos",
            "hfov": 120,
            "pitch": -0.2915930814840705,
            "yaw": 29.665253766267412,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "113-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "113-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "113-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "113-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "113-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "113-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.558255679140321,
                    "yaw": 80.86526597329866,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "112-nichos"
                },
                {
                    "pitch": -5.091591046978863,
                    "yaw": -8.734729957690917,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "114-tumbas"
                },
                {
                    "pitch": -5.044071729095656,
                    "yaw": -96.5303171399118,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "120-nichos"
                }
            ]
        },
        "114-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -0.41550245631887295,
            "yaw": -97.98884294998754,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "114-tumbas/cubo/f.jpg",
                rutaBase + "114-tumbas/cubo/r.jpg",
                rutaBase + "114-tumbas/cubo/b.jpg",
                rutaBase + "114-tumbas/cubo/l.jpg",
                rutaBase + "114-tumbas/cubo/u.jpg",
                rutaBase + "114-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.9403845616415625,
                    "yaw": 39.597222568319765,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "111-pasadizo"
                },
                {
                    "pitch": -4.438053170057005,
                    "yaw": 145.55209049220275,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "113-pasadizo-y-nichos"
                },
                {
                    "pitch": -3.1202274874463853,
                    "yaw": 271.96461036647963,
                    "type": "scene",
                    "text": "Escultura en piedra Virgen De La Piedad",
                    "sceneId": "119-escultura-piedra-virgen-de-la-piedad"
                }
            ]
        },
        "115-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": -2.6749375912513607,
            "yaw": -313.4872118246969,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "115-tumbas/cubo/f.jpg",
                rutaBase + "115-tumbas/cubo/r.jpg",
                rutaBase + "115-tumbas/cubo/b.jpg",
                rutaBase + "115-tumbas/cubo/l.jpg",
                rutaBase + "115-tumbas/cubo/u.jpg",
                rutaBase + "115-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.9380150356221337,
                    "yaw": -88.64454807976327,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "109-pasadizo"
                },
                {
                    "pitch": -4.4316744279362394,
                    "yaw": -173.74356109699983,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "116-pasadizo-y-mausoleos"
                },
                {
                    "pitch": -7.528116901647547,
                    "yaw": -267.33678486745765,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "118-pasadizo"
                }
            ]
        },
        "116-pasadizo-y-mausoleos": {
            "title": "Pasadizo y mausoleos",
            "hfov": 120,
            "pitch": -1.122107329594594,
            "yaw": 54.47416445690525,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "116-pasadizo-y-mausoleos/cubo/f.jpg",
                rutaBase + "116-pasadizo-y-mausoleos/cubo/r.jpg",
                rutaBase + "116-pasadizo-y-mausoleos/cubo/b.jpg",
                rutaBase + "116-pasadizo-y-mausoleos/cubo/l.jpg",
                rutaBase + "116-pasadizo-y-mausoleos/cubo/u.jpg",
                rutaBase + "116-pasadizo-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.68767915337755,
                    "yaw": 41.012054788518306,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "10-avenida-principal-incasica"
                },
                {
                    "pitch": -3.891477685474818,
                    "yaw": 95.48990890496462,
                    "type": "scene",
                    "text": "Osario y nichos",
                    "sceneId": "108-osario-y-nichos"
                },
                {
                    "pitch": -3.876728446074733,
                    "yaw": 184.16142501052195,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "115-tumbas"
                },
                {
                    "pitch": -4.8387978038015484,
                    "yaw": 273.19534719034533,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "117-mausoleos"
                },

                // Hotspots tipo info
                // Centro
                {
                    "pitch": -4.644776735445216,
                    "yaw": 56.38025867858175,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": "OSARIO",
                        "contenido": "Escultura arquitectónica de estilo neoclásico, soportada por tres columnas monolíticas de piedra con una cúpula formando una esfera y con una profundidad de 15m. Su diseño original responde a la necesidad del depósito de osamentas en una fosa común.",
                        "id": "osario-117"
                    }
                }
            ]
        },
        "117-mausoleos": {
            "title": "Mausoleos",
            "hfov": 120,
            "pitch": 1.4100379341445404,
            "yaw": 178.95232672405103,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "117-mausoleos/cubo/f.jpg",
                rutaBase + "117-mausoleos/cubo/r.jpg",
                rutaBase + "117-mausoleos/cubo/b.jpg",
                rutaBase + "117-mausoleos/cubo/l.jpg",
                rutaBase + "117-mausoleos/cubo/u.jpg",
                rutaBase + "117-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.924460129435383,
                    "yaw": 91.38915454378676,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "116-pasadizo-y-mausoleos"
                },
                {
                    "pitch": -4.1178330250149315,
                    "yaw": 178.5754659404256,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "118-pasadizo"
                },
                {
                    "pitch": -4.833007537972001,
                    "yaw": 269.6789601258181,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "124-pasadizo-y-mausoleos"
                }
            ]
        },
        "118-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 0.35479035478949594,
            "yaw": 270.24765188525305,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "118-pasadizo/cubo/f.jpg",
                rutaBase + "118-pasadizo/cubo/r.jpg",
                rutaBase + "118-pasadizo/cubo/b.jpg",
                rutaBase + "118-pasadizo/cubo/l.jpg",
                rutaBase + "118-pasadizo/cubo/u.jpg",
                rutaBase + "118-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.532468437762929,
                    "yaw": 180.81080523100277,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "115-tumbas"
                },
                {
                    "pitch": -5.634405973528404,
                    "yaw": 89.50818666288745,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "117-mausoleos"
                },
                {
                    "pitch": -6.664483778731371,
                    "yaw": 269.8547329074678,
                    "type": "scene",
                    "text": "Escultura en piedra Virgen De La Piedad",
                    "sceneId": "119-escultura-piedra-virgen-de-la-piedad"
                },
                {
                    "pitch": -6.321136215522967,
                    "yaw": 2.1196258963133054,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "123-tumbas"
                }
            ]
        },
        "119-escultura-piedra-virgen-de-la-piedad": {
            "title": "Escultura en piedra Virgen De La Piedad",
            "hfov": 120,
            "pitch": 3.0914975095512913,
            "yaw": -188.89910180502272,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "119-escultura-piedra-virgen-de-la-piedad/cubo/f.jpg",
                rutaBase + "119-escultura-piedra-virgen-de-la-piedad/cubo/r.jpg",
                rutaBase + "119-escultura-piedra-virgen-de-la-piedad/cubo/b.jpg",
                rutaBase + "119-escultura-piedra-virgen-de-la-piedad/cubo/l.jpg",
                rutaBase + "119-escultura-piedra-virgen-de-la-piedad/cubo/u.jpg",
                rutaBase + "119-escultura-piedra-virgen-de-la-piedad/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.6500194316535457,
                    "yaw": -3.1700321208591804,
                    "type": "scene",
                    "text": "Interseccion",
                    "sceneId": "110-interseccion"
                },
                {
                    "pitch": -5.0980165384407075,
                    "yaw": 44.03731339387857,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "114-tumbas"
                },
                {
                    "pitch": -4.601172933539019,
                    "yaw": -121.348944247216,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "118-pasadizo"
                },
                {
                    "pitch": -6.002452209306401,
                    "yaw": -252.36686647420422,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "120-nichos"
                },
                {
                    "pitch": -3.7633681849844933,
                    "yaw": -178.757783868725,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "127-pasaje-de-la-paz"
                },

                // Hotspot tipo info
                // lado izquierdo desde la entrada
                {
                    "pitch": -6.581485236936113,
                    "yaw": -190.96381304982907,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'ESCULTURA EN PIEDRA VIRGEN DE LA PIEDAD',
                        "contenido": 'Representa la figura original del artista Miguel Ángel. Simboliza a la joven Virgen María, bella y piadosa cuyas vestiduras se expanden con numerosos pliegues, sostiene a Cristo muerto. <br> La figura fue elaborada en piedra de andesita por el artista José Antonio Chuquín, en 1988.',
                        "id": "monumento-eepvdlp"
                    }
                }
            ]
        },
        "120-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": 1.389540576716523,
            "yaw": 166.54088459476816,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "120-nichos/cubo/f.jpg",
                rutaBase + "120-nichos/cubo/r.jpg",
                rutaBase + "120-nichos/cubo/b.jpg",
                rutaBase + "120-nichos/cubo/l.jpg",
                rutaBase + "120-nichos/cubo/u.jpg",
                rutaBase + "120-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.534366149564882,
                    "yaw": 255.9227749792225,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "113-pasadizo-y-nichos"
                },
                {
                    "pitch": -2.954160013476772,
                    "yaw": 166.57784782775633,
                    "type": "scene",
                    "text": "Escultura en piedra Virgen De La Piedad",
                    "sceneId": "119-escultura-piedra-virgen-de-la-piedad"
                },
                {
                    "pitch": -5.238989407202152,
                    "yaw": 79.16255084042137,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "121-pasadizo-y-nichos"
                }
            ]
        },
        "121-pasadizo-y-nichos": {
            "title": "Pasadizo y nichos",
            "hfov": 120,
            "pitch": -7.383650276226914,
            "yaw": 56.21275139496739,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "121-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "121-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "121-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "121-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "121-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "121-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.944822923428423,
                    "yaw": 102.852882981718,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "120-nichos"
                },
                {
                    "pitch": -4.808699391575111,
                    "yaw": 15.531717832094742,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "122-area-descanso"
                },
                {
                    "pitch": -3.9637896549079272,
                    "yaw": -76.18017062437023,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "129-nichos"
                }
            ]
        },
        "122-area-descanso": {
            "title": "Punto de encuentro y descanso",
            "hfov": 120,
            "pitch": 3.449892339760541,
            "yaw": 322.2744504088961,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "122-area-descanso/cubo/f.jpg",
                rutaBase + "122-area-descanso/cubo/r.jpg",
                rutaBase + "122-area-descanso/cubo/b.jpg",
                rutaBase + "122-area-descanso/cubo/l.jpg",
                rutaBase + "122-area-descanso/cubo/u.jpg",
                rutaBase + "122-area-descanso/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.097259389969788,
                    "yaw": 316.0661563526507,
                    "type": "scene",
                    "text": "Escultura en piedra Virgen De La Piedad",
                    "sceneId": "119-escultura-piedra-virgen-de-la-piedad"
                },
                {
                    "pitch": -4.3995417975690385,
                    "yaw": 51.78053523889011,
                    "type": "scene",
                    "text": "Pazadizo y nichos",
                    "sceneId": "121-pasadizo-y-nichos"
                },
                {
                    "pitch": -8.658628035577811,
                    "yaw": 174.8016831693572,
                    "type": "scene",
                    "text": "Pazadizo",
                    "sceneId": "128-pazadizo"
                }
            ]
        },
        "123-tumbas": {
            "title": "Túmulos",
            "hfov": 120,
            "pitch": 1.4690416926059573,
            "yaw": 254.85446877703586,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "123-tumbas/cubo/f.jpg",
                rutaBase + "123-tumbas/cubo/r.jpg",
                rutaBase + "123-tumbas/cubo/b.jpg",
                rutaBase + "123-tumbas/cubo/l.jpg",
                rutaBase + "123-tumbas/cubo/u.jpg",
                rutaBase + "123-tumbas/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -6.671805399664818,
                    "yaw": 204.19443386399723,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "118-pasadizo"
                },
                {
                    "pitch": -5.289587661999982,
                    "yaw": 100.23046688250037,
                    "type": "scene",
                    "text": "Pasadizo y mausoleos",
                    "sceneId": "124-pasadizo-y-mausoleos"
                },
                {
                    "pitch": -5.4431840266395515,
                    "yaw": 26.375758178561227,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "126-pasadizo"
                }
            ]
        },
        "124-pasadizo-y-mausoleos": {
            "title": "Pasadizo y mausoleos",
            "hfov": 120,
            "pitch": -3.8558053915860695,
            "yaw": 303.9113120020278,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "124-pasadizo-y-mausoleos/cubo/f.jpg",
                rutaBase + "124-pasadizo-y-mausoleos/cubo/r.jpg",
                rutaBase + "124-pasadizo-y-mausoleos/cubo/b.jpg",
                rutaBase + "124-pasadizo-y-mausoleos/cubo/l.jpg",
                rutaBase + "124-pasadizo-y-mausoleos/cubo/u.jpg",
                rutaBase + "124-pasadizo-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -3.7846910347685814,
                    "yaw": 180.97576508768046,
                    "type": "scene",
                    "text": "Mausoleos",
                    "sceneId": "117-mausoleos"
                },
                {
                    "pitch": -4.928739040056897,
                    "yaw": 267.14251225508565,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "123-tumbas"
                },
                {
                    "pitch": -6.064449804260516,
                    "yaw": 1.340247151004121,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "125-mausoleos-y-nichos"
                }
            ]
        },
        "125-mausoleos-y-nichos": {
            "title": "Mausoleos y nichos",
            "hfov": 120,
            "pitch": 2.5472428670764833,
            "yaw": 134.58068403592853,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "125-mausoleos-y-nichos/cubo/f.jpg",
                rutaBase + "125-mausoleos-y-nichos/cubo/r.jpg",
                rutaBase + "125-mausoleos-y-nichos/cubo/b.jpg",
                rutaBase + "125-mausoleos-y-nichos/cubo/l.jpg",
                rutaBase + "125-mausoleos-y-nichos/cubo/u.jpg",
                rutaBase + "125-mausoleos-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -7.5806099737726305,
                    "yaw": 88.10004776894615,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "13-avenida-principal-incasica"
                },
                {
                    "pitch": -4.678116349678961,
                    "yaw": 174.09242257506736,
                    "type": "scene",
                    "text": "Pasadizo y  mausoleos",
                    "sceneId": "124-pasadizo-y-mausoleos"
                },
                {
                    "pitch": -4.531871343174789,
                    "yaw": 267.0223250134641,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "126-pasadizo"
                },
                {
                    "pitch": -3.9249426681547113,
                    "yaw": 356.274328819796,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "134-pasadizo-y-nichos"
                }
            ]
        },
        "126-pasadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": 0.38500222533213324,
            "yaw": 303.5444758014153,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "126-pasadizo/cubo/f.jpg",
                rutaBase + "126-pasadizo/cubo/r.jpg",
                rutaBase + "126-pasadizo/cubo/b.jpg",
                rutaBase + "126-pasadizo/cubo/l.jpg",
                rutaBase + "126-pasadizo/cubo/u.jpg",
                rutaBase + "126-pasadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.000709187313364,
                    "yaw": 209.9102603347686,
                    "type": "scene",
                    "text": "Túmulos",
                    "sceneId": "123-tumbas"
                },
                {
                    "pitch": -5.000709187313364,
                    "yaw": 122.87935409276898,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "125-mausoleos-y-nichos"
                },
                {
                    "pitch": -4.7340047860508765,
                    "yaw": 303.1732950309617,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "127-pasaje-de-la-paz"
                },
                {
                    "pitch": -4.895354104461128,
                    "yaw": 29.27558599942701,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "133-area-descanso"
                }
            ]
        },
        "127-pasaje-de-la-paz": {
            "title": "Pasaje de la paz",
            "hfov": 120,
            "pitch": 1.4193122579235498,
            "yaw": 191.87394273999126,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "127-pasaje-de-la-paz/cubo/f.jpg",
                rutaBase + "127-pasaje-de-la-paz/cubo/r.jpg",
                rutaBase + "127-pasaje-de-la-paz/cubo/b.jpg",
                rutaBase + "127-pasaje-de-la-paz/cubo/l.jpg",
                rutaBase + "127-pasaje-de-la-paz/cubo/u.jpg",
                rutaBase + "127-pasaje-de-la-paz/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.9042033398604588,
                    "yaw": 191.9666619555059,
                    "type": "scene",
                    "text": "Escultura en piedra Virgen De La Piedad",
                    "sceneId": "119-escultura-piedra-virgen-de-la-piedad"
                },
                {
                    "pitch": -5.126207072762802,
                    "yaw": 105.60228445257482,
                    "type": "scene",
                    "text": "Pazadizo",
                    "sceneId": "126-pasadizo"
                },
                {
                    "pitch": -4.640754884192988,
                    "yaw": 282.42165275823436,
                    "type": "scene",
                    "text": "Pazadizo",
                    "sceneId": "128-pazadizo"
                },
                {
                    "pitch": -4.208553181399877,
                    "yaw": 9.494434218048433,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "132-pasaje-de-la-paz"
                },

                // Hotspots tipo info
                // parte izquierda
                {
                    "pitch": -5.93127875780881,
                    "yaw": 341.7703122969513,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'PASAJE DE LA PAZ',
                        "contenido": 'Se encuentra en le parque de los recuerdos, tras la Virgen de la Piedad. Nos da conocer el hermanamiento de Colombia y Ecuador. <br>Podemos encontrar dos palomas que representan el símbolo de la paz y en el fondo, el paisaje de los hermanos volcanes Chiles y Cumbal.',
                        "id": "pasaje-paz"
                    }
                }
            ]
        },
        "128-pazadizo": {
            "title": "Pasadizo",
            "hfov": 120,
            "pitch": -4.797128011906045,
            "yaw": -66.69955287454661,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "128-pazadizo/cubo/f.jpg",
                rutaBase + "128-pazadizo/cubo/r.jpg",
                rutaBase + "128-pazadizo/cubo/b.jpg",
                rutaBase + "128-pazadizo/cubo/l.jpg",
                rutaBase + "128-pazadizo/cubo/u.jpg",
                rutaBase + "128-pazadizo/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -4.798517674922303,
                    "yaw": -11.676944196368893,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "122-area-descanso"
                },
                {
                    "pitch": -4.939590666927321,
                    "yaw": -104.0804139722243,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "127-pasaje-de-la-paz"
                },
                {
                    "pitch": -4.781237967284096,
                    "yaw": 72.71885110522952,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "129-nichos"
                },
                {
                    "pitch": -4.300801398510136,
                    "yaw": 159.80269744380143,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "131-area-descanso"
                }
            ]
        },
        "129-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -2.719824755740676,
            "yaw": 90.02173894694693,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "129-nichos/cubo/f.jpg",
                rutaBase + "129-nichos/cubo/r.jpg",
                rutaBase + "129-nichos/cubo/b.jpg",
                rutaBase + "129-nichos/cubo/l.jpg",
                rutaBase + "129-nichos/cubo/u.jpg",
                rutaBase + "129-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.771793723134609,
                    "yaw": 179.30671237055893,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "121-pasadizo-y-nichos"
                },
                {
                    "pitch": -4.832778555310905,
                    "yaw": 90.16430026479468,
                    "type": "scene",
                    "text": "Pazadizo",
                    "sceneId": "128-pazadizo"
                },
                {
                    "pitch": -3.169278058919844,
                    "yaw": -1.9494218589434666,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "130-pasadizo-y-nichos"
                }
            ]
        },
        "130-pasadizo-y-nichos": {
            "title": "Pasadizo y nichos",
            "hfov": 120,
            "pitch": 1.6273513712018124,
            "yaw": 17.911083551333547,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "130-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "130-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "130-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "130-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "130-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "130-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.784756773510669,
                    "yaw": 62.29373209948163,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "129-nichos"
                },
                {
                    "pitch": -5.390396751994995,
                    "yaw": -26.330867627555584,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "131-area-descanso"
                },
                {
                    "pitch": -2.3647561334245317,
                    "yaw": -117.27834781299944,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "139-nichos"
                }
            ]
        },
        "131-area-descanso": {
            "title": "Punto de encuentro y descanso",
            "hfov": 120,
            "pitch": -6.544515842125304,
            "yaw": -110.25406710695276,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "131-area-descanso/cubo/f.jpg",
                rutaBase + "131-area-descanso/cubo/r.jpg",
                rutaBase + "131-area-descanso/cubo/b.jpg",
                rutaBase + "131-area-descanso/cubo/l.jpg",
                rutaBase + "131-area-descanso/cubo/u.jpg",
                rutaBase + "131-area-descanso/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.8839380612794852,
                    "yaw": -64.68107737182893,
                    "type": "scene",
                    "text": "Pazadizo",
                    "sceneId": "128-pazadizo"
                },
                {
                    "pitch": -5.489548241508157,
                    "yaw": 41.25264531931389,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "130-pasadizo-y-nichos"
                },
                {
                    "pitch": -4.966415599443348,
                    "yaw": -149.29866386271073,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "132-pasaje-de-la-paz"
                },
                {
                    "pitch": -3.6292412103011777,
                    "yaw": -238.8292892626106,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "138-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "132-pasaje-de-la-paz": {
            "title": "Pasaje de la paz",
            "hfov": 120,
            "pitch": 1.7405470910927212,
            "yaw": 321.97534102373106,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "132-pasaje-de-la-paz/cubo/f.jpg",
                rutaBase + "132-pasaje-de-la-paz/cubo/r.jpg",
                rutaBase + "132-pasaje-de-la-paz/cubo/b.jpg",
                rutaBase + "132-pasaje-de-la-paz/cubo/l.jpg",
                rutaBase + "132-pasaje-de-la-paz/cubo/u.jpg",
                rutaBase + "132-pasaje-de-la-paz/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.513885318315392,
                    "yaw": 323.530156395096,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "127-pasaje-de-la-paz"
                },
                {
                    "pitch": -6.386544378845571,
                    "yaw": 56.873956301718465,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "131-area-descanso"
                },
                {
                    "pitch": -5.242894148136816,
                    "yaw": -122.96433839093743,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "133-area-descanso"
                },
                {
                    "pitch": -3.7090927266506273,
                    "yaw": -215.84780808809865,
                    "type": "scene",
                    "text": "Jesús y la cruz del calvario",
                    "sceneId": "137-jesus-y-cruz-del-calvario"
                }
            ]
        },
        "133-area-descanso": {
            "title": "Punto de encuentro y descanso",
            "hfov": 120,
            "pitch": -6.830751270809017,
            "yaw": -79.17292997007465,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "133-area-descanso/cubo/f.jpg",
                rutaBase + "133-area-descanso/cubo/r.jpg",
                rutaBase + "133-area-descanso/cubo/b.jpg",
                rutaBase + "133-area-descanso/cubo/l.jpg",
                rutaBase + "133-area-descanso/cubo/u.jpg",
                rutaBase + "133-area-descanso/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.409880458401739,
                    "yaw": -95.32653478853415,
                    "type": "scene",
                    "text": "Pasadizo",
                    "sceneId": "126-pasadizo"
                },
                {
                    "pitch": -9.963156961731068,
                    "yaw": 13.002255988922034,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "132-pasaje-de-la-paz"
                },
                {
                    "pitch": -2.63044915927302,
                    "yaw": -167.58222474296042,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "134-pasadizo-y-nichos"
                },
                {
                    "pitch": -3.4114146349989776,
                    "yaw": 113.28275128062931,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "136-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "134-pasadizo-y-nichos": {
            "title": "Pasadizo y nichos",
            "hfov": 120,
            "pitch": 4.121569196666728,
            "yaw": -129.81211076959102,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "134-pasadizo-y-nichos/cubo/f.jpg",
                rutaBase + "134-pasadizo-y-nichos/cubo/r.jpg",
                rutaBase + "134-pasadizo-y-nichos/cubo/b.jpg",
                rutaBase + "134-pasadizo-y-nichos/cubo/l.jpg",
                rutaBase + "134-pasadizo-y-nichos/cubo/u.jpg",
                rutaBase + "134-pasadizo-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.6644444920738284,
                    "yaw": -185.3830764386159,
                    "type": "scene",
                    "text": "Mausoleos y nichos",
                    "sceneId": "125-mausoleos-y-nichos"
                },
                {
                    "pitch": -4.278135944603493,
                    "yaw": -92.26088674453806,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "133-area-descanso"
                },
                {
                    "pitch": -4.429163537960593,
                    "yaw": -5.046984115523806,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "135-esculturas-verde-y-nichos"
                }
            ]
        },
        "135-esculturas-verde-y-nichos": {
            "title": "Esculturas en verde y nichos",
            "hfov": 120,
            "pitch": -1.552152992428466,
            "yaw": -141.29064083387215,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "135-esculturas-verde-y-nichos/cubo/f.jpg",
                rutaBase + "135-esculturas-verde-y-nichos/cubo/r.jpg",
                rutaBase + "135-esculturas-verde-y-nichos/cubo/b.jpg",
                rutaBase + "135-esculturas-verde-y-nichos/cubo/l.jpg",
                rutaBase + "135-esculturas-verde-y-nichos/cubo/u.jpg",
                rutaBase + "135-esculturas-verde-y-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.29824255183346926,
                    "yaw": -181.59595312098108,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "134-pasadizo-y-nichos"
                },
                {
                    "pitch": -3.030205888518583,
                    "yaw": -84.44751766481357,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "136-esculturas-verde-y-mausoleos"
                },
                {
                    "pitch": -10.725568068911043,
                    "yaw": 8.436686592849455,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "140-nichos"
                }
            ]
        },
        "136-esculturas-verde-y-mausoleos": {
            "title": "Esculturas en verde y mausoleos",
            "hfov": 120,
            "pitch": -0.8383512786563125,
            "yaw": -182.91466280353131,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "136-esculturas-verde-y-mausoleos/cubo/f.jpg",
                rutaBase + "136-esculturas-verde-y-mausoleos/cubo/r.jpg",
                rutaBase + "136-esculturas-verde-y-mausoleos/cubo/b.jpg",
                rutaBase + "136-esculturas-verde-y-mausoleos/cubo/l.jpg",
                rutaBase + "136-esculturas-verde-y-mausoleos/cubo/u.jpg",
                rutaBase + "136-esculturas-verde-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.532163889713848,
                    "yaw": -186.49598004432332,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "133-area-descanso"
                },
                {
                    "pitch": -5.153807512997938,
                    "yaw": -269.8305495180729,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "135-esculturas-verde-y-nichos"
                },
                {
                    "pitch": -4.479905071019688,
                    "yaw": -92.94039564028651,
                    "type": "scene",
                    "text": "Jesús y cruz del calvario",
                    "sceneId": "137-jesus-y-cruz-del-calvario"
                }
            ]
        },
        "137-jesus-y-cruz-del-calvario": {
            "title": "Jesús y cruz del calvario",
            "hfov": 120,
            "pitch": 1.561221294497809,
            "yaw": 84.21692451227892,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "137-jesus-y-cruz-del-calvario/cubo/f.jpg",
                rutaBase + "137-jesus-y-cruz-del-calvario/cubo/r.jpg",
                rutaBase + "137-jesus-y-cruz-del-calvario/cubo/b.jpg",
                rutaBase + "137-jesus-y-cruz-del-calvario/cubo/l.jpg",
                rutaBase + "137-jesus-y-cruz-del-calvario/cubo/u.jpg",
                rutaBase + "137-jesus-y-cruz-del-calvario/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -1.2664456671616733,
                    "yaw": 84.59925915326995,
                    "type": "scene",
                    "text": "Pasaje de la paz",
                    "sceneId": "132-pasaje-de-la-paz"
                },
                {
                    "pitch": -6.02028448290908,
                    "yaw": -0.6636116768148455,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "136-esculturas-verde-y-mausoleos"
                },
                {
                    "pitch": -4.103129556592356,
                    "yaw": 182.80552735665717,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "138-esculturas-verde-y-mausoleos"
                },

                // Hotspot tipo info
                // lado izquierdo desde la entrada
                {
                    "pitch": 8.151086859000664,
                    "yaw": 65.25726866392945,
                    "type": "info",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "titulo": 'JESÚS Y LA CRUZ DEL CALVARIO',
                        "contenido": 'Representa la entrega y el sacrificio de Cristo en la cruz por los pecados del hombre y su muerte por el perdón y la salvación de la humanidad.',
                        "id": "jesus-ylcdc"
                    }
                }
            ]
        },
        "138-esculturas-verde-y-mausoleos": {
            "title": "Esculturas en verde y mausoleos",
            "hfov": 120,
            "pitch": -8.435630901049699,
            "yaw": -218.2830061513133,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "138-esculturas-verde-y-mausoleos/cubo/f.jpg",
                rutaBase + "138-esculturas-verde-y-mausoleos/cubo/r.jpg",
                rutaBase + "138-esculturas-verde-y-mausoleos/cubo/b.jpg",
                rutaBase + "138-esculturas-verde-y-mausoleos/cubo/l.jpg",
                rutaBase + "138-esculturas-verde-y-mausoleos/cubo/u.jpg",
                rutaBase + "138-esculturas-verde-y-mausoleos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -2.6430949959392835,
                    "yaw": -182.33356892162087,
                    "type": "scene",
                    "text": "Punto de encuentro y descanso",
                    "sceneId": "131-area-descanso"
                },
                {
                    "pitch": -4.928956382594194,
                    "yaw": -279.4616939750579,
                    "type": "scene",
                    "text": "Jesús y la cruz del calvario",
                    "sceneId": "137-jesus-y-cruz-del-calvario"
                },
                {
                    "pitch": -5.158680210766126,
                    "yaw": -102.8418855507944,
                    "type": "scene",
                    "text": "Nichos",
                    "sceneId": "139-nichos"
                }
            ]
        },
        "139-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": 2.031141167627861,
            "yaw": -53.86712395497093,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "139-nichos/cubo/f.jpg",
                rutaBase + "139-nichos/cubo/r.jpg",
                rutaBase + "139-nichos/cubo/b.jpg",
                rutaBase + "139-nichos/cubo/l.jpg",
                rutaBase + "139-nichos/cubo/u.jpg",
                rutaBase + "139-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -0.5970907861442072,
                    "yaw": -9.642398589266513,
                    "type": "scene",
                    "text": "Pasadizo y nichos",
                    "sceneId": "130-pasadizo-y-nichos"
                },
                {
                    "pitch": -2.900889457226555,
                    "yaw": -92.30183673433154,
                    "type": "scene",
                    "text": "Esculturas en verde y mausoleos",
                    "sceneId": "138-esculturas-verde-y-mausoleos"
                }
            ]
        },
        "140-nichos": {
            "title": "Nichos",
            "hfov": 120,
            "pitch": -5.679653161417127,
            "yaw": -270.0602211850598,
            "type": "cubemap",
            "cubeMap": [
                rutaBase + "140-nichos/cubo/f.jpg",
                rutaBase + "140-nichos/cubo/r.jpg",
                rutaBase + "140-nichos/cubo/b.jpg",
                rutaBase + "140-nichos/cubo/l.jpg",
                rutaBase + "140-nichos/cubo/u.jpg",
                rutaBase + "140-nichos/cubo/d.jpg"
            ],
            "hotSpots": [
                {
                    "pitch": -5.969115179982927,
                    "yaw": -358.54872652396494,
                    "type": "scene",
                    "text": "Avenida Real",
                    "sceneId": "16-avenida-principal-incasica"
                },
                {
                    "pitch": -1.1996486646372597,
                    "yaw": -266.5178860075512,
                    "type": "scene",
                    "text": "Esculturas en verde y nichos",
                    "sceneId": "135-esculturas-verde-y-nichos"
                }
            ]
        }
    }
}

viewer = pannellum.viewer('panorama', objetoConEscenas);