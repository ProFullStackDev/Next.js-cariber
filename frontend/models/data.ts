export interface ResponseData<T> {
  data: Data<T>[];
  meta: Meta;
}
export interface Data<T> {
  id: number;
  attributes: T;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}