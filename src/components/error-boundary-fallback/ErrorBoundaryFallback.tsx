import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
  useLocation,
} from "react-router";
import { AlertTriangle } from "react-feather";
import { Divider } from "antd";
import { useEffect } from "react";
import { DefaultLayout } from "@/components/layouts";

type RouteError =
  | Error
  | { status?: number; statusText?: string; message?: string }
  | unknown;

const ErrorBoundaryFallback = () => {
  const error: any = useRouteError() as RouteError;
  const navigate = useNavigate();
  const location = useLocation();

  const reloadPage = () => {
    navigate(location.pathname, { replace: true });
  };

  useEffect(() => {
    if (
      error?.message?.toLowerCase().includes("failed to parse source") ||
      error?.message
        ?.toLowerCase()
        .includes("failed to fetch dynamically imported module") ||
      error.message?.toLowerCase().includes("importing a module script failed")
    ) {
      window.location.reload();
    }
  }, [error?.message]);

  return (
    <DefaultLayout offwhite footer={false}>
      <div className="text-center flex flex-col align-middle justify-center items-center gap-2 min-h-[50vh]">
        <div className="text-center flex align-middle items-center gap-2">
          <h3 className="text-2xl mb-0 text-red">
            <AlertTriangle size={32} />
          </h3>
          <Divider
            type="vertical"
            style={{ borderColor: "#bbb", height: "48px" }}
          />

          {isRouteErrorResponse(error) && (
            <p className=" text-zinc-800 text-sm mb-0 text-left">
              <span className="text-base pb-1 font-semibold block">
                {error.status}
              </span>
              <code>{error.statusText}</code>
            </p>
          )}

          {!isRouteErrorResponse(error) && (
            <p className=" text-zinc-800 text-sm mb-0 text-left">
              <span className="text-base pb-1 font-semibold block">
                Something went wrong.
              </span>
              <code>{error?.message || String(error)}</code>
            </p>
          )}
        </div>

        <button onClick={reloadPage} className="btn btn-primary mt-8 py-5">
          <span>Reload Page</span>
        </button>
      </div>
    </DefaultLayout>
  );
};

export default ErrorBoundaryFallback;
