import { useTheme, Box, Typography, Button } from "@mui/material";
import { tokens } from "../../theme";
import TechSkill from "../Hero/TechSkill";

const Project = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            width='100%'
            height={300}
            display='flex'
            mt={2}
            p={3}
            backgroundColor={colors.primary[50]}
            borderRadius={3}
        >
            <Box
                width='100%'
                display='flex'
            >
                <Box
                    width='50%'
                >
                    <Typography>
                        Imagen
                    </Typography>
                </Box>
                <Box
                    width='50%'
                >
                    <Typography
                        variant="h5"
                        fontWeight={600}
                        color={colors.primary[800]}
                    >
                        Gestión de Tareas
                    </Typography>
                    <Typography
                        mt={1}
                        color={colors.primary[400]}
                        textAlign='justify'
                    >
                        Desarrollo de una aplicación web interactiva utilizando React.js que lista el número total de pokémon, junto con su imagen, nombre, tipo y estadísticas. La aplicación utiliza la API de PokéApi para acceder a los datos y permite visualizar, comparar y explorar el mundo Pokémon con facilidad.
                    </Typography>
                    <Box
                        mt={1}
                        display='flex'
                        gap={1}
                    >
                        <TechSkill name='React'/>
                        <TechSkill name='NodeJs'/>
                        <TechSkill name='Express'/>
                        <TechSkill name='MongoDB'/>
                    </Box>
                    <Box>
                        <Button 
                            variant='contained'
                            backgroundColor={colors.primary[500]}
                        >
                            Codigo
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default Project