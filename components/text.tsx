import { cn } from "@/lib/utils";

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl text-shop_dark_green capitalize tracking-wide  font-bold ",
        className
      )}
    >
      {children}
    </h2>
  );
};
const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-semibold text-gray-900 ",
        className
      )}
    >
      {children}
    </h3>
  );
};
export { Title, SubTitle };
