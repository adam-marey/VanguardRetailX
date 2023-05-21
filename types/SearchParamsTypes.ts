export type Params = {
  id: string;
};

export type SearchParams = {
  name: string;
  image: string;
  unit_amount: number | null;
  id: string;
  description: string;
};

export type SearchParamsTypes = {
  params: Params;
  searchParams: SearchParams;
};
