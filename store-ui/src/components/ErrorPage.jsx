import React from "react";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import Header from "./Header";
import Footer from "./footer/Footer";
import PageTitle from "./PageTitle";
import errorImage from "../assets/util/error.png";

export default function ErrorPage() {
  const err = useRouteError();

  // Sensible defaults
  let title = "Something went wrong";
  let message = "An unexpected error occurred. Please try again in a moment.";
  let code;

  // If the error came from a route loader/action
  if (isRouteErrorResponse(err)) {
    code = err.status;
    if (err.status === 404) {
      title = "Page not found";
      message =
        (err.data && (err.data.message || err.data)) ||
        "We couldn’t find the page you were looking for.";
    } else {
      title = `${err.status} ${err.statusText || ""}`.trim();
      message =
        (err.data && (err.data.message || err.data)) ||
        err.statusText ||
        message;
    }
  } else if (err instanceof Error) {
    // Regular JS error
    message = err.message || message;
  } else if (typeof err === "string") {
    message = err;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="bg-normalbg py-12 font-primary dark:bg-darkbg">
          <div className="mx-auto max-w-4xl px-4">
            <PageTitle title={title} />
          </div>

          <div
            className="flex flex-col items-center text-center text-gray-600 dark:text-lighter"
            aria-live="polite"
          >
            <p className="mx-auto mb-4 max-w-[576px] px-2 leading-6">
              {message} {code ? <span>(Error {code})</span> : null}
            </p>

            <img
              src={errorImage}
              alt="Illustration indicating an application error"
              className="mx-auto mb-6 w-full max-w-[576px]"
              loading="lazy"
            />

            <Link
              to="/"
              className="rounded-md bg-primary px-6 py-3 text-xl font-semibold text-white transition duration-200 hover:bg-dark dark:bg-light dark:text-black dark:hover:bg-lighter"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
