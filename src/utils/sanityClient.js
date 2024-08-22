import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "lk48nlsu",
  dataset: "panels",
  apiVersion: "2023-08-01",
  useCdn: true,
});

// Create URL builder
const builder = imageUrlBuilder(client);

// Function to build image URL
export function urlFor(source) {
  return builder.image(source);
}

// Sample image component

export { client };
