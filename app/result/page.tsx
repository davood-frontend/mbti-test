'use client'
import { Box } from '@mui/material';
import React from 'react';
import { Paper, Typography, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2'
import infp from '@/app/assets/types/INFP.jfif'
import random from '@/app/assets/bigi.jpg'
import Image from 'next/image';
const Template = ({ children, height }: { children: JSX.Element, height: number }) => {
    return (
        <Box sx={{ height, display: 'flex', alignItems: 'start', justifyContent: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', border: `1px solid ${grey[200]}`, borderRadius: 2, backgroundColor: 'white',overflow:'hidden' }}>
            {children}
        </Box>

    )
}
const page = () => {

    console.log(infp)
    return (
        <Box sx={{ height: '100vh', backgroundColor: '#F9F5F4', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <Grid container spacing={2} width={1} sx={{ pt: 2, px: 1 }}>
                <Grid xs={3} >
                    <Template height={300}>
                        <Box sx={{ height: 1, display: 'flex', width: 1, justifyContent: 'end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 1, flexDirection: 'column', justifyContent:'center',px: 2 ,backgroundColor:'primary.main'}}>
                                <Typography variant='h3' mt={2} color='success.light'>
                                    INFP
                                </Typography>
                                {/* <Typography variant='subtitle2' mt={1} color='success.light'>
                                    Someone who is quiet, but thinks all the time instead of those who don't.
                                </Typography> */}
                            </Box>
                            <Avatar sx={{ height: 1, width: 200, borderRadius: 2 }} variant='rounded'>
                                <Image src={infp} fill style={{ objectFit: 'cover' }} alt='' />
                            </Avatar>
                        </Box>
                    </Template>
                </Grid>
                <Grid xs={9}>
                    <Template height={300}>
                        <Typography>
                            just testing this shit
                        </Typography>
                    </Template>
                </Grid>
                <Grid xs={12}>
                    <Template height={380}>
                        <Typography>
                            just testing this shit
                        </Typography>
                    </Template>
                </Grid>
            </Grid>
        </Box>
    );
};

export default page;