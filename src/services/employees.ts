import { EmployeeResponseDTO } from "../types/dto/employeesResponseDTO";
import api from "./api";

export const employeesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getEmployees: builder.query<EmployeeResponseDTO[], void>({
            query: () => '/api/employee',
            providesTags: ['Employee']
        }),
        getEmployeeById: builder.query<EmployeeResponseDTO, EmployeeResponseDTO['id']>({
            query: (employeeId) => `/api/employee/${employeeId}`,
            providesTags: ['Employee']
        }),
        postEmployee: builder.mutation<
            EmployeeResponseDTO,
            {
                name: string,
                departmentId?: number,
                managerId?: number,
                email: string
            }
        >({
            query: (data) => ({
                url: '/api/employee',
                method: 'POST',
                body: { ...data }
            }),
            invalidatesTags: ['Employee']
        }),
        deleteEmployee: builder.mutation<void, number>({
            query: (employeeId) => ({
                url: `api/employee/${employeeId}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Employee']
        })
    })
})

export const { useGetEmployeesQuery, usePostEmployeeMutation, useDeleteEmployeeMutation } = employeesApi;