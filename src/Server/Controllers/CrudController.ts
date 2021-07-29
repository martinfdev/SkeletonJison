import { Request, Response } from "express";

export abstract class CrudController {
    public abstract create(req: Request, res: Response): void;
    public abstract read(req: Request, res: Response): void;
    public abstract update(req: Request, res: Response): void;
    public abstract get(req: Request, res: Response): void;
    public abstract post(req: Request, res: Response): void;
    public abstract put(req: Request, res: Response): void;
    public abstract delete(req: Request, res: Response): void;
}