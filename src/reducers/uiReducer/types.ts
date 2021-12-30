export interface IUiAction {
  type: string;
  payload: {
    value: any;
  };
}

export interface IUiState {
  loading: boolean;
  msgError: string;
}
