export const extractProps = async (asyncProps: any) => {
  const params = await asyncProps.params;
  const searchParams = await asyncProps.searchParams;
  return {
    params,
    searchParams,
  };
};
