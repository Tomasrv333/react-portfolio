import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../../theme";

const TechSkill = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            p={0.4}
            pl={1}
            pr={1}
            borderRadius={1}
            border={1}
            sx={{ borderColor: colors.primary[400] }}
            color={colors.primary[400]}
        >
            <Typography>
                {props.name}
            </Typography>
        </Box>
    )
}

export default TechSkill