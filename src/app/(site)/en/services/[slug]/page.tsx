import { serviceRoute } from "@/lib/localized-routes";

const route = serviceRoute("en");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
