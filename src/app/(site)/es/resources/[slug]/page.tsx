import { articleRoute } from "@/lib/localized-routes";

const route = articleRoute("es");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
