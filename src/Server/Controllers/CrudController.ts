import { Request, Response } from "express";

export abstract class CrudController {
    public abstract get(req: Request, res: Response): void;
    public abstract post(req: Request, res: Response): void;
    public abstract put(req: Request, res: Response): void;
    public abstract delete(req: Request, res: Response): void;
}