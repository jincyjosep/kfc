import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { red } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  }));

// We can customise CSS like this

// const a ={
//     backgroundColor:"red"
// }

export default function FindKfc(){
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const onChangeSearch = (e) => {
        console.log('onChangeSearch',e.target.value);
    }

    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                <h6 style={{ fontWeight: "800", fontFamily:"American Purpose", letterSpacing:"-1px"}}>KFC</h6>
                <hr style={{ width: '90%', textAlign:"end" }}/>
                <h5 style={{ fontWeight: "400", fontFamily:"American Purpose", letterSpacing:"-1px"}}>
                    Locate the nearest restaurant(s)
                </h5>
                <Box sx={{ width: '90%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="SEARCH NEARBY" value="1" />
                            <Tab label="ADVANCED SEARCH" value="2" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">
                            <TextField id="outlined-basic" label="Search" variant="outlined" onChange={onChangeSearch}/>
                            <Stack spacing={2} direction="row" style={{paddingTop:"5px"}}>
                                <ColorButton variant="contained">Search</ColorButton>
                            </Stack>
                        </TabPanel>
                        <TabPanel value="2">Need dropdown</TabPanel>
                    </TabContext>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <img src="/findKfc.png" alt="imgFindKfc"/>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={10} 
                // style={a}
                >
                <h3 style={{fontSize:"35px", fontWeight: "800", fontFamily:"American Purpose", letterSpacing:"-3px"}}>KFC RESTAURANTS NEAR ME</h3>
                </Grid>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15717.364891052783!2d76.285943!3d9.9886467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d0d184d56c1%3A0xc41e612553d502b8!2sIFC%20-%20Italian%20Fried%20Chicken!5e0!3m2!1sen!2sin!4v1693288946585!5m2!1sen!2sin" 
                        width="750" 
                        height="450" 
                        style={{border:"0", marginBottom:"200px"}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                        title="kfcMap"
                    >
                    </iframe>
                    {/* <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.950977295596!2d76.44547277588657!3d10.020904290085555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080bbdb7d0facd%3A0xfb2b49b5f3b3a156!2sMFC%20Chicken%20Corner!5e0!3m2!1sen!2sin!4v1693845494945!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"
                    >
                     </iframe> */}
                </Grid>
                </Grid>
            </Box>
        </>
    )
}

