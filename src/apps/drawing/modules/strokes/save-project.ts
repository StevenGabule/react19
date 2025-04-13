import { AppThunk } from "../../store";
import { newProject } from "./api";

export const saveProjects =
  (projectName: string, thumbnail: string): AppThunk =>
  async (dispatch, getState) => {
    try {
      const res = await newProject(projectName, getState().strokes, thumbnail);
      console.log(res);
    } catch (err) {
      console.error(err instanceof Error && err.message);
    }
  };
