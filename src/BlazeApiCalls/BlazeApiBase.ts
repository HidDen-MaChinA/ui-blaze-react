import axios from 'axios';

const baseUrl = process.env.REACT_API_URL;

const baseClient = axios.create({
    baseURL: baseUrl,
})

type QueryParamType = {
    [arg:string]:string
}

export interface IBlazeApiBase <T> {
    get<K>(path: string, queryParam?: QueryParamType) : Promise<K|null>;
    post<K>(obj:T, path: string) : Promise<K|null>;
    update<K>(obj:T,path: string) : Promise<K|null>;
    delete<K>(identifier:string,path: string) : Promise<K|null>;
}

export class AxiosBlazeApi<T> implements IBlazeApiBase<T> {
  get<K>(path: string, queryParam?: QueryParamType): Promise<K | null> {
    return baseClient
      .get(path, {
        params: queryParam,
      })
      .then((res) => res.data)
      .catch(() => null);
  }
  post<K>(obj: T, path: string): Promise<K | null> {
    return baseClient
      .post(path,obj)
      .then((res) => res.data)
      .catch(() => null);
  }
  update<K>(obj: T, path: string): Promise<K | null> {
    return baseClient
      .post(path,obj)
      .then((res) => res.data)
      .catch(() => null);
  }
  delete<K>(identifier: string, path: string): Promise<K | null> {
    return baseClient
      .delete(
        path.charAt(path.length - 1) === "\\"
          ? path + identifier
          : path + "\\" + identifier
      )
      .then((res) => res.data)
      .catch(() => null);
  }
}
