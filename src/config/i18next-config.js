import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(LanguageDetector)
    .init({
        fallbackLng: "es",
        resources: {
            es: {
                translation: {
                    language: {
                        spanish: 'Español',
                        english: 'Inglés',
                    },
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
                        spanMessage: "Hola! Soy..",
                        spanTitle: "Desarrollador Full Stack",
                        description: "Crearé soluciones web personalizadas para sus necesidades. Con experiencia en desarrollo de pila completa, ofreceré sitios web y aplicaciones funcionales y visualmente atractivos que brinden una experiencia de usuario perfecta.",
                        btn: "Contactame",
                        scrollDown: "Desliza hacia abajo"
                    },
                    whatIDo: {
                        title: "Lo que hago",
                        card1: {
                            title: "Sitios Web",
                            description: "Plataforma digital que brinda información y servicios en línea."
                        },
                        card2: {
                            title: "Aplicaciones Web",
                            description: "Plataforma interactiva y escalable para tareas específicas en línea."
                        },
                        card3: {
                            title: "Aplicaciones Moviles",
                            description: "Software interactivo en dispositivos móviles para diversas funcionalidades."
                        },
                        card4: {
                            title: "Mantenimientos",
                            description: "Actualización, rendimiento, seguridad, corrección, escalabilidad, seguimiento."
                        }
                    },
                    projects: {
                        title: 'Mis Proyectos',
                        card: {
                            types: {
                                website: 'Sitio Web',
                                webApp: 'Aplicación Web'
                            },
                            tech: 'Tecnologías',
                            btn: 'Prueba ahora'
                        },
                        card1: {
                            title: 'E-commerce',
                            description: 'Un comercio electrónico revolucionario que le brinda acceso instantáneo a una amplia gama de productos desde la comodidad de su hogar, transformando la forma en que compra y abriendo un mundo de posibilidades comerciales ilimitadas.'
                        },
                        card2: {
                            title: 'Administración de tareas',
                            description: 'Optimice su vida sin esfuerzo: la solución en línea definitiva para administrar sus tareas y maximizar la productividad.'
                        },
                        card3: {
                            title: 'Pokedex',
                            description: 'La aplicación es un Pokedex desarrollado usando Pokemon PokeAPI. Permite a los entrenadores de Pokémon acceder a una extensa base de datos de Pokémon y obtener información detallada sobre cada especie, incluidas estadísticas, habilidades, movimientos, tipos y evoluciones.'
                        },
                        view: 'Ver Todos'
                    },
                    about: {
                        title: "Acerca de mi",
                        column1: {
                            title: "Foco de trabajo",
                            description: "Siempre quiero ofrecer la mejor calidad con mi trabajo y proyectos",
                            list: {
                                listItem1: "Comprender los requisitos del proyecto.",
                                listItem2: "Establecer una comunicación efectiva.",
                                listItem3: "Planificar y organizar el trabajo.",
                                listItem4: "Desarrollar en etapas iterativas.",
                                listItem5: "Mantener un código limpio y documentado.",
                                listItem6: "Pruebas extensas.",
                                listItem7: "Brindar apoyo y seguimiento."
                            }
                        },
                        column2: {
                            title: "Habilidades Tecnicas"
                        },
                        column3: {
                            title: "Educación",
                            card1: {
                                title: "Ingenieria de Sistemas",
                                entity: "Fundación Universitaria Luis Amigó"
                            },
                            card2: "Desarrollo Full Stack",
                            card3: "Habilidades blandas para el siglo 21",
                            card4: "Ingles para IT",
                            status: {
                                inProgress: "En curso",
                                completed: "Completo"
                            }
                        }
                    },
                    contact: {
                        title: "Contacto",
                        info: "¡Conectémonos para darle vida a su visión digital! Juntos, podemos construir soluciones web que impulsen su negocio hacia el éxito.",
                        networks: "Mis Redes",
                        form: {
                            name: "Nombre*",
                            email: "Email*",
                            phone: "Número",
                            message: "Mensaje*",
                            service: "Servicios",
                            services: {
                                item1: "Diseño y Desarrollo Web",
                                item2: 'Oportunidad de Trabajo',
                                item3: "Otro"
                            },
                            btn: "Enviar Mensaje"
                        }
                    },
                    footer: {
                        span: "Desarrollador Full Stack",
                        copyright: "Todos los derechos reservados."
                    }
                }
            },
            en: {
                translation: {
                    language: {
                        spanish: 'Spanish',
                        english: 'English',
                    },
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
                    },
                    whatIDo: {
                        title: "What I Do",
                        card1: {
                            title: "Websites",
                            description: "Digital platform that provides information and services online."
                        },
                        card2: {
                            title: "Web Applications",
                            description: "Interactive and scalable platform for specific tasks online."
                        },
                        card3: {
                            title: "Mobile Applications",
                            description: "Interactive software on mobile devices for various functionalities."
                        },
                        card4: {
                            title: "Maintenance",
                            description: "Update, performance, security, correctness, scalability, monitoring."
                        }
                    },
                    projects: {
                        title: 'My Projects',
                        card: {
                            types: {
                                website: 'Website',
                                webApp: 'Web Application'
                            },
                            tech: 'Technologies',
                            btn: 'Try Now'
                        },
                        card1: {
                            title: 'E-commerce',
                            description: 'A revolutionary ecommerce that gives you instant access to a wide range of products from the comfort of your home, transforming the way you shop and opening up a world of limitless business possibilities.'
                        },
                        card2: {
                            title: 'Task Management',
                            description: 'Streamline your life effortlessly: the ultimate online solution for managing your tasks and maximizing productivity.'
                        },
                        card3: {
                            title: 'Pokedex',
                            description: 'The application is a Pokedex developed using the Pokemon PokeAPI. It allows Pokemon trainers to access an extensive database of Pokemon and obtain detailed information about each species, including statistics, abilities, moves, types, and evolutions.'
                        },
                        view: 'View All'
                    },
                    about: {
                        title: "About",
                        column1: {
                            title: "Work Focus",
                            description: "I always want to offer the best quality with my work and projects",
                            list: {
                                listItem1: "Understand the project requirements.",
                                listItem2: "Establish effective communication.",
                                listItem3: "Plan and organize work.",
                                listItem4: "Develop in iterative stages.",
                                listItem5: "Maintain a clean and documented code.",
                                listItem6: "Extensive tests.",
                                listItem7: "Provide support and follow-up."
                            }
                        },
                        column2: {
                            title: "Tech Skill's"
                        },
                        column3: {
                            title: "Education",
                            card1: {
                                title: "Systems Engineer",
                                entity: "Luis Amigó University Foundation / 2020"
                            },
                            card2: "Full Stack Development",
                            card3: "Soft Skill's for 21ts Century",
                            card4: "Tech English",
                            status: {
                                inProgress: "In Progress",
                                completed: "Completed"
                            }
                        }
                    },
                    contact: {
                        title: "Contact",
                        info: "Lets connect to bring your digital vision to life! Together, we can build web solutions that drive your business towards success.",
                        networks: "My Networks",
                        form: {
                            name: "Name*",
                            email: "Email*",
                            phone: "Phone",
                            message: "Message*",
                            service: "Services",
                            services: {
                                item1: "Web Design and Development",
                                item2: 'Job Opportunity',
                                item3: "Other"
                            },
                            btn: "Send Message"
                        }
                    },
                    footer: {
                        span: "Full Stack Developer",
                        copyright: "All Rights Reserved."
                    }
                }
            }
        }
}) 

export default i18next;