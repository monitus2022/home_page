import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './buttonHolders.css';
import ImagePaths from './imagePaths';

const ButtonHolders = () => {


    const buttons = ImagePaths.map((imagePath) => {
        return (
                <Grid item xs={6} sm={6} md={6} lg={6} className="imageHolder" 
                onClick={()=>window.open(`https://${imagePath.alt}.monitus.org`, "_self")}
                >
                    <img src={imagePath.src} alt={imagePath.alt} title={imagePath.title} />
                    <p>{imagePath.title}</p>
                </Grid>
            )});

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