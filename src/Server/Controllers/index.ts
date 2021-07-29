import { UserController } from "./User/User";
import { HomeController } from "./Home/Home"

const userController = new UserController();
const homeController = new HomeController();


export {
    userController,
    homeController  
};