import { useLoaderData } from "react-router-dom";
import apiClient from "../api/apiClient";
import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";

export default function Home() {
  const products = useLoaderData();

  return (
    <main className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore all kinds of flowers!">
        Premium-quality blooms for daily buyers, events, and wholesale partners.
        Bulk and custom orders available year-round.
      </PageHeading>

      <div className="mt-6">
        <ProductListing products={products} />
      </div>
    </main>
  );
}

// Loader: fetch product list via Axios (apiClient uses base URL from .env)
export async function productsLoader() {
  try {
    // Axios GET request
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    // Re-throw for the route errorElement to handle
    throw new Response(
      error.message || "Failed to fetch products. Please try again.",
      { status: error.status || 500 }
    );
  }
}
