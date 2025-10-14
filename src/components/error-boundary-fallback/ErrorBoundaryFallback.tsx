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

interface MessageError {
  message?: string;
}

type RouteError =
  | Error
  | {
      status?: number;
      statusText?: string;
      message?: string;
    }
  | unknown;

function hasMessage(error: unknown): error is MessageError {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
  );
}

const ErrorBoundaryFallback = () => {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();
  const location = useLocation();

  const reloadPage = () => {
    navigate(location.pathname, { replace: true });
  };

  useEffect(() => {
    const message =
      hasMessage(error) && typeof error.message === "string"
        ? error.message.toLowerCase()
        : "";

    if (
      message.includes("failed to parse source") ||
      message.includes("failed to fetch dynamically imported module") ||
      message.includes("importing a module script failed")
    ) {
      window.location.reload();
    }
  }, [error]);

  const renderErrorMessage = () => {
    if (isRouteErrorResponse(error)) {
      return (
        <p className="text-zinc-800 text-sm mb-0 text-left">
          <span className="text-base pb-1 font-semibold block">
            {error.status}
          </span>
          <code>{error.statusText}</code>
        </p>
      );
    }

    const message = hasMessage(error)
      ? error.message
      : typeof error === "string"
      ? error
      : JSON.stringify(error);

    return (
      <p className="text-zinc-800 text-sm mb-0 text-left">
        <span className="text-base pb-1 font-semibold block">
          Something went wrong.
        </span>
        <code>{message}</code>
      </p>
    );
  };

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

          {renderErrorMessage()}
        </div>

        <button onClick={reloadPage} className="btn btn-primary mt-8 py-5">
          <span>Reload Page</span>
        </button>
      </div>
    </DefaultLayout>
  );
};

export default ErrorBoundaryFallback;
