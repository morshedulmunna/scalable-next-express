import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/health", (_req: Request, res: Response) => {
   res.status(200).json({ message: "Successfully run Health Checker!" });
});

export default router;
