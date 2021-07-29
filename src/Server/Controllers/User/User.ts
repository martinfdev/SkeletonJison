import { Request, Response } from "express";
import { CrudController } from "../CrudController";

export class UserController extends CrudController {
    
    //post
    public create(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }

    //get
    public read(req: Request, res: Response): void {
        res.json({ message: 'GET / user request received \n200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists.' });
    }

    //update \\ replace
    public replace(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    
    //update \\ modify
    public modify(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }

    //update \\ modify    
    public delete(req: Request, res: Response): void {
        throw new Error("Method not implemented.");
    }
    
}