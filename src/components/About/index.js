import * as Unicons from '@iconscout/react-unicons'
import { BorderBottom, BorderColor } from '@mui/icons-material';
import { useTheme, Container, Box, Typography } from '@mui/material';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { tokens } from "../../theme";
import backgroundImg from '../../assets/background-img.png';


const About = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                width='51vw'
                height='50vh'
                display='flex'
                p={4}
                gap={3}
                backgroundColor={colors.primary[50]}
                borderBottom={3}
                borderRight={3}
                sx={{
                    borderRadius: '2rem 0 2rem 0',
                    borderColor: colors.blueAccent[600]
                }}
            >
                <Box
                    width='50%'
                >
                    <Box
                        width='100%'
                        height='100%'
                        borderRadius={3}
                        sx={{
                            backgroundImage: `url("https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            transform: 'scaleX(-1)'
                        }}
                    >
                    </Box>
                </Box>
                <Box
                    width='50%'
                    display='flex'
                    flexDirection='column'
                >
                    <Typography
                        mb={1}
                        variant='h6'
                        fontWeight={600}
                        textTransform='capitalize'
                        color={colors.blueAccent[600]}
                    >
                        Perfil Profesional
                    </Typography>
                    <Typography
                        mb={2}
                        variant='h5'
                        fontWeight={600}
                        color={colors.primary[800]}
                    >
                        Soy un Desarrollador dedicado con base en Medellín/Colombia
                    </Typography>
                    <Typography
                        color={colors.primary[400]}
                    >
                        Soy un apasionado de la tecnología y la programación, y me encanta crear aplicaciones web que resuelvan problemas y mejoren la vida de las personas. Me he enfocado en aprender tecnologías modernas de desarrollo web como React, Node, Express y bases de datos, y estoy constantemente actualizando mis habilidades y conocimientos.
                    </Typography>
                </Box>
            </Box>
        </Container>

        // <section id="about" className="about-container"
        // >
        //     <AnimationOnScroll animateIn='animate__fadeIn'>
        //         <div className='about-container__content'>
        //             <div className="about-container__l-block">
        //                     <h2 className='l-block__subtitle'>Acerca de mi</h2>
        //                     <div className='content__ability'>
        //                     <p className="l-block__text">Con mis conocimientos en el desarrollo web he podido crear APIs que me han permitido transportar peticiones y respuestas entre la base de datos, el backend y el frontend con la finalidad de construir aplicaciones web dinámicas y amigables para el cliente, adicionalmente, tengo experiencia manipulando bases de datos SQL y noSQL, entre otras herramientas tales como Github para el control de versiones o Figma para el diseño de Mockups.</p>
        //                     <div className='ability__block'>
        //                         {/* // TODO: Crear cards con las habilidades como full-stack: Apis, servidores y arquitectura */}
        //                         <div className='card__info'>
        //                             <h4>UX / UI</h4>
        //                             <p>Experiencia e interfaz de usuario</p>
        //                         </div>
        //                         <div className='card__info'>
        //                             <h4>Rest APIs</h4>
        //                             <p>Interfaz de programación</p>
        //                         </div>
        //                         <div className='card__info'>
        //                             <h4>Performance</h4>
        //                             <p>Testing & Debugging</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="about-container__r-block">
        //                 <h2 className='r-block__subtitle'>Mis habilidades</h2>
        //                 <p className='r-block__text'>Tengo buen manejo de Javascript y sus diferentes frameworks y tecnologías relacionadas con el stack MERN (NodeJs, Express, React y MongoDB).</p>

        //                 <div className='content__skill'>
        //                     <div className='skill__box'>
        //                         <div className='skill__icon'>
        //                             <h4 className='skill__title'>Front-end</h4>
        //                             <Unicons.UilLaptop />
        //                         </div>
        //                         <div className='skill__name'>
        //                             <ul>
        //                                 <li><img src='/images/icons/icon-js.svg'/>Javascript</li>
        //                                 <li><img src='/images/icons/icon-react.svg'/>ReactJs</li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div className='skill__box'>
        //                         <div className='skill__icon'>
        //                             <h4 className='skill__title'>Back-end</h4>
        //                             <Unicons.UilServer />
        //                         </div>
        //                         <div className='skill__name'>
        //                             <ul>
        //                                 <li><img src='/images/icons/icon-node.svg'/>NodeJs</li>
        //                                 <li><img src='/images/icons/icon-express.svg'/>ExpressJs</li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div className='skill__box'>
        //                         <div className='skill__icon'>
        //                             <h4 className='skill__title'>Database</h4>
        //                             <Unicons.UilDatabase />
        //                         </div>
        //                         <div className='skill__name'>
        //                             <ul>
        //                                 <li><img src='/images/icons/icon-mysql.svg'/>MySQL</li>
        //                                 <li><img src='/images/icons/icon-postgresql.svg'/>PostgreSQL</li>
        //                                 <li><img src='/images/icons/icon-mongo.svg'/>MongoDB</li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div>

        //                 </div>
        //             </div>
        //         </div>
        //     </AnimationOnScroll>
        // </section>
    )
}

export default About