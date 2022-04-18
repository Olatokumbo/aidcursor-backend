import { Request, Response } from "express";
import { User } from "../entities/user.entity";
import { Api404Error } from "../errors/404.error";

export const findUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOneBy({ id });

  if (user) return res.status(200).json(user);

  res.status(404).send(new Api404Error(`User with id: ${id} not found.`));
};
