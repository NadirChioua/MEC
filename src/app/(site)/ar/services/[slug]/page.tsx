import { serviceRoute } from "@/lib/localized-routes";

const route = serviceRoute("ar");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
