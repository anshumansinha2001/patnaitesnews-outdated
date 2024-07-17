import { useQuery } from "@tanstack/react-query";

const useFetchSideAds = () => {
  const API_URL = import.meta.env.VITE_BACKEND_API_URL;
  const {
    data: sideAds = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["sideAds"],
    queryFn: async () => {
      try {
        const response = await fetch(`${API_URL}/api/side-ads`);
        const data = await response.json();
        // console.log("useFetchSideAds ::", data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return [sideAds, refetch, loading];
};

export default useFetchSideAds;
