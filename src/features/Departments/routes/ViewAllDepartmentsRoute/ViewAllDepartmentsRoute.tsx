import React from 'react';
import { Typography, Container, Paper, Accordion, AccordionSummary, AccordionDetails, Divider, Button, Stack } from '@mui/material';
import Navigation from '../../../../components/Navigation/Navigation';
import Footer from '../../../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { CREATE_DEPARTMENT } from '../../../../paths';
import { useDeleteDepartmentMutation, useGetDepartmentsQuery } from '../../../../services/departments';
import { ExpandMore, Edit, Delete } from '@mui/icons-material';

const ViewAllDepartmentsRoute: React.FC = () => {

    const { data: departmentData } = useGetDepartmentsQuery();
    const [deleteDepartment] = useDeleteDepartmentMutation();
    const navigate = useNavigate();
    console.log(departmentData);

    return (
        <>
            <Navigation />
            <Container
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    marginBottom: '20px',
                    marginTop: '20px'
                }}
            >
                <Paper
                    elevation={3}
                    style={{
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Welcome to the Departments Page
                    </Typography>
                    <Typography variant="body1">
                        Explore the details of all the departments in your organization here.
                    </Typography>
                </Paper>
            </Container>
            <Container sx={{ marginLeft: '15%', borderRadius: '16px', marginBottom: '15%' }}>
                {departmentData?.map((department) => (
                    <Accordion key={department.id} sx={{ padding: '5px', marginBottom: '30px' }}>
                        <AccordionSummary sx={{ padding: '5px' }} expandIcon={<ExpandMore />}>
                            {department.name}
                        </AccordionSummary>
                        <Divider />
                        <AccordionDetails sx={{ margin: '10px' }}>
                            {department.description}
                            <Divider />
                            {department.parent != null ? (<Typography variant='body2' sx={{ marginTop: '30px' }}>Parent department: {department.parent.name} </Typography>) : ''}
                            {/* <Box width={'180px'} marginTop={'30px'}> */}
                            <Stack direction='row' gap='20px' width={'400px'} marginTop='30px'>
                                <Button variant='outlined' startIcon={<Edit />}>Edit department</Button>
                                <Button variant='contained' startIcon={<Delete />} color='error' onClick={() => deleteDepartment(department.id)}>Delete department</Button>
                            </Stack>
                            {/* </Box> */}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
            <Footer buttonText='Create new department' buttonOnClick={() => navigate(CREATE_DEPARTMENT)} />
        </>
    );
};

export default ViewAllDepartmentsRoute;
