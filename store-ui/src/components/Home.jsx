import PageHeading from "./PageHeading";
import { useState, useEffect } from "react";

//hooks
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); //setting load
  const [error, setError] = useState(null);
  // run once when the compononent  mounts
  //Mounting is the process of creating and adding the component into Dom
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/products"); //axios get request saved in apiClient  //axios is libraray to http req get put etc we save our api in .env file thsn save in axios file
      setProducts(response.data); //update products state with fetched  data
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">Error: {error}</span>
      </div>
    );
  }

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
