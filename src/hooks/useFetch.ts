import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error(`${response.status}`);
  }

  const data = await response.json();

  if (data.error) {
    throw new Error(`${data.reason}`);
  }

  return data;
};

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, fetcher, {
    onErrorRetry: (error) => {
      alert(error);
    },
    revalidateOnFocus: false,
  });

  return { data, error, mutate };
}
