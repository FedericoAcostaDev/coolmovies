import { useParams, useHistory } from "react-router-dom";
import { useMemo } from "react";

export const useRouter = () => {
  const params = useParams();
  const history = useHistory();

  return useMemo(() => ({
      push: history.push,
      replace: history.replace,
      history,
      params
    }),
    [params, history]
  );
}