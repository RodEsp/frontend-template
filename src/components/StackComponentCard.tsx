import { Card, CardContent, CardHeader, CardTitle } from "./shadcn/card";

type StackComponentCardProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
  children: React.ReactNode;
  className?: string;
};

const StackComponentCard = ({
  icon,
  title,
  href,
  children,
  ...props
}: StackComponentCardProps) => {
  return (
    <a href={href} target="_blank" rel="noopener" {...props}>
      <Card className="max-w-3xs h-full bg-background border-subtle hover:border-primary/50 rounded-md">
        <CardHeader className="flex flex-col gap-4 items-baseline">
          <div className="text-primary bg-primary/15 p-2 rounded-md">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="-mt-4 text-sm text-muted-foreground">
          {children}
        </CardContent>
      </Card>
    </a>
  );
};

export default StackComponentCard;
