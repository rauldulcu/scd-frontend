import { EMPLOYEES } from "../../paths";
import ViewAllDepartmentsRoute from "./routes/ViewAllDepartmentsRoute/ViewAllDepartmentsRoute";

const viewDepartmentsRouter = [
    {
        path: EMPLOYEES,
        element: <ViewAllDepartmentsRoute />
    }
]

export default viewDepartmentsRouter;