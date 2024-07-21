import { defineEventHandler } from "h3";

import StaffRepo from "~/server/utils/staff_repo";

import _ from "lodash";

/**
 * List staff from the database
 */
export const listStaffHandler = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    const limit = _.get(query, "limit", 6) as number;
    const skip = _.get(query, "skip", 0) as number;

    const results = await StaffRepo.fetchStaff({ limit, skip });

    return { data: results };
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

    await StaffRepo.insert(body);

    return body;
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
    return {
      message: "hi",
    };
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
    return {
      message: "hi",
    };
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
    return {
      message: "hi",
    };
  } catch (err) {
    setResponseStatus(event, 500);
    return {
      message: (err as Error).message,
    };
  }
});
