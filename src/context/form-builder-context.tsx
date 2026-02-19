"use client";

import { createContext } from "react";
import { FormBuilderValue } from "@/types";
import { FieldValues } from "react-hook-form";

export const FormBuilderContext =
  createContext<FormBuilderValue<FieldValues> | null>(null);
