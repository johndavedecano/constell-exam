import { defineEventHandler } from "h3";
import { z } from "zod";

import _ from "lodash";

import StaffRepo from "~/server/utils/staff_repo";
import validate from "~/server/utils/validation";
import { User } from "~/types";

/**
 * List staff from the database
 */
export const listStaffHandler = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    const limit = _.get(query, "limit", 6) as number;
    const skip = _.get(query, "skip", 0) as number;

    const results = await StaffRepo.fetchStaff({ limit, skip });

    return results;
  } catch (err) {
    setResponseStatus(event, 500);
    return {
      message: (err as Error).message,
    };
  }
});

/**
 * Store staff to the database
 */
export const storeStaffHandler = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const schema = z.object({
      iri: z.string().optional(),
      fullName: z.string(),
      displayName: z.string(),
      initials: z.string(),
      email: z.string().email(),
      phoneNumber: z.number().optional(),
      phoneCountryPrefix: z.number().optional(),
      teamIds: z.array(z.string()).optional(),
      image: z.string().optional(),
      address: z
        .object({
          addressLineOne: z.string(),
          addressLineTwo: z.string(),
          city: z.string(),
          country: z.string(),
          postalCode: z.string(),
          state: z.string(),
        })
        .optional(),
      isEmployee: z.boolean().default(true),
      functionName: z.string().optional(),
      userPermissions: z.array(z.string()).optional(),
    });

    const validation = await validate(event, schema);

    if (validation.error) {
      setResponseStatus(event, 422);
      return { message: validation.message };
    }

    await StaffRepo.insert({
      iri: body.iri,
      fullName: body.fullName,
      displayName: body.displayName,
      initials: body.initials,
      email: body.email,
      phoneNumber: body.phoneNumber,
      phoneCountryPrefix: body.phoneCountryPrefix,
      teamIds: body.teamIds,
      image: body.image,
      address: body.address,
      isEmployee: body.isEmployee,
      functionName: body.functionName,
      userPermissions: body.userPermissions,
    });

    return { success: true };
  } catch (err) {
    setResponseStatus(event, 500);
    return {
      message: (err as Error).message,
    };
  }
});

/**
 * Update staff document
 */
export const updateStaffHandler = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const staffId = await getRouterParam(event, "id");

    const results = await StaffRepo.findById(String(staffId));

    if (!results) {
      setResponseStatus(event, 404);
      return {
        message: "unable to find staff",
      };
    }

    const schema = z.object({
      iri: z.string().optional(),
      fullName: z.string(),
      displayName: z.string(),
      initials: z.string(),
      email: z.string().email(),
      phoneNumber: z.number().optional(),
      phoneCountryPrefix: z.number().optional(),
      teamIds: z.array(z.string()).optional(),
      image: z.string().optional(),
      address: z
        .object({
          addressLineOne: z.string(),
          addressLineTwo: z.string(),
          city: z.string(),
          country: z.string(),
          postalCode: z.string(),
          state: z.string(),
        })
        .optional(),
      isEmployee: z.boolean().default(true),
      functionName: z.string().optional(),
      userPermissions: z.array(z.string()).optional(),
    });

    const validation = await validate(event, schema);

    if (validation.error) {
      setResponseStatus(event, 422);
      return { message: validation.message };
    }

    const user: Partial<User> = _.merge(results, body);

    await StaffRepo.update(String(staffId), user);

    return user;
  } catch (err) {
    setResponseStatus(event, 500);
    return {
      message: (err as Error).message,
    };
  }
});

/**
 * Show staff document
 */
export const showStaffHandler = defineEventHandler(async (event) => {
  try {
    const staffId = await getRouterParam(event, "id");

    const results = await StaffRepo.findById(String(staffId));

    if (!results) {
      setResponseStatus(event, 404);
      return {
        message: "unable to find staff",
      };
    }

    return results;
  } catch (err) {
    setResponseStatus(event, 500);
    return {
      message: (err as Error).message,
    };
  }
});

/**
 * Delete staff document
 */
export const destroyStaffHandler = defineEventHandler(async (event) => {
  try {
    const staffId = await getRouterParam(event, "id");

    const results = await StaffRepo.findById(String(staffId));

    if (!results) {
      setResponseStatus(event, 404);
      return {
        message: "unable to find staff",
      };
    }

    await StaffRepo.remove(String(staffId));

    return { success: true };
  } catch (err) {
    setResponseStatus(event, 500);
    return {
      message: (err as Error).message,
    };
  }
});
