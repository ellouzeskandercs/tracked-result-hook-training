import { useQuery } from "@tanstack/react-query";
import { ComponentDesign } from "./ComponentDesign";
import { getData } from "./getData";
import { useNbOfRenders } from "./useNbOfRenders";
import { useBAMQuery } from "./useBAMQuery";
import { useEffect } from "react";

export const ComponentA = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["A"],
    queryFn: getData,
    enabled: false,
  });
  const nbOfRenders = useNbOfRenders();

  useEffect(() => {
    console.log("new data user in A", data?.user);
  }, [data?.user]);

  return (
    <ComponentDesign
      data={data?.value}
      nbOfRenders={nbOfRenders}
      onClick={refetch}
      showLoader={isFetching}
    />
  );
};

export const ComponentB = () => {
  const { data, refetch } = useQuery({
    queryKey: ["B"],
    queryFn: getData,
    enabled: false,
  });
  const nbOfRenders = useNbOfRenders();

  return (
    <ComponentDesign
      data={data?.value}
      nbOfRenders={nbOfRenders}
      onClick={refetch}
    />
  );
};

export const ComponentC = () => {
  const { data, isFetching, refetch } = useBAMQuery({
    queryFn: getData,
  });
  const nbOfRenders = useNbOfRenders();

  useEffect(() => {
    console.log("new data user in C", data?.user);
  }, [data?.user]);

  return (
    <ComponentDesign
      data={data?.value}
      nbOfRenders={nbOfRenders}
      onClick={refetch}
      showLoader={isFetching}
    />
  );
};

export const ComponentD = () => {
  const { data, refetch } = useBAMQuery({
    queryFn: getData,
  });
  const nbOfRenders = useNbOfRenders();

  return (
    <ComponentDesign
      data={data?.value}
      nbOfRenders={nbOfRenders}
      onClick={refetch}
    />
  );
};
