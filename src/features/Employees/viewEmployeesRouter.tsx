import { EMPLOYEES } from "../../paths";
import ViewAllEmployeesRoute from "./routes/ViewAllEmployeesRoute/ViewAllEmployeesRoute";

const viewEmployeesRouter = [
    {
        path: EMPLOYEES,
        element: <ViewAllEmployeesRoute />
    }
]

export default viewEmployeesRouter;