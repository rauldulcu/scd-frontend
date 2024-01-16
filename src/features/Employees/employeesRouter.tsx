import { CREATE_EMPLOYEE, EMPLOYEES } from "../../paths";
import CreateEmployeeRoute from "./routes/CreateEmployeeRoute/CreateEmployeeRoute";
import ViewAllEmployeesRoute from "./routes/ViewAllEmployeesRoute/ViewAllEmployeesRoute";

const employeesRouter = [
    {
        path: EMPLOYEES,
        element: <ViewAllEmployeesRoute />
    },
    {
        path: CREATE_EMPLOYEE,
        element: <CreateEmployeeRoute />
    }
]

export default employeesRouter;