'use client'
import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { Typography, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import DataPie from '../components/common/DataPie';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'
import { typeSymbole } from '../constants/typeSymbols';
import BasicSparkLine from '../components/common/DataSparkline';
import Typed from 'typed.js';
const Template = ({ children, height, alignItems }: { children: JSX.Element, height: number, alignItems: string }) => {
    return (
        <Box sx={{ height: { xs: 'auto', md: height }, display: 'flex', alignItems: alignItems, justifyContent: 'left', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', border: `1px solid ${grey[200]}`, borderRadius: 2, backgroundColor: 'white', overflow: { xs: 'hidden', md: 'auto' } }}>
            {children}
        </Box>

    )
}
const colors = [['#00838f', '#26c6da '], ['#7b1fa2', '#ab47bc'], ['#c2185b', '#ec407a'], ['#f57c00', '#ffa726']]
const page = () => {
    const ISSERVER = typeof window === "undefined";
    let mianData = !ISSERVER && localStorage.getItem('mbtiData') as any
    mianData = JSON.parse(mianData)
    const typeData = typeSymbole(mianData?.type?.toUpperCase())
    const typedInfo = [`${typeData?.info}`]
    const textRef = useRef(null)
    useEffect(() => {
        const typed = new Typed(textRef.current, { strings: typedInfo, typeSpeed: 15, showCursor: false })
        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <Box sx={{ height: '100dvh', backgroundColor: '#F9F5F4', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <Grid container spacing={2} width={1} sx={{ pt: 2, px: 1, justifyContent: 'center' }}>
                <Grid xs={12} sm={7} md={5} lg={3} >
                    <Template height={300} alignItems='start'>
                        <Box sx={{ height: 1, display: 'flex', width: 1, justifyContent: 'end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 1 0px', justifyContent: 'center', backgroundColor: 'primary.main' }}>
                                <Typography mt={2} sx={{ color: typeData?.color, fontSize: 35, }} textAlign='center' >
                                    {typeData?.label}
                                </Typography>
                            </Box>
                            <Avatar sx={{ height: 300, borderRadius: 0, flex: '1 1 0px', }} variant='rounded'>
                                <Image src={typeData?.img} fill style={{ objectFit: 'cover' }} alt='' />
                            </Avatar>
                        </Box>
                    </Template>
                </Grid>
                <Grid xs={12} md={7} lg={9}>
                    <Template height={300} alignItems='start'>
                        <Grid container alignItems='center'>
                            <Grid xs={12} sm={9}>
                                <BasicSparkLine />
                            </Grid>
                            <Grid xs={12} sm={3} sx={{ padding: { xs: '1.5rem', sm: '0 1.5rem 0 0' } }}>
                                <Box sx={{ border: `1px solid ${grey[300]}`, p: 2, borderRadius: 3, }}>
                                    <Typography sx={{ color: grey[700], fontSize: { xs: 15, lg: 20 } }}>
                                        this chart shows how much of society has each type filled
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Template>
                </Grid>
                <Grid xs={12} md={6}>
                    <Template height={380} alignItems='center'>
                        <Grid container width={1} height={1} alignItems='center' rowSpacing={3} py={{ xs: 2, md: 0 }}>
                            {mianData?.percentage?.map((item: object[], index: number) => (
                                <Grid xs={12} sm={6} key={index} sx={{ display: 'flex', justifyContent: 'center', px: { xs: 6, sm: 1 } }}>
                                    <DataPie data={item} colors={colors[index]} />
                                </Grid>
                            ))}

                            <Box p={3} display={{ xs: 'block', sm: 'none' }}>
                                <Box sx={{ border: `1px solid ${grey[300]}`, p: 2, borderRadius: 3, }}>
                                    <Typography sx={{ color: grey[700], fontSize: { xs: 15, lg: 20 } }}>
                                        these charts show the exact percentage of each symbol in your mbti type
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Template>
                </Grid>
                <Grid xs={12} md={6}>
                    <Template height={380} alignItems='start'>
                        <Box sx={{ p: 2, textAlign: 'justify' }}>
                            <Typography variant='subtitle1' fontWeight={500} fontSize={{ xs: 16, sm: 18 }} ref={textRef} textAlign='start' display='inline' />
                        </Box>
                    </Template>
                </Grid>
            </Grid >
        </Box >
    );
};

export default page;
