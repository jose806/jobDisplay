export type GlobalSliceState = {
  apps: AppState[];
};

export type AppState = {
  name: string;
  description: string;
  image: string;
};
