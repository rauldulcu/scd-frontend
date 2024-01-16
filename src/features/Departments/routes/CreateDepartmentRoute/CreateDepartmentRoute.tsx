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
import { ContentStack, FormCard } from "./CreateDepartmentRoute.styles";
import { useGetDepartmentsQuery, usePostDepartmentMutation } from "../../../../services/departments";
import { useNavigate } from "react-router-dom";
import { DEPARTMENTS } from "../../../../paths";

type CreateDepartmentTypes = {
    name: string;
    description: string;
    parentId: number;
};

const defaultValues: DefaultValues<CreateDepartmentTypes> = {
    name: "",
    description: "",
    parentId: 0,
};

const CreateDepartmentRoute: React.FC = () => {
    const methods = useForm<CreateDepartmentTypes>({
        defaultValues,
        mode: "onBlur",
    });

    const { data: departments } = useGetDepartmentsQuery();
    const [postDepartment, { isSuccess }] = usePostDepartmentMutation();
    const navigate = useNavigate();

    const onSubmit = (data: CreateDepartmentTypes) => {
        // Handle the submission logic here
        postDepartment(data);
        console.log(data);
    };

    useEffect(() => {
        if (isSuccess) navigate(DEPARTMENTS)
    }, [isSuccess])

    return (
        <>
            <Header title="Create a new department" />
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
                                    <TextField {...field} label="Department Name" required={true} />
                                )}
                            />
                            <Controller
                                control={methods.control}
                                name="description"
                                render={({ field }) => (
                                    <TextField {...field} label="Department Description" required={true} />
                                )}
                            />
                            <FormControl>
                                <InputLabel>Parent Department</InputLabel>
                                <Controller
                                    control={methods.control}
                                    name="parentId"
                                    render={({ field }) => (
                                        <Select {...field} label="Parent Department">
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
                buttonText={"Save"}
                isForm={true}
                buttonOnClick={methods.handleSubmit(onSubmit)}
            />
        </>
    );
};

export default CreateDepartmentRoute;
