import { landingRoute } from "@/lib/landing-route";

const route = landingRoute("nl");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
