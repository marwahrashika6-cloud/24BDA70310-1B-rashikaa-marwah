import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ title, price, category }) {
  return (
    <Card className="p-6">
      <CardContent className="space-y-3">
        <h2 className="text-xl font-semibold">{title}</h2>

        <p className="text-2xl font-bold">${price}</p>

        <Badge className="capitalize w-fit">{category}</Badge>
      </CardContent>
    </Card>
  );
}
