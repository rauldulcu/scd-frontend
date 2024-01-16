export interface DepartmentResponseDTO {
    id: number,
    name: string,
    description: string,
    parent: DepartmentResponseDTO
}