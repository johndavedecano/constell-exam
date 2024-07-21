import { defineEventHandler } from "h3";

/**
 * List team from the database
 */
export const listTeamHandler = defineEventHandler(async (event) => {
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
 * Store team to the database
 */
export const storeTeamHandler = defineEventHandler(async (event) => {
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
 * Update team document
 */
export const updateTeamHandler = defineEventHandler(async (event) => {
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
 * Show team document
 */
export const showTeamHandler = defineEventHandler(async (event) => {
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
 * Delete team document
 */
export const destroyTeamHandler = defineEventHandler(async (event) => {
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
