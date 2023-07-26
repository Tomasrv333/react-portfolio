import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(LanguageDetector)
    .init({
        fallbackLng: "es",
        resources: {
            es: {
                translation: {
                    header: {
                        title: "Portafolio",
                        nav: {
                            navItem1: "Proyectos",
                            navItem2: "Acerca",
                            navItem3: "Contacto"
                        },
                        sidebar: {
                            btn: "Descargar CV",
                        }
                    },
                    hero: {
                        spanMessage: "Hola! Yo soy..",
                        spanTitle: "Desarrollador Full Stack",
                        description: "Crearé soluciones web personalizadas para sus necesidades. Con experiencia en desarrollo de pila completa, ofreceré sitios web y aplicaciones funcionales y visualmente atractivos que brinden una experiencia de usuario perfecta.",
                        btn: "Contactame",
                        scrollDown: "Desliza hacia abajo"
                    }
                }
            },
            en: {
                translation: {
                    header: {
                        title: "Portfolio",
                        nav: {
                            navItem1: "Projects",
                            navItem2: "About",
                            navItem3: "Contact"
                        },
                        sidebar: {
                            btn: "Download CV",
                        }
                    },
                    hero: {
                        spanMessage: "Hello! I'm",
                        spanTitle: "Full Stack Developer",
                        description: "I will create custom web solutions for your needs. With expertise in full stack development, Ill deliver functional and visually appealing websites and applications that provide a seamless user experience.",
                        btn: "Contact me",
                        scrollDown: "Scroll down"
                    }
                }
            }
        }
}) 