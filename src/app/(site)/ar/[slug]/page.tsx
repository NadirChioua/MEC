import { landingRoute } from "@/lib/landing-route";

const route = landingRoute("ar");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
