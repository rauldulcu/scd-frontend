import { HOME } from "../../paths";
import HomeRoute from "./routes/HomeRoute/HomeRoute";

const homeRouter = [
    {
        path: HOME,
        element: <HomeRoute />
    }
]

export default homeRouter;