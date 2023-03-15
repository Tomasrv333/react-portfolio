import * as Unicons from '@iconscout/react-unicons'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTheme, Container, Box, Typography } from '@mui/material';
import { tokens } from '../../theme';
import CardProject from './CardProject';

const Projects = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Container
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                width='51vw'
                height='100vh'
                display='flex'
                flexDirection='column'
                justifyContent='center'
            >
                <Typography
                    variant='h6'
                    fontWeight={600}
                    color={colors.blueAccent[600]}
                >
                    Proyectos
                </Typography>
                <Typography
                    variant='h5'
                    fontWeight={600}
                    color={colors.primary[800]}
                >
                    Cada proyecto ha sido un proceso de aprendizaje
                </Typography>
                <CardProject/>
            </Box>
        </Container>
        // <section id="projects" className="projects__container">
        //     <AnimationOnScroll animateIn='animate__fadeIn'>
        //         <h1 className="projects__title">Proyectos</h1>
        //         <div className="projects__content">
        //             <div className='projects__card'>
        //                 <div className='card__img'></div>
        //                 <div className='card__box-text'>
        //                     <div className='box-text__block-title'>
        //                         <Unicons.UilFolderOpen />
        //                         <h3 className='box-text__title'>Task App</h3>
        //                     </div>
        //                     <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
        //                     <p className='box-text__p'>
        //                         Aplicacion de tareas con metodologia CRUD
        //                     </p>
        //                 </div>
                        
        //                 <button className='card__button'>Ver</button>
        //             </div>
        //             <div className='projects__card'>
        //                 <div className='card__img'></div>
        //                 <div className='card__box-text'>
        //                     <div className='box-text__block-title'>
        //                         <Unicons.UilFolderOpen />
        //                         <h3 className='box-text__title'>E-commerce</h3>
        //                     </div>
        //                     <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
        //                     <p className='box-text__p'>
        //                         Aplicacion de tareas con metodologia CRUD
        //                     </p>
        //                 </div>
                        
        //                 <button className='card__button'>Ver</button>
        //             </div>
        //             <div className='projects__card'>
        //                 <div className='card__img'></div>
        //                 <div className='card__box-text'>
        //                     <div className='box-text__block-title'>
        //                         <Unicons.UilFolderOpen />
        //                         <h3 className='box-text__title'>Delivery App</h3>
        //                     </div>
        //                     <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
        //                     <p className='box-text__p'>
        //                         Aplicacion de tareas con metodologia CRUD
        //                     </p>
        //                 </div>
                        
        //                 <button className='card__button'>Ver</button>
        //             </div>
        //             <div className='projects__card'>
        //                 <div className='card__img'></div>
        //                 <div className='card__box-text'>
        //                     <div className='box-text__block-title'>
        //                         <Unicons.UilFolderOpen />
        //                         <h3 className='box-text__title'>Social Networking</h3>
        //                     </div>
        //                     <span className='box-text__span'>NodeJs | Express | ReactJs | MongoDB</span>
        //                     <p className='box-text__p'>
        //                         Aplicacion de tareas con metodologia CRUD
        //                     </p>
        //                 </div>
                        
        //                 <button className='card__button'>Ver</button>
        //             </div>
        //         </div>
        //     </AnimationOnScroll>
        // </section>
    )
}

export default Projects