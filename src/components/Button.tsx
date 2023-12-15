import { Button } from "@/components/ui/button";

export function ButtonDemo({ label }) {
  return <Button>{label || "Button"}</Button>;
}
