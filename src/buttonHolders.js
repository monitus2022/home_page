import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './buttonHolders.css';

const ButtonHolders = () => {

    return (
        <div className="buttonHolders">
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={6} md={6} lg={6} className="imageHolder">
                    <img src="https://yt3.ggpht.com/ytc/AMLnZu_dL-8b7yvrrbtpkRNShFE440mdUd74vIQpvfXujw=s900-c-k-c0x00ffffff-no-rj" alt="pad" title="パズドラ"/>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} className="imageHolder">
                    <img src="https://play-lh.googleusercontent.com/4an7wZ3kRBKwdirzXSgL2W3foMhfQmsNc73vX2WQtx8hGJpBEJHoGmMMWXsZMpXGY-U" alt="fgo" title="Fate/ Grand Order"/>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} className="imageHolder">
                    <img src="https://www.pngitem.com/pimgs/m/117-1173386_meteor-clipart-final-fantasy-final-fantasy-14-png.png" alt="ffxiv" title="Final Fantaxy 14"/>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} className="imageHolder">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/1200px-Icon-round-Question_mark.svg.png" alt="info" title="My info"/>
                </Grid>
            </Grid>
            </Box>
        </div>
    )
};

export default ButtonHolders;