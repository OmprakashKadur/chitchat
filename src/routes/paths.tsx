 function path(root: string, sublink: string){
    return `${root}${sublink}`
 }
export const ROOTS_DASHBOARD = "/";
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "app"),
  },
};
