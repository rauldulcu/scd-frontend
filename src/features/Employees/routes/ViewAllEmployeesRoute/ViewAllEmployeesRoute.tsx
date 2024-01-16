import React from 'react';
import { Typography, Container, Paper, Grid, ButtonBase, Stack } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import Navigation from '../../../../components/Navigation/Navigation';
import Footer from '../../../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { CREATE_EMPLOYEE } from '../../../../paths';
import { EmployeeCard } from './ViewAllEmployeesRoute.styles';
import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../../../../services/employees';
import { useGetDepartmentsQuery } from '../../../../services/departments';  // Import the departments query

const ViewAllEmployeesRoute: React.FC = () => {
  const { data: employeeData } = useGetEmployeesQuery();
  const { data: departmentData } = useGetDepartmentsQuery();  // Fetch department data
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const navigate = useNavigate();

  const getDepartmentNameById = (departmentId: number) => {
    const department = departmentData?.find((d) => d.id === departmentId);
    return department ? department.name : 'Unknown Department';
  };

  const getManagerNameById = (managerId: number) => {
    const manager = employeeData?.find((m) => m.id === managerId);
    return manager ? manager.name : 'No manager';
  };

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
            Welcome to the Employees Page
          </Typography>
          <Typography variant="body1">
            Explore the details of all employees in your organization here.
          </Typography>
        </Paper>
      </Container>
      <Grid container alignItems='center' padding={'20px'}>
        <Grid item lg={2.2} ml={60}>
          <Typography variant='subtitle1'>Name</Typography>
        </Grid>
        <Grid item lg={2.2}>
          <Typography variant='subtitle1'>Email</Typography>
        </Grid>
        <Grid item lg={2.2}>
          <Typography variant='subtitle1'>Department</Typography>
        </Grid>
        <Grid item >
          <Typography variant='subtitle1'>Manager</Typography>
        </Grid>
      </Grid>
      {employeeData?.map((employee) => (
        <EmployeeCard key={employee.id}>
          <Grid container alignItems={'center'}>
            <Grid item lg={2.2}>
              {employee.name}
            </Grid>
            <Grid item lg={3.2}>
              {employee.email}
            </Grid>
            <Grid item lg={2.6}>
              {getDepartmentNameById(employee.departmentId)}
            </Grid>
            <Grid item lg={3.3}>
              {getManagerNameById(employee.managerId)}
            </Grid>
            <Grid item>
              <Stack direction={'row'} gap={'20px'}>
                <ButtonBase disableRipple={true} onClick={() => deleteEmployee(employee.id)}>
                  <Delete />
                </ButtonBase>
                <ButtonBase disableRipple={true}>
                  <Edit />
                </ButtonBase>
              </Stack>
            </Grid>
          </Grid>
        </EmployeeCard>
      ))}
      <Container sx={{ marginBottom: '10%', width: '100%' }}>
      </Container>
      <Footer buttonText={'Create new employee'} buttonOnClick={() => navigate(CREATE_EMPLOYEE)} />
    </>
  );
};

export default ViewAllEmployeesRoute;
