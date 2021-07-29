import { Request, Response } from "express";

export abstract class CrudController {
    public abstract create(req: Request, res: Response): void; //post
    public abstract read(req: Request, res: Response): void; //get
    public abstract replace(req: Request, res: Response): void; //update||replace
    public abstract modify(req: Request, res: Response): void; //update||modify
    public abstract delete(req: Request, res: Response): void; //delete
}