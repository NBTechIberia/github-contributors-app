export interface IDashboardAction {
  type: string;
  payload: { value: any };
}

export interface IDashboardState {
  count?: number;
  contributors?: IContributor[];
}

export interface IContributor {
  login: string;
  avatar_url: string;
  contributions: string;
}
