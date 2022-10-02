import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './buttonHolders.css';
import ImagePaths from './imagePaths';

const ButtonHolders = () => {

    const buttons = ImagePaths.map((imagePath) => {
        return (
            <Grid item xs={6} sm={6} md={6} lg={6} className="imageHolder">
                <img src={imagePath.src} alt={imagePath.alt} title={imagePath.title} />
            </Grid>)
    });

    return (
        <div className="buttonHolders">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {buttons}
                </Grid>
            </Box>
        </div>
    )
};

export default ButtonHolders;