import { defineEventHandler } from "h3";
import { z } from "zod";

import _ from "lodash";

import { Team } from "~/types";
import TeamRepo from "~/server/utils/team_repo";
import validate from "~/server/utils/validation";

/**
 * List team from the database
 */
export const listTeamHandler = defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);

    const limit = _.get(query, "limit", 6) as number;
    const skip = _.get(query, "skip", 0) as number;

    const results = await TeamRepo.fetchTeam({ limit, skip });

    return results;
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
    const body = await readBody(event);

    const schema = z.object({
      iri: z.string().optional(),
      name: z.string(),
      color: z.string(),
      abbreviation: z.string(),
      teamPermissions: z.array(z.string()).optional(),
    });

    const validation = await validate(event, schema);

    if (validation.error) {
      setResponseStatus(event, 422);
      return { message: validation.message };
    }

    await TeamRepo.insert({
      iri: body.iri,
      name: body.name,
      color: body.color,
      abbreviation: body.abbreviation,
      teamPermissions: body.teamPermissions,
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
 * Update team document
 */
export const updateTeamHandler = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const teamId = await getRouterParam(event, "id");

    const results = await TeamRepo.findById(String(teamId));

    if (!results) {
      setResponseStatus(event, 404);
      return {
        message: "unable to find team",
      };
    }

    const schema = z.object({
      iri: z.string().optional(),
      name: z.string(),
      color: z.string(),
      abbreviation: z.string(),
      teamPermissions: z.array(z.string()).optional(),
    });

    const validation = await validate(event, schema);

    if (validation.error) {
      setResponseStatus(event, 422);
      return { message: validation.message };
    }

    const team: Partial<Team> = _.merge(results, body);

    await TeamRepo.update(String(teamId), team);

    return team;
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
    const teamId = await getRouterParam(event, "id");

    const results = await TeamRepo.findById(String(teamId));

    if (!results) {
      setResponseStatus(event, 404);
      return {
        message: "unable to find team",
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
 * Delete team document
 */
export const destroyTeamHandler = defineEventHandler(async (event) => {
  try {
    const teamId = await getRouterParam(event, "id");

    const results = await TeamRepo.findById(String(teamId));

    if (!results) {
      setResponseStatus(event, 404);
      return {
        message: "unable to find team",
      };
    }

    await TeamRepo.remove(String(teamId));

    return { success: true };
  } catch (err) {
    setResponseStatus(event, 500);
    return {
      message: (err as Error).message,
    };
  }
});
