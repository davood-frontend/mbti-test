'use client'
import { Box } from '@mui/material';
import React from 'react';
import { Paper, Typography, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import infp from '@/app/assets/types/INFP.jfif'
import DataBar from '../components/common/DataBar';
import DataPie from '../components/common/DataPie';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2'
const Template = ({ children, height, alignItems }: { children: JSX.Element, height: number, alignItems: string }) => {
    return (
        <Box sx={{ height, display: 'flex', alignItems: alignItems, justifyContent: 'center', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;', border: `1px solid ${grey[200]}`, borderRadius: 2, backgroundColor: 'white', overflow: 'auto' }}>
            {children}
        </Box>

    )
}
const page = () => {

    return (
        <Box sx={{ height: '100vh', backgroundColor: '#F9F5F4', display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <Grid container spacing={2} width={1} sx={{ pt: 2, px: 1 }}>
                <Grid xs={3} >
                    <Template height={300} alignItems='start'>
                        <Box sx={{ height: 1, display: 'flex', width: 1, justifyContent: 'end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', width: 1, flexDirection: 'column', justifyContent: 'center', px: 2, backgroundColor: 'primary.main' }}>
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
                    <Template height={300} alignItems='start'>
                        <Box sx={{ p: 2, textAlign: 'justify' }}>
                            <Typography variant='subtitle1' fontWeight={450} fontSize={18}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, maiores esse fugit voluptatum dicta veritatis sequi nulla tempore consequuntur consequatur dolore dolor, eos itaque doloremque, repudiandae laboriosam! Aliquid laborum commodi maxime repudiandae sapiente nesciunt pariatur, maiores distinctio ipsam ut ipsum cupiditate iure quo ducimus eius eligendi aperiam, vero neque id mollitia. Unde delectus architecto dignissimos suscipit vero quisquam aliquam, laboriosam iste est explicabo quas in nisi tempore culpa dolorem aperiam sapiente doloribus, assumenda ullam? Facere, consequuntur. Excepturi eius voluptatem placeat, qui aperiam optio libero sunt voluptas tempore, dolor sequi, officiis mollitia hic cupiditate eum pariatur veniam aliquid itaque dolorem odio explicabo impedit. Excepturi libero dolore aspernatur voluptatibus magnam delectus facilis tempore cupiditate, architecto error hic, doloremque quia laboriosam eius, adipisci ducimus earum. Odio ducimus, magnam quidem deleniti eaque, sint saepe tempore nostrum veniam possimus placeat sapiente architecto necessitatibus alias dolore ab eligendi sequi praesentium? Ullam, dolorem. Porro quaerat consequatur dolores odio, itaque necessitatibus a cumque totam voluptatibus eaque non rerum hic doloremque tenetur velit vitae impedit, minima quisquam ex aperiam voluptate, sequi inventore eum quis! Quia, officia illo! Omnis sequi odit eveniet nihil architecto ipsum possimus eaque odio quaerat ducimus quos dolorem corrupti hic, itaque obcaecati alias veniam ex accusamus doloremque enim suscipit vitae consectetur iusto commodi. Praesentium magnam aut, iusto cum nemo sint possimus placeat culpa fuga sequi impedit laboriosam iure sapiente nobis voluptatem libero repudiandae enim tempora cumque? Atque facere repellendus obcaecati dolore cum quia asperiores eveniet laboriosam, eum quis, rerum ipsa! Eaque quis fugiat cum debitis ipsam reiciendis facilis veniam dicta. Incidunt illum voluptates vitae fugit corporis. Cumque harum praesentium veniam voluptates nemo maiores, quis numquam corrupti atque eveniet laudantium quibusdam! Veniam earum harum sit neque quo libero quos obcaecati explicabo totam magnam saepe eaque, fugit exercitationem officia beatae perspiciatis quia aliquid illo sapiente eos illum quibusdam.
                            </Typography>
                        </Box>
                    </Template>
                </Grid>
                <Grid xs={12}>
                    <Template height={380} alignItems='center'>
                        <Grid container width={1} height={1} alignItems='center' rowSpacing={3} >
                            <Grid xs={6} container>
                                <Grid xs={6}>
                                    <DataPie />
                                </Grid>
                                <Grid xs={6}>
                                    <DataPie />
                                </Grid>
                                <Grid xs={6}>
                                    <DataPie />
                                </Grid>
                                <Grid xs={6}>
                                    <DataPie />
                                </Grid>
                            </Grid>

                        </Grid>
                    </Template>
                </Grid>
            </Grid>
        </Box>
    );
};

export default page;