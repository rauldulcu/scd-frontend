import { CREATE_EMPLOYEE } from "../../paths";
import CreateEmployeeRoute from "./routes/CreateEmployeeRoute/CreateEmployeeRoute";

const createEmployeeRouter = [
    {
        path: CREATE_EMPLOYEE,
        element: <CreateEmployeeRoute />
    }
]

export default createEmployeeRouter;