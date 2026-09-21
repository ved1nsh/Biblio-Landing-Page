import { redirect } from "next/navigation";

// There is no separate features page any more: the homepage's "What it can do" grid is the overview,
// and every feature page links back to it. Old links to /features land on that grid.
export default function FeaturesPage() {
    redirect("/#tour");
}
