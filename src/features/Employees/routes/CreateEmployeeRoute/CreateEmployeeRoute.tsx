import React, { useEffect } from "react";
import { useForm, Controller, DefaultValues, FormProvider } from "react-hook-form";
import {
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import Navigation from "../../../../components/Navigation/Navigation";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import { useGetEmployeesQuery, usePostEmployeeMutation } from "../../../../services/employees";
import { useGetDepartmentsQuery } from "../../../../services/departments";
import { ContentStack, FormCard } from "./CreateEmployeeRoute.styles";
import { EMPLOYEES } from "../../../../paths";
import { useNavigate } from "react-router-dom";

type CreateEmployeeTypes = {
    name: string;
    email: string;
    managerId: number; // Assuming your API expects managerId and departmentId
    departmentId: number;
};

const defaultValues: DefaultValues<CreateEmployeeTypes> = {
    name: "",
    email: "",
    managerId: 0, // You may need to adjust the default values based on your API requirements
    departmentId: 0
};

const CreateEmployeeRoute: React.FC = () => {
    const methods = useForm<CreateEmployeeTypes>({
        defaultValues,
        mode: "onBlur",
    });

    const { data: managers } = useGetEmployeesQuery();
    const { data: departments } = useGetDepartmentsQuery();
    const [postEmployee, { isSuccess }] = usePostEmployeeMutation();
    const navigate = useNavigate();

    const onSubmit = (data: CreateEmployeeTypes) => {
        // Handle the submission logic here
        postEmployee(data);
        console.log(data);
    };

    useEffect(() => {
        if (isSuccess) navigate(EMPLOYEES)
    }, [isSuccess])

    return (
        <>
            <Header title="Create a new employee" />
            <Navigation />
            <FormProvider {...methods}>
                <Container sx={{ marginLeft: "15%", marginTop: "100px" }}>
                    <FormCard>
                        <ContentStack
                            component="form"
                            onSubmit={methods.handleSubmit(onSubmit)}
                        >
                            <Controller
                                control={methods.control}
                                name="name"
                                render={({ field }) => (
                                    <TextField {...field} label="Name" required={true} />
                                )}
                            />
                            <Controller
                                control={methods.control}
                                name="email"
                                render={({ field }) => (
                                    <TextField {...field} label="Email" required={true} />
                                )}
                            />
                            <FormControl>
                                <InputLabel>Manager</InputLabel>
                                <Controller
                                    control={methods.control}
                                    name="managerId"
                                    render={({ field }) => (
                                        <Select {...field} label="Manager">
                                            {managers &&
                                                managers.map((manager) => (
                                                    <MenuItem
                                                        key={manager.id}
                                                        value={manager.id}
                                                    >
                                                        {manager.name}
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel>Department</InputLabel>
                                <Controller
                                    control={methods.control}
                                    name="departmentId"
                                    render={({ field }) => (
                                        <Select {...field} label="Department" required={true}>
                                            {departments &&
                                                departments.map((department) => (
                                                    <MenuItem
                                                        key={department.id}
                                                        value={department.id}
                                                    >
                                                        {department.name}
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </ContentStack>
                    </FormCard>
                </Container>
            </FormProvider>
            <Footer
                buttonText={"Submit"}
                isForm={true}
                buttonOnClick={methods.handleSubmit(onSubmit)}
            />
        </>
    );
};

export default CreateEmployeeRoute;
