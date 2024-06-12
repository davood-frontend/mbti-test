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
        <Box sx={{ height, display: 'flex', alignItems: alignItems, justifyContent: 'left', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', border: `1px solid ${grey[200]}`, borderRadius: 2, backgroundColor: 'white', overflow: 'auto' }}>
            {children}
        </Box>

    )
}

const colors = [['#c45161', '#e094a0'], ['#5e62a9', '#434279'], ['#cbc7d8', '#8db7d2'], ['#f2b6c0', '#f2dde1']]
const page = () => {
    const ISSERVER = typeof window === "undefined";
    let mianData = !ISSERVER && localStorage.getItem('mbtiData') as any
    mianData = JSON.parse(mianData)
    const typeData = typeSymbole(mianData?.type.toUpperCase())
    const typedInfo = [`${typeData?.info}`]
    const textRef = useRef(null)
    useEffect(() => {
        const typed = new Typed(textRef.current, { strings: typedInfo, typeSpeed: 15, showCursor: false })
        return () => {
            typed.destroy()
        }
    }, [])
    return (
        <Box sx={{ height: '100vh', backgroundColor: '#F9F5F4', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <Grid container spacing={2} width={1} sx={{ pt: 2, px: 1 }}>
                <Grid xs={3} >
                    <Template height={300} alignItems='start'>
                        <Box sx={{ height: 1, display: 'flex', width: 1, justifyContent: 'end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 1, flexDirection: 'column', justifyContent: 'center', px: 2, backgroundColor: 'primary.main' }}>
                                <Typography variant='h3' mt={2} sx={{ color: typeData?.color }}>
                                    {typeData?.label}
                                </Typography>
                            </Box>
                            <Avatar sx={{ height: 1, width: 200, borderRadius: 0 }} variant='rounded'>
                                <Image src={typeData?.img} fill style={{ objectFit: 'cover' }} alt='' />
                            </Avatar>
                        </Box>
                    </Template>
                </Grid>
                <Grid xs={9}>
                    <Template height={300} alignItems='start'>
                        <Grid container alignItems='center'>
                            <Grid xs={9}>
                                <BasicSparkLine />
                            </Grid>
                            <Grid xs={3} paddingRight={3}>
                                <Box sx={{ border: `1px solid ${grey[300]}`, p: 2, borderRadius: 3, }}>
                                    <Typography variant='h6' sx={{ color: grey[700] }}>
                                        this chart shows how much of society has each type filled
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Template>
                </Grid>
                <Grid xs={6}>
                    <Template height={380} alignItems='center'>
                        <Grid container width={1} height={1} alignItems='center' rowSpacing={3} >
                            {mianData.percentage.map((item: object[], index: number) => (
                                <Grid xs={6} key={index}>
                                    <DataPie data={item} colors={colors[index]} />
                                </Grid>
                            ))}


                        </Grid>
                    </Template>
                </Grid>
                <Grid xs={6}>
                    <Template height={380} alignItems='start'>
                        <Box sx={{ p: 2, textAlign: 'justify' }}>
                            <Typography variant='subtitle1' fontWeight={500} fontSize={18} ref={textRef} textAlign='start' display='inline' />
                        </Box>
                    </Template>
                </Grid>
            </Grid>
        </Box>
    );
};

export default page;
