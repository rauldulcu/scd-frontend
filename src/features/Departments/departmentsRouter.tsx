import { CREATE_DEPARTMENT, DEPARTMENTS } from "../../paths";
import CreateDepartmentRoute from "./routes/CreateDepartmentRoute/CreateDepartmentRoute";
import ViewAllDepartmentsRoute from "./routes/ViewAllDepartmentsRoute/ViewAllDepartmentsRoute";

const departmentsRouter = [
    {
        path: DEPARTMENTS,
        element: <ViewAllDepartmentsRoute />
    },
    {
        path: CREATE_DEPARTMENT,
        element: <CreateDepartmentRoute />
    }
]

export default departmentsRouter;