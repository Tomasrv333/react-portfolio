import * as Unicons from '@iconscout/react-unicons'
import { tokens } from "../../theme";
import { useTheme, Box, Typography, Avatar, Divider, IconButton, Container } from '@mui/material';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatarImg from '../../assets/img-profile.jpeg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import TechSkill from './TechSkill';

const Hero = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <Container
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box
                height='100vh'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                pt='4rem'
            >
                <Box
                    display='flex'
                    alignItems='center'
                    gap='4rem'
                >
                    <Box>
                        <Typography
                            variant='h2'
                            fontWeight='600'
                            color={colors.blueAccent[600]}
                        >
                            Full-Stack Developer
                        </Typography>
                        <Typography
                            width={450}
                            mt={1}
                            color={colors.primary[400]}
                        >
                            Desarrollador Fullstack apasionado por crear soluciones tecnológicas innovadoras y efectivas.
                        </Typography>
                        <Box
                            display='flex'
                            gap={2}
                            mt={3}
                            color={colors.blueAccent[600]}
                        >
                            <GitHubIcon/>
                            <LinkedInIcon/>
                        </Box>
                    </Box>
                    <Box>
                        <Avatar
                            alt='Tomás Ríos Vargas'
                            src={avatarImg}
                            sx={{width: 190, height: 190}}
                        >
                            
                        </Avatar>
                    </Box>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    gap='1rem'
                    mt={9}
                >
                    <Typography
                        color={colors.primary[400]}
                    >
                        Tech Stack
                    </Typography>
                    <Divider orientation='vertical' color={colors.primary[400]} />
                    <Box
                        display='flex'
                        alignItems='center'
                        gap={1.6}
                    >
                        {['Javascript', 'React', 'NodeJs', 'Express', 'MongoDB', 'MySQL'].map((text, index) => (
                            <TechSkill name={text} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Hero