import { DepartmentResponseDTO } from "../types/dto/departmentResponseDTO";
import api from "./api";

export const departmentsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getDepartments: builder.query<DepartmentResponseDTO[], void>({
            query: () => '/api/department',
            providesTags: ['Department']
        }),
        getDepartmentById: builder.query<DepartmentResponseDTO, void>({
            query: (departmentId) => `/api/department/${departmentId}`,
            providesTags: ['Department']
        }),
        postDepartment: builder.mutation<
            DepartmentResponseDTO,
            {
                name: string,
                description: string,
                parentId: number
            }
        >({
            query: (data) => ({
                url: `/api/department`,
                method: 'POST',
                body: { ...data }
            }),
            invalidatesTags: ['Department']
        }),
        deleteDepartment: builder.mutation<void, number>({
            query: (departmentId) => ({
                url: `/api/department/${departmentId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Department']
        })
    })
})

export const { useGetDepartmentsQuery, useGetDepartmentByIdQuery, usePostDepartmentMutation, useDeleteDepartmentMutation } = departmentsApi;