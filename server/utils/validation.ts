import type { EventHandlerRequest, H3Event } from "h3";
import { z } from "zod";

export interface ValidationResult {
  error: boolean;
  message?: any;
}

export default async function validate(
  event: H3Event<EventHandlerRequest>,
  schema: z.AnyZodObject | z.ZodOptional<z.AnyZodObject>
): Promise<ValidationResult> {
  try {
    const body = await readBody(event);

    await schema.parseAsync(body);

    return {
      error: false,
    };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        error: true,
        message: err.issues,
      };
    }
    throw new Error((err as Error).message);
  }
}
