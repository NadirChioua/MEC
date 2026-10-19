import { articleRoute } from "@/lib/localized-routes";

const route = articleRoute("fr");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
