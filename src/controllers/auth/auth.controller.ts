import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";
import bcrypt from "bcrypt";

export const signUpController: RequestHandler = async (req, res) => {};
export const signInController: RequestHandler = async (req, res) => {};

export const authController = {
  signUpController,
  signInController,
};
