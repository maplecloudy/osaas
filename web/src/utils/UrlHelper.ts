/**
 * @author https://github.com/foxsir
 */

type Params = {
  baseSearch?: boolean,
  params: Record<string, string>,
  urlSearchParams?: URLSearchParams,
}

export const UrlHelper = {
  /**
   * optional incremental build urlSearch params
   * @param baseSearch
   * @param params
   * @return URLSearchParams
   */
  createQueryParams: ({ baseSearch, params }: Params): URLSearchParams => {
    const data: { [key: string]: string } = {};
    if (baseSearch) {
     
      const search = new URLSearchParams(location.search).entries();
      
      let item = search.next();
      while (!item.done) {
        data[item.value[0]] = item.value[1];
        item = search.next();
      }
    }

    return new URLSearchParams(Object.assign(data, params));
  },

  createQueryParamsByURLSearchParams: ({ baseSearch, params, urlSearchParams }: Params): URLSearchParams => {
    const data: { [key: string]: string } = {};
    if (baseSearch) {
      // let search;
      // if (!urlSearchParams) {
      //   search = new URLSearchParams(urlSearchParams).entries()
      // } else {
      //   search = new URLSearchParams(location.search).entries();
      // }
      const search = new URLSearchParams(urlSearchParams).entries();
      let item = search.next();
      while (!item.done) {
        data[item.value[0]] = item.value[1];
        item = search.next();
      }
    }

    return new URLSearchParams(Object.assign(data, params));
  },

  /**
   * remove urlSearch params
   * @param params
   * @return URLSearchParams
   */
  removeQueryParams: (params: string[]): URLSearchParams => {
    const data: { [key: string]: string } = {};
    const search = new URLSearchParams(location.search).entries();
    let item = search.next();
    while (!item.done) {
      if (!params.includes(item.value[0])) {
        data[item.value[0]] = item.value[1];
      }
      item = search.next();
    }

    return new URLSearchParams(data);
  },
}
