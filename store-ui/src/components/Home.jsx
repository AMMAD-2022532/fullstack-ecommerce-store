import PageHeading from "./PageHeading";
import ProductListing from "./ProductListing";
import apiClient from "../api/apiClient";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData();

  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore All kind of Flowers!">
        Supplying premium quality flowers for daily buyers, events, and
        wholesale partners. Bulk and custom orders available year-round.
      </PageHeading>

      <ProductListing products={products} />
    </div>
  );
}

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products"); //axios get request saved in apiClient  //axios is libraray to http req get put etc we save our api in .env file thsn save in axios file
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch products. Please try again.",
      { status: error.status || 500 }
    );
  }
}
